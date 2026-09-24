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
  HeartPulse,
  Activity,
  Target,
  Sparkles,
  Calendar,
  Layers,
  MapPin,
  HelpCircle,
  ChevronDown,
  Stethoscope
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Corrective Exercise for Lifestyle Diseases in Delhi NCR | Fit4Steps',
  description: 'Evidence-based in-home medical fitness training for Type 2 Diabetes, Hypertension, Cervical Spondylosis, and Slipped Disc in Noida, Delhi & Gurugram.',
  keywords: [
    'corrective exercise for lifestyle diseases delhi',
    'diabetes workout trainer at home noida',
    'cervical spondylosis exercise coach',
    'slipped disc personal trainer gurugram',
    'medical fitness trainer at home delhi ncr',
    'hypertension exercise therapy'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/services/corrective-exercise-lifestyle-diseases',
  },
};

export default function CorrectiveExerciseLifestyleDiseasesPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://fit4steps.com/services/corrective-exercise-lifestyle-diseases#service',
        name: 'Corrective Exercise for Lifestyle Diseases',
        serviceType: 'Clinical & Corrective Exercise Therapy',
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
        description: 'Doctor-aligned in-home corrective exercise conditioning for individuals managing Type 2 Diabetes, Hypertension, Cervical Spondylosis, and Lumbar Disc Bulges in Delhi NCR.',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '9500',
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
            name: 'Corrective Exercise for Lifestyle Diseases',
            item: 'https://fit4steps.com/services/corrective-exercise-lifestyle-diseases',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can exercise truly lower blood sugar in Type 2 Diabetes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Skeletal muscle contractions stimulate the translocation of GLUT-4 glucose transporters to muscle cell surfaces independent of insulin. This allows your muscles to clear circulating blood glucose during and up to 24 hours after a workout, significantly improving HbA1c levels.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is it safe to exercise with an L4-L5 or L5-S1 lumbar disc bulge?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, when guided by corrective exercise specialists. We eliminate high-risk spinal flexion and loaded twisting. Instead, we use McGill Big-3 stabilization protocols, hip hinge patterning, and decompression stretches that relieve nerve compression.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do you coordinate with my personal physician or cardiologist?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We review your physician’s medical reports, monitor pre-and-post session vitals (blood pressure and blood sugar logs), and operate strictly within prescribed clinical exertion thresholds.'
            }
          }
        ]
      }
    ]
  };

  const specs = [
    { label: 'Clinical Focus', value: 'Type 2 Diabetes, Hypertension, Spondylosis, Lumbar Disc Herniation' },
    { label: 'Trainer Credentials', value: 'Corrective Exercise Specialists (CES) & Medical Fitness Certified' },
    { label: 'Vital Monitoring', value: 'Pre- & Post-Session Blood Pressure, Heart Rate & Perceived Exertion (RPE)' },
    { label: 'Equipment Deployed', value: 'Low-Impact Resistance Bands, Balance Discs, Decompression Rollers' },
    { label: 'Physician Alignment', value: 'Structured Progress Logs Shared with Your Primary Care Doctor' },
    { label: 'Coverage Area', value: 'All Major Sectors in Noida, South/Central Delhi & Gurugram' },
  ];

  const conditions = [
    {
      condition: 'Type 2 Diabetes & Insulin Resistance',
      mechanism: 'GLUT-4 Translocation & Glycogen Depletion',
      desc: 'Targeted resistance sets activate large muscle groups (quadriceps, glutes, latissimus dorsi) to clear blood glucose naturally without stressing beta cells.'
    },
    {
      condition: 'Hypertension & Cardiovascular Strain',
      mechanism: 'Endothelial Nitric Oxide & Vascular Compliance',
      desc: 'Controlled low-intensity steady-state movement and non-Valsalva breathing techniques that gently lower peripheral arterial resistance.'
    },
    {
      condition: 'Cervical & Lumbar Spondylosis',
      mechanism: 'Deep Neck Flexor & Thoracic Spine Decompression',
      desc: 'Restores cervical alignment, relieves occipital tension headaches, and eliminates chronic shoulder pinching caused by prolonged desk slouching.'
    },
    {
      condition: 'Lumbar Disc Bulge (L4-L5 / L5-S1)',
      mechanism: 'McGill Core Stabilization & Glute Activation',
      desc: 'Re-activates dormant glute muscles so the hip takes the mechanical bending load, completely protecting vulnerable spinal discs from herniation flare-ups.'
    }
  ];

  const faqs = [
    {
      q: 'Can exercise truly lower blood sugar in Type 2 Diabetes?',
      a: 'Yes. Skeletal muscle contractions stimulate the translocation of GLUT-4 glucose transporters to muscle cell surfaces independent of insulin. This allows your muscles to clear circulating blood glucose during and up to 24 hours after a workout, significantly improving HbA1c levels.'
    },
    {
      q: 'Is it safe to exercise with an L4-L5 or L5-S1 lumbar disc bulge?',
      a: 'Yes, when guided by corrective exercise specialists. We eliminate high-risk spinal flexion and loaded twisting. Instead, we use McGill Big-3 stabilization protocols, hip hinge patterning, and decompression stretches that relieve nerve compression.'
    },
    {
      q: 'Do you coordinate with my personal physician or cardiologist?',
      a: 'Yes. We review your physician’s medical reports, monitor pre-and-post session vitals (blood pressure and blood sugar logs), and operate strictly within prescribed clinical exertion thresholds.'
    },
    {
      q: 'Can corrective exercise help reduce my dependency on prescription medication?',
      a: 'Over several months of sustained corrective training, improved insulin sensitivity and lower vascular resistance frequently allow doctors to titrate diabetes and blood pressure medications downward under their medical supervision.'
    },
    {
      q: 'What if I experience sudden pain or dizziness during a session?',
      a: 'Our trainers are certified in medical fitness and CPR/AED. Sessions immediately pause for vitals check if heart rate or blood pressure deviates from safe parameters.'
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
          <span style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>Corrective Exercise</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="page-header-clean" style={{ padding: '60px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '18px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Stethoscope size={15} /> Clinical-Grade Home Fitness
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 4.2vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px', fontWeight: 800 }}>
                Corrective Exercise for Lifestyle Diseases <br />
                <span className="text-gold">Noida, Delhi & Gurugram</span>
              </h1>
              <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
                Medical condition management without dangerous gym workouts. Certified corrective exercise specialists visit your home to safely manage Diabetes, Hypertension, Spondylosis, and Slipped Discs with clinical precision.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '32px' }}>
                {[
                  'Physician-Aligned Regimens',
                  'Vital Signs Monitoring',
                  'Disc Decompression Protocols',
                  'Insulin-Sensitivity Focus'
                ].map((pill, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-main)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="var(--brand-gold)" />
                    <span>{pill}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20Corrective%20Exercise%20for%20a%20medical%20condition.%20Please%20guide%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', fontSize: '15px' }}
                >
                  <MessageCircle size={18} /> Book Medical Fitness Trial
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
                  src="/assets/image/senior-joint-therapy.jpg"
                  alt="Corrective exercise and joint decompression at home in Delhi NCR"
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
                  <HeartPulse size={20} color="var(--brand-gold)" />
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)' }}>Clinical Exercise Science</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Over 400+ Patients Restored Safely</div>
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
              Clinical Framework
            </span>
            <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginTop: '8px', fontWeight: 700 }}>
              At a Glance: Medical Fitness Protocols
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

      {/* 3. FOUR CLINICAL CONDITIONS */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 50px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '14px' }}>
              <Activity size={14} /> Targeted Pathologies
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', color: 'var(--text-main)', fontWeight: 800, marginBottom: '14px' }}>
              Conditions We Manage With Precision
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6 }}>
              Generic gym workouts often trigger acute disc herniations or hypertensive spikes. We apply precise kinesiological science to rebuild bodily function safely.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {conditions.map((item, idx) => (
              <div key={idx} className="theme-card" style={{ padding: '32px 26px', borderRadius: '18px' }}>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  background: 'var(--brand-gold-soft)',
                  color: 'var(--brand-gold-text)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  display: 'inline-block',
                  marginBottom: '12px'
                }}>
                  {item.mechanism}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>
                  {item.condition}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.65 }}>
                  {item.desc}
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
                src="/assets/image/ftr-testiminial-mukundan.webp"
                alt="Mukundan - Corrective Exercise Client"
                style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--brand-gold)' }}
              />
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)' }}>K. Mukundan (56 yrs)</h3>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Managing Type 2 Diabetes & L5-S1 Disc Bulge • Noida Expressway</div>
                <div style={{ display: 'flex', gap: '4px', marginTop: '4px', color: '#f59e0b', fontSize: '14px' }}>
                  ★★★★★ <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '6px' }}>Verified Client • 9 Months Training</span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '16px', color: 'var(--text-body)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '20px' }}>
              “My fasting blood sugar was consistently 170+ mg/dL and I had shooting nerve pain down my left leg from an L5-S1 disc bulge. Commercial trainers in Noida kept asking me to do heavy leg presses, which aggravated my back severely. Fit4Steps changed everything. The trainer checks my BP and sugar before every session, uses isometric core stabilizing drills, and within 4 months, my HbA1c dropped from 8.4 to 6.6 with zero disc pain!”
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '13px', color: 'var(--brand-gold)', fontWeight: 700 }}>
              <span>✓ HbA1c Dropped from 8.4 to 6.6</span>
              <span>✓ Zero Sciatic Nerve Flare-ups</span>
              <span>✓ Doctor Reduced Diabetes Medication</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
              <HelpCircle size={14} /> Medical Fitness FAQs
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', color: 'var(--text-main)', fontWeight: 800 }}>
              Frequently Asked Questions About Corrective Training
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
            Consult Our Medical Fitness Specialist
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: 1.65, marginBottom: '32px' }}>
            Let our corrective exercise team review your recent medical lab reports and MRI findings to formulate a completely risk-free in-home movement strategy.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20consult%20a%20Corrective%20Exercise%20Specialist%20for%20my%20medical%20condition."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ padding: '14px 30px', fontSize: '15px' }}
            >
              <MessageCircle size={18} /> Schedule Medical Fitness Trial
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
