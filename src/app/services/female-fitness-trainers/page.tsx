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
  Users,
  Target,
  Dumbbell,
  Sparkles,
  Calendar,
  Layers,
  MapPin,
  HelpCircle,
  ChevronDown,
  UserCheck,
  Lock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Certified Female Fitness Trainers at Home in Delhi, Noida & Gurugram | Fit4Steps',
  description: 'Book certified lady fitness trainers at home in Delhi NCR. Specialized in women’s fat loss, PCOS/PCOD management, postnatal recovery, pelvic floor toning, and senior women fitness.',
  keywords: [
    'female fitness trainers in delhi',
    'lady fitness trainer at home noida',
    'female personal trainer gurugram',
    'women personal trainer at home delhi ncr',
    'pcos fitness trainer at home',
    'postnatal lady trainer south delhi',
    'home workout female coach'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/services/female-fitness-trainers',
  },
};

export default function FemaleFitnessTrainersPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://fit4steps.com/services/female-fitness-trainers#service',
        name: 'Certified Female Fitness Trainers at Home',
        serviceType: 'Women In-Home Personal Fitness Coaching',
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
        description: 'Elite certified female fitness trainers delivering private doorstep coaching for women across Delhi NCR. Specialized in PCOS, core toning, postnatal recovery, and joint mobility.',
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
            name: 'Services',
            item: 'https://fit4steps.com/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Female Fitness Trainers',
            item: 'https://fit4steps.com/services/female-fitness-trainers',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Why should women choose a certified female personal trainer at home?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A certified female trainer understands female physiology, hormonal cycles, PCOS/PCOD challenges, and pelvic floor changes firsthand. Furthermore, training in your living room affords 100% privacy without the self-consciousness or crowded gaze often felt in public commercial gym weight rooms.'
            }
          },
          {
            '@type': 'Question',
            name: 'Are Fit4Steps lady trainers verified and certified?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. 100% of our female fitness coaches possess recognized national/international sports conditioning certifications (ACE, ACSM, K11, or Yoga Alliance) and undergo mandatory government police and identity verification.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can you help with PCOS, thyroid conditions, and hormonal weight gain?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Our female trainers specialize in endocrine-sensitive exercise protocols that combine resistance training to improve insulin sensitivity with restorative breathwork to reduce cortisol, which directly helps regulate menstrual regularity and accelerate visceral fat loss.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is this service suitable for senior women (50+ and 60+)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely. Many of our senior female clients in Noida, Delhi, and Gurugram train with lady coaches who focus on osteopenia prevention, knee joint cartilage care, gentle spinal flexibility, and fall prevention.'
            }
          }
        ]
      }
    ]
  };

  const specs = [
    { label: 'Trainer Profile', value: '100% Certified Female Fitness Coaches & Yoga Therapists' },
    { label: 'Session Length', value: '55 to 60 Minutes per Private Session' },
    { label: 'Specializations', value: 'PCOS/PCOD, Postnatal Recovery, Core Toning, Senior Women Mobility' },
    { label: 'Equipment Included', value: 'Color-Coded Resistance Tubes, Light Weights, Yoga Mats, Pilates Balls' },
    { label: 'Privacy & Security', value: 'Police-Verified, Direct Doorstep Service, Complete Confidentiality' },
    { label: 'Service Coverage', value: 'All Major Sectors in Noida, South Delhi Colonies & Gurugram DLF' },
  ];

  const pillars = [
    {
      title: 'PCOS & Hormonal Equilibrium',
      desc: 'High cortisol and insulin resistance in PCOS make traditional high-intensity cardio counterproductive. Our structured resistance workouts enhance glucose uptake into skeletal muscles without spiking stress hormones.'
    },
    {
      title: 'Postnatal & Diastasis Recti Recovery',
      desc: 'Safe re-activation of the deep transverse abdominis and pelvic floor musculature after vaginal or C-section delivery. Eliminates lower back pain and heals abdominal separation.'
    },
    {
      title: 'Targeted Core, Glute & Hip Toning',
      desc: 'Corrective strength patterns using resistance loops and kettlebells to build firm, functional glutes, sculpt the midsection, and protect the lumbar spine.'
    },
    {
      title: 'Bone Density & Osteopenia Defense',
      desc: 'Post-menopausal estrogen decline accelerates bone mass loss. Our weight-bearing resistance drills stimulate osteoblast activity, strengthening hip and spine bone mineral density.'
    }
  ];

  const faqs = [
    {
      q: 'Why should women choose a certified female personal trainer at home?',
      a: 'A certified female trainer understands female physiology, hormonal cycles, PCOS/PCOD challenges, and pelvic floor changes firsthand. Furthermore, training in your living room affords 100% privacy without the self-consciousness or crowded gaze often felt in public commercial gym weight rooms.'
    },
    {
      q: 'Are Fit4Steps lady trainers verified and certified?',
      a: 'Yes. 100% of our female fitness coaches possess recognized national/international sports conditioning certifications (ACE, ACSM, K11, or Yoga Alliance) and undergo mandatory government police and identity verification.'
    },
    {
      q: 'Can you help with PCOS, thyroid conditions, and hormonal weight gain?',
      a: 'Yes. Our female trainers specialize in endocrine-sensitive exercise protocols that combine resistance training to improve insulin sensitivity with restorative breathwork to reduce cortisol, which directly helps regulate menstrual regularity and accelerate visceral fat loss.'
    },
    {
      q: 'Is this service suitable for senior women (50+ and 60+)?',
      a: 'Absolutely. Many of our senior female clients in Noida, Delhi, and Gurugram train with lady coaches who focus on osteopenia prevention, knee joint cartilage care, gentle spinal flexibility, and fall prevention.'
    },
    {
      q: 'How many sessions per week are recommended for women looking to lose weight?',
      a: 'We typically recommend 3 to 4 sessions per week combined with daily step targets (8,000–10,000 steps) and balanced protein nutrition. This allows adequate recovery while generating an optimal weekly caloric deficit.'
    },
    {
      q: 'Can I do a trial session with a lady trainer before committing to a package?',
      a: 'Yes. You can book an introductory doorstep trial session where our female master coach assesses your flexibility, discusses your medical history, and conducts a 30-minute tailored workout in your home.'
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
          <span style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>Female Fitness Trainers</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="page-header-clean" style={{ padding: '60px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '18px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <UserCheck size={15} /> Certified Lady Coaches at Your Doorstep
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 4.2vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px', fontWeight: 800 }}>
                Certified Female Fitness Trainers <br />
                <span className="text-gold">Noida, South Delhi & Gurugram</span>
              </h1>
              <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
                Workout in complete safety, comfort, and privacy. Our certified female fitness coaches bring customized routines for women’s body sculpting, PCOS management, postnatal core healing, and senior vitality directly to your home.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '32px' }}>
                {[
                  '100% Certified Female Faculty',
                  'Police & Identity Cleared',
                  'PCOS & Thyroid Specialization',
                  'Diastasis Recti Safe Postnatal'
                ].map((pill, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-main)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="var(--brand-gold)" />
                    <span>{pill}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20a%20Certified%20Female%20Fitness%20Trainer%20at%20home.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', fontSize: '15px' }}
                >
                  <MessageCircle size={18} /> Book Lady Trainer Trial
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
                  src="/assets/image/h-s2-servi-card-img-2.webp"
                  alt="Certified female fitness coach training woman at home in Delhi NCR"
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
                  <Lock size={20} color="var(--brand-gold)" />
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)' }}>100% Home Privacy</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Verified Lady Trainers Across 350+ NCR Households</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION MATRIX */}
      <SpecsMatrix
        badge="Female Concierge Training Specs"
        title="Tailored Specifically for Women's Physiological Needs"
        subtitle="Private in-home fitness led by certified female trainers with comprehensive background verification."
        specs={specs}
      />

      {/* 3. FOUR CLINICAL PILLARS */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 50px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '14px' }}>
              <Heart size={14} /> Specialized Women’s Conditioning
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', color: 'var(--text-main)', fontWeight: 800, marginBottom: '14px' }}>
              Core Areas of Expertise
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6 }}>
              A woman’s musculoskeletal and hormonal architecture requires precise programming. We discard masculine bodybuilding templates in favor of hormone-balancing, posture-realigning workouts.
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
                src="/assets/image/ftr-testiminial-babitha.webp"
                alt="Babitha - Fit4Steps Client"
                style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--brand-gold)' }}
              />
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)' }}>Babitha R.</h3>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Working Mother • Vasant Kunj, South Delhi</div>
                <div style={{ display: 'flex', gap: '4px', marginTop: '4px', color: '#f59e0b', fontSize: '14px' }}>
                  ★★★★★ <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '6px' }}>Verified Client • 6 Months Training</span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '16px', color: 'var(--text-body)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '20px' }}>
              “After having my second child, I struggled with severe lower back stiffness and weak core muscles. Walking into a regular gym felt overwhelming and uncomfortable. Having a certified female trainer from Fit4Steps come to my Vasant Kunj home was the best health decision I’ve ever made. She checked for diastasis recti, taught me proper pelvic floor breathing, and helped me drop 8 kg comfortably without extreme dieting.”
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '13px', color: 'var(--brand-gold)', fontWeight: 700 }}>
              <span>✓ Closed Diastasis Recti Gap</span>
              <span>✓ Zero Lower Back Ache</span>
              <span>✓ Regained Pre-Pregnancy Stamina</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
              <HelpCircle size={14} /> Questions & Answers
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', color: 'var(--text-main)', fontWeight: 800 }}>
              Frequently Asked Questions About Lady Trainers
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
            Schedule a Confidential Doorstep Consultation
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: 1.65, marginBottom: '32px' }}>
            Connect with our female master trainer to discuss your fitness goals, medical history, and preferred workout time slots across Noida, Delhi, and Gurugram.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20book%20a%20trial%20session%20with%20a%20Certified%20Female%20Fitness%20Trainer."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ padding: '14px 30px', fontSize: '15px' }}
            >
              <MessageCircle size={18} /> Schedule Lady Trainer Trial
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
