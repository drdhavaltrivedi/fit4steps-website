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
  Briefcase,
  Building,
  Clock,
  Target,
  Sparkles,
  Calendar,
  Layers,
  MapPin,
  HelpCircle,
  ChevronDown,
  TrendingUp,
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Corporate Wellness, Desk Ergonomics & Team Yoga Workshops | Fit4Steps',
  description: 'Enterprise corporate wellness programs, on-site desk posture correction, and team yoga workshops in Noida, Gurugram & Delhi. Reduce absenteeism and employee burnout.',
  keywords: [
    'corporate wellness yoga noida',
    'office fitness training delhi',
    'corporate yoga workshops gurugram',
    'desk posture ergonomics delhi ncr',
    'employee health programs ncr',
    'corporate team building fitness'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/services/corporate-wellness-yoga',
  },
};

export default function CorporateWellnessYogaPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://fit4steps.com/services/corporate-wellness-yoga#service',
        name: 'Corporate Wellness and Team Yoga Workshops',
        serviceType: 'Corporate Health & Ergonomics Consulting',
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
        description: 'Comprehensive corporate wellness, on-site ergonomic posture audits, executive breathwork, and team yoga workshops for companies across Delhi NCR.',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '25000',
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
            name: 'Corporate Wellness & Yoga',
            item: 'https://fit4steps.com/services/corporate-wellness-yoga',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can workshops be delivered on-site at our corporate offices in Delhi NCR?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! We deliver on-site workshops across office tech parks in Noida (Sector 62, Expressway, Sector 16A), Gurugram (DLF Cyber City, Golf Course Road), and Central/South Delhi. We also offer hybrid and virtual sessions for remote/distributed teams.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do employees need to change into gym attire for desk ergonomics workshops?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Not for our signature Desk Ergonomics & Micro-Stretch sessions. These are performed right at employee workstations or in conference rooms in everyday corporate office attire.'
            }
          },
          {
            '@type': 'Question',
            name: 'What measurable business benefits can HR expect from corporate wellness?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Companies partnering with Fit4Steps report measurable reductions in repetitive-strain sick leave, noticeable improvements in afternoon energy and focus, and higher employee retention and morale scores.'
            }
          }
        ]
      }
    ]
  };

  const specs = [
    { label: 'Program Formats', value: 'On-Site Office Workshops, Recurring Weekly Yoga & Virtual Webinars' },
    { label: 'Session Lengths', value: '30-Minute Desk Resets to 60-Minute Comprehensive Masterclasses' },
    { label: 'Cohort Sizes', value: 'Executive Groups (10–25) to Town-Hall Gatherings (100+ Participants)' },
    { label: 'Key Topics', value: 'Cervical Spine Decompression, Vagus Breathwork & Carpal Tunnel Relief' },
    { label: 'Enterprise Reporting', value: 'Attendance Metrics, Ergonomic Risk Scoring & Employee Feedback Reports' },
    { label: 'Locations Covered', value: 'Noida Tech Hubs, Gurugram Cyber City & South/Central Delhi HQ' },
  ];

  const pillars = [
    {
      title: 'Desk Ergonomics & Cervical Spine Decompression',
      desc: 'Hands-on correction of workstation monitor heights, chair lumbar angles, and wrist alignments. Teaches employees 5-minute chair mobility drills to eliminate neck spasms.'
    },
    {
      title: 'Pranayama & Executive Mental Clarity',
      desc: 'Pranayama breath control techniques that counter 3 PM energy crashes, reduce cognitive fatigue, and improve focus during high-pressure deal closures.'
    },
    {
      title: 'Repetitive Strain & Carpal Tunnel Defense',
      desc: 'Targeted wrist flexor/extensor tendon flossing and forearm myofascial releases designed specifically for software engineers, traders, and heavy typing roles.'
    },
    {
      title: '30-Day Inter-Departmental Step Challenges',
      desc: 'Fun, gamified wellness challenges with live team leaderboards that build cross-departmental camaraderie and encourage daily physical activity.'
    }
  ];

  const faqs = [
    {
      q: 'Can workshops be delivered on-site at our corporate offices in Delhi NCR?',
      a: 'Yes! We deliver on-site workshops across office tech parks in Noida (Sector 62, Expressway, Sector 16A), Gurugram (DLF Cyber City, Golf Course Road), and Central/South Delhi. We also offer hybrid and virtual sessions for remote/distributed teams.'
    },
    {
      q: 'Do employees need to change into gym attire for desk ergonomics workshops?',
      a: 'Not for our signature Desk Ergonomics & Micro-Stretch sessions. These are performed right at employee workstations or in conference rooms in everyday corporate office attire.'
    },
    {
      q: 'What measurable business benefits can HR expect from corporate wellness?',
      a: 'Companies partnering with Fit4Steps report measurable reductions in repetitive-strain sick leave, noticeable improvements in afternoon energy and focus, and higher employee retention and morale scores.'
    },
    {
      q: 'Can you customize wellness workshops for specific company health weeks?',
      a: 'Yes. We regularly design keynote sessions and interactive workshops for World Health Day, Mental Health Awareness Month, and internal corporate annual wellness offsites.'
    },
    {
      q: 'How does corporate booking and billing work?',
      a: 'We provide structured corporate GST invoicing, clear SLAs, and customizable retainers (single event, quarterly workshops, or ongoing bi-weekly sessions).'
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
          <span style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>Corporate Wellness & Yoga</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="page-header-clean" style={{ padding: '60px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '18px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Building size={15} /> Enterprise Health & Ergonomics
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 4.2vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px', fontWeight: 800 }}>
                Corporate Wellness & Yoga Workshops <br />
                <span className="text-gold">Noida, Gurugram & Delhi NCR</span>
              </h1>
              <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
                Energize your workforce, eliminate sedentary desk slump, and reduce burnout. We deliver certified ergonomic workstation audits, team yoga sessions, and executive breathwork directly to your offices.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '32px' }}>
                {[
                  'On-Site Tech Park Delivery',
                  'Zero Gym Attire Required',
                  'Measurable Absenteeism Drop',
                  'Customized HR Packages'
                ].map((pill, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-main)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="var(--brand-gold)" />
                    <span>{pill}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20we%20are%20interested%20in%20a%20Corporate%20Wellness%20Proposal%20for%20our%20office."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', fontSize: '15px' }}
                >
                  <MessageCircle size={18} /> Request Corporate Proposal
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
                  src="/assets/image/h-s2-servi-card-img-1.webp"
                  alt="Corporate team wellness and office yoga workshop in Delhi NCR"
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
                  <TrendingUp size={20} color="var(--brand-gold)" />
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)' }}>High Workforce ROI</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Over 40+ Corporate Clients in Delhi NCR</div>
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
              Enterprise Delivery Blueprint
            </span>
            <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginTop: '8px', fontWeight: 700 }}>
              How Fit4Steps Integrates into Corporate Workplaces
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

      {/* 3. FOUR CORE MODULES */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 50px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '14px' }}>
              <Briefcase size={14} /> Core Workshop Modules
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', color: 'var(--text-main)', fontWeight: 800, marginBottom: '14px' }}>
              Customized Corporate Offerings
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6 }}>
              Whether you need a one-time executive wellness session or a recurring bi-weekly team wellness engagement, our certified coaches tailor content to your workplace culture.
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

      {/* 4. REAL HR CASE STUDY */}
      <section className="section-surface" style={{ padding: '80px 0', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="card-clean" style={{ padding: '40px', borderRadius: '24px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
              <img
                src="/assets/image/ftr-testiminial-shruthi.webp"
                alt="VP of HR - Corporate Client"
                style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--brand-gold)' }}
              />
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)' }}>Pooja Mehta</h3>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>VP of Human Resources • IT Enterprise, DLF Cyber City Gurugram</div>
                <div style={{ display: 'flex', gap: '4px', marginTop: '4px', color: '#f59e0b', fontSize: '14px' }}>
                  ★★★★★ <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '6px' }}>Corporate Wellness Partner • 120+ Employees</span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '16px', color: 'var(--text-body)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '20px' }}>
              “Our software development teams in Cyber City were facing noticeable burnout and complaints of cervical neck stiffness from 10-hour screen days. Fit4Steps delivered a 4-week ergonomics and desk-mobility program. The trainers were engaging, professional, and practical. Our employees loved the micro-breaks and breathwork. We saw a 28% drop in ergonomic-related sick leaves within two months!”
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '13px', color: 'var(--brand-gold)', fontWeight: 700 }}>
              <span>✓ 28% Drop in Ergonomic Sick Leaves</span>
              <span>✓ 94% Employee Satisfaction Rating</span>
              <span>✓ Scaled to All NCR Office Locations</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
              <HelpCircle size={14} /> HR & Enterprise FAQs
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', color: 'var(--text-main)', fontWeight: 800 }}>
              Frequently Asked Questions for Corporate Clients
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
            Request a Customized Corporate Wellness Pitch
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: 1.65, marginBottom: '32px' }}>
            Contact our corporate wellness team to receive our full workshop catalog, employee case studies, and customized pricing for your office in Noida, Delhi, or Gurugram.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20we%20would%20like%20to%20discuss%20a%20Corporate%20Wellness%20and%20Yoga%20Proposal%20for%20our%20organization."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ padding: '14px 30px', fontSize: '15px' }}
            >
              <MessageCircle size={18} /> Request Corporate Proposal
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
