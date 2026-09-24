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
  title: 'Couple & Partner Fitness Training at Home | Delhi NCR | Fit4Steps',
  description: 'Shared 1-on-2 personal fitness training for couples and partners at home in Noida, Delhi & Gurugram. Fun, synchronized workouts, mutual accountability, and tailored dual goals.',
  keywords: [
    'couples fitness training at home delhi',
    'partner workout trainer noida',
    'couples personal trainer gurugram',
    'dual personal fitness coaching'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/services/couple-training',
  },
};

export default function CoupleTrainingPage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Users size={14} /> Shared Fitness Experience
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Couple & Partner Fitness Training <br />
            <span className="text-gold">At Home Across Delhi NCR</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Transform your health together. Working out with your partner doubles your consistency, makes training engaging, and lets you both reach your individual milestones under one dedicated trainer.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20we%20are%20a%20couple%20looking%20for%20in-home%20partner%20fitness%20training.%20Please%20guide%20us."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book Couple Trial Session
            </a>
            <a href="tel:+919999448206" className="btn btn-outline">
              <Phone size={18} /> Call +91 99994 48206
            </a>
          </div>
        </div>
      </section>

      {/* WHY COUPLES TRAINING */}
      <section className="section-surface">
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="badge badge-navy" style={{ marginBottom: '16px' }}>
              <Heart size={14} /> Mutual Accountability
            </div>
            <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
              Individual Goals, Synchronized Sessions
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
              Even if you and your partner have different fitness levels—for example, one focusing on knee health while the other targets fat loss—our trainer calibrates each drill to ensure both get a safe, effective workout.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {[
                {
                  title: 'Cost-Effective Shared Coaching',
                  desc: 'Get elite 1-on-1 level coaching at a significantly reduced per-person investment compared to two separate memberships.'
                },
                {
                  title: 'Partner Motivation Drills',
                  desc: 'Interactive resistance drills, partner stretches, and coordinated functional pacing that keep workouts lively.'
                },
                {
                  title: 'Healthy Shared Lifestyle',
                  desc: 'Building mutual workout habits helps both partners maintain cleaner nutrition and restorative sleep schedules.'
                },
                {
                  title: 'Convenient Home Timing',
                  desc: 'Train together in the early morning before work or in the evening without traveling to different gym facilities.'
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
            Start Your Fitness Journey as a Team
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
            Book a 45-minute shared trial session at your home in Noida, Delhi, or Gurugram.
          </p>
          <a
            href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20we%20want%20to%20book%20a%20couple%20trial%20session%20at%20home."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> Schedule Couple Trial
          </a>
        </div>
      </section>
    </div>
  );
}
