import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  Dumbbell,
  ArrowRight,
  MessageCircle,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Flame,
  Zap,
  Award,
  Clock,
  MapPin,
  Calendar,
  Sparkles,
  Users,
  Target,
  Layers,
  ChevronRight,
  HeartPulse,
  PackageCheck,
  Quote,
  Check,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { programsData } from '@/data/programsData';

export function generateStaticParams() {
  return Object.keys(programsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = programsData[slug];
  if (!program) {
    return { title: 'Program Not Found | Fit4Steps' };
  }

  return {
    title: program.metaTitle,
    description: program.metaDescription,
    keywords: program.keywords,
    alternates: {
      canonical: `https://fit4steps.com/programs/${program.slug}`,
    },
    openGraph: {
      title: program.metaTitle,
      description: program.metaDescription,
      url: `https://fit4steps.com/programs/${program.slug}`,
      siteName: 'Fit4Steps Wellness',
      images: [
        {
          url: program.heroImage,
          width: 1200,
          height: 630,
          alt: program.title,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
  };
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programsData[slug];

  if (!program) {
    notFound();
  }

  // Schema.org JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `https://fit4steps.com/programs/${program.slug}#service`,
        name: program.title,
        serviceType: 'In-Home Personal Fitness Coaching',
        description: program.overview[0],
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
          { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
        ],
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
            name: 'Programs',
            item: 'https://fit4steps.com/programs',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: program.title,
            item: `https://fit4steps.com/programs/${program.slug}`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: program.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Fit4Steps, I would like to book a free doorstep assessment and trial session for the "${program.title}" program at my home.`
  );

  return (
    <div>
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION */}
      <section className="page-header-clean" style={{ paddingBottom: '40px' }}>
        <div className="container">
          {/* Breadcrumbs */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            color: 'var(--text-muted)',
            marginBottom: '20px',
            flexWrap: 'wrap'
          }}>
            <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} />
            <Link href="/programs" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Programs</Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>{program.title}</span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Dumbbell size={14} /> {program.badge}
              </div>
              <h1 style={{
                fontSize: 'clamp(32px, 4.2vw, 48px)',
                color: 'var(--text-main)',
                lineHeight: 1.18,
                marginBottom: '18px',
                fontWeight: 800
              }}>
                {program.title} <br />
                <span className="text-gold" style={{ fontSize: '0.85em', fontWeight: 600 }}>
                  {program.heroTagline}
                </span>
              </h1>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {program.overview.slice(0, 2).map((p, idx) => (
                  <p key={idx} style={{ fontSize: '15.5px', color: 'var(--text-body)', lineHeight: 1.7, margin: 0 }}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Conversion Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <a
                  href={`https://wa.me/919999448206?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <MessageCircle size={18} /> Book Free Doorstep Trial
                </a>
                <a
                  href="tel:+919999448206"
                  className="btn btn-outline"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <Phone size={16} /> Call +91 99994 48206
                </a>
              </div>

              {/* Trust Micro-Bullets */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '12px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-subtle)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-main)', fontWeight: 600 }}>
                  <ShieldCheck size={16} color="var(--brand-gold)" /> Certified Bio-Mechanics Coaches
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-main)', fontWeight: 600 }}>
                  <PackageCheck size={16} color="var(--brand-gold)" /> All Equipment Brought to Door
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-main)', fontWeight: 600 }}>
                  <MapPin size={16} color="var(--brand-gold)" /> Noida, Delhi & Gurugram
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-main)', fontWeight: 600 }}>
                  <Sparkles size={16} color="var(--brand-gold)" /> 100% Private In-Home Hygiene
                </div>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div>
              <div className="theme-card" style={{
                overflow: 'hidden',
                borderRadius: '20px',
                boxShadow: 'var(--shadow-md)',
                position: 'relative'
              }}>
                <div style={{ height: '340px', position: 'relative' }}>
                  <img
                    src={program.heroImage}
                    alt={program.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(11, 39, 55, 0.85) 0%, transparent 60%)'
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    color: '#ffffff'
                  }}>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8, marginBottom: '4px' }}>
                      Certified Discipline
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: 700 }}>
                      {program.title}
                    </div>
                  </div>
                </div>

                <div style={{ padding: '24px', background: 'var(--bg-surface)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Typical Burn</div>
                      <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--brand-gold-text)' }}>
                        {program.specs.caloricBurn.split('+')[0]}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Session Length</div>
                      <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)' }}>
                        {program.specs.duration}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Intensity Scale</div>
                      <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-main)' }}>
                        {program.specs.intensity.split('(')[0]}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Coaching Format</div>
                      <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-main)' }}>
                        1-on-1 At Your Home
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLINICAL & TECHNICAL SPECIFICATIONS MATRIX */}
      <section className="section-alt" style={{ padding: '40px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 32px' }}>
            <span className="badge badge-navy" style={{ marginBottom: '8px' }}>At a Glance</span>
            <h2 style={{ fontSize: '26px', color: 'var(--text-main)', fontWeight: 700 }}>
              Program Technical & Delivery Specifications
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            <div className="card-clean">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <Clock size={18} color="var(--brand-gold)" />
                <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600 }}>Session Duration</span>
              </div>
              <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-main)' }}>{program.specs.duration}</div>
              <p style={{ fontSize: '12.5px', color: 'var(--text-body)', margin: '6px 0 0' }}>Includes warmup, main loading, and assisted PNF stretches.</p>
            </div>

            <div className="card-clean">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <Activity size={18} color="var(--brand-gold)" />
                <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600 }}>Intensity Spectrum</span>
              </div>
              <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-main)' }}>{program.specs.intensity}</div>
              <p style={{ fontSize: '12.5px', color: 'var(--text-body)', margin: '6px 0 0' }}>Regulated in real-time according to client biometric feedback.</p>
            </div>

            <div className="card-clean">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <Flame size={18} color="var(--brand-gold)" />
                <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600 }}>Energy Expenditure</span>
              </div>
              <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-main)' }}>{program.specs.caloricBurn}</div>
              <p style={{ fontSize: '12.5px', color: 'var(--text-body)', margin: '6px 0 0' }}>Sustained metabolic elevation beyond active workout time.</p>
            </div>

            <div className="card-clean">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <Award size={18} color="var(--brand-gold)" />
                <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600 }}>Trainer Accreditation</span>
              </div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)' }}>{program.specs.trainerCredentials}</div>
              <p style={{ fontSize: '12.5px', color: 'var(--text-body)', margin: '6px 0 0' }}>Background-checked, certified, and trained in clinical prehab.</p>
            </div>

            <div className="card-clean">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <PackageCheck size={18} color="var(--brand-gold)" />
                <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600 }}>Equipment Provided</span>
              </div>
              <div style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--text-main)', lineHeight: 1.4 }}>{program.specs.equipmentProvided}</div>
              <p style={{ fontSize: '12.5px', color: 'var(--text-body)', margin: '6px 0 0' }}>Brought directly to your home and sanitized before each use.</p>
            </div>

            <div className="card-clean">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <MapPin size={18} color="var(--brand-gold)" />
                <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600 }}>Active Service Regions</span>
              </div>
              <div style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--text-main)', lineHeight: 1.4 }}>{program.specs.locations}</div>
              <p style={{ fontSize: '12.5px', color: 'var(--text-body)', margin: '6px 0 0' }}>On-time doorstep arrival across all major residential sectors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SCIENTIFIC & PHYSIOLOGICAL PILLARS */}
      <section className="section-page">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 40px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '8px' }}>Exercise Physiology</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', color: 'var(--text-main)', fontWeight: 800 }}>
              The Biomedical Science Behind {program.title}
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--text-body)', lineHeight: 1.6, marginTop: '12px' }}>
              Every movement protocol in this discipline is engineered around clinical exercise science principles to maximize cellular adaptation and minimize joint wear.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {program.scientificPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="theme-card"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '16px'
                }}
              >
                <div>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(212, 175, 55, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--brand-gold-text)',
                    fontWeight: 700,
                    marginBottom: '16px',
                    fontSize: '14px'
                  }}>
                    0{idx + 1}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    color: 'var(--brand-gold-text)',
                    fontWeight: 700,
                    letterSpacing: '0.8px',
                    marginBottom: '6px'
                  }}>
                    {pillar.scientificConcept}
                  </div>
                  <h3 style={{ fontSize: '19px', color: 'var(--text-main)', fontWeight: 700, marginBottom: '12px' }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.65, margin: 0 }}>
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 60-MINUTE SESSION ARCHITECTURE */}
      <section className="section-alt" style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 44px' }}>
            <span className="badge badge-navy" style={{ marginBottom: '8px' }}>Session Blueprint</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', color: 'var(--text-main)', fontWeight: 800 }}>
              Anatomy of a Standard 60-Minute Home Session
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--text-body)', lineHeight: 1.6, marginTop: '12px' }}>
              Unlike unsupervised workouts, every minute of our 1-on-1 doorstep session follows a synchronized 5-segment structure for optimal safety and output.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '860px', margin: '0 auto' }}>
            {program.sessionBreakdown.map((phase, idx) => (
              <div
                key={idx}
                className="card-clean"
                style={{
                  padding: '24px',
                  display: 'grid',
                  gridTemplateColumns: 'minmax(140px, 180px) 1fr',
                  gap: '24px',
                  alignItems: 'flex-start'
                }}
              >
                <div>
                  <div className="badge badge-gold" style={{ marginBottom: '6px', fontSize: '11.5px' }}>
                    {phase.phase}
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--brand-gold-text)' }}>
                    {phase.duration}
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: '18px', color: 'var(--text-main)', fontWeight: 700, marginBottom: '8px' }}>
                    {phase.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '14px' }}>
                    {phase.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    {phase.exercises.map((ex, exIdx) => (
                      <span
                        key={exIdx}
                        style={{
                          fontSize: '12px',
                          background: 'var(--bg-main)',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          color: 'var(--text-main)',
                          border: '1px solid var(--border-subtle)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px'
                        }}
                      >
                        <Check size={12} color="var(--brand-gold)" /> {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 12-WEEK PERIODIZATION ROADMAP */}
      <section className="section-page">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '8px' }}>Progression Timeline</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', color: 'var(--text-main)', fontWeight: 800 }}>
              12-Week Physiological Adaptation Roadmap
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--text-body)', lineHeight: 1.6, marginTop: '12px' }}>
              Random workouts yield random results. Our periodized roadmap delivers progressive overload while steadily conditioning your nervous system and connective tissue.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px'
          }}>
            {program.periodizationRoadmap.map((road, idx) => (
              <div
                key={idx}
                className="theme-card"
                style={{
                  padding: '28px',
                  borderRadius: '16px',
                  borderTop: '4px solid var(--brand-gold)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span className="badge badge-navy">{road.phase}</span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--brand-gold-text)' }}>{road.weeks}</span>
                </div>
                <h3 style={{ fontSize: '19px', color: 'var(--text-main)', fontWeight: 700, marginBottom: '8px' }}>
                  {road.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '18px' }}>
                  {road.focus}
                </p>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '14px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Target Milestones
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {road.milestones.map((m, mIdx) => (
                      <div key={mIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--text-main)' }}>
                        <CheckCircle2 size={15} color="var(--brand-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHO THIS PROGRAM IS DESIGNED FOR */}
      <section className="section-alt" style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <span className="badge badge-navy" style={{ marginBottom: '8px' }}>Target Demographics</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', color: 'var(--text-main)', fontWeight: 800 }}>
              Is {program.title} Right for You?
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--text-body)', lineHeight: 1.6, marginTop: '12px' }}>
              We adapt this discipline across diverse lifestyles, clinical conditions, and physical baselines throughout Delhi NCR.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            {program.whoItIsFor.map((aud, idx) => (
              <div
                key={idx}
                className="card-clean"
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <Users size={18} color="var(--brand-gold)" />
                    <h3 style={{ fontSize: '17px', color: 'var(--text-main)', fontWeight: 700, margin: 0 }}>
                      {aud.profile}
                    </h3>
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: 'var(--brand-gold-text)',
                    fontWeight: 700,
                    marginBottom: '10px'
                  }}>
                    {aud.tagline}
                  </div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
                    {aud.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. VERIFIED DELHI NCR CLIENT OUTCOME (CASE STUDY) */}
      <section className="section-page">
        <div className="container">
          <div className="theme-card" style={{
            padding: '36px',
            borderRadius: '20px',
            boxShadow: 'var(--shadow-md)',
            background: 'var(--bg-surface)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              alignItems: 'center'
            }}>
              <div>
                <div className="badge badge-gold" style={{ marginBottom: '12px' }}>
                  <Award size={14} /> Verified Case Study
                </div>
                <h3 style={{ fontSize: '24px', color: 'var(--text-main)', fontWeight: 800, marginBottom: '6px' }}>
                  {program.caseStudy.clientName} ({program.caseStudy.age} Yrs)
                </h3>
                <div style={{ fontSize: '14px', color: 'var(--brand-gold-text)', fontWeight: 600, marginBottom: '16px' }}>
                  {program.caseStudy.occupation} • {program.caseStudy.location}
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '4px' }}>
                    Baseline Challenge
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
                    {program.caseStudy.initialCondition}
                  </p>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '4px' }}>
                    Clinical Intervention
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
                    {program.caseStudy.intervention}
                  </p>
                </div>

                <div style={{
                  padding: '16px',
                  borderRadius: '12px',
                  background: 'var(--bg-main)',
                  borderLeft: '4px solid var(--brand-gold)',
                  fontStyle: 'italic',
                  fontSize: '14px',
                  color: 'var(--text-main)',
                  lineHeight: 1.6
                }}>
                  "{program.caseStudy.quote}"
                </div>
              </div>

              <div>
                <div style={{
                  padding: '24px',
                  borderRadius: '16px',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-subtle)'
                }}>
                  <h4 style={{ fontSize: '16px', color: 'var(--text-main)', fontWeight: 700, marginBottom: '16px' }}>
                    Documented 12-Week Results:
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {program.caseStudy.results.map((res, rIdx) => (
                      <div key={rIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle2 size={18} color="var(--brand-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '14.5px', color: 'var(--text-main)', fontWeight: 600 }}>
                          {res}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', textAlign: 'center' }}>
                    <a
                      href={`https://wa.me/919999448206?text=${encodeURIComponent(`Hi Fit4Steps, I read about the results of ${program.caseStudy.clientName} for the ${program.title} program. I'd like to book a consultation.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gold"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <MessageCircle size={16} /> Consult About Your Goals
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. EQUIPMENT GUARANTEE (WHAT WE BRING VS WHAT YOU NEED) */}
      <section className="section-alt" style={{ padding: '50px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            <div className="card-clean" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <PackageCheck size={22} color="var(--brand-gold)" />
                <h3 style={{ fontSize: '18px', color: 'var(--text-main)', fontWeight: 700, margin: 0 }}>
                  What Your Fit4Steps Trainer Brings
                </h3>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '16px' }}>
                Zero equipment purchase required from your end. We bring sanitized, commercial-grade tools directly to your doorstep:
              </p>
              <div style={{
                padding: '14px',
                borderRadius: '10px',
                background: 'var(--bg-main)',
                fontSize: '13.5px',
                color: 'var(--text-main)',
                fontWeight: 600,
                lineHeight: 1.5,
                border: '1px solid var(--border-subtle)'
              }}>
                {program.specs.equipmentProvided}
              </div>
            </div>

            <div className="card-clean" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <CheckCircle2 size={22} color="var(--brand-gold)" />
                <h3 style={{ fontSize: '18px', color: 'var(--text-main)', fontWeight: 700, margin: 0 }}>
                  What Your Home Needs
                </h3>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '16px' }}>
                You do not need a home gym. Standard living room or bedroom conditions are completely sufficient:
              </p>
              <div style={{
                padding: '14px',
                borderRadius: '10px',
                background: 'var(--bg-main)',
                fontSize: '13.5px',
                color: 'var(--text-main)',
                fontWeight: 600,
                lineHeight: 1.5,
                border: '1px solid var(--border-subtle)'
              }}>
                {program.specs.homeRequirements}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CLINICAL & PRACTICAL FAQS */}
      <section className="section-surface" style={{ padding: '80px 0', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <HelpCircle size={14} /> Frequently Asked Questions
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', color: 'var(--text-main)', fontWeight: 800 }}>
              Got Questions About {program.title}?
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {program.faqs.map((faq, i) => (
              <details
                key={i}
                name="program-faq"
                className="theme-card"
                open={i === 0}
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
                <p style={{ marginTop: '14px', fontSize: '14.5px', color: 'var(--text-body)', lineHeight: 1.7, margin: '14px 0 0' }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SYNERGISTIC PROGRAM PAIRINGS (CROSS-LINKING) */}
      <section className="section-alt" style={{ padding: '50px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px' }}>
            <span className="badge badge-navy" style={{ marginBottom: '8px' }}>Cross-Disciplinary Synergies</span>
            <h2 style={{ fontSize: '24px', color: 'var(--text-main)', fontWeight: 700 }}>
              Recommended Companion Programs
            </h2>
            <p style={{ fontSize: '14.5px', color: 'var(--text-body)', marginTop: '6px' }}>
              Pair {program.title} with these complementary disciplines for balanced recovery, flexibility, and longevity.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {program.synergisticPrograms.map((syn, idx) => (
              <div
                key={idx}
                className="card-clean"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '24px'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '17px', color: 'var(--text-main)', fontWeight: 700, marginBottom: '6px' }}>
                    {syn.title}
                  </h3>
                  <div style={{ fontSize: '12.5px', color: 'var(--brand-gold-text)', fontWeight: 600, marginBottom: '10px' }}>
                    {syn.tagline}
                  </div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
                    {syn.synergyReason}
                  </p>
                </div>

                <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
                  <Link
                    href={`/programs/${syn.slug}`}
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--brand-gold)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      textDecoration: 'none'
                    }}
                  >
                    View Companion Program <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL HIGH-CONVERSION CTA */}
      <section className="section-padding" style={{ textAlign: 'center', background: 'var(--bg-main)' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Sparkles size={14} /> Doorstep Trial Available
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text-main)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>
            Experience {program.title} in Your Home
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.7, marginBottom: '32px' }}>
            Book a 1-on-1 trial session across Noida, Delhi, or Gurugram. Your certified coach arrives with sanitized equipment, ready to conduct an initial movement and posture screen.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/919999448206?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', fontSize: '15px' }}
            >
              <MessageCircle size={18} /> Book Doorstep Trial on WhatsApp
            </a>
            <Link
              href="/programs"
              className="btn btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 24px', fontSize: '15px' }}
            >
              Explore All 12 Programs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
