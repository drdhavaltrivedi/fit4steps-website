import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  MapPin,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  Award,
  Users,
  Building,
  Heart
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Personal Fitness Trainer in Delhi - Best In-Home Fitness Coach | Fit4Steps",
  description: "Book Delhi's top-rated personal fitness trainer at home. Serving South Delhi (Greater Kailash, Vasant Kunj, Defence Colony, Hauz Khas). Certified trainers for weight loss, strength, elderly care & functional fitness.",
  keywords: [
    "personal fitness trainer delhi",
    "best personal fitness trainer delhi",
    "in home personal trainer south delhi",
    "personal trainer in greater kailash delhi",
    "home workout trainer delhi ncr",
    "fitness coach at home delhi"
  ],
  alternates: {
    canonical: "https://fit4steps.com/personal-fitness-trainer-delhi",
  },
};



export default function PersonalFitnessTrainerDelhiPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: 'Fit4Steps Wellness - Personal Trainer at Home South Delhi',
    image: 'https://fit4steps.com/assets/image/logo-v2.webp',
    '@id': 'https://fit4steps.com/personal-fitness-trainer-delhi',
    url: 'https://fit4steps.com/personal-fitness-trainer-delhi',
    telephone: '+919999448206',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'South Delhi',
      addressRegion: 'Delhi',
      postalCode: '110048',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.5355,
      longitude: 77.2410
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '06:00',
        closes: '20:30'
      }
    ],
    areaServed: [
      'Greater Kailash 1',
      'Greater Kailash 2',
      'Vasant Kunj',
      'Panchsheel Park',
      'Anand Lok',
      'Defence Colony',
      'Gulmohar Park',
      'South Delhi'
    ]
  };

  const zones = [
    {
      name: 'Greater Kailash (GK 1, GK 2 & Enclave)',
      desc: 'Dedicated trainers stationed locally for M Block, N Block, and Masjid Moth residences.',
      link: '/personal-trainer-greater-kailash-delhi'
    },
    {
      name: 'Vasant Kunj & Vasant Vihar',
      desc: 'Serving Sectors A through E, Vasant Vihar diplomatic enclave, and Shanti Niketan villas.',
      link: '/personal-fitness-trainer-delhi'
    },
    {
      name: 'Panchsheel, Anand Lok & Gulmohar Park',
      desc: 'VIP home training with custom equipment brought for senior mobility and weight management.',
      link: '/personal-fitness-trainer-delhi'
    },
    {
      name: 'Defence Colony, Friends Colony & Maharani Bagh',
      desc: 'Discreet 1-on-1 coaching for executives, couples, and elderly parents in their home setting.',
      link: '/senior-citizen-fitness-trainer-at-home-delhi'
    }
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '880px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <MapPin size={14} /> South Delhi Premier Hub
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 50px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Personal Fitness Trainer in South Delhi <br />
            <span className="text-gold">Greater Kailash, Vasant Kunj & Environs</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Bringing premier 1-on-1 personal training, certified lady trainers, and safe elderly rehabilitation directly to the finest residential addresses in South Delhi.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20looking%20for%20a%20personal%20trainer%20in%20South%20Delhi.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book South Delhi Trial
            </a>
            <a href="tel:+919999448206" className="btn btn-outline">
              <Phone size={18} /> Call +91 99994 48206
            </a>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="section-surface">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'center'
          }}>
            <div>
              <div className="badge badge-navy" style={{ marginBottom: '14px' }}>
                <ShieldCheck size={14} /> Elite South Delhi Standards
              </div>
              <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px', lineHeight: 1.3 }}>
                Discreet, Safe & Certified Fitness for Your Home
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '20px' }}>
                South Delhi homes demand high standards of professionalism, privacy, and hygiene. Our trainers are background-verified, university and gold-standard certified (ACE, ISSA, K11), and trained in medical triage protocols.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  '15+ Certified trainers active across South Delhi daily',
                  'Gentle joint rehabilitation avoiding unnecessary surgery',
                  'Certified female instructors for women & prenatal care',
                  'Flexible 6:00 AM – 8:30 PM scheduling around busy corporate calendars'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <CheckCircle2 size={18} color="var(--primary-gold)" />
                    <span style={{ color: 'var(--text-main)', fontSize: '15px', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '20px',
              padding: '36px',
            }}>
              <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '16px' }}>
                Quick South Delhi Links
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link
                  href="/personal-trainer-greater-kailash-delhi"
                  style={{
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'var(--bg-main)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'var(--text-main)',
                    fontWeight: 500,
                    textDecoration: 'none'
                  }}
                >
                  <span>Greater Kailash (GK 1 & 2) Coaching</span>
                  <ArrowRight size={16} color="var(--primary-gold)" />
                </Link>
                <Link
                  href="/senior-citizen-fitness-trainer-at-home-delhi"
                  style={{
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'var(--bg-main)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'var(--text-main)',
                    fontWeight: 500,
                    textDecoration: 'none'
                  }}
                >
                  <span>Senior Citizen Training Delhi</span>
                  <ArrowRight size={16} color="var(--primary-gold)" />
                </Link>
                <Link
                  href="/personal-fitness-trainer-delhi"
                  style={{
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'var(--bg-main)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'var(--text-main)',
                    fontWeight: 500,
                    textDecoration: 'none'
                  }}
                >
                  <span>General In-Home Personal Training Delhi</span>
                  <ArrowRight size={16} color="var(--primary-gold)" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOUTH DELHI NEIGHBORHOODS */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            <h2 style={{ fontSize: '32px', color: 'var(--text-main)', marginBottom: '14px' }}>
              Neighborhoods We Cover in South Delhi
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6 }}>
              Our South Delhi training wing provides dedicated personal coaches with all portable equipment brought to your doorstep.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {zones.map((zone, idx) => (
              <div key={idx} className="card-clean">
                <h3 style={{ fontSize: '19px', color: 'var(--text-main)', marginBottom: '10px' }}>
                  {zone.name}
                </h3>
                <p style={{ color: 'var(--text-body)', fontSize: '14px', lineHeight: 1.6, marginBottom: '16px' }}>
                  {zone.desc}
                </p>
                <Link href={zone.link} style={{ color: 'var(--primary-gold)', fontWeight: 600, fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  Explore Details <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="section-surface" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontSize: '30px', color: 'var(--text-main)', marginBottom: '16px' }}>
            Transform Your Fitness in South Delhi
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>
            Contact us today to schedule an introductory consultation and movement screening at your South Delhi residence.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20scheduling%20a%20doorstep%20session%20in%20South%20Delhi."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> WhatsApp Concierge
            </a>
            <Link href="/fitness-training-program-for-senior-citizens" className="btn btn-outline">
              Senior Joint Therapy <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
