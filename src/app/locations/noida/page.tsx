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
  Clock,
  Award,
  Users,
  Building,
  Heart
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Fitness Trainer in Noida | In-Home Training & Senior Care | Fit4Steps HQ',
  description: 'Certified personal fitness trainer at home in Noida. Headquartered at Jaypee Greens Wishtown, Sector 133. Specializing in senior joint therapy, weight management, and in-home fitness across Noida Expressway and premium sectors.',
  keywords: [
    'personal fitness trainer in noida',
    'fitness trainer at home noida',
    'personal trainer jaypee wishtown noida',
    'senior citizen fitness trainer noida',
    'female fitness trainer noida',
    'noida expressway personal trainer',
    'home gym coach sector 137 noida'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/locations/noida',
  },
};

export default function NoidaLocationPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: 'Fit4Steps Wellness - Personal Trainer at Home Noida',
    image: 'https://fit4steps.com/assets/image/logo-v2.webp',
    '@id': 'https://fit4steps.com/locations/noida',
    url: 'https://fit4steps.com/locations/noida',
    telephone: '+919999448206',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'H155, KP1, Jaypee Wishtown, Sector 133',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      postalCode: '201304',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.5126,
      longitude: 77.3688
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '06:00',
        closes: '20:30'
      }
    ],
    areaServed: [
      'Jaypee Greens Wishtown',
      'Sector 128 Noida',
      'Sector 133 Noida',
      'Sector 137 Noida',
      'Sector 93A Noida',
      'Sector 50 Noida',
      'Noida Expressway'
    ]
  };

  const sectors = [
    {
      name: 'Jaypee Greens Wishtown (HQ Hub)',
      description: 'Kalypso Court, Pavilion Court, Pebble Court, Kensington Park & Aman. Immediate 15-min trainer dispatch.',
      highlight: 'Headquarters Campus'
    },
    {
      name: 'Noida Expressway (Sectors 93–168)',
      description: 'Sectors 93A (ATS Village, Eldeco Utopia), 93B (Grand Omaxe), 108, 128, 137 (Paras Tierea, Exotica), 143, 168.',
      highlight: 'High-Density Service Area'
    },
    {
      name: 'Central & Premium Noida',
      description: 'Sectors 14, 15A, 44, 47, 50, 74, 76, 78 (Mahagun Moderne), 121 (Cleo County).',
      highlight: 'Morning & Evening VIP Slots'
    },
    {
      name: 'Corporate & Tech Hubs',
      description: 'Sector 62, Advant Navis Park, Candor TechSpace, Oxygen Business Park for executive fitness.',
      highlight: 'Corporate Wellness'
    }
  ];

  return (
    <div>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* 1. HERO BANNER */}
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '880px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <MapPin size={14} /> Head Office & Primary Hub
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 50px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Personal Fitness Trainer in Noida <br />
            <span className="text-gold">At-Home Training & Senior Care</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Headquartered in Jaypee Greens Wishtown (Sector 133), Fit4Steps provides elite 1-on-1 personal fitness coaching, certified lady fitness trainers, and specialized senior joint therapy delivered directly to your apartment or villa in Noida.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20looking%20for%20a%20personal%20trainer%20in%20Noida.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book Free Trial in Noida
            </a>
            <a href="tel:+919999448206" className="btn btn-outline">
              <Phone size={18} /> Call +91 99994 48206
            </a>
          </div>
        </div>
      </section>

      {/* 2. VERIFIED NOIDA HEADQUARTERS ADDRESS */}
      <section className="section-surface">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'center'
          }}>
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '20px',
              padding: '36px',
            }}>
              <div className="badge badge-navy" style={{ marginBottom: '16px' }}>
                <Building size={14} /> Registered Head Office
              </div>
              <h2 style={{ fontSize: '24px', color: 'var(--text-main)', marginBottom: '14px' }}>
                Fit4Steps Wellness Noida HQ
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '20px' }}>
                <strong>Address:</strong> H155, KP1, Jaypee Wishtown, Sector 133, Noida, Uttar Pradesh 201304
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <div style={{ padding: '12px 16px', background: 'var(--bg-main)', borderRadius: '12px' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Operating Hours</div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-main)' }}>6:00 AM – 8:30 PM</div>
                </div>
                <div style={{ padding: '12px 16px', background: 'var(--bg-main)', borderRadius: '12px' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Certified Trainers</div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-main)' }}>18+ Based in Noida</div>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Our Noida trainers carry all essential portable functional equipment (resistance bands, Swiss balls, foam rollers, agility ladders, and heart-rate monitors) directly to your home.
              </p>
            </div>

            <div>
              <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
                <ShieldCheck size={14} /> Why Noida Residents Choose Us
              </div>
              <h3 style={{ fontSize: '28px', color: 'var(--text-main)', lineHeight: 1.3, marginBottom: '20px' }}>
                Zero Commute, 100% Safety, Clinical Precision
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  {
                    title: 'Punctual Doorstep Arrival',
                    desc: 'Trainers live along the Noida Expressway corridor, guaranteeing on-time morning (6:00 AM) and evening slots without traffic delays.'
                  },
                  {
                    title: 'Specialized Senior Care',
                    desc: 'Safe, non-impact joint restoration and knee pain rehabilitation designed for residents living in gated societies.'
                  },
                  {
                    title: 'Certified Female Coaches',
                    desc: 'Dedicated female personal trainers available for women seeking privacy, prenatal yoga, or postpartum recovery.'
                  },
                  {
                    title: 'Condo Gym Optimization',
                    desc: 'We train you right inside your clubhouse gym or in your living room with minimal equipment required.'
                  }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} color="var(--primary-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      <strong style={{ color: 'var(--text-main)', fontSize: '16px' }}>{item.title}: </strong>
                      <span style={{ color: 'var(--text-body)', fontSize: '15px' }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COVERAGE ACROSS NOIDA SECTORS */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            <h2 style={{ fontSize: '32px', color: 'var(--text-main)', marginBottom: '14px' }}>
              Neighborhoods We Serve in Noida
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6 }}>
              Whether you live in a luxury high-rise condominium or a private kothi, our certified trainers are dispatched daily across all major Noida sectors.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {sectors.map((sec, idx) => (
              <div key={idx} className="card-clean" style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="badge badge-navy" style={{ alignSelf: 'flex-start', marginBottom: '12px' }}>
                  {sec.highlight}
                </span>
                <h3 style={{ fontSize: '19px', color: 'var(--text-main)', marginBottom: '10px' }}>
                  {sec.name}
                </h3>
                <p style={{ color: 'var(--text-body)', fontSize: '14px', lineHeight: 1.6, flexGrow: 1 }}>
                  {sec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LOCAL CLIENT SUCCESS IN NOIDA */}
      <section className="section-surface">
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
              <Award size={14} /> Verified Noida Testimonial
            </div>
            <blockquote style={{
              fontSize: '20px',
              fontStyle: 'italic',
              color: 'var(--text-main)',
              lineHeight: 1.6,
              marginBottom: '20px'
            }}>
              "Living in Jaypee Wishtown, having Master Trainer Satheesan and his team come to our apartment has been the greatest health decision for my mother (68) and myself. Her chronic knee pain reduced dramatically within 8 weeks without surgery!"
            </blockquote>
            <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>— Resident, Kalypso Court, Sector 128 Noida</div>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Trained with Fit4Steps for 3+ Years</div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="section-padding" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontSize: '32px', color: 'var(--text-main)', marginBottom: '16px' }}>
            Ready to Start Training at Home in Noida?
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>
            Book a 45-minute doorstep physical assessment and trial session with a senior trainer in your Noida society today.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20schedule%20a%20doorstep%20trial%20session%20in%20Noida."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Schedule Doorstep Trial
            </a>
            <Link href="/fitness-training-program-for-senior-citizens" className="btn btn-outline">
              Explore Senior Fitness <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
