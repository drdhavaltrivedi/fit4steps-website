import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Activity,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  Heart,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Fitness Coaching for 50 Plus - Expert Home Training | Fit4Steps',
  description: 'Specialized personal fitness training for adults aged 50 and above at home in Noida, Delhi & Gurugram. Safe cardiovascular conditioning, metabolic support, and joint protection.',
  keywords: [
    'personal fitness training for 50 plus',
    'fitness coaching for 50 plus',
    'safe workouts after 50 at home',
    'personal trainer for 50 year olds'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/personal-fitness-training-for-50-plus',
  },
};

export default function PersonalFitnessFiftyPlusLegacyPage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Activity size={14} /> 50+ In-Home Health
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Personal Fitness Training for 50 Plus <br />
            <span className="text-gold">Sustained Vitality Without Joint Stress</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Protect your heart, manage blood sugar and blood pressure, and maintain youthful stamina. 1-on-1 private home coaching tailored for adults in their 50s across Noida, South Delhi, and Gurugram.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20Personal%20Fitness%20Training%20for%2050%20Plus.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book 50+ Doorstep Trial
            </a>
            <Link href="/senior-fitness/fifty-plus" className="btn btn-outline">
              Comprehensive 50+ Pillar <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="container" style={{ maxWidth: '840px' }}>
          <h2 style={{ fontSize: '26px', color: 'var(--text-main)', marginBottom: '16px' }}>
            A Science-Backed Approach to Fitness After 50
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '20px' }}>
            {[
              { title: 'Gentle Cardio Pacing', desc: 'Heart-healthy conditioning within safe pulse thresholds.' },
              { title: 'Joint-Friendly Resistance', desc: 'Resistance bands and light weights that strengthen muscles without compressing discs.' },
              { title: 'Metabolic & Diabetes Control', desc: 'Improves insulin sensitivity and assists in managing cholesterol levels.' },
              { title: 'Posture & Spinal Support', desc: 'Corrects lower back stiffness and upper body rounding.' }
            ].map((item, idx) => (
              <div key={idx} className="card-clean">
                <h3 style={{ fontSize: '18px', color: 'var(--text-main)', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-body)', fontSize: '14px', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
            Consult with Master Trainer Satheesan
          </h2>
          <a
            href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20consult%20about%20fitness%20training%20for%2050%20plus."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> WhatsApp 50+ Coach
          </a>
        </div>
      </section>
    </div>
  );
}
