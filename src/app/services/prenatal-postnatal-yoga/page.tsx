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
  Heart,
  Clock,
  Target,
  Sparkles,
  Calendar,
  Layers,
  MapPin,
  HelpCircle,
  ChevronDown,
  Activity,
  Feather
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Prenatal & Postnatal Yoga Therapy at Home in Delhi NCR | Fit4Steps',
  description: 'Doctor-guided in-home prenatal and postnatal yoga therapy across Noida, Delhi & Gurugram. Safe pelvic floor preparation, sciatica relief, and diastasis recti core recovery.',
  keywords: [
    'prenatal yoga at home delhi',
    'postnatal yoga classes noida',
    'pregnancy yoga trainer gurugram',
    'diastasis recti recovery delhi ncr',
    'maternity yoga trainer south delhi',
    'doorstep pregnancy fitness'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/services/prenatal-postnatal-yoga',
  },
};

export default function PrenatalPostnatalYogaPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://fit4steps.com/services/prenatal-postnatal-yoga#service',
        name: 'Prenatal and Postnatal Yoga Therapy at Home',
        serviceType: 'Maternal In-Home Yoga Therapy',
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
        description: 'Safe, certified in-home prenatal and postnatal yoga coaching. Helps expecting mothers prepare for natural childbirth and guides new mothers through diastasis recti and pelvic recovery.',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '9000',
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
            name: 'Prenatal & Postnatal Yoga',
            item: 'https://fit4steps.com/services/prenatal-postnatal-yoga',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'When can I safely begin prenatal yoga during pregnancy?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most obstetricians recommend starting structured prenatal yoga after completing the first trimester (around week 13 or 14), once fetal implantation is fully stabilized. Prior written clearance from your doctor is always required.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does postnatal yoga help heal Diastasis Recti (abdominal separation)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Traditional crunches and sit-ups worsen abdominal separation by forcing the rectus abdominis apart. Our postnatal therapists specialize in gentle hypopressive breathing and transverse abdominis activation that gradually draws the linea alba connective tissue back together.'
            }
          },
          {
            '@type': 'Question',
            name: 'Are Fit4Steps prenatal yoga instructors certified in maternal safety?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Our instructors hold dedicated RPYT (Registered Prenatal Yoga Teacher) certifications with extensive training in maternal anatomy, pelvic alignment, and contraindications.'
            }
          }
        ]
      }
    ]
  };

  const specs = [
    { label: 'Instructor Qualification', value: 'RPYT (Registered Prenatal Yoga) & Physiotherapy Certified' },
    { label: 'Session Length', value: '50 to 60 Minutes per Private Session' },
    { label: 'Trimester Focus', value: 'Customized by Trimester (1st, 2nd, 3rd, and 4th Postnatal)' },
    { label: 'Props Provided', value: 'High-Density Bolsters, Cork Blocks, Straps & Gentle Pelvic Pillows' },
    { label: 'Medical Clearance', value: 'Mandatory Gynecologist / OB-GYN Approval Prior to Start' },
    { label: 'Coverage Area', value: 'Noida Expressway, South Delhi & Gurugram DLF' },
  ];

  const trimesterPhases = [
    {
      trimester: 'Trimester 2 (Weeks 13–27)',
      title: 'Pelvic Opening & Sciatica Decompression',
      desc: 'Gentle supported squats, hip circle mobility, and piriformis stretches to eliminate lower back aches and nerve pinch as your center of gravity shifts forward.'
    },
    {
      trimester: 'Trimester 3 (Weeks 28–40)',
      title: 'Birthing Stamina & Pranayama Breathwork',
      desc: 'Pelvic floor relaxation drills, labor breathing rhythms (Ujjayi and Bhramari), and calming visualizations that prepare the mind and birth canal for natural delivery.'
    },
    {
      trimester: 'Postpartum Phase 1 (Weeks 6–12)',
      title: 'Gentle Core Reconnection & Diastasis Check',
      desc: 'Following doctor sign-off, we perform a 3-point abdominal separation check and introduce gentle pelvic tilts and transverse stabilization.'
    },
    {
      trimester: 'Postpartum Phase 2 (Months 3–6+)',
      title: 'Postural Realignment & Upper Body Relief',
      desc: 'Releasing severe neck and shoulder tension from nursing and baby-wearing while gradually rebuilding maternal core strength and metabolic vitality.'
    }
  ];

  const faqs = [
    {
      q: 'When can I safely begin prenatal yoga during pregnancy?',
      a: 'Most obstetricians recommend starting structured prenatal yoga after completing the first trimester (around week 13 or 14), once fetal implantation is fully stabilized. Prior written clearance from your doctor is always required.'
    },
    {
      q: 'How does postnatal yoga help heal Diastasis Recti (abdominal separation)?',
      a: 'Traditional crunches and sit-ups worsen abdominal separation by forcing the rectus abdominis apart. Our postnatal therapists specialize in gentle hypopressive breathing and transverse abdominis activation that gradually draws the linea alba connective tissue back together.'
    },
    {
      q: 'Are Fit4Steps prenatal yoga instructors certified in maternal safety?',
      a: 'Yes. Our instructors hold dedicated RPYT (Registered Prenatal Yoga Teacher) certifications with extensive training in maternal anatomy, pelvic alignment, and contraindications.'
    },
    {
      q: 'Can prenatal yoga help reduce my labor pain and delivery duration?',
      a: 'Yes. Clinical studies show that regular prenatal yoga promotes pelvic symmetry, improves perineal flexibility, and trains rhythmic breath control that substantially diminishes anxiety and shortens active labor time.'
    },
    {
      q: 'When can I begin postnatal sessions after a C-section or normal delivery?',
      a: 'For uncomplicated vaginal deliveries, gentle breathwork can begin around 4–6 weeks post-delivery. For Cesarean births, we recommend waiting until 8–10 weeks and requiring explicit clinical clearance from your obstetrician.'
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
          <span style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>Prenatal & Postnatal Yoga</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="page-header-clean" style={{ padding: '60px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '18px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Feather size={15} /> Safe Maternal Wellness at Home
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 4.2vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px', fontWeight: 800 }}>
                Prenatal & Postnatal Yoga Therapy <br />
                <span className="text-gold">Noida, South Delhi & Gurugram</span>
              </h1>
              <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
                Experience gentle, obstetrician-aligned yoga therapy in your living room. Prepare your body for a smooth, natural delivery and safely heal your core and pelvic floor post-birth with certified female therapists.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '32px' }}>
                {[
                  'Doctor-Aligned Protocols',
                  'Trimester-Specific Safety',
                  'Diastasis Recti Healing',
                  'Pelvic Floor Conditioning'
                ].map((pill, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-main)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="var(--brand-gold)" />
                    <span>{pill}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20Prenatal/Postnatal%20Yoga%20at%20home.%20Please%20guide%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', fontSize: '15px' }}
                >
                  <MessageCircle size={18} /> Book Gentle In-Home Trial
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
                  src="/assets/image/programme-img-2.webp"
                  alt="Gentle prenatal and postnatal yoga therapy at home in Delhi NCR"
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
                  <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)' }}>100% Medical Safety</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Trusted by Obstetricians Across Delhi NCR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION MATRIX */}
      <SpecsMatrix
        badge="Maternal Safety Specs"
        title="At a Glance: Clinical Maternal Care Standards"
        subtitle="Trimester-specific pelvic health, safe prenatal yoga, and diastasis recti recovery."
        specs={specs}
      />

      {/* 3. FOUR TRIMESTER PHASES */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 50px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '14px' }}>
              <Layers size={14} /> Guided Maternal Timeline
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', color: 'var(--text-main)', fontWeight: 800, marginBottom: '14px' }}>
              Trimester-by-Trimester Care Architecture
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6 }}>
              Every trimester brings profound hormonal and structural adaptations. Our certified therapists adjust posture variations, support bolsters, and breathing techniques accordingly.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {trimesterPhases.map((phase, idx) => (
              <div key={idx} className="theme-card" style={{ padding: '32px 26px', borderRadius: '18px' }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  background: 'var(--brand-gold-soft)',
                  color: 'var(--brand-gold-text)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  display: 'inline-block',
                  marginBottom: '14px'
                }}>
                  {phase.trimester}
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>
                  {phase.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.65 }}>
                  {phase.desc}
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
                src="/assets/image/ftr-testiminial-padmaja.webp"
                alt="Padmaja - Prenatal and Postnatal Client"
                style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--brand-gold)' }}
              />
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)' }}>Padmaja Nair</h3>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>New Mother • GK-2, South Delhi</div>
                <div style={{ display: 'flex', gap: '4px', marginTop: '4px', color: '#f59e0b', fontSize: '14px' }}>
                  ★★★★★ <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '6px' }}>Verified Client • Prenatal & Postnatal Care</span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '16px', color: 'var(--text-body)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '20px' }}>
              “During my 6th month of pregnancy, I developed excruciating sciatica and lower back pain. Fit4Steps provided a certified female prenatal yoga therapist who came directly to my home in GK-2. She brought supportive bolsters and taught me pelvic breathing that completely relieved my nerve pain. Post-delivery, she guided my diastasis recti recovery safely. I cannot recommend Fit4Steps enough to any expecting or new mom!”
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '13px', color: 'var(--brand-gold)', fontWeight: 700 }}>
              <span>✓ Natural Delivery with Calm Breathing</span>
              <span>✓ 100% Sciatica Pain Relief</span>
              <span>✓ Fully Healed Postnatal Core</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
              <HelpCircle size={14} /> Maternal FAQs
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', color: 'var(--text-main)', fontWeight: 800 }}>
              Frequently Asked Questions About Prenatal & Postnatal Yoga
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
            Consult a Certified Maternal Yoga Therapist
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: 1.65, marginBottom: '32px' }}>
            Schedule a calm, gentle in-home consultation. We will review your obstetrician notes, discuss your comfort levels, and structure a safe weekly program.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20consult%20a%20Certified%20Prenatal/Postnatal%20Yoga%20Therapist."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ padding: '14px 30px', fontSize: '15px' }}
            >
              <MessageCircle size={18} /> Schedule Maternal Consultation
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
