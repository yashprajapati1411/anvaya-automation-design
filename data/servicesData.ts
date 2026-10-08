export interface ServiceDetail {
  slug: string;
  number: string;
  title: string;
  emphasizedTitle: string; // for the Instrument Serif word
  category: 'AI' | 'Engineering' | 'Growth';
  iconSymbol: string;
  summary: string;
  description: string;
  disciplines: string[];
  deliverables: string[];
  techStack: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: 'ai-automation',
    number: '01',
    title: 'AI Automation',
    emphasizedTitle: 'Automation',
    category: 'AI',
    iconSymbol: '◎',
    summary: 'Workflows, agents and chatbots that quietly do the work.',
    description: 'We design and deploy autonomous agent swarms, intelligent document processing pipelines, and event-driven software bridges that eliminate repetitive human busywork without sacrificing precision.',
    disciplines: ['Workflow automation', 'Autonomous AI agents', 'CRM and lead routing', 'Intelligent document extraction'],
    deliverables: [
      'Comprehensive process audit & friction mapping',
      'Deterministic agentic reasoning loops with vector memory',
      'Custom webhook bridges across your existing software stack',
      '24/7 uptime monitoring, error recovery & staff handover'
    ],
    techStack: ['n8n', 'OpenAI', 'Anthropic', 'Python', 'LangChain', 'PostgreSQL', 'Zapier'],
    process: [
      { step: '01', title: 'Audit', desc: 'We map every repetitive task across your business to identify high-ROI automation targets.' },
      { step: '02', title: 'Architect', desc: 'We design deterministic workflows with strict fallback boundaries to prevent hallucinations.' },
      { step: '03', title: 'Deploy', desc: 'We connect your software via secure webhooks and test live production edge cases.' },
      { step: '04', title: 'Optimize', desc: 'Real-time telemetry and weekly model adjustments ensure perpetual system accuracy.' }
    ],
    faqs: [
      {
        question: 'How do you guarantee your AI agents do not hallucinate?',
        answer: 'We constrain our agents with Retrieval-Augmented Generation (RAG) and deterministic schema validation. The models only reference your verified enterprise databases and require source document verification prior to executing actions.'
      },
      {
        question: 'Can you integrate with our legacy software or custom databases?',
        answer: 'Yes. We frequently connect modern AI pipelines to on-premise SQL databases, legacy ERPs, Salesforce, and custom REST/GraphQL APIs without disrupting existing workflows.'
      },
      {
        question: 'How quickly can an automation pipeline be deployed?',
        answer: 'Focused workflows (such as lead triage or invoice extraction) are typically in production within 10 to 14 business days.'
      }
    ]
  },
  {
    slug: 'web-applications',
    number: '02',
    title: 'Web Applications',
    emphasizedTitle: 'Applications',
    category: 'Engineering',
    iconSymbol: '▭',
    summary: 'SaaS, dashboards and portals built to last.',
    description: 'We engineer high-performance web software using Next.js, React, and TypeScript. Focused on sub-second interactions, calm aesthetic typography, and clean architectures that scale gracefully.',
    disciplines: ['SaaS platforms', 'Executive dashboards', 'Customer portals', 'E-commerce engines'],
    deliverables: [
      'Figma design system with quiet luxury minimalism',
      'Modern Next.js App Router codebase with full type safety',
      'Relational database architecture & optimized API endpoints',
      'End-to-end automated testing and CI/CD pipelines'
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Prisma'],
    process: [
      { step: '01', title: 'Scope', desc: 'Clear product specifications and database schemas agreed before a single line of code.' },
      { step: '02', title: 'Interface', desc: 'Wireframes and high-fidelity prototypes crafted for effortless user intuition.' },
      { step: '03', title: 'Engineering', desc: 'Weekly staging releases, clean modular code, and sub-second page performance.' },
      { step: '04', title: 'Launch', desc: 'Automated zero-downtime deployment on Vercel or cloud VPCs with monitoring.' }
    ],
    faqs: [
      {
        question: 'Do you design the interface or only build the code?',
        answer: 'We manage both disciplines in-house. Our product designers create the entire interface in Figma, ensuring unified aesthetics before our engineers write production code.'
      },
      {
        question: 'What is your typical project timeline?',
        answer: 'Most custom SaaS platforms and portals are delivered in 6 to 10 weeks across iterative two-week development sprints.'
      }
    ]
  },
  {
    slug: 'mobile-development',
    number: '03',
    title: 'Mobile Apps',
    emphasizedTitle: 'Mobile',
    category: 'Engineering',
    iconSymbol: '▯',
    summary: 'iOS and Android, native feel.',
    description: 'Bespoke mobile applications crafted with Flutter and React Native. Smooth 60fps animations, intuitive gesture handling, and offline-first data architectures that customers love using daily.',
    disciplines: ['iOS native apps', 'Android applications', 'Cross-platform Flutter', 'Offline synchronization'],
    deliverables: [
      'Native-feel interface conforming to Apple HIG & Material 3',
      'Robust offline caching and biometric authentication',
      'Full App Store and Google Play deployment management',
      'Push notification journeys and in-app analytics'
    ],
    techStack: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'Supabase'],
    process: [
      { step: '01', title: 'UX Flow', desc: 'Frictionless tap ergonomics and thumb-zone optimization.' },
      { step: '02', title: 'Build', desc: 'Clean cross-platform architecture with shared state logic.' },
      { step: '03', title: 'Test', desc: 'Rigorous battery, memory, and network stress tests on physical devices.' },
      { step: '04', title: 'Release', desc: 'Handling App Store review compliance and continuous deployment.' }
    ],
    faqs: [
      {
        question: 'Should we build cross-platform or separate native apps?',
        answer: 'For 95% of businesses, modern Flutter or React Native provides an indistinguishable 60fps native feel while halving maintenance costs and accelerating time-to-market.'
      }
    ]
  },
  {
    slug: 'cloud-infrastructure',
    number: '04',
    title: 'Cloud Infrastructure',
    emphasizedTitle: 'Infrastructure',
    category: 'Engineering',
    iconSymbol: '☁',
    summary: 'Secure, scalable, monitored.',
    description: 'We construct resilient cloud environments across AWS, Google Cloud, and Azure. Automated Docker deployments, Kubernetes clustering, and proactive cost-reduction audits that keep overhead minimal.',
    disciplines: ['AWS / GCP / Azure', 'DevOps & automated CI/CD', 'Cloud migration', 'Proactive monitoring & security'],
    deliverables: [
      'Terraform Infrastructure-as-Code (IaC) templates',
      'Zero-downtime rolling deployment pipelines via GitHub Actions',
      'Real-time Datadog/Prometheus metrics and incident alerts',
      'Cloud bill cost optimization slashing redundant compute waste'
    ],
    techStack: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Datadog', 'GitHub Actions'],
    process: [
      { step: '01', title: 'Architecture', desc: 'Zero-trust network design with redundant multi-zone clustering.' },
      { step: '02', title: 'IaC Provision', desc: 'Codifying all infrastructure into version-controlled Terraform modules.' },
      { step: '03', title: 'Security', desc: 'Automated vulnerability scanning, RBAC permissions, and SSL lifecycle.' },
      { step: '04', title: 'Telemetry', desc: '24/7 health monitors with guaranteed incident response SLAs.' }
    ],
    faqs: [
      {
        question: 'Can you help us reduce our existing AWS or GCP bills?',
        answer: 'Yes. Our cloud audits routinely identify 25% to 45% in immediate monthly savings through unattached volume cleanup, Graviton instance migration, and VPC routing optimizations.'
      }
    ]
  },
  {
    slug: 'seo',
    number: '05',
    title: 'SEO Services',
    emphasizedTitle: 'SEO',
    category: 'Growth',
    iconSymbol: '⌕',
    summary: 'Be found by the right people.',
    description: 'Technical search optimization, green Core Web Vitals, and authoritative topical clusters designed to capture high-intent commercial buyers organically without relying solely on paid ad spend.',
    disciplines: ['Technical SEO audits', 'Semantic topical authority', 'Local search visibility', 'Editorial link building'],
    deliverables: [
      'Comprehensive Core Web Vitals optimization (INP, LCP, CLS)',
      'Topical keyword mapping and structured content briefs',
      'JSON-LD rich schema architecture for search engines',
      'High-authority contextual backlink acquisition'
    ],
    techStack: ['Ahrefs', 'Screaming Frog', 'Google Search Console', 'Next.js SEO', 'Schema.org'],
    process: [
      { step: '01', title: 'Audit', desc: 'Deep crawl identifying indexation blocks and crawl budget waste.' },
      { step: '02', title: 'Structure', desc: 'Re-engineering site architecture into authoritative semantic clusters.' },
      { step: '03', title: 'Performance', desc: 'Ensuring sub-2 second load times and pristine mobile responsiveness.' },
      { step: '04', title: 'Authority', desc: 'Earning natural editorial backlinks from recognized industry domains.' }
    ],
    faqs: [
      {
        question: 'How long does it take to see tangible organic traffic growth?',
        answer: 'Technical fixes often yield indexation and ranking improvements within 3 to 6 weeks, while high-competition topical authority rankings compound noticeably between months 3 and 6.'
      }
    ]
  },
  {
    slug: 'digital-marketing',
    number: '06',
    title: 'Digital Marketing',
    emphasizedTitle: 'Marketing',
    category: 'Growth',
    iconSymbol: '✦',
    summary: 'Social, ads and brand content.',
    description: 'Quiet, confident growth marketing. Precision paid advertising across Meta and Google, server-side attribution modeling, and brand content that conveys authority without cheap hype or clickbait.',
    disciplines: ['Paid performance ads', 'Server-side CAPI tracking', 'Lifecycle email funnels', 'Social media authority'],
    deliverables: [
      'Full campaign architecture on Meta Ads, Google Ads, and LinkedIn',
      'Server-side Conversions API (CAPI) for 100% accurate tracking',
      'High-converting landing page design and A/B test iterations',
      'Automated email welcome and customer re-engagement sequences'
    ],
    techStack: ['Meta Ads Manager', 'Google Ads', 'LinkedIn Campaign Manager', 'Klaviyo', 'Figma'],
    process: [
      { step: '01', title: 'Targeting', desc: 'Pinpointing high-intent decision-maker personas and pain points.' },
      { step: '02', title: 'Creative', desc: 'Crafting thoughtful, high-aesthetic visual and copy hooks.' },
      { step: '03', title: 'Attribution', desc: 'Deploying server-side CAPI to protect signal against cookie loss.' },
      { step: '04', title: 'Scale', desc: 'Systematic multivariate testing to maximize customer acquisition ROAS.' }
    ],
    faqs: [
      {
        question: 'What platforms do you specialize in for paid customer acquisition?',
        answer: 'We focus primarily on Meta Ads (Facebook & Instagram) for consumer and high-ticket service brands, Google Search for high-intent search capture, and LinkedIn for targeted B2B enterprise acquisition.'
      }
    ]
  }
];
