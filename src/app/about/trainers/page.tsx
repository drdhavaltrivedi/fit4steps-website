import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Heart,
  Users,
  ArrowRight,
  MessageCircle,
  Phone,
  Activity,
  Stethoscope,
  Star
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Trainers | Master Trainer Satheesan & Certified Coaches | Fit4Steps',
  description: 'Meet Master Trainer Satheesan and the certified personal trainers at Fit4Steps. Background-verified, ACE/ISSA/K11 certified specialists in senior joint rehabilitation, lady fitness, and executive conditioning.',
  keywords: [
    'fit4steps trainers',
    'satheesan master trainer credentials',
    'certified personal trainers noida',
    'senior fitness coaches delhi',
    'lady fitness trainers gurugram'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/about/trainers',
  },
};

export default function TrainersPage() {
  const trainers = [
    {
      name: 'Satheesan',
      role: 'Founder & Master Coach',
      experience: '15+ Years Experience',
      image: '/assets/image/satheesan-head-trainer.jpg',
      fallbackImage: '/assets/image/ftr-testiminial-rajeev.webp',
      credentials: [
        'Gold’s Gym Fitness Institute Certified',
        'Certified Specialist in Functional Movement & Sports Rehabilitation',
        'Orthopedic Knee & Spine Non-Invasive Therapy Expert',
        'Personal Coach to C-Suite Executives & Senior Citizens across NCR'
      ],
      bio: 'Satheesan has spent over a decade and a half pioneering safe, sustainable in-home fitness and joint rehabilitation across Noida, South Delhi, and Gurugram. Renowned for his meticulous anatomical understanding and 100% injury-free record over six years with top corporate executives and elderly clients.',
      badge: 'Master Trainer'
    },
    {
      name: 'Senior Rehabilitation Coaching Wing',
      role: 'Geriatric & Mobility Specialists',
      experience: '8-12 Years Average Experience',
      image: '/assets/image/ftr-testiminial-shailen.webp',
      credentials: [
        'Certified Senior Fitness Specialists (CSFS)',
        'Physiotherapy-Informed Movement Screeners',
        'Fall Prevention & Proprioception Trainers',
        'CPR & First Aid Emergency Response Certified'
      ],
      bio: 'Our dedicated senior fitness wing specializes in gentle strength rebuilding, arthritis management, and balance restoration. Every coach is trained to monitor resting and active vital signs, adjust exercises for cardiac health, and maintain immense patience.',
      badge: 'Geriatric Certified'
    },
    {
      name: 'Women’s In-Home Fitness Wing',
      role: 'Certified Female Coaches',
      experience: '6-10 Years Average Experience',
      image: '/assets/image/ftr-testiminial-shruthi.webp',
      credentials: [
        'ACE & K11 Certified Fitness Instructors',
        'Prenatal & Postnatal Yoga Certification',
        'PCOS & Metabolic Conditioning Specialists',
        'Pelvic Floor & Core Restoration Qualified'
      ],
      bio: 'Providing empowering, confidential, and comfortable personal training for women in the privacy of their homes. Experienced in pre/post-pregnancy rehabilitation, tone-focused resistance training, and holistic nutritional pacing.',
      badge: 'Women’s Health'
    },
    {
      name: 'Executive Athletic & Posture Wing',
      role: 'High-Performance & Ergonomic Coaches',
      experience: '7-12 Years Experience',
      image: '/assets/image/ftr-testiminial-padmaja.webp',
      credentials: [
        'Functional Strength & Kettlebell Certified',
        'TRX & Bodyweight Calisthenics Coaches',
        'Cervical & Thoracic Posture Correction Experts',
        'Nutrition & Metabolic Optimization Consultants'
      ],
      bio: 'Dedicated to helping corporate leaders, entrepreneurs, and busy professionals maximize fat loss, mental energy, and postural resilience in efficient 45-to-60-minute in-home sessions.',
      badge: 'Executive Conditioning'
    }
  ];

  return (
    <div>
      {/* 1. HERO BANNER */}
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Award size={14} /> Elite Fitness Faculty
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 50px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Meet Our Master Trainers & <br />
            <span className="text-gold">Certified In-Home Coaches</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            In the health and fitness domain, who guides your body matters above all. Our trainers are not marketplace gig workers—they are full-time, verified specialists with deep clinical biomechanics training and proven results.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20consult%20with%20Master%20Trainer%20Satheesan%20regarding%20in-home%20training."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Consult Master Trainer Satheesan
            </a>
            <Link href="/success-stories" className="btn btn-outline">
              Client Testimonials <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE FIT4STEPS TRAINER VETTING STANDARD */}
      <section className="section-surface">
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center', marginBottom: '48px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '14px' }}>
              <ShieldCheck size={14} /> Strict 5-Stage Vetting
            </div>
            <h2 style={{ fontSize: '32px', color: 'var(--text-main)', marginBottom: '14px' }}>
              The 5-Stage Trainer Verification Standard
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6 }}>
              Less than 8% of applicants pass our technical screenings before entering a client's home.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {[
              { num: '01', title: 'Accreditation Check', desc: 'Mandatory certification from Gold’s Gym, ACE, ISSA, or K11 with anatomical anatomy coursework.' },
              { num: '02', title: 'Background & Police Vetting', desc: 'Comprehensive residential, identity, and formal police background verification.' },
              { num: '03', title: 'Clinical Rehabilitation Exam', desc: 'Practical demonstration on gentle non-weight bearing knee joint therapy and spine preservation.' },
              { num: '04', title: 'Dignified Communication', desc: 'Polite, empathetic, and respectful demeanor suited for elderly parents and executive residences.' },
              { num: '05', title: 'Continuous Oversight', desc: 'Direct supervision and session auditing by Master Trainer Satheesan.' }
            ].map((v, i) => (
              <div key={i} className="card-clean" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--primary-gold)', marginBottom: '8px' }}>{v.num}</div>
                <h3 style={{ fontSize: '16px', color: 'var(--text-main)', marginBottom: '8px', fontWeight: 700 }}>{v.title}</h3>
                <p style={{ color: 'var(--text-body)', fontSize: '13px', lineHeight: 1.5, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRAINER PROFILES */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {trainers.map((t, idx) => (
              <div
                key={idx}
                className="card-clean"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '36px',
                  alignItems: 'center',
                  padding: '40px'
                }}
              >
                <div>
                  <span className="badge badge-gold" style={{ marginBottom: '12px' }}>
                    {t.badge}
                  </span>
                  <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '6px', fontWeight: 700 }}>
                    {t.name}
                  </h2>
                  <div style={{ fontSize: '16px', color: 'var(--primary-gold)', fontWeight: 600, marginBottom: '16px' }}>
                    {t.role} • {t.experience}
                  </div>
                  <p style={{ color: 'var(--text-body)', fontSize: '15px', lineHeight: 1.7, marginBottom: '20px' }}>
                    {t.bio}
                  </p>

                  <h3 style={{ fontSize: '15px', color: 'var(--text-main)', marginBottom: '12px', fontWeight: 700 }}>
                    Key Accreditations & Core Focus:
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {t.credentials.map((cred, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckCircle2 size={16} color="var(--primary-gold)" style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: '14px', color: 'var(--text-main)' }}>{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '100%',
                    maxWidth: '340px',
                    margin: '0 auto',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '3px solid var(--border-color)',
                    background: 'var(--bg-surface)'
                  }}>
                    <img
                      src={t.image}
                      alt={t.name}
                      style={{ width: '100%', height: '360px', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="section-surface" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
            Book a Trial with Our Certified Faculty
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
            Speak directly with Master Trainer Satheesan to schedule an in-home trial session in Noida, South Delhi, or Gurugram.
          </p>
          <a
            href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20book%20a%20trial%20session%20with%20a%20certified%20trainer."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> Schedule Doorstep Trial
          </a>
        </div>
      </section>
    </div>
  );
}
