import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  Heart,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Certified Female Fitness Trainers at Home | Noida, Delhi & Gurugram | Fit4Steps',
  description: 'Book certified female personal fitness trainers for home training in Noida, Delhi & Gurugram. Safe, private workouts for weight loss, toning, PCOS, thyroid, and prenatal/postnatal care.',
  keywords: [
    'female fitness trainers in delhi',
    'lady fitness trainer noida',
    'female personal trainer at home gurugram',
    'women weight loss trainer at home',
    'prenatal yoga lady instructor'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/services/female-fitness-trainers',
  },
};

export default function FemaleFitnessTrainersPage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Users size={14} /> Certified Lady Instructors
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Female Fitness Trainers at Home <br />
            <span className="text-gold">Noida, South Delhi & Gurugram</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Experience private, comfortable, and empowering fitness training in the sanctuary of your home. Our certified female fitness specialists design programs tailored to women's unique physiological and lifestyle needs.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20looking%20for%20a%20certified%20female%20fitness%20trainer%20at%20home.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book Lady Trainer Trial
            </a>
            <a href="tel:+919999448206" className="btn btn-outline">
              <Phone size={18} /> Call +91 99994 48206
            </a>
          </div>
        </div>
      </section>

      {/* SPECIALIZATIONS */}
      <section className="section-surface">
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="badge badge-navy" style={{ marginBottom: '16px' }}>
              <ShieldCheck size={14} /> Women-Centric Coaching
            </div>
            <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
              Specialized Programs for Women
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '24px' }}>
              {[
                {
                  title: 'Core & Pelvic Floor Strength',
                  desc: 'Safe diastasis recti recovery and pelvic floor rehabilitation for new mothers and women post-pregnancy.'
                },
                {
                  title: 'PCOS & Hormonal Balance',
                  desc: 'Controlled resistance training combined with low-cortisol exercise that improves insulin sensitivity.'
                },
                {
                  title: 'Bone Density & Osteopenia',
                  desc: 'Targeted strength training to build and preserve bone mineral density for women in perimenopause and menopause.'
                },
                {
                  title: 'Discreet In-Home Privacy',
                  desc: 'Work out with complete comfort, modesty, and focus in your living room or private society gym.'
                }
              ].map((item, idx) => (
                <div key={idx} className="card-clean">
                  <h3 style={{ fontSize: '18px', color: 'var(--text-main)', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-body)', fontSize: '14px', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
            Schedule Your Trial with a Certified Lady Coach
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
            Available across Noida Expressway, Greater Kailash, Vasant Kunj, and DLF Gurugram.
          </p>
          <a
            href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20schedule%20a%20doorstep%20session%20with%20a%20female%20trainer."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> WhatsApp Lady Coach
          </a>
        </div>
      </section>
    </div>
  );
}
