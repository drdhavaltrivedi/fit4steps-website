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
  title: 'Personal Fitness Trainer in GK Delhi – Home, Private Coaching | Fit4Steps',
  description: 'Certified personal fitness trainer in Greater Kailash (GK 1 & 2), South Delhi. In-home coaching, private gym trainer, senior wellness, and female trainers at your doorstep.',
  keywords: [
    'personal trainer greater kailash delhi',
    'personal fitness trainer in gk delhi',
    'home gym trainer greater kailash',
    'female fitness trainer gk 2',
    'senior citizen trainer gk 1 delhi'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/personal-trainer-greater-kailash-delhi',
  },
};

export default function GreaterKailashPage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <MapPin size={14} /> Greater Kailash Local Service
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Personal Fitness Trainer in <br />
            <span className="text-gold">Greater Kailash (GK 1 & 2), Delhi</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Discreet, certified 1-on-1 personal coaching delivered to your home or kothi in Greater Kailash 1, GK 2, Enclave, and Masjid Moth.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20looking%20for%20a%20Personal%20Trainer%20in%20Greater%20Kailash.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book GK Trial Session
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
              <ShieldCheck size={14} /> Premier South Delhi Service
            </div>
            <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
              Private Coaching in the Comfort of Your GK Residence
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
              Greater Kailash residents trust Fit4Steps for our punctuality, strict privacy, and clinical knowledge. Whether training elderly parents, executive professionals, or women seeking private coaching, our trainers arrive with all sanitized gear.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {[
                {
                  title: 'Stationed Locally in GK',
                  desc: 'Trainers based around M-Block and N-Block ensure reliable 6:00 AM to 8:30 PM availability.'
                },
                {
                  title: 'Elderly Joint Care',
                  desc: 'Specialized knee and hip mobility protocols helping older residents maintain pain-free daily movement.'
                },
                {
                  title: 'Certified Female Coaches',
                  desc: 'Dedicated lady fitness instructors for women seeking private, comfortable in-home workouts.'
                },
                {
                  title: 'Full Equipment Provided',
                  desc: 'Bands, loops, balls, mats, and weights brought to your doorstep every session.'
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
            Schedule a Trial at Your Greater Kailash Home
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
            Book a 45-minute doorstep mobility assessment and introductory training session today.
          </p>
          <a
            href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20book%20a%20doorstep%20trial%20in%20Greater%20Kailash."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> WhatsApp GK Desk
          </a>
        </div>
      </section>
    </div>
  );
}
