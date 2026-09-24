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
  Home,
  Clock,
  Sparkles,
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Training at Home in Noida, Delhi & Gurugram | Fit4Steps',
  description: 'Certified 1-on-1 personal fitness trainer delivered to your doorstep. Complete gym equipment brought to your home. Fat loss, muscle toning, posture, and strength coaching in Delhi NCR.',
  keywords: [
    'personal training at home',
    'in-home personal trainer delhi',
    'fitness trainer at home noida',
    'personal trainer at home gurugram',
    'doorstep gym trainer'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/services/personal-training-at-home',
  },
};

export default function PersonalTrainingAtHomePage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Home size={14} /> Doorstep Fitness Service
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Personal Training at Home <br />
            <span className="text-gold">Noida, South Delhi & Gurugram</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Enjoy the privacy, efficiency, and comfort of training in your own living room or society gym. Our certified fitness coaches arrive with sanitized equipment, tailored workout routines, and dedicated accountability.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20Personal%20Training%20at%20Home.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book Free Trial Session
            </a>
            <a href="tel:+919999448206" className="btn btn-outline">
              <Phone size={18} /> Call +91 99994 48206
            </a>
          </div>
        </div>
      </section>

      {/* WHY HOME TRAINING */}
      <section className="section-surface">
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="badge badge-navy" style={{ marginBottom: '16px' }}>
              <ShieldCheck size={14} /> The Fit4Steps Advantage
            </div>
            <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
              Why In-Home Personal Training Outperforms Commercial Gyms
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
              Commuting in Delhi NCR traffic consumes up to 90 minutes per gym visit. With Fit4Steps, your workout begins the moment you open your door.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {[
                {
                  title: '100% Focused Attention',
                  desc: 'No shared trainers, distractions, or waiting in line for machines. Every minute is calibrated to your physical progress.'
                },
                {
                  title: 'Sanitized Equipment Brought to You',
                  desc: 'Resistance tubes, loop bands, kettlebells, yoga blocks, and stability balls provided fresh and sanitized.'
                },
                {
                  title: 'Total Schedule Flexibility',
                  desc: 'Slots available from 6:00 AM to 8:30 PM. Reschedule sessions easily when business or travel demands.'
                },
                {
                  title: 'Strict Police-Verified Coaches',
                  desc: 'Complete identity, certification, and background verification for absolute peace-of-mind inside your home.'
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
            Ready to Begin Training at Home?
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
            Schedule your 45-minute physical screening and trial session with our master coach today.
          </p>
          <a
            href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20schedule%20an%20in-home%20personal%20training%20trial."
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
