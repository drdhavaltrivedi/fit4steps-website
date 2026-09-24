import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import SpecsMatrix from '@/components/SpecsMatrix';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  Activity,
  Award,
  Heart,
  Clock,
  Target,
  Sparkles,
  Layers,
  MapPin,
  HelpCircle,
  ChevronDown,
  Compass
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Senior Citizens Exercises Gurugram - Safe In-Home Elderly Workouts | Fit4Steps",
  description: "Ranked #4 senior citizens exercises in Gurugram. Safe, doctor-guided mobility, chair balance, fall prevention & joint preservation exercises for elderly parents across DLF & Golf Course Road.",
  keywords: [
    "senior citizens exercises gurugram",
    "elderly exercises gurgaon",
    "mobility exercises for senior citizens gurugram",
    "fall prevention exercises for seniors gurgaon",
    "chair exercises for elderly gurugram",
    "senior citizen fitness trainer at home gurugram"
  ],
  alternates: {
    canonical: "https://fit4steps.com/exercises-for-senior-citizens-gurugram",
  },
};



export default function MobilityBalancePage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://fit4steps.com/exercises-for-senior-citizens-gurugram#service',
        name: 'Senior Mobility & Balance Training (Fall Prevention)',
        serviceType: 'Geriatric Balance & Fall Prevention Rehabilitation',
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
        description: 'Specialized in-home balance restoration and fall prevention coaching for seniors across Delhi NCR. Retrains foot proprioception, vestibular coordination, and eliminates the shuffling gait.',
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
            name: 'Mobility & Balance Training',
            item: 'https://fit4steps.com/exercises-for-senior-citizens-gurugram',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Why is fall prevention the most urgent fitness priority for senior citizens?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'According to geriatric medical research, 1 in 3 adults over the age of 65 experiences a fall each year, with hip fractures leading to severe immobility. Regaining balance reflexes and strengthening ankle stabilizers eliminates over 75% of domestic trip-and-fall hazards.'
            }
          },
          {
            '@type': 'Question',
            name: 'What causes the common elderly "shuffling gait"?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A shuffling walk is primarily caused by weakness in the tibialis anterior muscle (leading to foot drop) and tight hip flexors. Seniors drag their feet rather than lifting their toes, making them prone to catching rugs or doorway thresholds. Our drills specifically strengthen ankle dorsiflexion and hip extension.'
            }
          },
          {
            '@type': 'Question',
            name: 'How do you ensure my parent will not fall during balance training?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Safety is paramount. All balance exercises are conducted within arm’s reach of a stable chair or sturdy wall, with our certified trainer spotting the senior with a protective gait stance at all times. We never push past safe neurological limits.'
            }
          }
        ]
      }
    ]
  };

  const specs = [
    { label: 'Clinical Outcome', value: 'Over 75% Fall Risk Reduction & Shuffling Gait Elimination' },
    { label: 'Neurological Target', value: 'Vestibular System, Visual Horizon & Foot Proprioceptors' },
    { label: 'Screening Baseline', value: 'Berg Balance Scale & Timed Up-and-Go (TUG) Mobility Audit' },
    { label: 'Session Length', value: '45 to 50 Minutes with Full Trainer Spotting & Support' },
    { label: 'Equipment Used', value: 'Air Balance Discs, Agility Step Markers, Gait Belts & Soft Foam Pads' },
    { label: 'Coverage Area', value: 'Noida Expressway, South Delhi & Gurugram DLF / Golf Course' },
  ];

  const pillars = [
    {
      title: 'Single-Leg Proprioceptive Stability',
      desc: 'Walking is simply moving from one single-leg stand to another. We train the micro-stabilizing muscles of the ankle and hip abductors so every step lands firmly without sideways wobble.'
    },
    {
      title: 'Ankle Dorsiflexion & Anti-Shuffling Gait',
      desc: 'Strengthening the anterior tibialis muscle allows seniors to clear their toes effortlessly over rugs, door sills, and uneven pavements, completely eliminating the tripping hazard.'
    },
    {
      title: 'Vestibular & Visual Horizon Coordination',
      desc: 'Integrating gentle head-turning drills while maintaining a fixed stance retrains the inner ear balance canals, preventing dizziness and disorientation when looking around.'
    },
    {
      title: 'Reactive Recovery Step Training',
      desc: 'Simulating gentle directional nudges in a safe environment trains fast-twitch reflex stepping so if a stumble occurs, the body catches itself automatically without falling.'
    }
  ];

  const faqs = [
    {
      q: 'Why is fall prevention the most urgent fitness priority for senior citizens?',
      a: 'According to geriatric medical research, 1 in 3 adults over the age of 65 experiences a fall each year, with hip fractures leading to severe immobility. Regaining balance reflexes and strengthening ankle stabilizers eliminates over 75% of domestic trip-and-fall hazards.'
    },
    {
      q: 'What causes the common elderly "shuffling gait"?',
      a: 'A shuffling walk is primarily caused by weakness in the tibialis anterior muscle (leading to foot drop) and tight hip flexors. Seniors drag their feet rather than lifting their toes, making them prone to catching rugs or doorway thresholds. Our drills specifically strengthen ankle dorsiflexion and hip extension.'
    },
    {
      q: 'How do you ensure my parent will not fall during balance training?',
      a: 'Safety is paramount. All balance exercises are conducted within arm’s reach of a stable chair or sturdy wall, with our certified trainer spotting the senior with a protective gait stance at all times. We never push past safe neurological limits.'
    },
    {
      q: 'Can balance training help seniors who use a walking stick or cane?',
      a: 'Yes! Many of our clients who were dependent on a cane for short indoor distances have rebuilt sufficient ankle proprioception and pelvic strength to walk steadily around their homes unassisted.'
    },
    {
      q: 'How long does it take to see noticeable balance improvement?',
      a: 'Most families notice a firmer, more confident walking stride and less hesitancy when standing from chairs within 3 to 4 weeks of consistent twice-weekly or thrice-weekly coaching.'
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
          <span style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>Mobility & Balance Training</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="page-header-clean" style={{ padding: '60px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '18px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={15} /> Geriatric Fall Prevention & Gait Correction
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 4.2vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px', fontWeight: 800 }}>
                Mobility & Balance Training <br />
                <span className="text-gold">Fall Prevention for Seniors</span>
              </h1>
              <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
                Falls are the single greatest threat to senior independence and mobility. Our specialized in-home balance drills retrain neurological reflexes, vestibular equilibrium, and foot proprioception so seniors walk fearlessly.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '32px' }}>
                {[
                  'Eliminates Shuffling Gait',
                  'Retrains Vestibular Reflexes',
                  '100% Supervised & Safe',
                  'Restores Fearless Walking'
                ].map((pill, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-main)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="var(--brand-gold)" />
                    <span>{pill}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20Senior%20Mobility%20and%20Balance%20Training%20for%20my%20parents.%20Please%20guide%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', fontSize: '15px' }}
                >
                  <MessageCircle size={18} /> Book Free Balance Screening
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
                  alt="Senior mobility and balance training coach assisting elderly client at home in Delhi NCR"
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
                  <ShieldCheck size={20} color="var(--brand-gold)" />
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)' }}>Zero Domestic Falls</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Over 400+ Seniors Protected Across Delhi NCR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION MATRIX */}
      <SpecsMatrix
        badge="Proprioceptive Standards"
        title="How We Rebuild Stability & Prevent Falls"
        subtitle="Targeted sensory balance drills and gait re-education to eliminate fall risks."
        specs={specs}
      />

      {/* 3. FOUR CLINICAL PILLARS */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 50px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '14px' }}>
              <Compass size={14} /> Neurological Pathways
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', color: 'var(--text-main)', fontWeight: 800, marginBottom: '14px' }}>
              The Four Sensory Systems of Senior Balance
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6 }}>
              Balance is not merely muscular. It requires harmonious integration between foot mechanoreceptors, the inner ear vestibular fluid, and visual spatial orientation.
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
                src="/assets/image/ftr-testiminial-shailen.webp"
                alt="Senior Balance Client"
                style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--brand-gold)' }}
              />
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)' }}>S.K. Bansal (76 yrs)</h3>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Resident • DLF Phase 2, Gurugram</div>
                <div style={{ display: 'flex', gap: '4px', marginTop: '4px', color: '#f59e0b', fontSize: '14px' }}>
                  ★★★★★ <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '6px' }}>Verified Senior Client • 9 Months Coaching</span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '16px', color: 'var(--text-body)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '20px' }}>
              “After a minor slip in the bathroom last winter, I developed an intense fear of walking without holding onto furniture or someone’s arm. My steps had become shuffling and hesitant. Fit4Steps sent a certified geriatric mobility coach to our DLF Phase 2 home. He stood right beside me, working on tandem walking, ankle lifting, and eye-horizon coordination. Today, I walk out to the society park with my grandchildren completely unassisted and with total confidence!”
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '13px', color: 'var(--brand-gold)', fontWeight: 700 }}>
              <span>✓ Overcame Post-Fall Psychological Fear</span>
              <span>✓ Eliminated Shuffling Foot Drag</span>
              <span>✓ Walking Independently in Society Parks</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
              <HelpCircle size={14} /> Balance FAQs
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', color: 'var(--text-main)', fontWeight: 800 }}>
              Frequently Asked Questions About Mobility & Balance
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
            Book a Free Doorstep Balance Assessment
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: 1.65, marginBottom: '32px' }}>
            Our geriatric mobility coach will visit your parent’s home in Noida, Delhi, or Gurugram. We conduct a gentle 30-minute balance and gait screening with zero fall risk.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20schedule%20a%20Senior%20Mobility%20and%20Balance%20Assessment%20at%20home."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ padding: '14px 30px', fontSize: '15px' }}
            >
              <MessageCircle size={18} /> Schedule Doorstep Balance Trial
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
