export interface ProjectItem {
  slug: string;
  title: string;
  client: string;
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
  imageUrl: string;
  coverGradient: string;
  testimonial?: { quote: string; author: string; role: string };
}

export const projectsData: ProjectItem[] = [
  {
    slug: 'pulsefit-gym-platform',
    title: 'PulseFit: Omnichannel Gym Management & Member Experience Web App',
    client: 'Tanush Fitness',
    serviceTag: 'Web Applications',
    serviceCategory: 'Engineering',
    year: '2026',
    featured: true,
    summary: 'A high-performance modern web application for boutique gyms and multi-facility fitness chains featuring automated membership tiers, trainer scheduling, biometric check-in sync, and integrated recurring payments.',
    challenge: 'Tanush Fitness was losing members during onboarding due to fragmented legacy desktop software, slow manual class bookings, and frequent payment reconciliation errors across studio locations.',
    approach: 'We designed and engineered a unified Next.js web application with sub-second page transitions, automated multi-tier membership subscriptions, real-time class booking schedules, and trainer session logs.',
    solution: 'Deployed an ultra-fast, mobile-optimized progressive web app backed by PostgreSQL and Stripe Billing, featuring automated WhatsApp booking reminders and an executive management dashboard.',
    metrics: [
      { value: '84%', label: 'Automated member renewals' },
      { value: '3.2x', label: 'Faster mobile check-in speed' },
      { value: '99.9%', label: 'Platform availability SLA' }
    ],
    techStack: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Stripe Billing', 'WhatsApp API'],
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    coverGradient: 'linear-gradient(135deg, #ded9ce 0%, #c8c2b4 100%)',
    testimonial: {
      quote: 'PulseFit replaced three disjointed legacy tools with one quiet, lightning-fast platform. Our member retention jumped and front-desk admin work virtually disappeared.',
      author: 'Pravinsinh Zala',
      role: 'Founder (Owner), Tanush Fitness'
    }
  },
  {
    slug: 'caredial-ivr-appointment-system',
    title: 'CareDial: Multi-Language IVR & Automated Telephony Scheduling System',
    client: 'Trinay Orthopedic Hospital',
    serviceTag: 'AI Automation & Cloud',
    serviceCategory: 'AI',
    year: '2026',
    featured: true,
    summary: 'An intelligent interactive voice response (IVR) and automated telephony scheduling system engineered for Trinay Orthopedic Hospital that handles incoming patient calls 24/7, books doctor appointments, and syncs directly with clinical calendars.',
    challenge: 'Trinay Orthopedic Hospital was experiencing severe phone line congestion during morning peak OPD hours, resulting in dropped patient calls, receptionist overload, and delayed specialist consultation scheduling.',
    approach: 'We constructed an event-driven IVR telephony tree paired with automated doctor slot reservation logic, dual-language voice routing, and instant patient verification.',
    solution: 'Patients dial in, select preferred orthopedic specialists via natural voice or keypad prompts, receive instant WhatsApp confirmations, and receive automated reminder calls prior to consultations.',
    metrics: [
      { value: '91%', label: 'Calls resolved autonomously' },
      { value: '62%', label: 'Reduction in appointment no-shows' },
      { value: '24/7', label: 'Continuous booking availability' }
    ],
    techStack: ['Twilio IVR', 'Python', 'FastAPI', 'PostgreSQL', 'Google Calendar API', 'WhatsApp Business API'],
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    coverGradient: 'linear-gradient(135deg, #dfdbd1 0%, #cac5b8 100%)',
    testimonial: {
      quote: 'What used to tie up our hospital phone lines every single morning is now handled effortlessly by CareDial. Our patients book consultations seamlessly 24/7, and our OPD operations run with complete calm.',
      author: 'Dr. Jaydeep Patel',
      role: 'Consultant Orthopedic Surgeon & Director, Trinay Orthopedic Hospital'
    }
  },
  {
    slug: 'frontdesk-ai-receptionist',
    title: 'FrontDesk AI: 24/7 Autonomous Financial Services Voice & Inbound Client Receptionist',
    client: 'Frontline Financial Services',
    serviceTag: 'AI Automation',
    serviceCategory: 'AI',
    year: '2026',
    featured: true,
    summary: 'An ultra-low latency conversational AI voice receptionist engineered for Frontline Financial Services, handling inbound investor inquiries, portfolio review scheduling, loan advisory consultations, and CRM sync 24/7.',
    challenge: 'Relationship managers and financial advisors at Frontline Financial Services were constantly tied up answering routine phone inquiries regarding loan eligibility, documentation requirements, and appointment bookings, causing response delays for high-value clients.',
    approach: 'We engineered a low-latency conversational voice AI system trained on financial advisory workflows, equipped with strict compliance guardrails, multi-tiered query routing, and real-time CRM calendar sync.',
    solution: 'Deployed an autonomous voice agent with sub-600ms response time that handles simultaneous inbound callers in natural speech, answers financial service questions accurately, books client meetings, and updates portfolio CRM records instantly.',
    metrics: [
      { value: '100%', label: 'Inbound call answer rate' },
      { value: '0 sec', label: 'Caller hold time' },
      { value: '4.8x', label: 'Advisory consultations booked' }
    ],
    techStack: ['Deepgram Voice', 'OpenAI Realtime', 'WebRTC', 'FastAPI', 'PostgreSQL', 'Financial CRM API'],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    coverGradient: 'linear-gradient(135deg, #d6d2c7 0%, #bfbaa9 100%)',
    testimonial: {
      quote: 'FrontDesk AI sounds remarkably articulate, human, and professional. It never misses an inbound investor call, captures key inquiry details, and books advisory consultations directly into our calendars.',
      author: 'Ravindra Kapadiya',
      role: 'Founder (Owner), Frontline Financial Services'
    }
  }
];
