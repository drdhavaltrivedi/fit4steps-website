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
  Building,
  Heart
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Fitness Trainer in Gurugram (Gurgaon) | DLF & Golf Course Rd | Fit4Steps',
  description: 'Certified personal fitness trainer and senior citizen joint care at home in Gurugram. Serving DLF Phase 1-5, Golf Course Road, Sohna Road, Nirvana Country. Doorstep personal coaching.',
  keywords: [
    'senior citizen fitness trainer at home gurugram',
    'fitness trainer gurugram dlf',
    'personal fitness trainer golf course road',
    'strength training for seniors gurugram',
    'home gym trainer gurgaon',
    'exercises for senior citizens gurugram'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/locations/gurugram',
  },
};

export default function GurugramLocationPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: 'Fit4Steps Wellness - Personal Trainer at Home Gurugram',
    image: 'https://fit4steps.com/assets/image/logo-v2.webp',
    '@id': 'https://fit4steps.com/locations/gurugram',
    url: 'https://fit4steps.com/locations/gurugram',
    telephone: '+919999448206',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      postalCode: '122002',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.4595,
      longitude: 77.0266
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
      'DLF Phase 1',
      'DLF Phase 2',
      'DLF Phase 3',
      'DLF Phase 4',
      'DLF Phase 5',
      'Golf Course Road',
      'Golf Course Extension Road',
      'Sohna Road',
      'Nirvana Country'
    ]
  };

  const zones = [
    {
      name: 'DLF Phase 1–5 & Super Luxury Enclaves',
      desc: 'Dedicated doorstep training for DLF Phase 1 to 5, The Aralias, The Magnolias, and The Camellias.',
      link: '/senior-citizen-fitness-trainer-at-home-gurugram'
    },
    {
      name: 'Golf Course Road & Extension',
      desc: 'Serving high-rise condominium residents at Pioneer Araya, Palm Springs, and Grand Arch.',
      link: '/locations/gurugram'
    },
    {
      name: 'Sohna Road & Nirvana Country',
      desc: 'Personalized strength, gentle yoga, and joint therapy for gated communities in South City and Nirvana.',
      link: '/locations/gurugram'
    },
    {
      name: 'Cyber City & Horizon Center Executives',
      desc: 'High-efficiency corporate conditioning and posture rehabilitation for multinational executives.',
      link: '/services/corporate-wellness-yoga'
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
            <MapPin size={14} /> Millennium City Hub
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 50px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Personal Fitness Trainer in Gurugram <br />
            <span className="text-gold">DLF Phase 1–5 & Golf Course Road</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Certified 1-on-1 personal coaches and specialized senior joint therapy delivered directly to your condominium or villa across Gurugram.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20looking%20for%20a%20personal%20trainer%20in%20Gurugram.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book Gurugram Trial
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
                <ShieldCheck size={14} /> Gurugram In-Home Specialists
              </div>
              <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px', lineHeight: 1.3 }}>
                Premium In-Home Fitness Without the Gurugram Traffic
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '20px' }}>
                Avoid the stress of driving to crowded gyms. Our trainers bring professional gear right to your living room or private society gym, providing high-touch personal training tailored to your body.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  '14+ Certified trainers active across DLF & Golf Course Road',
                  'Doctor-recommended knee pain restoration protocol',
                  'Posture correction for tech professionals and desk workers',
                  'Dedicated female trainers available upon request'
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
                Gurugram Senior Citizen Hub
              </h3>
              <p style={{ color: 'var(--text-body)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                We are Gurugram’s most trusted senior citizen fitness provider, helping elderly parents rebuild strength, balance, and knee mobility after retirement.
              </p>
              <Link
                href="/senior-citizen-fitness-trainer-at-home-gurugram"
                className="btn btn-gold"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>View Gurugram Senior Services</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEIGHBORHOODS */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            <h2 style={{ fontSize: '32px', color: 'var(--text-main)', marginBottom: '14px' }}>
              Societies & Areas We Serve in Gurugram
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6 }}>
              Reliable, punctual training delivered to your door in Gurugram's top gated developments.
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
                  Learn More <ArrowRight size={14} />
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
            Schedule Your Gurugram Doorstep Assessment
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>
            Get started with a 45-minute comprehensive mobility and postural assessment in your home.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20book%20a%20doorstep%20session%20in%20Gurugram."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> WhatsApp Assessment
            </a>
            <Link href="/senior-fitness" className="btn btn-outline">
              Senior Programs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
