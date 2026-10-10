import { spawn } from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import fs from 'node:fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tmpDir = path.join(os.tmpdir(), 'chrome-qa-run-' + Date.now());
fs.mkdirSync(tmpDir, { recursive: true });

const screenshotsDir = path.join(process.cwd(), 'qa-screenshots');
fs.mkdirSync(screenshotsDir, { recursive: true });

const routes = [
  '/',
  '/services',
  '/services/ai-automation',
  '/services/web-applications',
  '/services/cloud-infrastructure',
  '/services/seo',
  '/services/digital-marketing',
  '/projects',
  '/projects/pulsefit-gym-platform',
  '/projects/caredial-ivr-appointment-system',
  '/projects/frontdesk-ai-receptionist',
  '/blog',
  '/blog/how-ai-automation-saves-20-hours-a-week',
  '/about',
  '/contact'
];

const viewports = [
  { width: 360, height: 800, name: '360' },
  { width: 390, height: 844, name: '390' },
  { width: 768, height: 1024, name: '768' },
  { width: 1024, height: 768, name: '1024' },
  { width: 1280, height: 800, name: '1280' },
  { width: 1366, height: 768, name: '1366' },
  { width: 1440, height: 900, name: '1440' },
  { width: 1920, height: 1080, name: '1920' },
];

class ChromeClient {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.id = 1;
    this.callbacks = new Map();
    this.eventListeners = [];

    this.ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      if (data.id && this.callbacks.has(data.id)) {
        const { resolve, reject } = this.callbacks.get(data.id);
        this.callbacks.delete(data.id);
        if (data.error) reject(data.error);
        else resolve(data.result);
      } else if (data.method) {
        this.eventListeners.forEach(fn => fn(data));
      }
    };
  }

  async ready() {
    if (this.ws.readyState === WebSocket.OPEN) return;
    await new Promise(r => { this.ws.onopen = r; });
  }

  send(method, params = {}, timeoutMs = 15000) {
    const id = this.id++;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.callbacks.delete(id);
        reject(new Error(`Timeout (${timeoutMs}ms) for ${method}`));
      }, timeoutMs);

      this.callbacks.set(id, {
        resolve: (val) => { clearTimeout(timer); resolve(val); },
        reject: (err) => { clearTimeout(timer); reject(err); }
      });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    this.ws.close();
  }
}

async function startChrome() {
  const proc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9224',
    '--remote-debugging-address=127.0.0.1',
    `--user-data-dir=${tmpDir}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    'about:blank'
  ], { stdio: 'ignore' });

  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 400));
    try {
      const res = await fetch('http://127.0.0.1:9224/json/list');
      if (res.ok) {
        const targets = await res.json();
        const pageTarget = targets.find(t => t.type === 'page') || targets[0];
        if (pageTarget && pageTarget.webSocketDebuggerUrl) {
          return { proc, wsUrl: pageTarget.webSocketDebuggerUrl };
        }
      }
    } catch {}
  }
  throw new Error('Chrome failed to start on port 9224');
}

async function runAudit() {
  console.log('Starting headless Chrome for QA inspection...');
  const { proc, wsUrl } = await startChrome();
  const client = new ChromeClient(wsUrl);
  await client.ready();

  await client.send('Page.enable');
  await client.send('DOM.enable');
  await client.send('Runtime.enable');

  const auditResults = [];

  for (const route of routes) {
    const url = `http://localhost:3000${route}`;
    console.log(`\n========================================\nRoute: ${route}`);

    for (const vp of viewports) {
      process.stdout.write(`  [${vp.name}px] `);

      try {
        await client.send('Emulation.setDeviceMetricsOverride', {
          width: vp.width,
          height: vp.height,
          deviceScaleFactor: 1,
          mobile: vp.width < 768,
        });

        await client.send('Page.navigate', { url });
        await new Promise(r => setTimeout(r, 700));
        await client.send('Runtime.evaluate', {
          expression: `
            sessionStorage.setItem('anvaya_has_loaded', 'true');
            const curtain = document.querySelector('[class*="z-[10000]"]');
            if (curtain) curtain.style.display = 'none';
          `
        });
        await new Promise(r => setTimeout(r, 300));

        // Evaluate layout metrics
        const evalRes = await client.send('Runtime.evaluate', {
          expression: `
            (() => {
              const innerW = window.innerWidth;
              const scrollW = document.documentElement.scrollWidth;
              const hasHorizontalOverflow = scrollW > innerW;
              const overflowDelta = Math.max(0, scrollW - innerW);

              const allElements = Array.from(document.querySelectorAll('*'));
              const distinctFonts = new Set();
              let brokenImages = 0;
              let visibleTodos = 0;

              allElements.forEach(el => {
                if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'SVG', 'PATH'].includes(el.tagName)) return;
                const style = window.getComputedStyle(el);
                const ff = style.fontFamily;
                const fs = style.fontSize;
                const lh = style.lineHeight;
                if (ff && fs) distinctFonts.add(ff.split(',')[0].replace(/['"]/g, '').trim() + ' ' + fs + '/' + lh);

                if (el.tagName === 'IMG' && el.complete && el.naturalWidth === 0) {
                  brokenImages++;
                }

                if ((el.innerText || '').includes('[TODO]')) {
                  visibleTodos++;
                }
              });

              // Bounding box overlaps check
              let overlaps = 0;
              const blocks = Array.from(document.querySelectorAll('h1, h2, h3, nav, .quiet-card'));
              for (let i = 0; i < blocks.length; i++) {
                for (let j = i + 1; j < blocks.length; j++) {
                  const b1 = blocks[i].getBoundingClientRect();
                  const b2 = blocks[j].getBoundingClientRect();
                  if (b1.width > 0 && b1.height > 0 && b2.width > 0 && b2.height > 0) {
                    if (!blocks[i].contains(blocks[j]) && !blocks[j].contains(blocks[i])) {
                      const ox = Math.max(0, Math.min(b1.right, b2.right) - Math.max(b1.left, b2.left));
                      const oy = Math.max(0, Math.min(b1.bottom, b2.bottom) - Math.max(b1.top, b2.top));
                      if (ox > 12 && oy > 12) {
                        overlaps++;
                      }
                    }
                  }
                }
              }

              return {
                hasHorizontalOverflow,
                overflowDelta,
                innerW,
                scrollW,
                brokenImages,
                visibleTodos,
                overlapCount: overlaps,
                fonts: Array.from(distinctFonts).slice(0, 8),
              };
            })()
          `,
          returnByValue: true,
        });

        const m = evalRes.result.value;
        const passed = !m.hasHorizontalOverflow && m.brokenImages === 0 && m.visibleTodos === 0 && m.overlapCount === 0;

        console.log(passed 
          ? `✓ PASS (scrollW: ${m.scrollW}px, fonts: ${m.fonts.length})` 
          : `✗ FAIL (overflow: ${m.overflowDelta}px, todos: ${m.visibleTodos}, overlaps: ${m.overlapCount})`
        );

        auditResults.push({
          route,
          viewport: vp.name,
          ...m,
          status: passed ? 'PASS' : 'FAIL',
        });

        // Capture required screenshots for 1440 and 390
        if ((vp.name === '1440' || vp.name === '390') && ['/', '/services', '/services/ai-automation', '/blog', '/contact'].includes(route)) {
          const prefix = route === '/' ? 'home' : route.replace(/\//g, '_');
          
          // Hero (top of viewport)
          await client.send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0)' });
          await new Promise(r => setTimeout(r, 200));
          const heroClip = await client.send('Page.captureScreenshot', {
            format: 'png',
            clip: { x: 0, y: 0, width: vp.width, height: Math.min(vp.height, 800), scale: 1 }
          });
          fs.writeFileSync(path.join(screenshotsDir, `${prefix}-${vp.name}-hero.png`), Buffer.from(heroClip.data, 'base64'));

          // Footer
          await client.send('Runtime.evaluate', { expression: `
            const footerEl = document.querySelector('footer');
            if (footerEl) {
              if (window.lenis) {
                window.lenis.scrollTo(footerEl, { immediate: true });
              }
              footerEl.scrollIntoView({ behavior: 'instant', block: 'end' });
            }
          ` });
          await new Promise(r => setTimeout(r, 600));
          const footerClip = await client.send('Page.captureScreenshot', {
            format: 'png',
          });
          fs.writeFileSync(path.join(screenshotsDir, `${prefix}-${vp.name}-footer.png`), Buffer.from(footerClip.data, 'base64'));
        }

      } catch (err) {
        console.log(`⚠ WARNING: ${err.message}`);
        auditResults.push({
          route,
          viewport: vp.name,
          status: 'ERROR',
          error: err.message,
        });
      }
    }
  }

  const reportPath = path.join(process.cwd(), 'qa-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(auditResults, null, 2));
  console.log(`\n========================================\nQA Audit Complete! Report saved to ${reportPath}`);

  client.close();
  proc.kill();
}

runAudit().catch(err => {
  console.error('Audit fatal error:', err);
  process.exit(1);
});
