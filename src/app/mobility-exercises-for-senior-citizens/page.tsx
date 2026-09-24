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
  Activity,
  Award,
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mobility Exercises for Senior Citizens | Improve Flexibility Safely | Fit4Steps',
  description: 'Specialized mobility exercises for senior citizens at home. Gentle joint stretching, fall prevention balance drills, and arthritis management in Delhi, Noida & Gurugram.',
  keywords: [
    'mobility exercises for senior citizens',
    'senior citizens exercises delhi',
    'elderly flexibility exercises at home',
    'balance and mobility seniors',
    'gentle joint stretching older adults'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/mobility-exercises-for-senior-citizens',
  },
};

export default function MobilityExercisesSeniorsPage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Activity size={14} /> Senior Mobility Specialist
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Mobility Exercises for Senior Citizens <br />
            <span className="text-gold">Improve Flexibility & Balance Safely</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Gentle, supported mobility routines designed to restore natural joint range of motion, ease morning stiffness, and prevent falls for seniors in Noida, Delhi, and Gurugram.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20Mobility%20Exercises%20for%20Senior%20Citizens.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book Senior Mobility Assessment
            </a>
            <Link href="/senior-fitness/mobility-balance" className="btn btn-outline">
              Mobility Program Details <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CORE MOBILITY PILLARS */}
      <section className="section-surface">
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="badge badge-navy" style={{ marginBottom: '16px' }}>
              <ShieldCheck size={14} /> Clinical Focus
            </div>
            <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
              Safe Joint Lubrication for Older Adults
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
              Our senior mobility protocol targets the four critical areas where seniors lose flexibility first: ankles, hips, thoracic spine, and shoulders. By gently moving each joint through its natural anatomical range, we stimulate synovial fluid flow and relieve stiffness.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {[
                {
                  title: 'Ankle Dorsiflexion Drills',
                  desc: 'Prevents foot drop and shuffling, the number one cause of household trips and falls.'
                },
                {
                  title: 'Hip & Pelvic Mobility',
                  desc: 'Gentle seated and supine stretches that relieve pressure on the sciatic nerve and lower back.'
                },
                {
                  title: 'Thoracic Extension',
                  desc: 'Reverses forward slumping (kyphosis) and expands chest cavity for deeper lung oxygenation.'
                },
                {
                  title: 'Assisted Gentle Traction',
                  desc: 'Our trainer provides gentle manual assisted stretching that clients cannot perform alone.'
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
            Schedule an In-Home Mobility Screening
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
            Available across Noida, South Delhi, and Gurugram with Master Trainer Satheesan.
          </p>
          <a
            href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20book%20a%20doorstep%20mobility%20assessment%20for%20my%20parents."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> Schedule Doorstep Screening
          </a>
        </div>
      </section>
    </div>
  );
}
