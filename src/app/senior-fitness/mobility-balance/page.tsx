import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  Activity,
  Award,
  Heart
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mobility & Balance Training for Senior Citizens | Fall Prevention | Fit4Steps',
  description: 'Certified in-home mobility and balance training for seniors in Noida, Delhi & Gurugram. Fall prevention, single-leg stability, proprioception, and gait correction for elderly parents.',
  keywords: [
    'mobility and balance training seniors',
    'fall prevention exercises elderly delhi',
    'balance training for senior citizens gurugram',
    'gait correction exercises seniors noida',
    'stability workout elderly at home'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/senior-fitness/mobility-balance',
  },
};

export default function MobilityBalancePage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <ShieldCheck size={14} /> Senior Safety Pillar
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Mobility & Balance Training <br />
            <span className="text-gold">Fall Prevention for Seniors</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Falls are the leading cause of hip fractures and loss of mobility among older adults. Our specialized balance drills retrain neurological reflexes, vestibular equilibrium, and foot proprioception so seniors walk fearlessly.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20Mobility%20and%20Balance%20Training%20for%20my%20parents."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Schedule Balance Assessment
            </a>
            <Link href="/senior-fitness" className="btn btn-outline">
              All Senior Programs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* BALANCE PROTOCOL HIGHLIGHTS */}
      <section className="section-surface">
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="badge badge-navy" style={{ marginBottom: '16px' }}>
              <Activity size={14} /> Neurological Coordination
            </div>
            <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
              How We Rebuild Stability & Prevent Falls
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
              Balance is not just muscular—it involves vision, the inner ear vestibular system, and nerve receptors in the soles of the feet. When seniors become sedentary, these reflex pathways dull. Our trainers progressively reactivate these pathways using safe, supported in-home drills.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '28px' }}>
              {[
                {
                  title: 'Single-Leg Proprioception',
                  desc: 'Assisted single-leg stands near a sturdy chair or wall to train neuromuscular stabilization in the hips and ankles.'
                },
                {
                  title: 'Ankle Dorsiflexion Drills',
                  desc: 'Strengthening the anterior tibialis prevents foot drop, eliminating the common elderly shuffling gait that causes tripping over carpets.'
                },
                {
                  title: 'Dynamic Weight Shifts',
                  desc: 'Tandem stance (heel-to-toe walking) and multi-directional stepping to train reactive balance when turning or dodging obstacles.'
                },
                {
                  title: 'Thoracic & Hip Mobility',
                  desc: 'Restoring rotational range in the mid-spine and hips so reaching or looking behind does not cause loss of center of gravity.'
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
            Protect Your Parents’ Independence
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
            Book a 45-minute doorstep mobility & balance screening at your home in Noida, Delhi, or Gurugram.
          </p>
          <a
            href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20book%20a%20doorstep%20balance%20screening."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> WhatsApp Balance Screening
          </a>
        </div>
      </section>
    </div>
  );
}
