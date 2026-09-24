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
  Users,
  MapPin
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Senior Citizen Fitness Trainer in Gurugram | Elderly In-Home Workout | Fit4Steps',
  description: 'Certified senior citizen fitness trainer at home in Gurugram. Serving DLF Phase 1-5, Golf Course Road, Sohna Road. Gentle knee pain restoration, fall prevention, and balance exercises for seniors.',
  keywords: [
    'senior citizen fitness trainer at home gurugram',
    'elderly fitness training gurugram',
    'senior workout coach dlf gurgaon',
    'senior fitness trainer golf course road',
    'knee pain exercises senior citizens gurugram'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/senior-citizen-fitness-trainer-at-home-gurugram',
  },
};

export default function SeniorCitizenGurugramPage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <MapPin size={14} /> Gurugram Senior Service
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Senior Citizen Fitness Trainer in Gurugram <br />
            <span className="text-gold">DLF Phase 1–5 & Golf Course Road</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Specialized in-home fitness, knee pain rehabilitation, and balance training for older adults in Gurugram's top residential condominiums and villas.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20looking%20for%20a%20Senior%20Citizen%20Fitness%20Trainer%20at%20Home%20in%20Gurugram.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book Gurugram Assessment
            </a>
            <a href="tel:+919999448206" className="btn btn-outline">
              <Phone size={18} /> Call +91 99994 48206
            </a>
          </div>
        </div>
      </section>

      {/* WHY GURUGRAM */}
      <section className="section-surface">
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="badge badge-navy" style={{ marginBottom: '16px' }}>
              <ShieldCheck size={14} /> Condominium Doorstep Service
            </div>
            <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
              Dignified In-Home Training in Gurugram
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
              We serve families living in DLF Phase 1–5, DLF The Aralias, Magnolias, Camellias, Palm Springs, and Nirvana Country. Our trainers bring all required equipment and adapt each drill to your parents’ comfort.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {[
                {
                  title: 'Knee Joint Therapy',
                  desc: 'Gentle quadriceps strengthening and assisted traction to decompress knee cartilage.'
                },
                {
                  title: 'Fall Prevention & Balance',
                  desc: 'Single-leg stability and gait correction to stop shuffling and prevent falls.'
                },
                {
                  title: 'Preserves Sarcopenia',
                  desc: 'Light progressive resistance bands to rebuild muscle mass and bone density.'
                },
                {
                  title: 'Punctual Pacing',
                  desc: 'Morning slots (6:00 AM – 9:00 AM) scheduled around medicine and breakfast timings.'
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
            Schedule a Gurugram Doorstep Assessment
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
            Speak directly with Master Trainer Satheesan to schedule an in-home assessment.
          </p>
          <a
            href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20schedule%20a%20doorstep%20assessment%20for%20my%20parents%20in%20Gurugram."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> Schedule Gurugram Trial
          </a>
        </div>
      </section>
    </div>
  );
}
