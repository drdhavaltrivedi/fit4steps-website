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
  Dumbbell
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Strength Training for Seniors at Home (60+ & 70+) | Fit4Steps',
  description: 'Evidence-based in-home strength training for seniors in Noida, Delhi & Gurugram. Reverse sarcopenia, rebuild bone density, restore grip strength, and preserve daily physical independence.',
  keywords: [
    'strength training for seniors gurugram',
    'strength training for seniors at home delhi',
    'weight training for elderly noida',
    'sarcopenia exercise program seniors',
    'osteoporosis safe exercises elderly'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/senior-fitness/strength-seniors',
  },
};

export default function StrengthSeniorsPage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Award size={14} /> Senior Fitness Pillar
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Strength Training for Seniors <br />
            <span className="text-gold">Rebuilding Muscle & Bone Density</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Age-related muscle loss (sarcopenia) is the root cause of fatigue, frailty, and loss of independence. Our gentle progressive resistance protocols safely rebuild functional strength for adults in their 60s, 70s, and beyond.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20Strength%20Training%20for%20Seniors.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Schedule Doorstep Assessment
            </a>
            <Link href="/senior-fitness" className="btn btn-outline">
              Senior Care Hub <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CORE CLINICAL PRINCIPLES */}
      <section className="section-surface">
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="badge badge-navy" style={{ marginBottom: '16px' }}>
              <ShieldCheck size={14} /> Safe & Supervised
            </div>
            <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
              Why Strength Training is Essential for Healthy Aging
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
              Between the ages of 50 and 70, sedentary adults lose up to 30% of their muscle mass. Walking alone does not preserve upper body strength or hip bone density. Controlled, low-impact resistance training provides the mechanical signal needed to keep bones dense and joints stable.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '28px' }}>
              {[
                {
                  title: 'Combats Osteopenia & Osteoporosis',
                  desc: 'Gentle axial loading with resistance bands stimulates osteoblast activity, strengthening hip and femoral bone mineral density.'
                },
                {
                  title: 'Grip & Arm Power',
                  desc: 'Grip strength is a clinically recognized biomarker for longevity. We rebuild hands, forearm, and shoulder stamina for daily chores.'
                },
                {
                  title: 'Sit-to-Stand Independence',
                  desc: 'Quadriceps and glute strength allow seniors to rise effortlessly from deep armchairs, car seats, and low commodes without assistance.'
                },
                {
                  title: 'Protected Spinal Alignment',
                  desc: 'Isometric core conditioning supports the lumbar vertebrae, preventing the rounding of the upper back (kyphosis).'
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
            Give Your Loved Ones the Gift of Strength
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
            Book a doorstep physical assessment across Noida, Delhi, and Gurugram with Master Trainer Satheesan.
          </p>
          <a
            href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20consult%20about%20senior%20strength%20training."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> WhatsApp Senior Coach
          </a>
        </div>
      </section>
    </div>
  );
}
