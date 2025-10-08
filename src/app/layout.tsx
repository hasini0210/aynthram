import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Aynthram Leadership Academy — Art-Led Leadership & Experiential Retreats',
  description: 'Art-led leadership immersions rooted in Indian Heritage. Workshops, retreats & experiential programs for leaders, founders, and teams.',
  metadataBase: new URL('https://aynthram.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aynthram Leadership Academy',
    url: 'https://aynthram.com',
    logo: 'https://aynthram.com/logo.png', // Placeholder
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-9703831819',
        contactType: 'customer service',
        email: 'vasudev.aynthram@gmail.com',
      },
    ],
    sameAs: [],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/logo.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
