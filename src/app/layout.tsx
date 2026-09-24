import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import VariantSwitcher from '@/components/VariantSwitcher';

export const metadata: Metadata = {
  metadataBase: new URL('https://fit4steps.in'),
  title: {
    default: 'Fit4Steps | In-Home Personal Fitness & Senior Joint Restoration in Delhi NCR',
    template: '%s | Fit4Steps Wellness',
  },
  description: 'Certified 1-on-1 in-home personal trainers in Noida, Delhi & Gurugram. Specializing in senior citizen fitness, gentle knee pain therapy, joint restoration, and lasting wellness.',
  keywords: [
    'senior citizen fitness trainer at home delhi',
    'knee pain exercises therapy noida',
    'personal fitness trainer at home noida',
    'female fitness trainers delhi',
    'in-home personal training gurugram',
    'personal trainer jaypee wishtown noida',
    'strength training for seniors gurugram',
    'joint restoration therapy delhi ncr',
    'fit4steps wellness satheesan'
  ],
  authors: [{ name: 'Satheesan - Master Trainer & Founder, Fit4Steps' }],
  creator: 'Fit4Steps Wellness',
  publisher: 'Fit4Steps Wellness',
  openGraph: {
    title: 'Fit4Steps | Your Sustainable In-Home Fitness & Joint Health Partner',
    description: 'Specialized 1-on-1 physical coaching, gentle knee pain rehabilitation, and personal training at home in Noida, Delhi & Gurugram.',
    url: 'https://fit4steps.in',
    siteName: 'Fit4Steps Wellness',
    images: [
      {
        url: '/assets/image/hero-senior-trainer.jpg',
        width: 1200,
        height: 630,
        alt: 'Fit4Steps In-Home Personal Training and Senior Joint Care',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fit4Steps | In-Home Fitness & Senior Joint Restoration',
    description: 'Transform your physical health with certified in-home trainers in Noida, Delhi & Gurugram.',
    images: ['/assets/image/hero-senior-trainer.jpg'],
  },
  alternates: {
    canonical: 'https://fit4steps.in',
  },
  icons: {
    icon: '/assets/image/favicon.webp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // AEO & SEO Schema for Google Rich Snippets & AI Search Crawlers
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    '@id': 'https://fit4steps.in/#business',
    name: 'Fit4Steps Wellness',
    url: 'https://fit4steps.in',
    logo: 'https://fit4steps.in/assets/image/logo.svg',
    image: 'https://fit4steps.in/assets/image/hero-senior-trainer.jpg',
    description: 'Personalized in-home personal training and senior citizen joint restoration in Noida, Delhi, and Gurugram.',
    telephone: '+919778776136',
    email: 'info@fit4steps.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'H155, KP1, Jaypee Wishtown, Sector 133',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      postalCode: '201304',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.5137',
      longitude: '77.3683',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '06:00',
        closes: '20:30',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Noida' },
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'City', name: 'Gurugram' },
    ],
    founder: {
      '@type': 'Person',
      name: 'Satheesan',
      jobTitle: 'Founder & Head Master Trainer',
      knowsAbout: [
        'Senior Citizen Fitness',
        'Knee Pain Therapy',
        'Joint Restoration',
        'Ayurvedic Stretching',
        'Functional Strength'
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '7040',
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '₹₹',
  };

  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('fit4steps-theme');
                  if (saved === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <VariantSwitcher />
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}
