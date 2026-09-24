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
  Heart
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Couples Fitness Training in Delhi - Partner Workouts Program | Fit4Steps',
  description: 'Certified in-home couples and partner fitness training in Delhi. Personalized dual coaching, mutual accountability, and customized routines in South Delhi.',
  keywords: [
    'couples fitness training in delhi',
    'partner workout trainer delhi',
    'couples personal trainer at home delhi',
    'in-home couple gym coach'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/couples-fitness-training-at-home-delhi',
  },
};

export default function CouplesTrainingDelhiPage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Users size={14} /> Delhi Partner Program
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Couples Fitness Training in Delhi <br />
            <span className="text-gold">Partner Workouts at Home</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Achieve your fitness milestones together. Our certified trainers provide synchronized in-home coaching for couples and partners across Greater Kailash, Vasant Kunj, and South Delhi.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20we%20are%20a%20couple%20looking%20for%20in-home%20partner%20training%20in%20Delhi.%20Please%20guide%20us."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book Couple Trial
            </a>
            <Link href="/services/couple-training" className="btn btn-outline">
              Service Details <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="container" style={{ maxWidth: '840px' }}>
          <h2 style={{ fontSize: '26px', color: 'var(--text-main)', marginBottom: '16px' }}>
            Why Delhi Couples Choose In-Home Partner Coaching
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '20px' }}>
            {[
              { title: 'Personalized for Both Fitness Levels', desc: 'Each partner receives calibrated exercises matching their individual goals.' },
              { title: 'Double Motivation & Consistency', desc: 'Working out together creates healthy accountability that prevents skipping sessions.' },
              { title: 'Significant Savings', desc: 'Shared coaching provides premium 1-on-1 attention at a fraction of two separate packages.' },
              { title: 'Full Equipment Brought to Doorstep', desc: 'Kettlebells, bands, and mats brought directly to your Delhi home.' }
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
            Schedule Your Couple Trial Session in Delhi
          </h2>
          <a
            href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20we%20want%20to%20schedule%20a%20couple%20trial%20session%20in%20Delhi."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> Schedule Couple Trial on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
