import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  MapPin,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  Award,
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Personal Fitness Trainer in Delhi | Certified Experts for Home Training | Fit4Steps',
  description: 'Book the best personal fitness trainer at home in Delhi. Certified coaches for fat loss, senior citizen workouts, knee therapy, and private lady fitness across South Delhi and Central Delhi.',
  keywords: [
    'best personal fitness trainer in delhi',
    'personal fitness trainer delhi',
    'home personal trainer delhi',
    'fitness coach at home delhi',
    'certified gym trainer delhi home'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/personal-fitness-trainer-delhi',
  },
};

export default function PersonalFitnessTrainerDelhiPage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Award size={14} /> Delhi's Premier Home Training Service
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Best Personal Fitness Trainer in Delhi <br />
            <span className="text-gold">Certified Doorstep Coaching</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Experience 1-on-1 personal coaching with certified fitness trainers at your home in South Delhi. Customized fat loss, functional conditioning, and elderly joint rehabilitation without traveling to crowded gyms.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20looking%20for%20a%20Personal%20Fitness%20Trainer%20in%20Delhi.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book Trial in Delhi
            </a>
            <a href="tel:+919999448206" className="btn btn-outline">
              <Phone size={18} /> Call +91 99994 48206
            </a>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section-surface">
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="badge badge-navy" style={{ marginBottom: '16px' }}>
              <ShieldCheck size={14} /> Certified Faculty
            </div>
            <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
              Personal Training Tailored to Your Home Environment
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
              We serve South Delhi residential areas including Greater Kailash, Vasant Kunj, Panchsheel Park, Anand Lok, Defence Colony, and Gulmohar Park. All portable equipment is brought directly to your session.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {[
                {
                  title: '1-on-1 Focused Coaching',
                  desc: 'Every session is planned around your personal posture, metabolic rate, and movement limitations.'
                },
                {
                  title: 'Elderly Joint Care & Knee Therapy',
                  desc: 'Specialized programs designed to strengthen knee cartilage and prevent surgery.'
                },
                {
                  title: 'Female Trainers Available',
                  desc: 'Certified lady coaches for women seeking comfort and privacy at home.'
                },
                {
                  title: 'Sanitized Equipment Included',
                  desc: 'We bring resistance loops, kettlebells, mats, and balance pads directly to your door.'
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
            Schedule Your Delhi In-Home Trial
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
            Book a 45-minute doorstep mobility assessment and introductory training session today.
          </p>
          <a
            href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20book%20a%20doorstep%20trial%20in%20Delhi."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> Schedule Delhi Trial
          </a>
        </div>
      </section>
    </div>
  );
}
