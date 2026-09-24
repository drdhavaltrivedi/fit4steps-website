import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Heart,
  Dumbbell,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  Activity,
  Briefcase,
  Home,
  UserCheck,
  Feather,
  Globe,
  Stethoscope,
  Smile,
  Sparkles,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'In-Home Personal Fitness & Wellness Services in Delhi NCR | Fit4Steps',
  description: 'Explore Fit4Steps comprehensive in-home personal fitness services in Noida, Delhi & Gurugram: Senior Citizen Joint Therapy, 1-on-1 Personal Training, Female Trainers, Couple Fitness, Kids Functional Training & Corporate Wellness.',
  keywords: [
    'fit4steps services noida',
    'in-home personal training delhi',
    'lady fitness trainers gurugram',
    'senior citizen joint restoration',
    'prenatal yoga home delhi ncr',
    'couple workout at home noida',
    'kids fitness trainer delhi',
    'corporate wellness noida'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/services',
  },
};

export default function ServicesPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Fit4Steps In-Home Fitness & Wellness Services',
    description: 'Comprehensive directory of in-home personal training, senior joint therapy, and specialized wellness programs across Delhi NCR.',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Senior Citizen Training & Joint Restoration Therapy',
        url: 'https://fit4steps.com/senior-fitness',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '1-on-1 Personal Training at Home',
        url: 'https://fit4steps.com/services/personal-training-at-home',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Certified Female Fitness Trainers',
        url: 'https://fit4steps.com/services/female-fitness-trainers',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Couple & Partner Fitness Training',
        url: 'https://fit4steps.com/services/couple-training',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Functional Training for Kids & Teens',
        url: 'https://fit4steps.com/services/kids-fitness-functional-training',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Prenatal & Postnatal Yoga Therapy',
        url: 'https://fit4steps.com/services/prenatal-postnatal-yoga',
      },
      {
        '@type': 'ListItem',
        position: 7,
        name: 'Corrective Exercise for Lifestyle Diseases',
        url: 'https://fit4steps.com/services/corrective-exercise-lifestyle-diseases',
      },
      {
        '@type': 'ListItem',
        position: 8,
        name: 'Executive Stress Management & Autonomic Reset',
        url: 'https://fit4steps.com/services/stress-management-training',
      },
      {
        '@type': 'ListItem',
        position: 9,
        name: 'Personalized 1-on-1 Online Training',
        url: 'https://fit4steps.com/services/personalized-online-training',
      },
      {
        '@type': 'ListItem',
        position: 10,
        name: 'Corporate Wellness & Desk Ergonomics Workshops',
        url: 'https://fit4steps.com/services/corporate-wellness-yoga',
      }
    ]
  };

  const serviceList = [
    {
      id: 'senior-restoration',
      title: 'Senior Citizen Training & Joint Restoration Therapy',
      badge: 'Flagship Specialization',
      badgeColor: 'var(--brand-gold-soft)',
      desc: 'Our premier clinical program for adults aged 50 and above. Non-invasive knee pain relief, assisted stretching, cartilage decompression, and fall prevention so seniors live independently and pain-free.',
      features: [
        'Non-invasive knee pain relief & cartilage decompression',
        'Fall prevention, balance & walking gait stability',
        'Muscle mass preservation & bone density strengthening',
        'In-home convenience with zero gym travel hazards'
      ],
      image: '/assets/image/senior-joint-therapy.jpg',
      link: '/senior-fitness',
      linkText: 'Explore Senior Fitness Pillar'
    },
    {
      id: 'personal-training',
      title: '1-on-1 Personal Training at Home',
      badge: 'Most Popular',
      badgeColor: 'var(--brand-ice-blue)',
      desc: 'Experience undivided trainer attention in the privacy of your residence. Our certified trainers design routines matched precisely to your stamina, body composition goals, and daily schedule.',
      features: [
        'Trainer brings all resistance bands, dumbbells & mats',
        'Custom workout plan adjusted every 2 weeks',
        'Nutritional guidance and metabolic tracking',
        'Flexible 6:00 AM to 8:30 PM time slots'
      ],
      image: '/assets/image/h-s3-img.webp',
      link: '/services/personal-training-at-home',
      linkText: 'View In-Depth Home Training'
    },
    {
      id: 'female-trainers',
      title: 'Certified Female Fitness Trainers',
      badge: 'Dedicated Privacy & Care',
      badgeColor: 'var(--brand-gold-soft)',
      desc: 'Dedicated, certified lady fitness coaches for women, mothers, and senior women who prefer training with a female coach in a secure, comfortable home setting.',
      features: [
        'Specialized in core toning, postpartum & pelvic health',
        'PCOS, PCOD & hormonal rebalancing workout plans',
        'Supportive, encouraging and empowering sessions',
        'Complete police verification & background clearance'
      ],
      image: '/assets/image/h-s2-servi-card-img-2.webp',
      link: '/services/female-fitness-trainers',
      linkText: 'View Female Trainer Details'
    },
    {
      id: 'couple-training',
      title: 'Couple & Partner Fitness Training',
      badge: 'Shared Motivation',
      badgeColor: 'var(--brand-ice-blue)',
      desc: 'Train alongside your spouse or partner in your living room. Combines fun interactive drills, partner stretching, and accountability while honoring individual fitness levels.',
      features: [
        'Synchronized workouts tailored for differing stamina',
        'Mutual accountability and shared quality time',
        'Partner-assisted stretches and core challenges',
        'Cost-effective dual training package'
      ],
      image: '/assets/image/h-ban-img.webp',
      link: '/services/couple-training',
      linkText: 'View Couple Training Plan'
    },
    {
      id: 'kids-fitness',
      title: 'Functional Training for Kids & Teens (Ages 6–16)',
      badge: 'Youth Development',
      badgeColor: 'var(--brand-gold-soft)',
      desc: 'Gamified agility, core balance, and posture correction designed to combat excessive smartphone screen time and heavy backpack strain while building lifelong athletic confidence.',
      features: [
        'Engaging agility ladders, cones & bodyweight drills',
        'Spinal alignment & kyphosis posture correction',
        'Enhances focus, stamina and sports coordination',
        'Conducted safely in home gardens, terraces or living rooms'
      ],
      image: '/assets/image/h-s2-servi-card-img-4.webp',
      link: '/services/kids-fitness-functional-training',
      linkText: 'View Kids Program Details'
    },
    {
      id: 'prenatal-yoga',
      title: 'Prenatal & Postnatal Yoga Therapy',
      badge: 'Maternal Care',
      badgeColor: 'var(--brand-ice-blue)',
      desc: 'Doctor-guided gentle prenatal stretches and postpartum core restoration. Safely strengthens pelvic muscles, relieves lower back strain, and facilitates natural delivery recovery.',
      features: [
        'Gentle hip opening and sciatica pain relief',
        'Pranayama breathing techniques for calm delivery',
        'Diastasis recti safe postpartum core reconnection',
        'Supervised by certified pre/postnatal yoga therapists'
      ],
      image: '/assets/image/programme-img-2.webp',
      link: '/services/prenatal-postnatal-yoga',
      linkText: 'View Maternal Care Details'
    },
    {
      id: 'corrective-exercise',
      title: 'Corrective Exercise for Lifestyle Diseases',
      badge: 'Clinical Support',
      badgeColor: 'var(--brand-gold-soft)',
      desc: 'Targeted physical exercise protocols for managing Type-2 Diabetes, Hypertension, Cervical Spondylosis, Lumbar Disc Herniation, and high cholesterol.',
      features: [
        'Improves insulin sensitivity and glucose uptake (GLUT-4)',
        'Relieves chronic neck, shoulder and lower back spasms',
        'Continuous monitoring of heart rate and perceived exertion',
        'Close collaboration with your primary care physician'
      ],
      image: '/assets/image/satheesan-head-trainer.jpg',
      link: '/services/corrective-exercise-lifestyle-diseases',
      linkText: 'View Clinical Exercise Details'
    },
    {
      id: 'stress-management',
      title: 'Executive Stress Management & Autonomic Reset',
      badge: 'Neuro-Somatic Reset',
      badgeColor: 'var(--brand-ice-blue)',
      desc: 'Somatic mobility, vagus nerve breathwork, and deep restorative decompression to end chronic executive burnout, lower elevated cortisol, and restore restorative sleep.',
      features: [
        'Vagus nerve stimulation & parasympathetic down-regulation',
        'Somatic release for tight psoas and upper trapezius',
        'Restores deep Slow-Wave Sleep (SWS) and lowers resting heart rate',
        'Conducted in morning or evening in your home sanctuary'
      ],
      image: '/assets/image/h-s6-img-1.webp',
      link: '/services/stress-management-training',
      linkText: 'View Stress Reset Details'
    },
    {
      id: 'personalized-online',
      title: 'Personalized 1-on-1 Online Training',
      badge: 'Global NRI & Travel',
      badgeColor: 'var(--brand-gold-soft)',
      desc: 'Private 1-on-1 live two-way interactive video coaching with certified master trainers. Real-time form audits and daily nutrition accountability across India, USA, UK, UAE & Singapore.',
      features: [
        'Live 1-on-1 two-way HD video with instant form correction',
        'Flexible cross-timezone scheduling (US, UK, Gulf, India)',
        'Daily WhatsApp nutrition review & habit tracking',
        'Zero-equipment hotel room travel programs'
      ],
      image: '/assets/image/programme-img-1.webp',
      link: '/services/personalized-online-training',
      linkText: 'View Online Coaching Details'
    },
    {
      id: 'corporate-wellness',
      title: 'Corporate Wellness & Desk Ergonomics Workshops',
      badge: 'Workplace Health',
      badgeColor: 'var(--brand-ice-blue)',
      desc: 'Help your workforce combat desk slouch, mental burnout, and repetitive strain injuries with our structured corporate wellness and ergonomics workshops in Delhi NCR.',
      features: [
        'Desk posture correction & cervical spine decompression',
        'Pranayama breathwork for executive stress relief',
        'Boosts employee productivity, retention & workplace energy',
        'Delivered on-site at your offices in Noida, Delhi, Gurugram'
      ],
      image: '/assets/image/h-s2-servi-card-img-1.webp',
      link: '/services/corporate-wellness-yoga',
      linkText: 'View Corporate Offerings'
    },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* 1. HERO BANNER */}
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px', textAlign: 'center' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={14} /> Comprehensive In-Home Fitness Spectrum
          </div>
          <h1 style={{ fontSize: 'clamp(34px, 4.8vw, 52px)', color: 'var(--text-main)', lineHeight: 1.16, marginBottom: '20px', fontWeight: 800 }}>
            Our In-Home <span className="text-gold">Services Spectrum</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Every individual and every family has unique fitness needs. We deliver bespoke, certified 1-on-1 programs directly to your doorstep across Noida, South Delhi, and Gurugram.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20learn%20more%20about%20your%20services%20and%20book%20a%20trial."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book Free Doorstep Assessment
            </a>
            <a href="tel:+919999448206" className="btn btn-outline">
              <Phone size={18} /> Call +91 99994 48206
            </a>
          </div>
        </div>
      </section>

      {/* 2. SERVICES LISTING */}
      <section className="section-page" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {serviceList.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="theme-card"
                style={{
                  padding: '36px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '36px',
                  alignItems: 'center',
                  borderRadius: '24px'
                }}
              >
                <div>
                  <span style={{
                    display: 'inline-block',
                    background: service.badgeColor,
                    color: 'var(--brand-gold-text)',
                    padding: '4px 12px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: 700,
                    marginBottom: '14px',
                    border: '1px solid var(--brand-gold-border)',
                  }}>
                    {service.badge}
                  </span>

                  <h2 style={{ fontSize: '26px', color: 'var(--text-main)', marginBottom: '14px', fontWeight: 800 }}>
                    {service.title}
                  </h2>

                  <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '20px' }}>
                    {service.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                    {service.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-body)' }}>
                        <CheckCircle2 size={16} color="var(--brand-gold)" /> {feat}
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    <Link
                      href={service.link}
                      className="btn btn-primary"
                      style={{ padding: '12px 22px', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                      {service.linkText} <ArrowRight size={15} />
                    </Link>
                    <a
                      href={`https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      style={{ padding: '12px 18px', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                      <MessageCircle size={16} /> WhatsApp Inquiry
                    </a>
                  </div>
                </div>

                <div style={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid var(--border-medium)', height: '100%', minHeight: '300px', maxHeight: '380px' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SENIOR SUB-SERVICES CALLOUT */}
      <section className="section-surface" style={{ padding: '80px 0', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '860px', textAlign: 'center' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Heart size={14} /> Senior Citizen Specializations
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--text-main)', fontWeight: 800, marginBottom: '16px' }}>
            Looking Specifically for Senior Citizen Fitness & Joint Care?
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.7, marginBottom: '32px' }}>
            We have dedicated clinical sub-programs crafted for adults aged 50, 60, and 70+ facing osteoarthritis, balance issues, and post-operative mobility hurdles.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', textAlign: 'left', marginBottom: '36px' }}>
            {[
              { title: 'Training for Adults 50+', link: '/senior-fitness/fifty-plus', desc: 'Sarcopenia defense & bone density strengthening.' },
              { title: 'Senior Strength Training', link: '/senior-fitness/strength-seniors', desc: 'Progressive bodyweight & light resistance bands.' },
              { title: 'Knee Pain & Joint Therapy', link: '/senior-fitness/knee-therapy', desc: 'Non-invasive synovial fluid circulation & relief.' },
              { title: 'Mobility & Fall Prevention', link: '/senior-fitness/mobility-balance', desc: 'Proprioception drills & walking stability.' }
            ].map((sub, i) => (
              <Link key={i} href={sub.link} className="card-clean" style={{ padding: '20px', borderRadius: '14px', textDecoration: 'none' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px' }}>{sub.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{sub.desc}</p>
                <div style={{ fontSize: '12.5px', color: 'var(--brand-gold)', fontWeight: 700, marginTop: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Explore sub-program <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>

          <Link href="/senior-fitness" className="btn btn-gold" style={{ padding: '14px 32px', fontSize: '15px' }}>
            Explore All Senior Citizen Programs
          </Link>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="section-padding" style={{ background: 'var(--brand-navy)', color: '#ffffff', textAlign: 'center', padding: '70px 0' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', color: '#ffffff', fontWeight: 800, marginBottom: '16px' }}>
            Book Your Free 45-Minute In-Home Assessment
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: 1.65, marginBottom: '32px' }}>
            Our certified master trainer visits your residence anywhere in Noida, Delhi, or Gurugram with sanitized equipment. We evaluate your baseline mobility and design a personalized roadmap.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20schedule%20a%20free%20doorstep%20fitness%20trial%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ padding: '14px 30px', fontSize: '15px' }}
            >
              <MessageCircle size={18} /> Schedule Doorstep Trial
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
