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
  Briefcase
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our In-Home Fitness & Joint Restoration Services | Fit4Steps',
  description: 'Explore Fit4Steps comprehensive in-home personal fitness services in Noida, Delhi & Gurugram: Senior Citizen Training, Knee Therapy, Female Trainers, Couple Fitness, Kids Functional Training & Corporate Wellness.',
  keywords: [
    'fit4steps services noida',
    'in-home personal training delhi',
    'lady fitness trainers gurugram',
    'senior citizen joint restoration',
    'prenatal yoga home delhi ncr',
    'corporate fitness noida'
  ],
};

export default function ServicesPage() {
  const serviceList = [
    {
      id: 'senior-restoration',
      title: 'Senior Citizen Training & Joint Restoration Therapy',
      badge: 'Flagship Service',
      badgeColor: '#f6c11d',
      desc: 'Our premier specialized program for adults aged 50 and above. Focuses on non-invasive knee pain relief, assisted stretching, cartilage decompression, and fall prevention so seniors live independently and pain-free.',
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
      badgeColor: '#afe7f2',
      desc: 'Experience undivided trainer attention in the privacy of your residence. Our certified trainers design routines matched precisely to your current stamina, body composition goals, and daily schedule.',
      features: [
        'Trainer brings all resistance bands, dumbbells & mats',
        'Custom workout plan adjusted every 2 weeks',
        'Nutritional guidance and metabolic tracking',
        'Flexible 6:00 AM to 8:30 PM time slots'
      ],
      image: '/assets/image/h-ban-img.webp',
      link: '/contact',
      linkText: 'Book 1-on-1 Consultation'
    },
    {
      id: 'female-trainers',
      title: 'Certified Female Fitness Trainers',
      badge: 'Dedicated Care',
      badgeColor: '#ffd768',
      desc: 'Providing dedicated, certified lady fitness trainers for women, mothers, and senior women who prefer training with a female coach in a secure, comfortable home setting.',
      features: [
        'Specialized in core toning, postpartum & pelvic health',
        'PCOS, PCOD & hormonal rebalancing workout plans',
        'Supportive, encouraging and empowering sessions',
        'Complete police verification & background clearance'
      ],
      image: '/assets/image/h-s2-servi-card-img-2.webp',
      link: '/contact',
      linkText: 'Request Female Trainer'
    },
    {
      id: 'couple-training',
      title: 'Couple & Partner Fitness Training',
      badge: 'Shared Motivation',
      badgeColor: '#afe7f2',
      desc: 'Train alongside your spouse or partner in your living room. Combines fun interactive drills, partner stretching, and accountability while honoring individual fitness levels.',
      features: [
        'Synchronized workouts tailored for differing stamina',
        'Mutual accountability and shared quality time',
        'Partner-assisted stretches and core challenges',
        'Cost-effective dual training package'
      ],
      image: '/assets/image/h-s2-servi-card-img-5.webp',
      link: '/contact',
      linkText: 'Inquire for Couple Plan'
    },
    {
      id: 'kids-fitness',
      title: 'Functional Training for Kids & Teens (Ages 6–16)',
      badge: 'Youth Development',
      badgeColor: '#25d366',
      desc: 'Gamified agility, core balance, and posture correction designed to combat excessive smartphone screen time and heavy backpack strain while building lifelong athletic confidence.',
      features: [
        'Engaging agility ladders, cones & bodyweight drills',
        'Spinal alignment & kyphosis posture correction',
        'Enhances focus, stamina and sports coordination',
        'Conducted safely in home gardens, terraces or living rooms'
      ],
      image: '/assets/image/h-s2-servi-card-img-4.webp',
      link: '/contact',
      linkText: 'Enroll Your Child'
    },
    {
      id: 'prenatal-yoga',
      title: 'Prenatal & Postnatal Yoga Therapy',
      badge: 'Maternal Care',
      badgeColor: '#ffd768',
      desc: 'Doctor-guided gentle prenatal stretches and postpartum core restoration. Safely strengthens pelvic muscles, relieves lower back strain, and facilitates natural delivery recovery.',
      features: [
        'Gentle hip opening and sciatica pain relief',
        'Pranayama breathing techniques for calm delivery',
        'Diastasis recti safe postpartum core reconnection',
        'Supervised by certified pre/postnatal yoga therapists'
      ],
      image: '/assets/image/h-s2-servi-card-img-2.webp',
      link: '/contact',
      linkText: 'Consult Pre/Postnatal Coach'
    },
    {
      id: 'corrective-exercise',
      title: 'Corrective Exercise for Lifestyle Diseases',
      badge: 'Clinical Support',
      badgeColor: '#afe7f2',
      desc: 'Targeted physical exercise protocols for managing Type-2 Diabetes, Hypertension, Cervical Spondylosis, Lumbar Disc Herniation, and high cholesterol.',
      features: [
        'Improves insulin sensitivity and glucose uptake',
        'Relieves chronic neck, shoulder and lower back spasms',
        'Continuous monitoring of heart rate and perceived exertion',
        'Close collaboration with your primary care physician'
      ],
      image: '/assets/image/h-s3-img.webp',
      link: '/contact',
      linkText: 'Get Medical Fitness Plan'
    },
    {
      id: 'corporate-wellness',
      title: 'Corporate Yoga & Team Wellness Workshops',
      badge: 'Workplace Health',
      badgeColor: '#f6c11d',
      desc: 'Help your workforce combat desk slouch, mental burnout, and repetitive strain injuries with our structured corporate wellness and ergonomics workshops in Delhi NCR.',
      features: [
        'Desk posture correction & cervical spine decompression',
        'Pranayama breathwork for executive stress relief',
        'Boosts employee productivity, retention & workplace energy',
        'Delivered on-site at your offices in Noida, Delhi, Gurugram'
      ],
      image: '/assets/image/h-s2-servi-card-img-1.webp',
      link: '/contact',
      linkText: 'Inquire for Corporate Programs'
    },
  ];

  return (
    <div>
      {/* 1. HERO BANNER */}
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <ShieldCheck size={14} /> Full Spectrum Fitness
          </div>
          <h1 style={{ fontSize: 'clamp(34px, 4.8vw, 52px)', color: 'var(--text-main)', lineHeight: 1.16, marginBottom: '20px' }}>
            Our In-Home <span className="text-gold">Services Spectrum</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Every individual and every family has unique fitness needs. We deliver bespoke 1-on-1 programs directly to your home across Noida, Delhi, and Gurugram.
          </p>
        </div>
      </section>

      {/* 2. SERVICES LISTING */}
      <section className="section-page">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
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
                }}
              >
                <div>
                  <span style={{
                    display: 'inline-block',
                    background: 'var(--brand-gold-soft)',
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

                  <h2 style={{ fontSize: '26px', color: 'var(--text-main)', marginBottom: '14px' }}>
                    {service.title}
                  </h2>

                  <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '20px' }}>
                    {service.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
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
                      style={{ padding: '10px 20px', fontSize: '13.5px' }}
                    >
                      {service.linkText} <ArrowRight size={15} />
                    </Link>
                    <a
                      href={`https://wa.me/919778776136?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{ padding: '10px 18px', fontSize: '13.5px' }}
                    >
                      <MessageCircle size={16} /> WhatsApp Inquiry
                    </a>
                  </div>
                </div>

                <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-medium)', height: '100%', minHeight: '280px' }}>
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
    </div>
  );
}

