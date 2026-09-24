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
  Activity,
  Heart,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kids Fitness & Functional Training at Home | Noida & Delhi NCR | Fit4Steps',
  description: 'Engaging, safe, and fun functional fitness training for kids and teens in Noida, Delhi & Gurugram. Posture correction, agility drills, reducing screen-time, and healthy physical habits.',
  keywords: [
    'fitness training for kids noida',
    'kids personal trainer at home delhi',
    'functional training for children gurugram',
    'child posture and obesity exercises at home'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/services/kids-fitness-functional-training',
  },
};

export default function KidsFitnessPage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Activity size={14} /> Youth Wellness Program
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Kids Fitness & <br />
            <span className="text-gold">Functional Training at Home</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Excessive screen time, heavy school backpacks, and sedentary habits lead to poor posture and low stamina in growing children. Our interactive functional training builds athleticism, core stability, and joyful movement habits.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20Kids%20Fitness%20Training%20at%20Home.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book Kids Trial Session
            </a>
            <a href="tel:+919999448206" className="btn btn-outline">
              <Phone size={18} /> Call +91 99994 48206
            </a>
          </div>
        </div>
      </section>

      {/* CORE BENEFITS FOR KIDS */}
      <section className="section-surface">
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="badge badge-navy" style={{ marginBottom: '16px' }}>
              <ShieldCheck size={14} /> Age-Appropriate Conditioning
            </div>
            <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
              How We Make Fitness Engaging & Safe for Growing Children
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
              Children should not lift heavy bodybuilding weights. Instead, our trainers use gamified obstacle agility ladders, medicine ball coordination, dynamic balance games, and bodyweight fundamentals that develop motor skills and coordination.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {[
                {
                  title: 'Spinal Posture Correction',
                  desc: 'Combats "text neck" and slouching caused by long hours of digital screens and heavy study books.'
                },
                {
                  title: 'Speed, Agility & Reflexes',
                  desc: 'Enhances sports performance in football, tennis, basketball, and track through footwork drills.'
                },
                {
                  title: 'Healthy Weight Management',
                  desc: 'Burn calories joyfully through high-energy functional games without boring treadmill routines.'
                },
                {
                  title: 'Boosts Focus & Sleep Quality',
                  desc: 'Physical activity releases endorphins, improves cognitive concentration, and ensures restful nighttime sleep.'
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
            Inspire Lifelong Health in Your Children
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
            Available across gated societies in Noida (Jaypee Wishtown), South Delhi, and Gurugram.
          </p>
          <a
            href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20schedule%20a%20kids%20fitness%20assessment."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> WhatsApp Youth Coach
          </a>
        </div>
      </section>
    </div>
  );
}
