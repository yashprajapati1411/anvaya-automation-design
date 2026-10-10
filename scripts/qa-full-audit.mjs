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
  '/projects/aura-health-ai-copilot',
  '/projects/finpulse-multi-tenant-saas',
  '/projects/nexus-logistics-customs-ocr',
  '/projects/omnistore-headless-commerce',
  '/projects/vanguard-cloud-devops',
  '/projects/urban-nest-seo-domination',
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

  send(method, params = {}) {
    const id = this.id++;
    return new Promise((resolve, reject) => {
      this.callbacks.set(id, { resolve, reject });
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
    '--remote-debugging-port=9223',
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
      const res = await fetch('http://127.0.0.1:9223/json/list');
      if (res.ok) {
        const targets = await res.json();
        const pageTarget = targets.find(t => t.type === 'page') || targets[0];
        if (pageTarget && pageTarget.webSocketDebuggerUrl) {
          return { proc, wsUrl: pageTarget.webSocketDebuggerUrl };
        }
      }
    } catch {}
  }
  throw new Error('Chrome failed to start');
}

async function runAudit() {
  console.log('Starting headless Chrome for QA inspection...');
  const { proc, wsUrl } = await startChrome();
  const client = new ChromeClient(wsUrl);
  await client.ready();

  await client.send('Page.enable');
  await client.send('DOM.enable');
  await client.send('Runtime.enable');
  await client.send('Log.enable');

  const auditResults = [];
  const consoleLogs = [];

  client.eventListeners.push((event) => {
    if (event.method === 'Log.entryAdded') {
      consoleLogs.push(event.params.entry);
    } else if (event.method === 'Runtime.consoleAPICalled') {
      consoleLogs.push(event.params);
    }
  });

  for (const route of routes) {
    const url = `http://localhost:3000${route}`;
    console.log(`\n========================================\nAuditing route: ${route} (${url})`);

    for (const vp of viewports) {
      process.stdout.write(`  [${vp.name}px] testing... `);

      // 1. Set viewport
      await client.send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.width < 768,
      });

      // 2. Navigate
      await client.send('Page.navigate', { url });
      await new Promise(r => setTimeout(r, 1200));

      // 3. Scroll slowly top to bottom to trigger animations & layout checks
      await client.send('Runtime.evaluate', {
        expression: `
          (async () => {
            const h = document.documentElement.scrollHeight;
            window.scrollTo({ top: h / 2, behavior: 'instant' });
            await new Promise(r => setTimeout(r, 300));
            window.scrollTo({ top: h, behavior: 'instant' });
            await new Promise(r => setTimeout(r, 300));
            window.scrollTo({ top: 0, behavior: 'instant' });
            await new Promise(r => setTimeout(r, 300));
          })()
        `,
        awaitPromise: true,
      });

      // 4. Run QA Evaluation script
      const evalRes = await client.send('Runtime.evaluate', {
        expression: `
          (() => {
            const innerW = window.innerWidth;
            const scrollW = document.documentElement.scrollWidth;
            const hasHorizontalOverflow = scrollW > innerW;
            const overflowDelta = scrollW - innerW;

            // Computed fonts across all elements
            const allElements = Array.from(document.querySelectorAll('*'));
            const fontsMap = new Map();
            let brokenImages = 0;
            let visibleTodoMatches = [];

            allElements.forEach(el => {
              if (el.tagName === 'SCRIPT' || el.tagName === 'STYLE') return;
              const style = window.getComputedStyle(el);
              const text = el.innerText || '';
              
              if (text.includes('[TODO]')) {
                visibleTodoMatches.push({ tag: el.tagName, text: text.slice(0, 50) });
              }

              if (el.tagName === 'IMG') {
                if (!el.complete || el.naturalWidth === 0) brokenImages++;
              }

              const ff = style.fontFamily;
              const fs = style.fontSize;
              const lh = style.lineHeight;
              const key = ff + ' | ' + fs + ' | ' + lh;
              fontsMap.set(key, (fontsMap.get(key) || 0) + 1);
            });

            // Bounding box overlaps detection between key sibling elements
            const overlaps = [];
            const cards = Array.from(document.querySelectorAll('.quiet-card, h1, h2, nav, header, button'));
            for (let i = 0; i < cards.length; i++) {
              for (let j = i + 1; j < cards.length; j++) {
                const r1 = cards[i].getBoundingClientRect();
                const r2 = cards[j].getBoundingClientRect();
                // Check if they are visible
                if (r1.width > 0 && r1.height > 0 && r2.width > 0 && r2.height > 0) {
                  // Only check elements with distinct parents (non-ancestor)
                  if (!cards[i].contains(cards[j]) && !cards[j].contains(cards[i])) {
                    const overlapX = Math.max(0, Math.min(r1.right, r2.right) - Math.max(r1.left, r2.left));
                    const overlapY = Math.max(0, Math.min(r1.bottom, r2.bottom) - Math.max(r1.top, r2.top));
                    // Significant overlap (more than 10px in both axes)
                    if (overlapX > 15 && overlapY > 15) {
                      overlaps.push({
                        el1: cards[i].tagName + (cards[i].className ? '.' + cards[i].className.slice(0, 20) : ''),
                        el2: cards[j].tagName + (cards[j].className ? '.' + cards[j].className.slice(0, 20) : ''),
                        overlap: overlapX * overlapY
                      });
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
              distinctFontsCount: fontsMap.size,
              distinctFonts: Array.from(fontsMap.keys()).slice(0, 10),
              visibleTodoCount: visibleTodoMatches.length,
              overlapCount: overlaps.length,
              overlaps: overlaps.slice(0, 5),
            };
          })()
        `,
        returnByValue: true,
      });

      const metrics = evalRes.result.value;
      const pass = !metrics.hasHorizontalOverflow && metrics.brokenImages === 0 && metrics.visibleTodoCount === 0;

      process.stdout.write(pass ? '✓ PASS' : `✗ FAIL (overflow: ${metrics.overflowDelta}px, todos: ${metrics.visibleTodoCount})`);
      process.stdout.write('\n');

      auditResults.push({
        route,
        viewport: vp.name,
        width: vp.width,
        height: vp.height,
        ...metrics,
      });

      // Capture Screenshots for Required Breakpoints (1440 and 390) on Home, Services, Blog, About, Contact
      if ((vp.name === '1440' || vp.name === '390') && ['/', '/services', '/blog', '/contact', '/about'].includes(route)) {
        const cleanRoute = route === '/' ? 'home' : route.replace(/\//g, '_');
        
        // Full Page Screenshot
        const ss = await client.send('Page.captureScreenshot', {
          format: 'png',
          captureBeyondViewport: true,
        });
        const fullPath = path.join(screenshotsDir, `${cleanRoute}-${vp.name}-full.png`);
        fs.writeFileSync(fullPath, Buffer.from(ss.data, 'base64'));

        // Viewport Top Screenshot (Hero & Navbar)
        await client.send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0)' });
        await new Promise(r => setTimeout(r, 200));
        const heroSS = await client.send('Page.captureScreenshot', {
          format: 'png',
          clip: { x: 0, y: 0, width: vp.width, height: Math.min(vp.height, 900), scale: 1 },
        });
        const heroPath = path.join(screenshotsDir, `${cleanRoute}-${vp.name}-hero.png`);
        fs.writeFileSync(heroPath, Buffer.from(heroSS.data, 'base64'));

        // Footer Screenshot
        await client.send('Runtime.evaluate', { expression: 'window.scrollTo(0, document.documentElement.scrollHeight)' });
        await new Promise(r => setTimeout(r, 200));
        const footerSS = await client.send('Page.captureScreenshot', {
          format: 'png',
          clip: { x: 0, y: 0, width: vp.width, height: Math.min(vp.height, 900), scale: 1 },
        });
        const footerPath = path.join(screenshotsDir, `${cleanRoute}-${vp.name}-footer.png`);
        fs.writeFileSync(footerPath, Buffer.from(footerSS.data, 'base64'));
      }
    }
  }

  // Save audit report
  const reportPath = path.join(process.cwd(), 'qa-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(auditResults, null, 2));
  console.log(`\nAudit complete! Report saved to ${reportPath}`);

  client.close();
  proc.kill();
}

runAudit().catch(err => {
  console.error('Audit encountered error:', err);
  process.exit(1);
});
