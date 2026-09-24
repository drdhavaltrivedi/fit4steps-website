import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import SpecsMatrix from '@/components/SpecsMatrix';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  Users,
  Clock,
  Target,
  Dumbbell,
  Heart,
  Sparkles,
  Calendar,
  Layers,
  MapPin,
  HelpCircle,
  ChevronDown,
  Smile,
  Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Couples Fitness Training at Home Delhi - 2-on-1 Partner Workouts | Fit4Steps",
  description: "Work out together with certified partner personal training at home in Delhi NCR. Tailored couples workouts, dual accountability, and shared fitness goals in South Delhi, Noida & Gurugram.",
  keywords: [
    "couples fitness training at home delhi",
    "partner workout coach delhi",
    "couples personal trainer south delhi",
    "2 on 1 personal trainer noida",
    "couples gym trainer at home gurugram"
  ],
  alternates: {
    canonical: "https://fit4steps.com/couples-fitness-training-at-home-delhi",
  },
};



export default function CouplesFitnessDelhiPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://fit4steps.com/couples-fitness-training-at-home-delhi#service',
        name: 'Couple & Partner Fitness Training at Home',
        serviceType: 'Partner In-Home Personal Coaching',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Fit4Steps Personal Fitness & Wellness',
          telephone: '+919999448206',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Jaypee Wishtown, Sector 133',
            addressLocality: 'Noida',
            addressRegion: 'Uttar Pradesh',
            postalCode: '201304',
            addressCountry: 'IN',
          },
        },
        areaServed: [
          { '@type': 'City', name: 'Noida' },
          { '@type': 'City', name: 'Delhi' },
          { '@type': 'City', name: 'Gurugram' },
          { '@type': 'AdministrativeArea', name: 'Delhi NCR' }
        ],
        description: 'Synchronized 2-on-1 personal fitness training at home for couples and partners across Delhi NCR. Accommodates individual fitness levels while building shared wellness accountability.',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '11000',
          priceValidUntil: '2027-12-31',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://fit4steps.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://fit4steps.com/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Couple Training',
            item: 'https://fit4steps.com/couples-fitness-training-at-home-delhi',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What if my partner and I have completely different fitness levels or injuries?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'This is the most common scenario we handle. Our coach calibrates individual exercise variations for each partner. For instance, during a lower-body superset, one partner may perform weighted goblet squats while the other performs assisted box squats or glute bridges.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is couple training more affordable than two separate personal training packages?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! Our 2-on-1 couple package offers substantial savings compared to booking two individual 1-on-1 memberships, giving you world-class private coaching at nearly 40% lower cost per person.'
            }
          },
          {
            '@type': 'Question',
            name: 'What equipment do we need at home for two people?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Fit4Steps brings duplicate sets of sanitized resistance tubes, dumbbells, exercise mats, and medicine balls so neither partner has to wait for equipment.'
            }
          }
        ]
      }
    ]
  };

  const specs = [
    { label: 'Session Format', value: '2-on-1 Dedicated Partner Coaching' },
    { label: 'Session Length', value: '60 Minutes per Joint Session' },
    { label: 'Equipment Provided', value: 'Dual Sets of Sanitized Tubes, Dumbbells, Mats & Medicine Balls' },
    { label: 'Individual Tailoring', value: 'Bespoke Regression & Progression per Partner' },
    { label: 'Cost Advantage', value: 'Up to 40% Savings Compared to Separate Individual Packages' },
    { label: 'Locations Covered', value: 'Noida Expressway, South Delhi & Gurugram DLF' },
  ];

  const benefits = [
    {
      title: 'Built-In Mutual Accountability',
      desc: 'When your spouse is tying their workout shoes in the living room, skipping a workout becomes impossible. Couples who train together achieve an 89% higher 6-month adherence rate.'
    },
    {
      title: 'Dual-Calibrated Programming',
      desc: 'No cookie-cutter workouts. Our coach scales intensity independently so one partner can target heavy fat burn while the other builds postural stability and core resilience.'
    },
    {
      title: 'Quality Uninterrupted Time Together',
      desc: 'Escape screens, office emails, and household chores for one energizing hour each day. Strengthen your bond through shared challenges and endorphin release.'
    },
    {
      title: 'Partner Stretching & Interactive Drills',
      desc: 'Incorporate partner resistance holds, synchronized core planks, and assisted hamstring decompression stretches that can only be executed in a paired environment.'
    }
  ];

  const faqs = [
    {
      q: 'What if my partner and I have completely different fitness levels or injuries?',
      a: 'This is the most common scenario we handle. Our coach calibrates individual exercise variations for each partner. For instance, during a lower-body superset, one partner may perform weighted goblet squats while the other performs assisted box squats or glute bridges.'
    },
    {
      q: 'Is couple training more affordable than two separate personal training packages?',
      a: 'Yes! Our 2-on-1 couple package offers substantial savings compared to booking two individual 1-on-1 memberships, giving you world-class private coaching at nearly 40% lower cost per person.'
    },
    {
      q: 'What equipment do we need at home for two people?',
      a: 'Fit4Steps brings duplicate sets of sanitized resistance tubes, dumbbells, exercise mats, and medicine balls so neither partner has to wait for equipment.'
    },
    {
      q: 'Can friends or siblings book couple training together?',
      a: 'Yes! The couple package applies to any two individuals training in the same residence or society gym, whether spouses, partners, siblings, or parent-adult child duos.'
    },
    {
      q: 'What time slots are available for couple training?',
      a: 'We offer early morning slots (6:00 AM – 9:00 AM) perfect before work commutes, as well as evening slots (6:00 PM – 8:30 PM) to decompress together after the workday.'
    }
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* BREADCRUMB */}
      <div style={{ background: 'var(--bg-surface-alt)', borderBottom: '1px solid var(--border-subtle)', padding: '12px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
          <Link href="/" style={{ color: 'var(--text-body)', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link href="/services" style={{ color: 'var(--text-body)', textDecoration: 'none' }}>Services</Link>
          <span>/</span>
          <span style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>Couple Training</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="page-header-clean" style={{ padding: '60px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '18px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Users size={15} /> Shared Motivation & Quality Time
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 4.2vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px', fontWeight: 800 }}>
                Couple & Partner Training at Home in <br />
                <span className="text-gold">Noida, South Delhi & Gurugram</span>
              </h1>
              <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
                Transform your fitness journey into a shared experience. Train side-by-side in your living room with a dedicated coach who balances differing endurance levels, keeps motivation high, and saves you up to 40% over individual packages.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '32px' }}>
                {[
                  'Bespoke Dual Scaling',
                  'Dual Equipment Included',
                  'Interactive Partner Drills',
                  'Flexible Morning & Evening Hours'
                ].map((pill, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-main)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="var(--brand-gold)" />
                    <span>{pill}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20my%20partner%20and%20I%20are%20interested%20in%20Couple%20Training%20at%20home.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', fontSize: '15px' }}
                >
                  <MessageCircle size={18} /> Book Couple Trial Session
                </a>
                <a
                  href="tel:+919999448206"
                  className="btn btn-outline"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 24px', fontSize: '15px' }}
                >
                  <Phone size={18} /> Call +91 99994 48206
                </a>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--card-shadow-hover)',
                border: '1px solid var(--border-medium)',
                aspectRatio: '4/3',
                position: 'relative'
              }}>
                <img
                  src="/assets/image/h-ban-img.webp"
                  alt="Couple training together at home in Delhi NCR"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Floating Stat Badge */}
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                left: '24px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-medium)',
                borderRadius: '16px',
                padding: '14px 20px',
                boxShadow: 'var(--card-shadow)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'var(--brand-gold-soft)',
                  color: 'var(--brand-gold-text)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800
                }}>
                  <Heart size={20} color="var(--brand-gold)" />
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)' }}>89% Adherence Rate</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Couples Stick to Their Fitness Goals Longer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION MATRIX */}
      <SpecsMatrix
        badge="Shared Program Blueprint"
        title="How 2-on-1 In-Home Partner Coaching Works"
        subtitle="Dual-customized workouts delivered directly to your home with shared motivation and dedicated accountability."
        specs={specs}
      />

      {/* 3. FOUR KEY BENEFITS */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 50px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '14px' }}>
              <Zap size={14} /> Shared Transformation
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', color: 'var(--text-main)', fontWeight: 800, marginBottom: '14px' }}>
              Why Couples Love Training Together
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6 }}>
              Balancing long careers and family responsibilities often leaves little time for fitness or connection. Our partner program brings both together in the sanctuary of your home.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {benefits.map((b, idx) => (
              <div key={idx} className="theme-card" style={{ padding: '32px 26px', borderRadius: '18px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'var(--brand-gold-soft)',
                  color: 'var(--brand-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  marginBottom: '16px'
                }}>
                  {idx + 1}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>
                  {b.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.65 }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REAL CLIENT TESTIMONIAL */}
      <section className="section-surface" style={{ padding: '80px 0', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="card-clean" style={{ padding: '40px', borderRadius: '24px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
              <img
                src="/assets/image/ftr-testiminial-rajeev.webp"
                alt="Rajeev and Shalini - Fit4Steps Clients"
                style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--brand-gold)' }}
              />
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)' }}>Rajeev & Shalini Gupta</h3>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Couples Training • Sector 50, Noida</div>
                <div style={{ display: 'flex', gap: '4px', marginTop: '4px', color: '#f59e0b', fontSize: '14px' }}>
                  ★★★★★ <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '6px' }}>Verified Clients • 10 Months Training</span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '16px', color: 'var(--text-body)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '20px' }}>
              “My husband and I had very different fitness challenges—he had a desk-induced posture problem and I had knee stiffness. We were skeptical that one trainer could challenge both of us effectively. Fit4Steps completely surpassed our expectations. Our coach gives us synchronized rest intervals while modifying each exercise to our capabilities. It’s now the highlight of our mornings in Sector 50!”
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '13px', color: 'var(--brand-gold)', fontWeight: 700 }}>
              <span>✓ Shared 100+ Sessions Together</span>
              <span>✓ Rajeev Corrected Kyphosis</span>
              <span>✓ Shalini Relieved Knee Stiffness</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
              <HelpCircle size={14} /> Clarifications
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', color: 'var(--text-main)', fontWeight: 800 }}>
              Frequently Asked Questions About Couple Training
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, i) => (
              <details
                key={i}
                name="service-faq"
                className="theme-card"
                style={{
                  padding: '18px 24px',
                  borderRadius: '14px',
                  cursor: 'pointer',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <summary style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--text-main)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  userSelect: 'none',
                  listStyle: 'none'
                }}>
                  <span>{faq.q}</span>
                  <ChevronDown size={18} color="var(--brand-gold)" />
                </summary>
                <p style={{ marginTop: '14px', fontSize: '14.5px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="section-padding" style={{ background: 'var(--brand-navy)', color: '#ffffff', textAlign: 'center', padding: '70px 0' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', color: '#ffffff', fontWeight: 800, marginBottom: '16px' }}>
            Try a Joint In-Home Workout Trial
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: 1.65, marginBottom: '32px' }}>
            Experience our 2-on-1 partner training methodology firsthand. Our master coach will evaluate both partners and conduct a fun, joint 30-minute introductory workout in your living room.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20we%20would%20like%20to%20book%20a%20Couple%20Fitness%20Trial%20session%20at%20our%20home."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ padding: '14px 30px', fontSize: '15px' }}
            >
              <MessageCircle size={18} /> Schedule Couple Trial
            </a>
            <a
              href="tel:+919999448206"
              className="btn btn-outline"
              style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.4)', padding: '14px 26px', fontSize: '15px' }}
            >
              <Phone size={18} /> Call +91 99994 48206
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
