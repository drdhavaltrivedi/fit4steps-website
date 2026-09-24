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
  Sparkles,
  Users,
  Clock,
  Target,
  Dumbbell,
  Heart,
  Smile,
  Zap,
  Activity,
  Calendar,
  Layers,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Fitness Training for Kids in Noida - Fun & Growth-Plate Safe Workouts | Fit4Steps",
  description: "Specialized fitness training for kids and teens in Noida. Agility, posture correction, stamina, and non-spinal loading functional movement coaching at home in Noida & Greater Noida.",
  keywords: [
    "fitness training for kids noida",
    "kids personal trainer noida",
    "children fitness classes noida",
    "posture correction for kids noida",
    "teen strength and agility training noida expressway"
  ],
  alternates: {
    canonical: "https://fit4steps.com/fitness-training-for-kids-noida",
  },
};



export default function KidsFitnessFunctionalTrainingPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://fit4steps.com/fitness-training-for-kids-noida#service',
        name: 'Functional Training for Kids and Teens',
        serviceType: 'Youth In-Home Fitness Coaching',
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
        description: 'Safe, gamified functional training for children and teenagers (ages 6–16) at home. Reverses digital screen posture, builds agility, cardiovascular stamina, and athletic confidence.',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '7500',
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
            name: 'Kids Fitness & Functional Training',
            item: 'https://fit4steps.com/fitness-training-for-kids-noida',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is strength training safe for growing children?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, when done properly! We do NOT use heavy spinal-loading barbells. We focus purely on bodyweight mechanics, agility ladders, resistance bands, balance discs, and animal-flow movement patterns that strengthen ligaments, bones, and growth plates safely.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does this help reverse smartphone and screen-time posture?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Excessive device use causes forward-head tilt (text neck) and rounded shoulders (thoracic kyphosis). Our program strengthens the upper back rhomboids and lower traps while opening tight chest muscles, restoring a natural upright spinal posture.'
            }
          },
          {
            '@type': 'Question',
            name: 'What age group is this program suitable for?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our youth functional program is split into two specialized tiers: Kids (Ages 6–11) focusing on fundamental motor skills and gamified agility, and Teens (Ages 12–16) focusing on sports conditioning, core power, and posture correction.'
            }
          }
        ]
      }
    ]
  };

  const specs = [
    { label: 'Target Age Bracket', value: 'Children (6–11 yrs) & Teenagers (12–16 yrs)' },
    { label: 'Session Duration', value: '45 to 50 Minutes (Calibrated to Youth Attention Spans)' },
    { label: 'Safety Protocol', value: 'Strictly Non-Spinal Loading; Growth-Plate Safe' },
    { label: 'Equipment Brought', value: 'Agility Ladders, Cones, Reaction Balls, Light Bands, Mats' },
    { label: 'Primary Focus', value: 'Screen-Posture Correction, Motor Agility, Stamina & Self-Esteem' },
    { label: 'Locations Covered', value: 'Residential Societies across Noida, South Delhi & Gurugram' },
  ];

  const pillars = [
    {
      title: 'Postural Reversal & "Text-Neck" Correction',
      desc: 'Combats hours of hunching over tablets, laptops, and heavy school bags. Opens pectoral tightness, strengthens postural back extensors, and reinforces natural spinal curvature.'
    },
    {
      title: 'Neuromuscular Agility & Coordination',
      desc: 'Footwork ladders, lateral shuffle hurdles, and reaction drill balls that develop rapid hand-eye coordination, balance, and athletic spatial awareness.'
    },
    {
      title: 'Gamified Cardiovascular Conditioning',
      desc: 'Instead of boring treadmill cardio, kids engage in interactive interval circuits, animal flow locomotion, and dynamic challenges that make exercise genuinely exciting.'
    },
    {
      title: 'Sports Performance & Injury Prevention',
      desc: 'For young athletes playing tennis, cricket, football, or swimming, our functional core and hip conditioning builds resilient joint mechanics that guard against sprains.'
    }
  ];

  const faqs = [
    {
      q: 'Is strength training safe for growing children?',
      a: 'Yes, when supervised by certified professionals! We do NOT use heavy spinal-loading barbells. We focus purely on bodyweight mechanics, agility ladders, light resistance bands, balance discs, and animal-flow movement patterns that strengthen ligaments, bones, and growth plates safely.'
    },
    {
      q: 'How does this help reverse smartphone and screen-time posture?',
      a: 'Excessive device use causes forward-head tilt (text neck) and rounded shoulders (thoracic kyphosis). Our program strengthens the upper back rhomboids and lower traps while opening tight chest muscles, restoring a natural upright spinal posture.'
    },
    {
      q: 'What age group is this program suitable for?',
      a: 'Our youth functional program is split into two specialized tiers: Kids (Ages 6–11) focusing on fundamental motor skills and gamified agility, and Teens (Ages 12–16) focusing on sports conditioning, core power, and posture correction.'
    },
    {
      q: 'Where can the sessions take place?',
      a: 'Workouts can be conducted in your living room, terrace, balcony, private lawn, or your residential society’s park/clubhouse in Noida, Delhi, or Gurugram.'
    },
    {
      q: 'Can two siblings train together in the same session?',
      a: 'Yes! Siblings or friends of similar ages love training together. It introduces friendly, cooperative challenges that keep energy levels high.'
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
          <span style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>Kids Fitness & Functional Training</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="page-header-clean" style={{ padding: '60px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '18px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Smile size={15} /> Youth Athletic Development (Ages 6–16)
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 4.2vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px', fontWeight: 800 }}>
                Functional Fitness for Kids & Teens <br />
                <span className="text-gold">Noida, Delhi & Gurugram</span>
              </h1>
              <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
                Break the cycle of excessive screen time, digital fatigue, and slouching postures. Our certified youth fitness coaches bring energetic, gamified functional training directly to your home or society grounds.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '32px' }}>
                {[
                  'Digital Posture Correction',
                  '100% Growth-Plate Safe',
                  'Gamified Agility & Footwork',
                  'Boosts Focus & Athleticism'
                ].map((pill, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-main)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="var(--brand-gold)" />
                    <span>{pill}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20Kids%20Fitness%20Training%20at%20home.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', fontSize: '15px' }}
                >
                  <MessageCircle size={18} /> Book Free Kids Assessment
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
                  src="/assets/image/h-s2-servi-card-img-4.webp"
                  alt="Kids functional training and agility coaching at home in Delhi NCR"
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
                  <Activity size={20} color="var(--brand-gold)" />
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)' }}>Zero Screen Fatigue</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Over 200+ Children Trained in Delhi NCR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION MATRIX */}
      <SpecsMatrix
        badge="Youth Training Specs"
        title="Engineered Specifically for Growing Musculoskeletal Bodies"
        subtitle="Fun, non-spinal loading agility and functional movement coaching at home."
        specs={specs}
      />

      {/* 3. FOUR CLINICAL PILLARS */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 50px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '14px' }}>
              <Zap size={14} /> Core Skill Domains
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', color: 'var(--text-main)', fontWeight: 800, marginBottom: '14px' }}>
              What Your Child Develops
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6 }}>
              We transform natural youthful energy into disciplined athletic agility, healthy posture, and long-term physical self-assurance.
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

      {/* 4. PARENT TESTIMONIAL */}
      <section className="section-surface" style={{ padding: '80px 0', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="card-clean" style={{ padding: '40px', borderRadius: '24px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
              <img
                src="/assets/image/ftr-testiminial-shruthi.webp"
                alt="Shruthi - Parent of 11-year old client"
                style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--brand-gold)' }}
              />
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)' }}>Shruthi M. (Parent)</h3>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Mother of 11-year-old Aarav • Sector 137, Noida</div>
                <div style={{ display: 'flex', gap: '4px', marginTop: '4px', color: '#f59e0b', fontSize: '14px' }}>
                  ★★★★★ <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '6px' }}>Verified Parent • 7 Months Program</span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '16px', color: 'var(--text-body)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '20px' }}>
              “My 11-year-old son was spending 4–5 hours on his iPad and gaming console every single evening, resulting in severe slouched posture and low stamina during school sports. Since starting with Fit4Steps, he looks forward to his 3 weekly home sessions. The trainer makes it feel like an athletic game with ladders, hurdles, and cone races. His posture has visibly straightened and his confidence in school football has skyrocketed!”
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '13px', color: 'var(--brand-gold)', fontWeight: 700 }}>
              <span>✓ Reduced Daily Screen Time by 2 Hours</span>
              <span>✓ Corrected Rounded Shoulders</span>
              <span>✓ Selected for School Football Squad</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
              <HelpCircle size={14} /> Parents' Questions
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', color: 'var(--text-main)', fontWeight: 800 }}>
              Frequently Asked Questions for Parents
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
            Schedule an Engaging Trial for Your Child
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: 1.65, marginBottom: '32px' }}>
            Our youth coach will visit your home in Noida, Delhi, or Gurugram, conduct a gentle posture check, and run a fun, energetic 30-minute agility session.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20schedule%20a%20Kids%20Fitness%20Trial%20session%20at%20home."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ padding: '14px 30px', fontSize: '15px' }}
            >
              <MessageCircle size={18} /> Schedule Kids Trial Session
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
