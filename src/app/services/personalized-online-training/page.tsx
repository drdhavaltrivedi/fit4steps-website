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
  Video,
  Globe,
  Clock,
  Target,
  Sparkles,
  Calendar,
  Layers,
  MapPin,
  HelpCircle,
  ChevronDown,
  Monitor,
  Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: '1-on-1 Personalized Live Online Fitness Training | Fit4Steps',
  description: 'Private 1-on-1 live interactive video coaching with certified master trainers. Serving clients across Delhi NCR, India, and global NRI communities (US, UK, UAE, Singapore).',
  keywords: [
    'personalized online training',
    '1 on 1 online personal trainer india',
    'online fitness coach for nris',
    'live interactive video trainer',
    'virtual personal training delhi ncr',
    'online fitness coach usa uk uae'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/services/personalized-online-training',
  },
};

export default function PersonalizedOnlineTrainingPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://fit4steps.com/services/personalized-online-training#service',
        name: 'Personalized 1-on-1 Live Online Training',
        serviceType: 'Live Interactive Online Fitness Coaching',
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
          { '@type': 'AdministrativeArea', name: 'Worldwide' },
          { '@type': 'Country', name: 'India' },
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'Country', name: 'United Kingdom' }
        ],
        description: 'Elite 1-on-1 live interactive video personal coaching via high-definition video. Real-time form correction, tailored home/hotel workouts, and daily nutrition accountability.',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '7000',
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
            name: 'Personalized Online Training',
            item: 'https://fit4steps.com/services/personalized-online-training',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How does live 1-on-1 online training differ from YouTube or pre-recorded apps?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pre-recorded videos cannot see your body. Our live sessions are conducted two-way on HD video (Zoom or Google Meet) where your certified coach watches your joint angles, posture, and rep speed in real time, making instant corrections to prevent injury.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do you accommodate global time zones (USA, UK, Gulf, Singapore)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! We actively coach clients across North America (EST, CST, PST), the United Kingdom (GMT), the Middle East (GST), and Southeast Asia (SGT). Sessions are scheduled around your convenient local time.'
            }
          },
          {
            '@type': 'Question',
            name: 'What equipment do I need for online training?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Very minimal. A smartphone, tablet, or laptop with camera, an exercise mat, and basic resistance bands or light dumbbells. If you travel frequently, we design workouts requiring zero hotel equipment.'
            }
          }
        ]
      }
    ]
  };

  const specs = [
    { label: 'Session Delivery', value: 'Live 1-on-1 Two-Way HD Video (Zoom / Google Meet)' },
    { label: 'Session Length', value: '55 Minutes with Live Real-Time Form Correction' },
    { label: 'Global Time Zones', value: 'IST (India), EST/PST (USA), GMT (UK), GST (UAE), SGT (Singapore)' },
    { label: 'Accountability System', value: 'Daily WhatsApp Nutrition Audits & Habit Tracking' },
    { label: 'Travel Adaptability', value: 'Zero-Equipment Hotel Room Routines Included' },
    { label: 'Ideal Clients', value: 'Frequent Business Travelers, Global NRIs & Remote Workers' },
  ];

  const pillars = [
    {
      title: 'Real-Time Biomechanical Supervision',
      desc: 'Our coach inspects your posture from multiple camera angles. Every squat depth, shoulder alignment, and spinal neutrality is corrected as it happens.'
    },
    {
      title: 'Cross-Timezone Flexibility',
      desc: 'Whether you are in New York at 7:00 AM EST, London at 6:30 AM GMT, or Dubai at 8:00 PM GST, your dedicated trainer is logged on and waiting.'
    },
    {
      title: 'Full Nutrition & Lifestyle Protocol',
      desc: 'Online training includes daily WhatsApp meal logging, macros guidance tailored to Indian and global diets, and sleep tracking.'
    },
    {
      title: 'Frequent Traveler Adaptation',
      desc: 'Traveling for conferences or vacations? We swap your equipment workout for an efficient 30-minute hotel room resistance loop circuit so momentum is never broken.'
    }
  ];

  const faqs = [
    {
      q: 'How does live 1-on-1 online training differ from YouTube or pre-recorded apps?',
      a: 'Pre-recorded videos cannot see your body. Our live sessions are conducted two-way on HD video (Zoom or Google Meet) where your certified coach watches your joint angles, posture, and rep speed in real time, making instant corrections to prevent injury.'
    },
    {
      q: 'Do you accommodate global time zones (USA, UK, Gulf, Singapore)?',
      a: 'Yes! We actively coach clients across North America (EST, CST, PST), the United Kingdom (GMT), the Middle East (GST), and Southeast Asia (SGT). Sessions are scheduled around your convenient local time.'
    },
    {
      q: 'What equipment do I need for online training?',
      a: 'Very minimal. A smartphone, tablet, or laptop with camera, an exercise mat, and basic resistance bands or light dumbbells. If you travel frequently, we design workouts requiring zero hotel equipment.'
    },
    {
      q: 'How do you measure my physical progress remotely?',
      a: 'We conduct bi-weekly metric reviews: circumference measurements (waist, hips, chest), digital scale weigh-ins, progress photos under consistent lighting, and functional strength tests (reps achieved, hold durations).'
    },
    {
      q: 'Can I do a free video trial before enrolling?',
      a: 'Yes! We offer a complimentary 30-minute live video consultation and posture assessment to test your camera setup, meet your coach, and experience our real-time coaching interface.'
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
          <span style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>Personalized Online Training</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="page-header-clean" style={{ padding: '60px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '18px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Globe size={15} /> 1-on-1 Live Interactive Coaching Worldwide
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 4.2vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px', fontWeight: 800 }}>
                Personalized Online Training <br />
                <span className="text-gold">Private 1-on-1 HD Video Coaching</span>
              </h1>
              <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
                Not pre-recorded videos. Real-time, live two-way video coaching with certified master trainers who watch every repetition, correct your posture instantly, and hold you accountable wherever you are in the world.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '32px' }}>
                {[
                  'Live Two-Way Video Feedback',
                  'US, UK, UAE & India Timezones',
                  'Daily Diet & Habit Accountability',
                  'Travel-Ready Zero Equipment'
                ].map((pill, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-main)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="var(--brand-gold)" />
                    <span>{pill}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20Personalized%20Online%20Training.%20Please%20schedule%20a%20video%20trial."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', fontSize: '15px' }}
                >
                  <MessageCircle size={18} /> Book Free Video Trial
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
                  src="/assets/image/programme-img-1.webp"
                  alt="Live 1-on-1 online personal training and fitness video coaching"
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
                  <Monitor size={20} color="var(--brand-gold)" />
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)' }}>Global NRI Community</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Coaching Clients in 14+ Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION MATRIX */}
      <SpecsMatrix
        badge="Virtual Infrastructure"
        title="At a Glance: How Online 1-on-1 Coaching Operates"
        subtitle="Two-way live interactive HD training with real-time postural corrections and nutrition audits."
        specs={specs}
      />

      {/* 3. FOUR CORE ADVANTAGES */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 50px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '14px' }}>
              <Zap size={14} /> The Online Advantage
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', color: 'var(--text-main)', fontWeight: 800, marginBottom: '14px' }}>
              Why Fit4Steps Virtual Coaching Delivers Exceptional Results
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6 }}>
              We eliminate the geographic boundaries of elite personal coaching. Get world-class fitness science directly to your laptop screen anywhere on the globe.
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
                alt="NRI Client in Dubai"
                style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--brand-gold)' }}
              />
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)' }}>Sameer V.</h3>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Financial Consultant • Dubai Marina, UAE</div>
                <div style={{ display: 'flex', gap: '4px', marginTop: '4px', color: '#f59e0b', fontSize: '14px' }}>
                  ★★★★★ <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '6px' }}>Verified Online Client • 1 Year Coaching</span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '16px', color: 'var(--text-body)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '20px' }}>
              “Living in Dubai and traveling across Europe for work, hiring local trainers was prohibitively expensive and impossible to maintain consistently. Connecting with Fit4Steps for 1-on-1 live video coaching was a game changer. My trainer logs in precisely at 6:30 AM GST. Whether I am in my Dubai apartment or a hotel in Frankfurt, I just open my laptop and have an elite master coach guiding my workout. I’ve lost 11 kg and kept it off for over a year!”
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '13px', color: 'var(--brand-gold)', fontWeight: 700 }}>
              <span>✓ Lost 11 kg Across 12 Months</span>
              <span>✓ 100% Workout Adherence During Travel</span>
              <span>✓ Personalized Indian Nutritional Guidance</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
              <HelpCircle size={14} /> Virtual FAQs
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', color: 'var(--text-main)', fontWeight: 800 }}>
              Frequently Asked Questions About Online Training
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
            Book Your Complimentary 1-on-1 Video Trial
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: 1.65, marginBottom: '32px' }}>
            Test our live HD interactive coaching setup from anywhere in the world. Meet your master trainer, discuss your targets, and receive a customized roadmap.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20schedule%20a%20complimentary%201-on-1%20Online%20Video%20Trial."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ padding: '14px 30px', fontSize: '15px' }}
            >
              <MessageCircle size={18} /> Schedule Live Video Trial
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
