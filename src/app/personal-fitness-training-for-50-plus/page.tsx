import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import SpecsMatrix from '@/components/SpecsMatrix';
import {
  Heart,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  Activity,
  Award,
  Stethoscope,
  Clock,
  Target,
  Sparkles,
  Layers,
  MapPin,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Personal Fitness Training for 50 Plus - Senior Workout at Home | Fit4Steps",
  description: "Evidence-based in-home fitness training for adults aged 50 and above. Sarcopenia reversal, bone mineral density preservation, safe cardio pacing & joint mobility across Delhi NCR.",
  keywords: [
    "personal fitness training for 50 plus",
    "fitness trainer for over 50 delhi",
    "senior strength training noida",
    "personal trainer for 60 year old gurugram",
    "elderly fitness coach at home south delhi"
  ],
  alternates: {
    canonical: "https://fit4steps.com/personal-fitness-training-for-50-plus",
  },
};



export default function FiftyPlusPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://fit4steps.com/personal-fitness-training-for-50-plus#service',
        name: 'Personal Fitness Training for Adults 50 Plus',
        serviceType: 'Geriatric & Mature Adult Fitness Coaching',
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
        description: 'Bespoke in-home personal training for adults in their 50s and 60s. Focuses on reversing sarcopenia, protecting bone density, optimizing cardiovascular health, and correcting desk posture.',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '8000',
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
            name: 'Senior Fitness',
            item: 'https://fit4steps.com/fitness-training-program-for-senior-citizens',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Personal Training for 50 Plus',
            item: 'https://fit4steps.com/personal-fitness-training-for-50-plus',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Why do adults over 50 need specialized fitness training instead of regular gym classes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'After age 50, humans lose roughly 1–2% of lean muscle mass per year (sarcopenia) and experience natural changes in connective tissue elasticity and joint cartilage. Generic gym classes designed for 25-year-olds risk tearing rotator cuffs or inflaming worn knees. Our programs use joint-friendly progressive overload that stimulates muscle and bone growth without heavy spinal compression.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can this program help manage borderline hypertension and high blood sugar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! Rhythmic, low-impact resistance training and steady aerobic conditioning significantly increase insulin sensitivity in skeletal muscle and encourage nitric oxide production in blood vessel walls, helping normalize blood pressure and blood glucose.'
            }
          },
          {
            '@type': 'Question',
            name: 'I haven’t worked out in 15 years. Is it safe for me to start now?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! It is never too late to begin. We start with gentle mobility screens, seated core activation, and low-tension resistance loops, progressing at a pace that respects your recovery capacity.'
            }
          }
        ]
      }
    ]
  };

  const specs = [
    { label: 'Target Demographic', value: 'Adults Aged 50 to 69 Seeking Sustainable Vitality' },
    { label: 'Key Physiological Focus', value: 'Sarcopenia Reversal, Bone Mineral Density & Joint Preservation' },
    { label: 'Session Length', value: '50 to 55 Minutes with Dynamic Warm-up & Assisted Stretching' },
    { label: 'Equipment Used', value: 'Graduated Resistance Loops, Light Hex Dumbbells & Balance Discs' },
    { label: 'Cardiovascular Pacing', value: 'Zone-2 Heart Rate Monitoring (Safe Aerobic Conditioning)' },
    { label: 'Coverage Area', value: 'Noida Sectors, South Delhi & Gurugram DLF / Golf Course' },
  ];

  const pillars = [
    {
      title: 'Sarcopenia Reversal & Muscle Preservation',
      desc: 'Age-related muscle atrophy begins accelerating at age 50. Our calibrated progressive resistance exercises stimulate protein synthesis to maintain firm, functional muscle tissue.'
    },
    {
      title: 'Osteopenia Defense & Bone Mineralization',
      desc: 'Controlled axial loading stimulates osteoblast activity, strengthening hip necks and lumbar vertebral bodies to safeguard against osteoporotic fractures.'
    },
    {
      title: 'Thoracic Posture & Kyphosis Correction',
      desc: 'Decades of desk and driving postures cause forward-head slouch. We open tight anterior chest muscles and strengthen the rhomboids and mid-traps for upright posture.'
    },
    {
      title: 'Metabolic & Cardiovascular Equilibrium',
      desc: 'Steady-state aerobic pacing that keeps heart rate within safe physiological limits while improving arterial elasticity and lipid profiles.'
    }
  ];

  const faqs = [
    {
      q: 'Why do adults over 50 need specialized fitness training instead of regular gym classes?',
      a: 'After age 50, humans lose roughly 1–2% of lean muscle mass per year (sarcopenia) and experience natural changes in connective tissue elasticity and joint cartilage. Generic gym classes designed for 25-year-olds risk tearing rotator cuffs or inflaming worn knees. Our programs use joint-friendly progressive overload that stimulates muscle and bone growth without heavy spinal compression.'
    },
    {
      q: 'Can this program help manage borderline hypertension and high blood sugar?',
      a: 'Yes! Rhythmic, low-impact resistance training and steady aerobic conditioning significantly increase insulin sensitivity in skeletal muscle and encourage nitric oxide production in blood vessel walls, helping normalize blood pressure and blood glucose.'
    },
    {
      q: 'I haven’t worked out in 15 years. Is it safe for me to start now?',
      a: 'Yes! It is never too late to begin. We start with gentle mobility screens, seated core activation, and low-tension resistance loops, progressing at a pace that respects your recovery capacity.'
    },
    {
      q: 'How many sessions per week do you recommend for individuals over 50?',
      a: 'We usually recommend 3 sessions per week with at least one full recovery day between workouts. This cadence optimizes neuromuscular adaptation without systemic joint fatigue.'
    },
    {
      q: 'Can you work around pre-existing frozen shoulder or knee discomfort?',
      a: 'Yes. Every session is personalized. If you have shoulder impingement or knee crepitus, our trainers replace irritating overhead presses with rotator cuff external rotations and neutral-grip rows.'
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
          <Link href="/fitness-training-program-for-senior-citizens" style={{ color: 'var(--text-body)', textDecoration: 'none' }}>Senior Fitness</Link>
          <span>/</span>
          <span style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>Personal Training for 50 Plus</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="page-header-clean" style={{ padding: '60px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '18px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Activity size={15} /> Active Ageing Concierge
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 4.2vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px', fontWeight: 800 }}>
                Personal Fitness Training for <span className="text-gold">50 Plus</span> in Delhi NCR
              </h1>
              <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
                Entering your 50s brings natural shifts in hormonal balance, joint cartilage, and muscle preservation. Our certified in-home trainers rebuild sustained stamina, bone density, and core posture without joint injury.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '32px' }}>
                {[
                  'Sarcopenia Reversal Focus',
                  'Low-Impact Resistance Bands',
                  'Zone-2 Cardio Monitoring',
                  'Assisted Joint Decompression'
                ].map((pill, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-main)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="var(--brand-gold)" />
                    <span>{pill}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20Personal%20Fitness%20Training%20for%2050%20Plus.%20Please%20guide%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', fontSize: '15px' }}
                >
                  <MessageCircle size={18} /> Book Free Doorstep Assessment
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
                  src="/assets/image/hero-senior-trainer.jpg"
                  alt="Personal trainer guiding 50 plus adult at home in Delhi NCR"
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
                  <Award size={20} color="var(--brand-gold)" />
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)' }}>50+ Longevity Science</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Over 350+ Active Adults Coached</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION MATRIX */}
      <SpecsMatrix
        badge="Scientific Aging Framework"
        title="At a Glance: How 50+ In-Home Coaching Operates"
        subtitle="Evidence-based protocols to reverse sarcopenia, safeguard joints, and boost metabolic health."
        specs={specs}
      />

      {/* 3. FOUR CLINICAL PILLARS */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 50px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '14px' }}>
              <Stethoscope size={14} /> Clinical Understanding
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', color: 'var(--text-main)', fontWeight: 800, marginBottom: '14px' }}>
              Why Fitness After 50 Requires Specialization
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6 }}>
              Generic gym routines designed for 25-year-olds can lead to chronic tendinitis, meniscus irritation, and burnout in individuals over 50. Our protocol focuses on joint longevity first.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {pillars.map((pillar, idx) => (
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
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.65 }}>
                  {pillar.desc}
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
                alt="Rajeev - 50 Plus Client"
                style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--brand-gold)' }}
              />
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)' }}>Rajeev Sharma (54 yrs)</h3>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Corporate VP • Sector 128, Noida</div>
                <div style={{ display: 'flex', gap: '4px', marginTop: '4px', color: '#f59e0b', fontSize: '14px' }}>
                  ★★★★★ <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '6px' }}>Verified Client • 8 Months Coaching</span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '16px', color: 'var(--text-body)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '20px' }}>
              “At 54, I felt fatigued by 4 PM every day, my shoulders were rounded from laptop work, and my doctor warned me about borderline cholesterol. I was terrified of going to a regular gym where trainers push heavy weights that hurt my lower back. Fit4Steps provided a mature, certified coach who comes to my house at 6:45 AM. His progressive band work, core conditioning, and posture work restored my energy completely. I feel 15 years younger!”
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '13px', color: 'var(--brand-gold)', fontWeight: 700 }}>
              <span>✓ Normalized Blood Pressure & Lipid Profile</span>
              <span>✓ Corrected 15-Year Desk Slouch</span>
              <span>✓ Energy Surges Throughout Long Workdays</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
              <HelpCircle size={14} /> 50+ Fitness FAQs
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', color: 'var(--text-main)', fontWeight: 800 }}>
              Frequently Asked Questions About Fitness After 50
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
            Start Your Vitality Journey After 50
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: 1.65, marginBottom: '32px' }}>
            Book a complimentary 45-minute in-home mobility and postural screening in Noida, Delhi, or Gurugram. Discover how customized exercise science can revitalize your daily energy.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20a%20Doorstep%20Fitness%20Assessment%20for%20Adults%2050%20Plus."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ padding: '14px 30px', fontSize: '15px' }}
            >
              <MessageCircle size={18} /> Schedule 50+ Doorstep Trial
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
