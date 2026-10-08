export interface ProjectItem {
  slug: string;
  title: string;
  client: string; // placeholder marked TODO
  serviceTag: string;
  serviceCategory: 'AI' | 'Engineering' | 'Growth';
  year: string;
  featured: boolean;
  summary: string;
  challenge: string;
  approach: string;
  solution: string;
  metrics: { value: string; label: string }[];
  techStack: string[];
  coverGradient: string;
  testimonial?: { quote: string; author: string; role: string };
}

export const projectsData: ProjectItem[] = [
  {
    slug: 'aura-health-ai-copilot',
    title: 'Aura Health: Autonomous Clinical Triage & Knowledge RAG',
    client: 'Aura Health', // TODO: Replace with official client name
    serviceTag: 'AI Automation',
    serviceCategory: 'AI',
    year: '2026',
    featured: true,
    summary: 'Replacing hours of manual patient inquiry triage with a secure, zero-hallucination medical copilot and automated EHR scheduling.',
    challenge: 'Clinical staff were spending over 28 hours per week answering routine patient medication and intake queries, leading to administrative burn-out and delayed responses.',
    approach: 'We audited existing patient inquiry records, established strict clinical guardrails using deterministic RAG, and built custom webhook synchronization directly into their electronic records system.',
    solution: 'Deployed an autonomous conversational copilot with source-document citation. Any query outside predetermined safety thresholds is automatically escalated to on-call nursing staff with full transcript history.',
    metrics: [
      { value: '73%', label: 'Inquiries resolved autonomously' },
      { value: '28 hrs', label: 'Clinical time saved weekly' },
      { value: '4.9/5', label: 'Patient satisfaction rating' }
    ],
    techStack: ['n8n', 'OpenAI', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    coverGradient: 'linear-gradient(135deg, #dfdbd1 0%, #cac5b8 100%)',
    testimonial: {
      quote: 'The automation feels completely natural, dignified, and precise. Our staff now focus entirely on critical patient care rather than inbox triage.',
      author: 'Dr. Elena Rostova', // TODO: Replace with client executive
      role: 'Chief Medical Officer'
    }
  },
  {
    slug: 'finpulse-multi-tenant-saas',
    title: 'FinPulse: High-Concurrency Financial Intelligence Dashboard',
    client: 'FinPulse Technologies', // TODO: Replace with official client name
    serviceTag: 'Web Applications',
    serviceCategory: 'Engineering',
    year: '2026',
    featured: true,
    summary: 'A bespoke multi-tenant SaaS platform engineering sub-second portfolio analytics, real-time banking webhooks, and calm luxury typography.',
    challenge: 'FinPulse was suffering from sluggish dashboard load times (over 4.2 seconds) and fragile state synchronization across 50,000+ daily active wealth managers.',
    approach: 'We completely re-architected the frontend using Next.js App Router and server-rendered data streaming, backed by Redis caching and isolated database schemas.',
    solution: 'Delivered an ultra-responsive, calm web application delivering sub-second page transitions, automated transaction reconciliation, and enterprise security compliance.',
    metrics: [
      { value: '0.4s', label: 'Average page load speed' },
      { value: '99.99%', label: 'Production uptime SLA' },
      { value: '42%', label: 'Infrastructure cost reduction' }
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Redis', 'Vercel'],
    coverGradient: 'linear-gradient(135deg, #d6d2c7 0%, #bfbaa9 100%)',
    testimonial: {
      quote: 'Anvaya understood that wealth managers need calm, dependable clarity. The speed and visual refinement of the dashboard are unmatched.',
      author: 'Marcus Vance', // TODO: Replace with client executive
      role: 'Head of Product'
    }
  },
  {
    slug: 'nexus-logistics-customs-ocr',
    title: 'Nexus Logistics: Automated Bill of Lading & Customs Processing',
    client: 'Nexus Logistics Global', // TODO: Replace with official client name
    serviceTag: 'AI Automation & Cloud',
    serviceCategory: 'AI',
    year: '2025',
    featured: true,
    summary: 'Converting thousands of multi-lingual freight shipping manifests and customs PDFs into structured verified accounting records within seconds.',
    challenge: 'A global freight forwarder relied on 16 operators manually keying in 40+ fields per customs declaration, causing customs delays and high transcription error rates.',
    approach: 'We constructed an event-driven computer vision and multimodal parsing pipeline running on private cloud worker nodes with confidence scoring.',
    solution: 'Documents received via email or API are ingested, parsed in 8 seconds, cross-verified against carrier manifests, and synced into SAP without human intervention unless flagged for review.',
    metrics: [
      { value: '8 sec', label: 'Processing time per manifest' },
      { value: '99.6%', label: 'Field extraction accuracy' },
      { value: '$140k', label: 'Annual operational savings' }
    ],
    techStack: ['Python', 'AWS Lambda', 'FastAPI', 'Docker', 'PostgreSQL', 'SAP API'],
    coverGradient: 'linear-gradient(135deg, #ded9ce 0%, #c8c2b4 100%)',
    testimonial: {
      quote: 'What used to take 45 minutes per international shipment now completes in 8 seconds with zero human data-entry mistakes.',
      author: 'Devraj Singhania', // TODO: Replace with client executive
      role: 'Director of Operations'
    }
  },
  {
    slug: 'omnistore-headless-commerce',
    title: 'OmniStore: Headless E-Commerce & Precision Retention Funnels',
    client: 'OmniStore Direct', // TODO: Replace with official client name
    serviceTag: 'Web & Growth Marketing',
    serviceCategory: 'Growth',
    year: '2025',
    featured: false,
    summary: 'A sub-second headless storefront with behavioral Klaviyo email automations and first-party conversion API tracking.',
    challenge: 'High checkout abandonment and signal degradation from iOS privacy updates reduced advertising ROAS below sustainable levels.',
    approach: 'Rebuilt the shopping experience on Next.js paired with Shopify Storefront API and deployed server-side CAPI tracking on AWS.',
    solution: 'Engineered dynamic cart recovery flows and customized high-converting landing pages tailored to specific ad creative angles.',
    metrics: [
      { value: '3.4x', label: 'Return on ad spend (ROAS)' },
      { value: '29%', label: 'Lift in repeat customer LTV' },
      { value: '1.2s', label: 'Lighthouse mobile speed' }
    ],
    techStack: ['Next.js', 'Shopify API', 'Tailwind CSS', 'Klaviyo', 'Meta CAPI'],
    coverGradient: 'linear-gradient(135deg, #d8d4c9 0%, #c0bbb0 100%)'
  },
  {
    slug: 'vanguard-cloud-devops',
    title: 'Vanguard Capital: High-Security Cloud VPC & DevOps Pipeline',
    client: 'Vanguard Asset Partners', // TODO: Replace with official client name
    serviceTag: 'Cloud Infrastructure',
    serviceCategory: 'Engineering',
    year: '2025',
    featured: false,
    summary: 'Zero-trust AWS multi-region infrastructure codified entirely in Terraform with automated vulnerability scanning.',
    challenge: 'Legacy server deployments lacked automated rollback mechanisms and failed initial SOC2 security audit standards.',
    approach: 'Designed isolated private VPCs with automated Terraform deployment pipelines, immutable audit logging, and automated DB backups.',
    solution: 'Delivered a resilient cloud architecture that successfully achieved SOC2 Type II certification on the first external review.',
    metrics: [
      { value: '100%', label: 'IaC infrastructure coverage' },
      { value: '0 sec', label: 'Downtime during deployments' },
      { value: 'SOC2', label: 'Compliant architecture certified' }
    ],
    techStack: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Datadog'],
    coverGradient: 'linear-gradient(135deg, #d2cebf 0%, #bbb6a6 100%)'
  },
  {
    slug: 'urban-nest-seo-domination',
    title: 'Urban Nest: Organic Search Domination & Automated Lead Routing',
    client: 'Urban Nest Advisory', // TODO: Replace with official client name

    serviceTag: 'SEO & AI Automation',
    serviceCategory: 'Growth',
    year: '2024',
    featured: false,
    summary: 'Scaling high-intent organic buyer traffic by 340% with programmatic neighborhood knowledge hubs and instant WhatsApp lead qualification.',
    challenge: 'High cost-per-lead on Google Ads was eroding transaction margins while incoming web inquiries went unanswered for hours.',
    approach: 'Constructed comprehensive programmatic semantic content hubs answering hyper-local real estate buyer queries, coupled with an instant WhatsApp qualification bot.',
    solution: 'Top 3 Google search rankings for 85+ commercial queries and instantaneous lead qualification within 30 seconds of form submission.',
    metrics: [
      { value: '340%', label: 'Growth in organic search leads' },
      { value: '<30s', label: 'Average lead response time' },
      { value: '55%', label: 'Lower cost per qualified client' }
    ],
    techStack: ['Next.js', 'Technical SEO', 'Schema.org', 'WhatsApp Cloud API', 'Python'],
    coverGradient: 'linear-gradient(135deg, #dbd7cb 0%, #c3beb2 100%)'
  }
];
