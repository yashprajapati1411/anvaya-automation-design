import type { Metadata } from 'next';
import { Inter_Tight, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { FloatingCallPill } from '@/components/ui/FloatingCallPill';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { FirstVisitLoader } from '@/components/ui/FirstVisitLoader';
import { siteConfig } from '@/data/siteData';

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter-tight',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Anvaya Automation — Intelligence, refined.',
    template: '%s | Anvaya Automation',
  },
  description: siteConfig.description,
  keywords: [
    'AI automation services',
    'web application development',
    'mobile app development',
    'cloud infrastructure and DevOps',
    'SEO services',
    'digital marketing',
    'autonomous AI agents',
  ],
  authors: [{ name: 'Anvaya Automation' }],
  creator: 'Anvaya Automation',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: 'Anvaya Automation — Intelligence, refined.',
    description: siteConfig.description,
    siteName: 'Anvaya Automation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anvaya Automation — Intelligence, refined.',
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Anvaya Automation',
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
    },
  };

  return (
    <html lang="en" className={`${interTight.variable} ${instrumentSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-ink antialiased selection:bg-ink selection:text-ivory">
        <FirstVisitLoader />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingCallPill />
        </SmoothScroll>
      </body>
    </html>
  );
}
