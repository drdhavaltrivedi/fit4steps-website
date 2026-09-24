import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  Sparkles,
  Heart,
  Clock,
  Target,
  Smile,
  Zap,
  Activity,
  Calendar,
  Layers,
  HelpCircle,
  ChevronDown,
  Moon,
  Feather
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Executive Stress Management & Nervous System Reset at Home | Fit4Steps',
  description: 'Evidence-based stress reduction, vagus nerve activation, and autonomic regulation coaching at home in Noida, Delhi & Gurugram. Lowers cortisol and ends burnout.',
  keywords: [
    'stress management training delhi',
    'executive wellness coach noida',
    'autonomic regulation training gurugram',
    'cortisol reduction workout home',
    'mind body stress relief delhi ncr',
    'in-home breathwork and somatic mobility'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/services/stress-management-training',
  },
};

export default function StressManagementTrainingPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://fit4steps.com/services/stress-management-training#service',
        name: 'Executive Stress Management and Autonomic Reset',
        serviceType: 'Somatic Stress Reduction & Autonomic Wellness Coaching',
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
        description: 'Private in-home stress management and autonomic nervous system regulation for corporate leaders and professionals in Delhi NCR. Restores sleep, lowers cortisol, and releases stored somatic tension.',
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
            name: 'Stress Management Training',
            item: 'https://fit4steps.com/services/stress-management-training',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How does physical training reduce high executive cortisol and mental burnout?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'High-intensity exercise when you are already burned out spikes cortisol higher. Our stress management coaching uses rhythmic somatic mobility, slow eccentric movements, and vagus nerve breathing protocols that signal your parasympathetic nervous system to disengage "fight-or-flight" overdrive.'
            }
          },
          {
            '@type': 'Question',
            name: 'What techniques are used during these in-home sessions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sessions combine diaphragmatic pranayama, thoracic spine decompression, psoas muscle somatic release (where physical stress is stored), targeted mobility flows, and guided restorative Yoga Nidra.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can this improve chronic insomnia and sleep quality?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Evening sessions conducted between 6:30 PM and 8:30 PM down-regulate sympathetic arousal, helping clients enter restorative deep Slow-Wave Sleep (SWS) and wake up refreshed without morning brain fog.'
            }
          }
        ]
      }
    ]
  };

  const specs = [
    { label: 'Primary Modality', value: 'Somatic Mobility, Vagus Nerve Activation & Pranayama Breathwork' },
    { label: 'Session Length', value: '55 to 60 Minutes per In-Home Session' },
    { label: 'Target Outcomes', value: 'Cortisol Reduction, Parasympathetic Reset, Deep Sleep Restoration' },
    { label: 'Ideal Time Slots', value: 'Early Morning (for daily calm) or Evening (for deep sleep transition)' },
    { label: 'Equipment Used', value: 'Acupressure Mats, Foam Rollers, Bolsters & Tension Release Tools' },
    { label: 'Service Coverage', value: 'Noida Expressway, South Delhi & Gurugram Cyber Hub / DLF' },
  ];

  const pillars = [
    {
      title: 'Vagus Nerve & Parasympathetic Activation',
      desc: 'Through lengthened exhalations and diaphragmatic pacing, we stimulate the vagus nerve to slow resting heart rate and decrease blood pressure, terminating chronic stress loops.'
    },
    {
      title: 'Psoas & Somatic Trauma Release',
      desc: 'The psoas (deep hip flexor) contract reflexively during mental distress. Targeted myofascial opening and gentle tremors discharge muscular bracing accumulated over weeks of high-stakes work.'
    },
    {
      title: 'Thoracic & Cervical Decompression',
      desc: 'Chronic stress forces shallow chest breathing and shoulder shrugging. We open the ribcage and release suboccipital tension, instantly clearing tension headaches.'
    },
    {
      title: 'Circadian Rhythm & Sleep Optimization',
      desc: 'Restorative evening sequencing and down-regulating breath patterns that prime the pineal gland for natural melatonin release, ending dependency on sleeping pills.'
    }
  ];

  const faqs = [
    {
      q: 'How does physical training reduce high executive cortisol and mental burnout?',
      a: 'High-intensity exercise when you are already burned out spikes cortisol higher. Our stress management coaching uses rhythmic somatic mobility, slow eccentric movements, and vagus nerve breathing protocols that signal your parasympathetic nervous system to disengage "fight-or-flight" overdrive.'
    },
    {
      q: 'What techniques are used during these in-home sessions?',
      a: 'Sessions combine diaphragmatic pranayama, thoracic spine decompression, psoas muscle somatic release (where physical stress is stored), targeted mobility flows, and guided restorative Yoga Nidra.'
    },
    {
      q: 'Can this improve chronic insomnia and sleep quality?',
      a: 'Yes. Evening sessions conducted between 6:30 PM and 8:30 PM down-regulate sympathetic arousal, helping clients enter restorative deep Slow-Wave Sleep (SWS) and wake up refreshed without morning brain fog.'
    },
    {
      q: 'Is this only for people suffering from severe anxiety?',
      a: 'Not at all. It is designed for any high-performing individual—founders, attorneys, doctors, corporate directors—who needs to maintain razor-sharp cognitive focus without sacrificing their physical and mental health.'
    },
    {
      q: 'Can I combine stress management with fat loss or strength training?',
      a: 'Yes. Many clients do 2 days of strength/metabolic training and 1-2 days of dedicated nervous system reset and somatic mobility each week.'
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
          <span style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>Stress Management Training</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="page-header-clean" style={{ padding: '60px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '18px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Feather size={15} /> Neuro-Somatic Executive Reset
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 4.2vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px', fontWeight: 800 }}>
                Executive Stress Management & <br />
                <span className="text-gold">Nervous System Reset at Home</span>
              </h1>
              <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
                Break free from chronic cortisol overdrive, brain fog, and restless nights. Our certified coaches deliver scientifically validated somatic mobility, vagus nerve breathing, and restorative decompression directly to your home.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '32px' }}>
                {[
                  'Cortisol Downregulation',
                  'Vagus Nerve Stimulation',
                  'Somatic Muscle Decompression',
                  'Deep Restorative Sleep'
                ].map((pill, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-main)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="var(--brand-gold)" />
                    <span>{pill}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20Executive%20Stress%20Management%20Training%20at%20home.%20Please%20guide%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', fontSize: '15px' }}
                >
                  <MessageCircle size={18} /> Book Decompression Trial
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
                  alt="Restorative breathwork and somatic stress relief coaching at home in Delhi NCR"
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
                  <Moon size={20} color="var(--brand-gold)" />
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)' }}>Parasympathetic Calm</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Over 300+ Executives Reset in Delhi NCR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION MATRIX */}
      <section className="section-surface" style={{ padding: '60px 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--brand-gold)' }}>
              Protocol Blueprint
            </span>
            <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginTop: '8px', fontWeight: 700 }}>
              How Autonomic Reset Operates in Your Home
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {specs.map((spec, i) => (
              <div key={i} className="card-clean" style={{ padding: '22px 24px', borderRadius: '14px' }}>
                <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '6px' }}>
                  {spec.label}
                </div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-main)', lineHeight: 1.4 }}>
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FOUR CLINICAL PILLARS */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 50px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '14px' }}>
              <Heart size={14} /> Neuro-Somatic Science
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', color: 'var(--text-main)', fontWeight: 800, marginBottom: '14px' }}>
              The Four Pillars of Nervous System Restoration
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6 }}>
              We do not treat stress as merely mental. Stress is a profound neuromuscular and hormonal condition stored inside your tissues.
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
                src="/assets/image/ftr-testiminial-shailen.webp"
                alt="Managing Director - Client"
                style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--brand-gold)' }}
              />
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)' }}>Arunav K.</h3>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Tech Founder & CEO • DLF Phase 5, Gurugram</div>
                <div style={{ display: 'flex', gap: '4px', marginTop: '4px', color: '#f59e0b', fontSize: '14px' }}>
                  ★★★★★ <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '6px' }}>Verified Client • 6 Months Reset</span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '16px', color: 'var(--text-body)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '20px' }}>
              “Running a high-growth tech startup meant 14-hour days, constant fire-fighting, and waking up at 3 AM with my heart racing. Regular gym workouts made me feel even more exhausted. Fit4Steps introduced me to their executive somatic reset program. My coach comes to my DLF Phase 5 apartment at 7:30 PM. The breathing drills, neck decompression, and mobility work have brought my resting heart rate down by 11 bpm and I sleep like a baby every single night.”
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '13px', color: 'var(--brand-gold)', fontWeight: 700 }}>
              <span>✓ Resting Heart Rate Reduced by 11 bpm</span>
              <span>✓ 7.5 Hours Uninterrupted Sleep Nightly</span>
              <span>✓ Eliminated Daily Tension Headaches</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
              <HelpCircle size={14} /> Clear Answers
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', color: 'var(--text-main)', fontWeight: 800 }}>
              Frequently Asked Questions About Stress Management
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
            Experience an Autonomic Reset in Your Living Room
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: 1.65, marginBottom: '32px' }}>
            Schedule an introductory 45-minute somatic mobility and vagus nerve decompression trial in Noida, Delhi, or Gurugram. Feel immediate physical ease.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20book%20an%20Executive%20Stress%20Management%20Trial%20at%20home."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ padding: '14px 30px', fontSize: '15px' }}
            >
              <MessageCircle size={18} /> Schedule In-Home Reset Trial
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
