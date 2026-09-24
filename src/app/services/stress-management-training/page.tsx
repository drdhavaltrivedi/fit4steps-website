import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Heart,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  Sparkles,
  Activity,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Stress Management & Somatic Relaxation Training at Home | Fit4Steps',
  description: 'In-home stress management, somatic movement, breathwork, and nervous system reset training in Noida, Delhi & Gurugram. Lower cortisol, improve deep sleep, and alleviate executive burnout.',
  keywords: [
    'stress management training at home',
    'somatic exercise coach delhi',
    'nervous system regulation workout',
    'executive burnout recovery noida',
    'breathwork and relaxation gurugram'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/services/stress-management-training',
  },
};

export default function StressManagementPage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Heart size={14} /> Somatic Nervous System Reset
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Stress Management & <br />
            <span className="text-gold">Somatic Movement at Home</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Chronic work stress, screen fatigue, and constant cortisol surges trap the nervous system in a perpetual "fight-or-flight" state. Our specialized sessions combine gentle myofascial unwinding, diaphragmatic breathing, and passive stretching to induce deep restorative rest.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20Stress%20Management%20and%20Relaxation%20Training.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book Somatic Session
            </a>
            <a href="tel:+919999448206" className="btn btn-outline">
              <Phone size={18} /> Call +91 99994 48206
            </a>
          </div>
        </div>
      </section>

      {/* CORE BENEFITS */}
      <section className="section-surface">
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="badge badge-navy" style={{ marginBottom: '16px' }}>
              <ShieldCheck size={14} /> Parasympathetic Healing
            </div>
            <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
              How We Decompress Mind & Body in Your Home
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '24px' }}>
              {[
                {
                  title: 'Deep Vagal Nerve Stimulation',
                  desc: 'Slow-cadence breathing drills that directly stimulate the vagus nerve, lowering resting pulse and blood pressure.'
                },
                {
                  title: 'Myofascial Trigger Release',
                  desc: 'Gentle assisted release of trapped tension in the upper traps, occipital neck base, and lower back.'
                },
                {
                  title: 'Restorative Sleep Architecture',
                  desc: 'Evening sessions timed to dissipate mental tension, significantly increasing REM and deep restorative sleep cycles.'
                },
                {
                  title: 'Burnout Recovery for Leaders',
                  desc: 'A calming mental pause designed specifically for corporate executives, legal partners, and busy founders.'
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
            Reclaim Calm, Clarity & Restful Sleep
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
            Experience an in-home restorative session tailored to your mental and physical recovery.
          </p>
          <a
            href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20schedule%20a%20stress%20management%20trial%20session."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> WhatsApp Recovery Coach
          </a>
        </div>
      </section>
    </div>
  );
}
