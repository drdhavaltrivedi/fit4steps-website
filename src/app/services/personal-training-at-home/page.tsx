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
  Home,
  Clock,
  Users,
  Target,
  Dumbbell,
  HeartPulse,
  Sparkles,
  Calendar,
  Layers,
  MapPin,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Training at Home in Noida, Delhi & Gurugram | Fit4Steps',
  description: 'Certified 1-on-1 personal fitness trainer at your doorstep. We bring sanitized dumbbells, resistance bands & mats to your home. Fat loss, muscle toning, posture correction, and strength coaching across Delhi NCR.',
  keywords: [
    'personal training at home',
    'in-home personal trainer delhi',
    'fitness trainer at home noida',
    'personal trainer at home gurugram',
    'doorstep gym trainer',
    'home workout personal trainer delhi ncr',
    'private fitness coach south delhi'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/services/personal-training-at-home',
  },
};

export default function PersonalTrainingAtHomePage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://fit4steps.com/services/personal-training-at-home#service',
        name: 'Personal Training at Home Delhi NCR',
        serviceType: 'In-Home Personal Fitness Coaching',
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
        description: 'Elite 1-on-1 personal training delivered directly to your doorstep in Delhi NCR. Fully equipped with sanitized resistance bands, weights, and biomechanical posture correction.',
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
            name: 'Services',
            item: 'https://fit4steps.com/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Personal Training at Home',
            item: 'https://fit4steps.com/services/personal-training-at-home',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much space is required in my home for personal training?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You only need a clear 6x6 feet space in your living room, balcony, bedroom, or terrace. Our trainers bring compact, high-efficiency equipment such as resistance bands, suspension trainers, and kettlebells that require zero bulky machines.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do I need to buy any workout equipment before the trainer arrives?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Fit4Steps provides all required sanitized workout equipment, including color-coded resistance bands, neoprene dumbbells, agility cones, yoga mats, and recovery foam rollers. If you have existing home gym equipment, our trainer will integrate it seamlessly.'
            }
          },
          {
            '@type': 'Question',
            name: 'Are Fit4Steps trainers certified and police-verified?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. 100% of Fit4Steps coaches hold nationally and internationally accredited certifications (such as ACSM, ACE, K11, or Gold’s Gym University) and undergo strict legal and criminal background checks prior to entering client homes.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I reschedule my session if I have sudden work or travel?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We offer flexible scheduling between 6:00 AM and 8:30 PM. With a 4-hour advance notice, you can reschedule your morning or evening session without forfeiting your class.'
            }
          },
          {
            '@type': 'Question',
            name: 'What areas in Delhi NCR do your home trainers cover?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We provide doorstep personal training across Noida (Sectors 14, 15A, 44, 50, 78, 128, 137, 150), South Delhi (GK 1 & 2, Vasant Vihar, Panchsheel, Defence Colony, Hauz Khas), and Gurugram (DLF Phase 1-5, Golf Course Road, Sohna Road).'
            }
          }
        ]
      }
    ]
  };

  const specs = [
    { label: 'Session Format', value: '1-on-1 Dedicated Private In-Home Coaching' },
    { label: 'Session Duration', value: '55 to 60 Minutes per Workout' },
    { label: 'Frequency Options', value: '3, 4, or 5 Days per Week' },
    { label: 'Equipment Included', value: 'Full Sanitized Kit (Bands, Dumbbells, Mats, Foam Rollers)' },
    { label: 'Operating Hours', value: '6:00 AM – 8:30 PM (Mon to Sat)' },
    { label: 'Service Coverage', value: 'Noida, Greater Noida, South Delhi & Gurugram' },
  ];

  const curriculum = [
    {
      step: '01',
      title: 'Biomechanical & Movement Screening',
      timeline: 'Week 1 – 2',
      desc: 'We conduct a comprehensive 45-point posture, joint range-of-motion, and cardiovascular stamina screening. We detect anterior pelvic tilt, rounded shoulders, and muscle imbalances before prescribing load.'
    },
    {
      step: '02',
      title: 'Kinetic Re-Alignment & Core Stability',
      timeline: 'Week 3 – 5',
      desc: 'Activation of dormant deep core stabilizers (transverse abdominis, multifidus, gluteus medius). Introduction of progressive resistance bands and bodyweight movement patterns with strict form correction.'
    },
    {
      step: '03',
      title: 'Metabolic Conditioning & Functional Strength',
      timeline: 'Week 6 – 10',
      desc: 'Integration of compound movement patterns (squats, hinges, rows, presses) with kettlebells and dumbbell circuits. Elevates basal metabolic rate, burns visceral fat, and builds lean functional muscle tone.'
    },
    {
      step: '04',
      title: 'Strength Progression & Lifestyle Autonomy',
      timeline: 'Week 11+',
      desc: 'Advanced functional strength complexes, active joint mobility maintenance, and sustainable nutritional adherence protocols so you preserve your gains for life.'
    }
  ];

  const equipmentList = [
    {
      title: 'Graduated Resistance Tubes',
      desc: 'Latex power tubes from 10 lbs to 50 lbs tension for progressive joint-friendly hypertrophy without spinal compression.'
    },
    {
      title: 'Hex Dumbbells & Cast Iron Kettlebells',
      desc: 'Ergonomic weights for functional hinge mechanics, overhead stabilization, and core anti-rotation drills.'
    },
    {
      title: 'High-Density Foam Rollers & Trigger Balls',
      desc: 'Pre-workout myofascial release and post-workout lymphatic flush to eliminate muscle soreness.'
    },
    {
      title: 'Agility Ladders & Balance Air Discs',
      desc: 'Dynamic footwork and proprioceptive ankle stabilization tools to boost athletic reflexes.'
    },
    {
      title: 'Premium Non-Slip Eco Yoga Mats',
      desc: 'Extra-cushioned 8mm mats for floor core work, pelvic tilts, and spine protection.'
    },
    {
      title: 'Suspension Trainer (Door Anchor)',
      desc: 'Safe bodyweight leverage system that turns any standard household door into a full-body gym.'
    }
  ];

  const faqs = [
    {
      q: 'How much space is required in my home for personal training?',
      a: 'You only need a clear 6x6 feet space in your living room, balcony, bedroom, or society clubhouse. Our trainers bring compact, high-efficiency equipment such as resistance bands, suspension trainers, and kettlebells that require zero bulky machines.'
    },
    {
      q: 'Do I need to buy any workout equipment before the trainer arrives?',
      a: 'No. Fit4Steps provides all required sanitized workout equipment, including color-coded resistance bands, neoprene dumbbells, agility cones, yoga mats, and recovery foam rollers. If you have existing home gym equipment, our trainer will integrate it seamlessly.'
    },
    {
      q: 'Are Fit4Steps trainers certified and police-verified?',
      a: 'Yes. 100% of Fit4Steps coaches hold nationally and internationally accredited certifications (such as ACSM, ACE, K11, or Gold’s Gym University) and undergo strict legal and criminal background checks prior to entering client homes.'
    },
    {
      q: 'Can I reschedule my session if I have sudden work or travel?',
      a: 'Yes. We offer flexible scheduling between 6:00 AM and 8:30 PM. With a 4-hour advance notice, you can reschedule your morning or evening session without forfeiting your class.'
    },
    {
      q: 'What areas in Delhi NCR do your home trainers cover?',
      a: 'We provide doorstep personal training across Noida (Sectors 14, 15A, 44, 50, 78, 128, 137, 150), South Delhi (GK 1 & 2, Vasant Vihar, Panchsheel, Defence Colony, Hauz Khas), and Gurugram (DLF Phase 1-5, Golf Course Road, Sohna Road).'
    },
    {
      q: 'How soon can I see noticeable results with in-home personal training?',
      a: 'Most clients report noticeable increases in energy, stamina, and posture improvement within the first 14 days. Measurable body composition changes (inch loss, muscle definition, visceral fat drop) typically manifest distinctly between weeks 4 and 8 with consistent nutrition adherence.'
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
          <span style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>Personal Training at Home</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="page-header-clean" style={{ padding: '60px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '18px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Home size={15} /> 1-on-1 Doorstep Fitness Concierge
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 4.2vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px', fontWeight: 800 }}>
                Personal Training at Home in <br />
                <span className="text-gold">Noida, South Delhi & Gurugram</span>
              </h1>
              <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
                Eliminate traffic jams and crowded gyms. Fit4Steps delivers certified master trainers with sanitized professional equipment directly to your living room. Tailored fat loss, strength building, and posture correction engineered around your lifestyle.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '32px' }}>
                {[
                  '100% Police-Verified Coaches',
                  'Sanitized Equipment Included',
                  'Flexible 6:00 AM – 8:30 PM Slots',
                  'Customized Biomechanical Regimen'
                ].map((pill, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-main)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="var(--brand-gold)" />
                    <span>{pill}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20Personal%20Training%20at%20Home.%20Please%20schedule%20a%20doorstep%20assessment."
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
                  src="/assets/image/h-s3-img.webp"
                  alt="Personal trainer coaching client at home in Delhi NCR"
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
                  <Award size={22} color="var(--brand-gold)" />
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)' }}>4.9 / 5 Rating</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Over 500+ Homes Served in Delhi NCR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION MATRIX */}
      <SpecsMatrix
        badge="Concierge Program Details"
        title="At a Glance: How Our Doorstep Coaching Operates"
        subtitle="Clinical standards, coaching parameters, and doorstep delivery protocols across Delhi NCR."
        specs={specs}
      />

      {/* 3. CLINICAL PROBLEM VS FIT4STEPS SOLUTION */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-navy" style={{ marginBottom: '14px' }}>
                <ShieldCheck size={14} /> Biomechanical Superiority
              </div>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', color: 'var(--text-main)', lineHeight: 1.25, marginBottom: '18px', fontWeight: 800 }}>
                Why In-Home Personal Training Outperforms Commercial Gyms
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '20px', fontSize: '15px' }}>
                Gym memberships in Delhi NCR suffer from an 82% abandonment rate within the first 90 days. The friction of peak-hour commutes, overcrowded equipment, and shared, distracted gym trainers sabotages consistency.
              </p>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px', fontSize: '15px' }}>
                Fit4Steps transforms your personal living room into an uncompromising, hygienic training zone. Every second of your 60-minute session is scrutinized by a master coach ensuring zero joint compromise and maximum metabolic output.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  {
                    title: 'Zero Commute Fatigue',
                    desc: 'Save 60 to 90 minutes every session. Work out immediately before your morning shower or after your evening workday.'
                  },
                  {
                    title: '100% Uninterrupted Eye Contact',
                    desc: 'No trainers checking their phones or glancing at other members. Every repetition is audited for biomechanical perfection.'
                  },
                  {
                    title: 'Customized to Pre-Existing Joint Conditions',
                    desc: 'Safely tailored for slipped discs, cervical stiffness, desk-slouch kyphosis, or knee crepitus.'
                  }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'var(--brand-gold-soft)',
                      color: 'var(--brand-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '3px'
                    }}>
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>{item.title}</h3>
                      <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COMPARISON TABLE */}
            <div className="theme-card" style={{ padding: '32px', borderRadius: '20px' }}>
              <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '20px', textAlign: 'center' }}>
                Direct Comparison: Commercial Gym vs. Fit4Steps In-Home
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  {
                    factor: 'Travel Time & Commute',
                    gym: '45–75 mins wasted in Delhi NCR traffic jams',
                    fit4steps: '0 mins — Trainer arrives directly at your door'
                  },
                  {
                    factor: 'Sanitation & Hygiene',
                    gym: 'Shared with hundreds of sweating individuals daily',
                    fit4steps: '100% sanitized equipment used only in your home'
                  },
                  {
                    factor: 'Trainer Focus & Supervision',
                    gym: 'Often multi-tasking across 4–6 clients simultaneously',
                    fit4steps: '1-on-1 undivided clinical supervision every second'
                  },
                  {
                    factor: 'Scheduling Agility',
                    gym: 'Rigid batch hours; missed sessions are lost',
                    fit4steps: 'Reschedule with 4h notice between 6 AM & 8:30 PM'
                  },
                  {
                    factor: 'Privacy & Comfort',
                    gym: 'High noise, crowded weight areas, self-consciousness',
                    fit4steps: 'Total comfort and privacy of your living room'
                  }
                ].map((row, i) => (
                  <div key={i} style={{ borderBottom: i < 4 ? '1px solid var(--border-subtle)' : 'none', paddingBottom: '14px' }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--brand-gold)', marginBottom: '4px' }}>
                      {row.factor}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '13px' }}>
                      <div style={{ color: 'var(--text-muted)' }}>
                        <strong style={{ color: '#ef4444' }}>Commercial Gym:</strong> {row.gym}
                      </div>
                      <div style={{ color: 'var(--text-body)' }}>
                        <strong style={{ color: '#10b981' }}>Fit4Steps:</strong> {row.fit4steps}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 4-STAGE PROGRESSIVE CURRICULUM */}
      <section className="section-surface" style={{ padding: '80px 0', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 50px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
              <Layers size={14} /> Proven Scientific Progression
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', color: 'var(--text-main)', fontWeight: 800, marginBottom: '14px' }}>
              Our 4-Phase In-Home Transformation Roadmap
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6 }}>
              We do not prescribe random exercises. Every workout is calibrated around progressive neuromuscular overload, ensuring rapid fat oxidation and lean muscle retention without injury.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {curriculum.map((phase, idx) => (
              <div key={idx} className="card-clean" style={{ padding: '28px 24px', borderRadius: '18px', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '32px', fontWeight: 900, color: 'var(--brand-gold)', opacity: 0.9 }}>
                    {phase.step}
                  </span>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    background: 'var(--bg-surface-alt)',
                    padding: '4px 10px',
                    borderRadius: '8px',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    {phase.timeline}
                  </span>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px', lineHeight: 1.35 }}>
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

      {/* 5. SANITIZED EQUIPMENT SUITE */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '740px', margin: '0 auto 48px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '14px' }}>
              <Dumbbell size={14} /> Doorstep Hardware
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--text-main)', fontWeight: 800, marginBottom: '14px' }}>
              What Equipment Does Your Trainer Bring?
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6 }}>
              You don’t need to purchase costly, dust-gathering gym gear. We transport medical-grade, hospital-sanitized equipment directly into your home before every workout.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {equipmentList.map((eq, i) => (
              <div key={i} className="theme-card" style={{ padding: '24px', borderRadius: '16px', display: 'flex', gap: '16px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'var(--brand-gold-soft)',
                  color: 'var(--brand-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Dumbbell size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>{eq.title}</h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.6 }}>{eq.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sanitization Guarantee Strip */}
          <div style={{
            marginTop: '36px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-medium)',
            borderRadius: '16px',
            padding: '24px 30px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <ShieldCheck size={28} color="#10b981" />
              <div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)' }}>Strict 3-Stage Equipment Disinfection</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Hospital-grade anti-bacterial wipedown before packing, upon arrival, and post-session.</div>
              </div>
            </div>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20want%20to%20know%20more%20about%20your%20in-home%20trainer%20equipment%20and%20hygiene."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ fontSize: '13px', padding: '10px 18px' }}
            >
              Verify Hygiene Protocol
            </a>
          </div>
        </div>
      </section>

      {/* 6. WHO THIS SERVICE IS FOR */}
      <section className="section-surface" style={{ padding: '80px 0', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--brand-gold)' }}>
              Tailored Personas
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--text-main)', fontWeight: 800, marginTop: '8px' }}>
              Is In-Home Personal Training Right for You?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              {
                title: 'High-Demand Professionals & CXOs',
                desc: '60+ hour workweeks leave zero room for gym commutes. Complete your workout at 6:30 AM or 8:00 PM without stepping outside your apartment.'
              },
              {
                title: 'New Mothers & Postpartum Care',
                desc: 'Re-condition pelvic floor and diastasis recti safely at home with female coaches while keeping your baby in close proximity.'
              },
              {
                title: 'Individuals Recovering from Injuries',
                desc: 'Tailored for clients with lumbar disc bulges, knee osteoarthritis, or shoulder impingement who require clinical-grade exercise science.'
              },
              {
                title: 'Privacy-Conscious Individuals',
                desc: 'Enjoy complete discretion without crowded locker rooms, intrusive glances, or loud commercial music environments.'
              }
            ].map((persona, i) => (
              <div key={i} className="card-clean" style={{ padding: '28px 24px', borderRadius: '16px' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>{persona.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.65 }}>{persona.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. REAL CLIENT CASE STUDY */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="theme-card" style={{ padding: '40px', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
              <img
                src="/assets/image/ftr-testiminial-shailen.webp"
                alt="Shailen - Fit4Steps Client"
                style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--brand-gold)' }}
              />
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)' }}>Shailen Sen</h3>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Corporate Executive • Jaypee Greens, Noida</div>
                <div style={{ display: 'flex', gap: '4px', marginTop: '4px', color: '#f59e0b', fontSize: '14px' }}>
                  ★★★★★ <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '6px' }}>Verified Client • 8 Months Training</span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '16px', color: 'var(--text-body)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '20px' }}>
              “As someone managing long corporate work hours and chronic lower back stiffness, going to a commercial gym was a non-starter. My Fit4Steps trainer arrives promptly at 6:30 AM in Jaypee Greens three days a week with all equipment. Within 3 months, my back spasms were completely gone and I dropped 7 kg of visceral weight. The convenience and personalized coaching are second to none.”
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '13px', color: 'var(--brand-gold)', fontWeight: 700 }}>
              <span>✓ Lost 7 kg Visceral Fat</span>
              <span>✓ Resolved Lower Back Pain</span>
              <span>✓ 100% On-Time Doorstep Attendance</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. IN-DEPTH ACCORDION FAQS */}
      <section className="section-surface" style={{ padding: '80px 0', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
              <HelpCircle size={14} /> Frequently Asked Questions
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', color: 'var(--text-main)', fontWeight: 800 }}>
              Got Questions About Home Personal Training?
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

      {/* 9. GEOGRAPHIC COVERAGE & INTERNAL LINKING */}
      <section className="section-page" style={{ padding: '60px 0', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '14px' }}>
            Serving Residential Societies Across Delhi NCR
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
            Our trainers are stationed throughout major sectors and residential clusters for rapid dispatch:
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '32px' }}>
            {[
              { name: 'Noida Expressway', link: '/services/personal-training-at-home' },
              { name: 'Jaypee Greens Sector 128 & 133', link: '/services/personal-training-at-home' },
              { name: 'Sector 50 & 78 Noida', link: '/services/personal-training-at-home' },
              { name: 'Greater Kailash (GK 1 & 2)', link: '/personal-trainer-greater-kailash-delhi' },
              { name: 'Vasant Vihar & Anand Niketan', link: '/personal-fitness-trainer-delhi' },
              { name: 'Panchsheel & Defence Colony', link: '/personal-fitness-trainer-delhi' },
              { name: 'DLF Phase 1-5 Gurugram', link: '/senior-citizen-fitness-trainer-at-home-gurugram' },
              { name: 'Golf Course Extension Road', link: '/senior-citizen-fitness-trainer-at-home-gurugram' },
            ].map((loc, i) => (
              <Link
                key={i}
                href={loc.link}
                style={{
                  fontSize: '13px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-medium)',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  color: 'var(--text-body)',
                  textDecoration: 'none'
                }}
              >
                📍 {loc.name}
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', fontSize: '13.5px' }}>
            <span style={{ color: 'var(--text-muted)' }}>Explore specialized alternatives:</span>
            <Link href="/services/female-fitness-trainers" style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>Female Fitness Trainers</Link>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <Link href="/services/couple-training" style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>Couple Training</Link>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <Link href="/senior-fitness" style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>Senior Citizen Knee Therapy</Link>
          </div>
        </div>
      </section>

      {/* 10. FINAL CONVERSION BANNER */}
      <section className="section-padding" style={{ background: 'var(--brand-navy)', color: '#ffffff', textAlign: 'center', padding: '70px 0' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', color: '#ffffff', fontWeight: 800, marginBottom: '16px' }}>
            Book Your Free 45-Minute In-Home Assessment
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: 1.65, marginBottom: '32px' }}>
            Our master coach visits your residence in Noida, South Delhi, or Gurugram. We assess your joint mobility, calculate your baseline metrics, and demonstrate a sample 15-minute customized workout.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20schedule%20a%20free%20doorstep%20personal%20training%20trial%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ padding: '14px 30px', fontSize: '15px' }}
            >
              <MessageCircle size={18} /> Schedule Free Doorstep Trial
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
