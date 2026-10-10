export interface ServiceDetail {
  slug: string;
  number: string;
  title: string;
  emphasizedTitle: string;
  category: 'AI' | 'Engineering' | 'Growth';
  iconSymbol: string;
  imageUrl: string;
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
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    summary: 'Autonomous workflows, agents and intelligent chatbots that quietly do the work.',
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
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    summary: 'SaaS platforms, executive dashboards and portals built for sub-second speed.',
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
    title: 'Mobile Development',
    emphasizedTitle: 'Mobile',
    category: 'Engineering',
    iconSymbol: '▯',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    summary: 'Bespoke iOS and Android mobile applications crafted for native responsiveness.',
    description: 'Bespoke mobile applications crafted with Flutter and React Native. Smooth 60fps animations, intuitive gesture handling, and offline-first data architectures that customers love using daily.',
    disciplines: ['iOS native apps', 'Android applications', 'Cross-platform Flutter', 'Offline synchronization'],
    deliverables: [
      'Platform-native UI components conforming to Apple Human Interface and Material Design',
      'Offline-first synchronization with conflict resolution',
      'Push notification pipelines and deep-linking routing',
      'Full App Store and Google Play deployment management'
    ],
    techStack: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'Supabase'],
    process: [
      { step: '01', title: 'User Flows', desc: 'Detailed user journeys and interaction wireframes designed for thumb navigation.' },
      { step: '02', title: 'Architecture', desc: 'Offline-capable local storage schemas and secure token authentication.' },
      { step: '03', title: 'Build', desc: 'Bimonthly TestFlight and internal track APK builds for continuous feedback.' },
      { step: '04', title: 'App Store Submission', desc: 'Complete metadata, compliance verification, and store release.' }
    ],
    faqs: [
      {
        question: 'Do you build native Swift/Kotlin or cross-platform?',
        answer: 'We recommend cross-platform Flutter or React Native for 90% of business applications to reduce build costs and ensure feature parity across iOS and Android without sacrificing 60fps performance.'
      }
    ]
  },
  {
    slug: 'cloud-infrastructure',
    number: '04',
    title: 'Cloud Infrastructure',
    emphasizedTitle: 'Cloud',
    category: 'Engineering',
    iconSymbol: '☁',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    summary: 'DevOps automation, resilient cloud pipelines, and isolated VPC architecture.',
    description: 'We construct immutable infrastructure using AWS, Docker, and Terraform. Ensuring 99.99% uptime, zero-downtime rolling deployments, and ironclad enterprise data isolation.',
    disciplines: ['AWS & GCP architecture', 'Kubernetes & Docker', 'CI/CD pipeline automation', 'Cost optimization'],
    deliverables: [
      'Infrastructure as Code (IaC) via Terraform with version control',
      'Multi-region automated database backups and disaster recovery',
      'Automated GitHub Actions CI/CD pipelines with staging previews',
      'Security audit and cost reduction recommendations'
    ],
    techStack: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'PostgreSQL'],
    process: [
      { step: '01', title: 'Audit', desc: 'We analyze current infrastructure bottlenecks, security gaps, and billing waste.' },
      { step: '02', title: 'Blueprint', desc: 'Architecting isolated VPCs, autoscaling groups, and private database subnets.' },
      { step: '03', title: 'Migration', desc: 'Gradual, zero-downtime workload migration with fallback DNS cutovers.' },
      { step: '04', title: 'Observability', desc: 'Prometheus, Grafana, and automated alerts for proactive health management.' }
    ],
    faqs: [
      {
        question: 'Can you lower our existing AWS or cloud bills?',
        answer: 'Yes. Our cloud audits consistently eliminate 30% to 50% of wasted compute costs by right-sizing instances, implementing autoscaling, and migrating to serverless compute where appropriate.'
      }
    ]
  },
  {
    slug: 'seo',
    number: '05',
    title: 'SEO Services',
    emphasizedTitle: 'SEO',
    category: 'Growth',
    iconSymbol: '↗',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    summary: 'Programmatic SEO, technical website speed, and compounding organic search rankings.',
    description: 'We combine rigorous technical site optimization with semantic topical authority. Engineering web architectures that search engines index effortlessly and reward with durable first-page visibility.',
    disciplines: ['Technical SEO audits', 'Programmatic page generation', 'Core Web Vitals tuning', 'Semantic content strategy'],
    deliverables: [
      'Comprehensive technical audit covering indexing, crawl budget & canonicals',
      'Core Web Vitals optimization achieving green scores across LCP, FID, and CLS',
      'Semantic keyword clustering and high-intent topical hierarchy maps',
      'Automated schema markup (JSON-LD) implementation across all templates'
    ],
    techStack: ['Next.js SSR', 'Schema.org', 'Google Search Console', 'Ahrefs', 'Screaming Frog', 'Vercel Analytics'],
    process: [
      { step: '01', title: 'Audit', desc: 'Full crawl of existing site to identify broken links, redirect chains, and indexing blocks.' },
      { step: '02', title: 'Speed', desc: 'Code-splitting and asset optimization to achieve sub-second Core Web Vitals.' },
      { step: '03', title: 'Structure', desc: 'Building semantic topical hubs that establish definitive niche domain authority.' },
      { step: '04', title: 'Tracking', desc: 'Monthly ranking telemetry and organic conversion attribution dashboards.' }
    ],
    faqs: [
      {
        question: 'How soon can we expect organic search ranking results?',
        answer: 'Technical fixes (such as resolving indexing blocks and Core Web Vitals) often yield visible improvements within 4 to 6 weeks. Broad keyword authority typically compounds over 3 to 6 months of consistent publishing.'
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
    imageUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80',
    summary: 'Precision performance marketing, conversion funnels, and data analytics.',
    description: 'We build data-driven customer acquisition funnels that convert visitors into loyal clients. Combining precision paid acquisition with high-converting landing pages and automated retention sequences.',
    disciplines: ['Performance advertising', 'Conversion rate optimization (CRO)', 'Email marketing automation', 'Lifecycle analytics'],
    deliverables: [
      'Multi-channel acquisition strategy across Google, Meta, and LinkedIn',
      'High-converting landing page designs with A/B testing infrastructure',
      'Automated email nurture sequences and churn-prevention workflows',
      'End-to-end attribution dashboards linking ad spend directly to revenue'
    ],
    techStack: ['Google Ads', 'Meta Ads Manager', 'PostHog', 'Klaviyo', 'Customer.io', 'Google Analytics 4'],
    process: [
      { step: '01', title: 'Audience', desc: 'Deep research into customer acquisition costs, buying triggers, and competitive gaps.' },
      { step: '02', title: 'Funnels', desc: 'Designing streamlined landing pages tailored to specific high-intent search queries.' },
      { step: '03', title: 'Testing', desc: 'Running multivariate ad creative and copy experiments to establish winning baselines.' },
      { step: '04', title: 'Scale', desc: 'Systematically increasing spend on profitable campaigns while suppressing CAC.' }
    ],
    faqs: [
      {
        question: 'Do you manage ad creative as well as technical analytics?',
        answer: 'Yes. We craft the copy, graphic design, and landing pages in addition to tracking pixels and conversion API setups, providing a turnkey growth solution.'
      }
    ]
  }
];
