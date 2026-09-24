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
  title: 'In-Home Knee Pain Therapy & Joint Restoration in Delhi NCR | Fit4Steps',
  description: 'Specialized in-home knee pain rehabilitation and joint restoration in Noida, Delhi & Gurugram. Proven protocols helping seniors avoid knee replacement surgery through non-weight-bearing VMO strengthening.',
  keywords: [
    'joint restoration knee pain therapy',
    'knee pain exercises therapy noida',
    'avoid knee replacement exercise delhi',
    'osteoarthritis knee therapy at home',
    'knee joint strengthening seniors gurugram',
    'vmo muscle strengthening at home'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/senior-fitness/knee-therapy',
  },
};

export default function KneeTherapyPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://fit4steps.com/senior-fitness/knee-therapy#service',
        name: 'In-Home Knee Pain Therapy & Joint Restoration',
        serviceType: 'Geriatric Orthopedic & Joint Rehabilitation Therapy',
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
        description: 'Clinically proven in-home knee pain restoration therapy for senior citizens across Delhi NCR. Strengthens Vastus Medialis Oblique (VMO), promotes synovial fluid flow, and helps prevent knee replacement surgery.',
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
            item: 'https://fit4steps.com/fitness-training-program-for-senior-citizens',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Knee Therapy & Joint Restoration',
            item: 'https://fit4steps.com/senior-fitness/knee-therapy',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can targeted knee therapy really help avoid knee replacement surgery (TKR)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In many cases of Grade 1, 2, and moderate Grade 3 osteoarthritis, yes! When knee cartilage thins, pain occurs because weak quadriceps allow bone surfaces to grind. By strengthening the Vastus Medialis Oblique (VMO) and stabilizing the hip abductors, the joint space is decompressed and shock absorption is restored.'
            }
          },
          {
            '@type': 'Question',
            name: 'Will my senior parent experience pain during the exercises?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Our golden rule is "Zero Compressive Pain." All initial phases are performed strictly non-weight-bearing (lying on a comfortable bed or seated in a supportive chair) using isometric muscle contractions that never load the damaged cartilage.'
            }
          },
          {
            '@type': 'Question',
            name: 'How do you coordinate with our orthopedic doctor?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We thoroughly review your doctor’s X-ray/MRI reports and orthopedist instructions before commencing. We maintain a detailed joint angle and mobility log that you can present to your doctor during follow-up consultations.'
            }
          }
        ]
      }
    ]
  };

  const specs = [
    { label: 'Clinical Target', value: 'Osteoarthritis (Grade 1–3), Patellofemoral Pain, Meniscus Tears' },
    { label: 'Biomechanical Focus', value: 'Non-Weight-Bearing VMO Strengthening & Joint Decompression' },
    { label: 'Session Length', value: '45 to 55 Minutes with Assisted Gentle Traction Stretches' },
    { label: 'Safety Mandate', value: 'Zero Weight Compression on Damaged Cartilage' },
    { label: 'Orthopedic Review', value: 'Pre-Screening of Knee X-Ray & MRI Scans' },
    { label: 'Coverage Area', value: 'Noida Sectors, South Delhi & Gurugram DLF / Golf Course' },
  ];

  const roadmap = [
    {
      step: '01',
      title: 'Joint Decompression & Synovial Fluid Stimulation',
      timeline: 'Weeks 1 – 2',
      desc: 'Gentle passive knee distraction and ankle pumping to encourage synovial joint fluid circulation. Relieves agonizing morning stiffness without standing impact.'
    },
    {
      step: '02',
      title: 'Non-Weight-Bearing Isometric VMO Strengthening',
      timeline: 'Weeks 3 – 5',
      desc: 'Seated terminal knee extensions, towel-under-knee press downs, and straight leg raises lying on the bed. Rebuilds the vastus medialis oblique muscle without joint friction.'
    },
    {
      step: '03',
      title: 'Pelvic & Hip Abductor Stabilization',
      timeline: 'Weeks 6 – 9',
      desc: 'Weak hips cause the knee to collapse inward (valgus collapse), accelerating inner cartilage wear. We strengthen the gluteus medius with side-lying clam shells and light loop resistance.'
    },
    {
      step: '04',
      title: 'Functional Closed-Kinetic Gait & Stair Mobility',
      timeline: 'Weeks 10+',
      desc: 'Progressing to supported chair-to-stand transfers, single-step stair ascents, and walking stability drills with zero wobble or fear of falling.'
    }
  ];

  const faqs = [
    {
      q: 'Can targeted knee therapy really help avoid knee replacement surgery (TKR)?',
      a: 'In many cases of Grade 1, 2, and moderate Grade 3 osteoarthritis, yes! When knee cartilage thins, pain occurs because weak quadriceps allow bone surfaces to grind. By strengthening the Vastus Medialis Oblique (VMO) and stabilizing the hip abductors, the joint space is decompressed and shock absorption is restored.'
    },
    {
      q: 'Will my senior parent experience pain during the exercises?',
      a: 'No. Our golden rule is "Zero Compressive Pain." All initial phases are performed strictly non-weight-bearing (lying on a comfortable bed or seated in a supportive chair) using isometric muscle contractions that never load the damaged cartilage.'
    },
    {
      q: 'How do you coordinate with our orthopedic doctor?',
      a: 'We thoroughly review your doctor’s X-ray/MRI reports and orthopedist instructions before commencing. We maintain a detailed joint angle and mobility log that you can present to your doctor during follow-up consultations.'
    },
    {
      q: 'My parent has severe pain climbing stairs. Can this help?',
      a: 'Yes. Stair climbing places 3.5 to 4 times body weight onto the patella. By re-conditioning the eccentric control of the quadriceps and calves, we teach seniors the safe biomechanical pattern to negotiate stairs pain-free.'
    },
    {
      q: 'How many sessions per week are recommended for knee restoration?',
      a: 'We typically recommend 3 sessions per week with 48 hours of recovery between sessions, combined with gentle 5-minute morning mobility exercises that the coach teaches for non-training days.'
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
          <span style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>Knee Pain Therapy</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="page-header-clean" style={{ padding: '60px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '18px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Stethoscope size={15} /> Non-Surgical Joint Restoration Protocol
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 4.2vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px', fontWeight: 800 }}>
                In-Home Knee Pain Therapy & <br />
                <span className="text-gold">Joint Restoration for Seniors</span>
              </h1>
              <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
                Chronic knee stiffness and osteoarthritis shouldn’t force you into premature knee replacement surgery. Our gentle in-home joint restoration protocol decompresses the joint space and strengthens supporting musculature.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '32px' }}>
                {[
                  'Avoid Knee Replacement',
                  'Zero Compressive Pain Rule',
                  'Strengthens VMO Muscle',
                  'Doorstep Doctor-Aligned Care'
                ].map((pill, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-main)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="var(--brand-gold)" />
                    <span>{pill}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20In-Home%20Knee%20Pain%20Therapy%20for%20myself%20or%20my%20parent.%20Please%20guide%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', fontSize: '15px' }}
                >
                  <MessageCircle size={18} /> Book Knee Mobility Assessment
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
                  alt="Senior citizen knee pain joint restoration therapy at home in Delhi NCR"
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
                  <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)' }}>84% Avoided Surgery</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Over 400+ Seniors Restored Across Delhi NCR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION MATRIX */}
      <SpecsMatrix
        badge="Clinical Specifications"
        title="The Anatomy of Our Non-Invasive Knee Protocol"
        subtitle="Specialized VMO strengthening and joint decompression to restore pain-free walking."
        specs={specs}
      />

      {/* 3. 4-PHASE ROADMAP */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 50px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '14px' }}>
              <Layers size={14} /> Four-Phase Clinical Pathway
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', color: 'var(--text-main)', fontWeight: 800, marginBottom: '14px' }}>
              From Crippling Stiffness to Confident Walking
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6 }}>
              We rebuild the muscular shock absorbers surrounding the knee capsule before placing any weight upon it.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {roadmap.map((item, idx) => (
              <div key={idx} className="theme-card" style={{ padding: '28px 24px', borderRadius: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '32px', fontWeight: 900, color: 'var(--brand-gold)', opacity: 0.9 }}>
                    {item.step}
                  </span>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    background: 'var(--brand-gold-soft)',
                    color: 'var(--brand-gold-text)',
                    padding: '4px 10px',
                    borderRadius: '8px'
                  }}>
                    {item.timeline}
                  </span>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REAL PATIENT TESTIMONIAL */}
      <section className="section-surface" style={{ padding: '80px 0', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="card-clean" style={{ padding: '40px', borderRadius: '24px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
              <img
                src="/assets/image/ftr-testiminial-padmaja.webp"
                alt="Padmaja Nair - Senior Knee Patient"
                style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--brand-gold)' }}
              />
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)' }}>Padmaja Nair (67 yrs)</h3>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Osteoarthritis Grade 3 • Vasant Vihar, South Delhi</div>
                <div style={{ display: 'flex', gap: '4px', marginTop: '4px', color: '#f59e0b', fontSize: '14px' }}>
                  ★★★★★ <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '6px' }}>Avoided Surgery • 1 Year Pain-Free</span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '16px', color: 'var(--text-body)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '20px' }}>
              “Two orthopedic surgeons in Delhi had advised immediate bilateral total knee replacement. I could barely climb the five steps into my home without agonizing pain and swelling. My daughter contacted Fit4Steps. The trainer visited our home three times a week, working on gentle VMO activation and hip mobility without ever forcing me into painful squats. Within 12 weeks, my swelling subsided completely. Today, one year later, I walk 40 minutes every morning in the park completely pain-free and without any surgery!”
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '13px', color: 'var(--brand-gold)', fontWeight: 700 }}>
              <span>✓ Successfully Cancelled Knee Surgery</span>
              <span>✓ Climbs Stairs Without Assistance</span>
              <span>✓ Daily 40-Minute Morning Walks Restored</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
              <HelpCircle size={14} /> Clinical FAQs
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', color: 'var(--text-main)', fontWeight: 800 }}>
              Frequently Asked Questions About Knee Pain Therapy
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
            Schedule an In-Home Knee Assessment
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: 1.65, marginBottom: '32px' }}>
            Our senior orthopedic restoration specialist visits your parent’s home in Noida, Delhi, or Gurugram. We test joint range of motion, evaluate walking gait, and explain exactly how our non-invasive protocol works.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20schedule%20an%20In-Home%20Knee%20Assessment%20for%20my%20parent."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ padding: '14px 30px', fontSize: '15px' }}
            >
              <MessageCircle size={18} /> Schedule Doorstep Knee Assessment
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
