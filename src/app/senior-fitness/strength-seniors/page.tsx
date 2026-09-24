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
  Activity,
  Heart,
  Dumbbell,
  Clock,
  Target,
  Sparkles,
  Layers,
  MapPin,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Strength Training for Seniors at Home (60+ & 70+) | Fit4Steps',
  description: 'Evidence-based in-home strength training for seniors in Noida, Delhi & Gurugram. Reverse sarcopenia, rebuild bone density, restore grip strength, and preserve daily physical independence.',
  keywords: [
    'strength training for seniors gurugram',
    'strength training for seniors at home delhi',
    'weight training for elderly noida',
    'sarcopenia exercise program seniors',
    'osteoporosis safe exercises elderly',
    'geriatric personal trainer at home'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/senior-fitness/strength-seniors',
  },
};

export default function StrengthSeniorsPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://fit4steps.com/senior-fitness/strength-seniors#service',
        name: 'Strength Training for Seniors at Home',
        serviceType: 'Geriatric Strength & Functional Conditioning',
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
        description: 'Clinically calibrated in-home strength coaching for adults in their 60s, 70s, and 80s across Delhi NCR. Stimulates bone mineralization, restores grip strength, and preserves physical independence.',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '8500',
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
            item: 'https://fit4steps.com/senior-fitness',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Strength Training for Seniors',
            item: 'https://fit4steps.com/senior-fitness/strength-seniors',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is lifting weights or resistance training safe for someone in their 70s?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! In fact, the American College of Sports Medicine (ACSM) states that progressive resistance training is the single most important intervention to prevent elderly frailty. We do NOT use heavy barbells. We use color-coded gentle latex resistance loops, light neoprene dumbbells (1–3 kg), and bodyweight leverage.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does strength training protect against dangerous falls?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Falls occur when fast-twitch muscle fibers atrophy, preventing a senior from taking a rapid recovery step when stumbling. By strengthening the glutes, quadriceps, and tibialis anterior muscles, seniors regain the rapid neuromuscular reflexes needed to catch their balance.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can strength training help rebuild thinning bones (osteopenia/osteoporosis)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Bone is living tissue that responds to mechanical tension. When muscles pull gently on bone during controlled resistance exercise, bone-forming cells (osteoblasts) are stimulated to deposit calcium, slowing or reversing age-related bone mineral density decline.'
            }
          }
        ]
      }
    ]
  };

  const specs = [
    { label: 'Target Age Bracket', value: 'Seniors in their 60s, 70s, and 80s' },
    { label: 'Safety Precaution', value: 'Zero Heavy Spinal Compression; Seated & Supported Options' },
    { label: 'Session Length', value: '45 to 50 Minutes (Calibrated to Senior Stamina)' },
    { label: 'Equipment Provided', value: 'Ultra-Light Neoprene Dumbbells, Therabands, Air Balance Discs' },
    { label: 'Functional Milestones', value: 'Effortless Chair Sit-to-Stand, Stair Climbing, Grip Power' },
    { label: 'Coverage Area', value: 'Noida Expressway, South Delhi & Gurugram DLF' },
  ];

  const pillars = [
    {
      title: 'Preserves Sit-to-Stand Independence',
      desc: 'Quadriceps and glute strength allow seniors to rise effortlessly from deep armchairs, car seats, and low commodes without relying on grab bars or family assistance.'
    },
    {
      title: 'Restores Longevity Grip Strength',
      desc: 'Grip strength is an internationally recognized clinical biomarker for longevity and cognitive vitality. We rebuild hand, wrist, and forearm endurance for daily domestic independence.'
    },
    {
      title: 'Combats Osteopenia & Bone Fragility',
      desc: 'Gentle axial resistance stimulates osteoblast activity, laying down new bone matrix in the femoral neck and lumbar vertebrae where fractures commonly happen.'
    },
    {
      title: 'Prevents Forward Kyphosis Hunch',
      desc: 'Targeted strengthening of the posterior chain (rhomboids, latissimus, spinal erectors) pulls the shoulders back and prevents the hunching of the upper spine.'
    }
  ];

  const faqs = [
    {
      q: 'Is lifting weights or resistance training safe for someone in their 70s?',
      a: 'Yes! In fact, the American College of Sports Medicine (ACSM) states that progressive resistance training is the single most important intervention to prevent elderly frailty. We do NOT use heavy barbells. We use color-coded gentle latex resistance loops, light neoprene dumbbells (1–3 kg), and bodyweight leverage.'
    },
    {
      q: 'How does strength training protect against dangerous falls?',
      a: 'Falls occur when fast-twitch muscle fibers atrophy, preventing a senior from taking a rapid recovery step when stumbling. By strengthening the glutes, quadriceps, and tibialis anterior muscles, seniors regain the rapid neuromuscular reflexes needed to catch their balance.'
    },
    {
      q: 'Can strength training help rebuild thinning bones (osteopenia/osteoporosis)?',
      a: 'Yes. Bone is living tissue that responds to mechanical tension. When muscles pull gently on bone during controlled resistance exercise, bone-forming cells (osteoblasts) are stimulated to deposit calcium, slowing or reversing age-related bone mineral density decline.'
    },
    {
      q: 'Will my elderly parent be sore for days after sessions?',
      a: 'No. Our coaches adhere to a strict gradual progression protocol with low volume and careful monitoring. The goal is mild muscle activation and revitalization, never painful soreness or exhaustion.'
    },
    {
      q: 'Can this be done from a wheelchair or armchair if my parent is frail?',
      a: 'Yes! We conduct chair-assisted strength training for frail seniors, using elastic bands tied around chair arms or seated leg presses to safely build strength from wherever they are starting.'
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
          <Link href="/senior-fitness" style={{ color: 'var(--text-body)', textDecoration: 'none' }}>Senior Fitness</Link>
          <span>/</span>
          <span style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>Strength Training for Seniors</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="page-header-clean" style={{ padding: '60px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '18px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Dumbbell size={15} /> Preserving Elderly Independence (60+, 70+, 80+)
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 4.2vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px', fontWeight: 800 }}>
                Strength Training for Seniors <br />
                <span className="text-gold">Rebuilding Muscle & Bone Density</span>
              </h1>
              <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
                Age-related muscle loss (sarcopenia) is the root cause of elderly frailty, fatigue, and loss of independence. Our gentle progressive resistance protocols safely rebuild functional strength for seniors in their 60s, 70s, and 80s at home.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '32px' }}>
                {[
                  'Reverses Sarcopenia & Frailty',
                  'Stimulates Bone Mineral Density',
                  'Restores Chair Sit-to-Stand',
                  'Safe In-Home Supervision'
                ].map((pill, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-main)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="var(--brand-gold)" />
                    <span>{pill}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20Strength%20Training%20for%20my%20senior%20parent.%20Please%20guide%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', fontSize: '15px' }}
                >
                  <MessageCircle size={18} /> Book Senior Strength Assessment
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
                  alt="Senior strength training and resistance coaching at home in Delhi NCR"
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
                  <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)' }}>100% Frailty Defense</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Over 450+ Seniors Restored Safely</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION MATRIX */}
      <SpecsMatrix
        badge="Geriatric Strength Specs"
        title="At a Glance: How We Train Seniors Safely at Home"
        subtitle="Gentle progressive resistance without spinal compression for independence and vitality."
        specs={specs}
      />

      {/* 3. FOUR CLINICAL PILLARS */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 50px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '14px' }}>
              <ShieldCheck size={14} /> Clinical Principles
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', color: 'var(--text-main)', fontWeight: 800, marginBottom: '14px' }}>
              Why Strength Training is Essential for Seniors
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6 }}>
              Between the ages of 50 and 75, sedentary adults lose up to 35% of their skeletal muscle mass. Walking alone does not preserve upper body strength or hip bone density.
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

      {/* 4. REAL SENIOR CASE STUDY */}
      <section className="section-surface" style={{ padding: '80px 0', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="card-clean" style={{ padding: '40px', borderRadius: '24px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
              <img
                src="/assets/image/ftr-testiminial-mukundan.webp"
                alt="Senior Strength Client"
                style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--brand-gold)' }}
              />
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)' }}>Col. O.P. Sharma (Retd., 72 yrs)</h3>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Retired Armed Forces Officer • Defence Colony, South Delhi</div>
                <div style={{ display: 'flex', gap: '4px', marginTop: '4px', color: '#f59e0b', fontSize: '14px' }}>
                  ★★★★★ <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '6px' }}>Verified Senior Client • 10 Months Coaching</span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '16px', color: 'var(--text-body)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '20px' }}>
              “At 72, rising from low sofa chairs had become difficult and my grip was so weak I struggled to open simple jar lids. My son engaged Fit4Steps for in-home senior strength training. The trainer was extremely patient, respectful, and observant. Using light resistance bands and balance discs right in my living room, he gradually strengthened my leg and shoulder muscles. After 4 months, I can easily stand up without using armrests and I feel robust and capable again!”
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '13px', color: 'var(--brand-gold)', fontWeight: 700 }}>
              <span>✓ Rises from Chairs Without Armrests</span>
              <span>✓ 40% Increase in Hand Grip Strength</span>
              <span>✓ Zero Joint Discomfort or Sprains</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
              <HelpCircle size={14} /> Senior Strength FAQs
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', color: 'var(--text-main)', fontWeight: 800 }}>
              Frequently Asked Questions About Senior Strength Training
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
            Help Your Parent Rebuild Strength & Confidence
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: 1.65, marginBottom: '32px' }}>
            Schedule a gentle in-home functional strength screening in Noida, Delhi, or Gurugram. We test sit-to-stand endurance, grip power, and formulate a safe progression plan.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20schedule%20a%20Senior%20Strength%20Assessment%20at%20home."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ padding: '14px 30px', fontSize: '15px' }}
            >
              <MessageCircle size={18} /> Schedule Senior Strength Trial
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
