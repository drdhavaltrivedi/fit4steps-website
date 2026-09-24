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
  title: 'Lady Fitness Trainers in Delhi - Certified Female Personal Coach | Fit4Steps',
  description: 'Book certified female personal fitness trainers for home training in Delhi. Private workouts for weight loss, toning, PCOS, thyroid, and prenatal/postnatal care in South Delhi.',
  keywords: [
    'female fitness trainers in delhi',
    'lady fitness trainer delhi',
    'female personal trainer at home south delhi',
    'lady fitness coach greater kailash',
    'women weight loss trainer delhi'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/female-fitness-trainers-in-delhi',
  },
};

export default function FemaleFitnessTrainersDelhiPage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Users size={14} /> Certified Lady Instructors
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Female Fitness Trainers in Delhi <br />
            <span className="text-gold">Private In-Home Personal Coaching</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Enjoy the privacy and comfort of working out in your home with certified lady personal fitness coaches. Specializing in weight management, muscle toning, pelvic core health, and prenatal/postnatal care across South Delhi.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20looking%20for%20a%20certified%20female%20fitness%20trainer%20in%20Delhi.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book Female Trainer Trial
            </a>
            <Link href="/services/female-fitness-trainers" className="btn btn-outline">
              Service Overview <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="badge badge-navy" style={{ marginBottom: '16px' }}>
              <ShieldCheck size={14} /> Safe & Confidential
            </div>
            <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
              Why Women in South Delhi Choose Our Female Coaches
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '20px' }}>
              {[
                { title: '100% Background & Police Verified', desc: 'Complete identity checks for absolute security inside your home.' },
                { title: 'Women-Centric Health Expertise', desc: 'Targeted support for PCOS, thyroid health, and core recovery.' },
                { title: 'Full Equipment Brought to Doorstep', desc: 'Dumbbells, resistance bands, yoga props, and mats provided.' },
                { title: 'Flexible South Delhi Timing', desc: 'Serving Greater Kailash, Vasant Kunj, Panchsheel, and Defence Colony.' }
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

      <section className="section-padding" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
            Schedule Your Doorstep Trial with a Lady Coach
          </h2>
          <a
            href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20schedule%20a%20session%20with%20a%20lady%20fitness%20trainer%20in%20Delhi."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> WhatsApp Lady Coach
          </a>
        </div>
      </section>
    </div>
  );
}
