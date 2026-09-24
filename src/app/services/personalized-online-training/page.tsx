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
  Video,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personalized 1-on-1 Online Fitness Training | Fit4Steps Worldwide',
  description: 'Live 1-on-1 interactive virtual personal training with Master Trainer Satheesan and expert coaches. Real-time form correction, tailored routines, and global access from anywhere.',
  keywords: [
    'personalized online training',
    'live 1 on 1 online fitness coach',
    'online personal trainer india',
    'virtual senior fitness training',
    'remote posture coaching'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/services/personalized-online-training',
  },
};

export default function PersonalizedOnlineTrainingPage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Video size={14} /> Live Interactive Coaching
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Personalized Online Training <br />
            <span className="text-gold">Live 1-on-1 from Anywhere</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Whether you travel frequently, live outside Delhi NCR, or prefer high-definition virtual coaching, our live 1-on-1 online sessions deliver the same anatomical precision, real-time form correction, and accountable guidance as in-person training.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20Personalized%20Online%20Training.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book Live Virtual Trial
            </a>
            <a href="tel:+919999448206" className="btn btn-outline">
              <Phone size={18} /> Call +91 99994 48206
            </a>
          </div>
        </div>
      </section>

      {/* CORE HIGHLIGHTS */}
      <section className="section-surface">
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="badge badge-navy" style={{ marginBottom: '16px' }}>
              <ShieldCheck size={14} /> The Virtual Concierge Difference
            </div>
            <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
              Not Pre-Recorded Videos—100% Live Dedicated Eyes on Your Movement
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
              Most online fitness apps provide generic recorded workout videos that cannot see your knee valgus or rounded spine. With Fit4Steps, your coach watches every single repetition via two-way HD video, adjusting your angles instantly.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '24px' }}>
              {[
                {
                  title: 'Real-Time Biomechanical Corrections',
                  desc: 'Immediate verbal and visual cues ensure your knees, hips, and neck remain in neutral, injury-free alignment.'
                },
                {
                  title: 'Minimal Equipment Needed',
                  desc: 'Workouts adapted specifically to what you own—whether just a yoga mat and resistance band or a full apartment gym.'
                },
                {
                  title: 'Global Timezone Flexibility',
                  desc: 'Serving NRI clients and international travelers across US, UK, UAE, and Singapore timezones seamlessly.'
                },
                {
                  title: 'Direct Coach WhatsApp Support',
                  desc: 'Ongoing nutritional guidance, sleep check-ins, and mobility reminders between your scheduled sessions.'
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
            Train with Master Coaches from Anywhere
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
            Schedule a complimentary 30-minute virtual consultation and video movement assessment.
          </p>
          <a
            href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20book%20a%20virtual%20online%20training%20trial."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> WhatsApp Virtual Coach
          </a>
        </div>
      </section>
    </div>
  );
}
