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
  title: 'Senior Citizen Fitness Trainer at Home Delhi | Elderly Workout Experts | Fit4Steps',
  description: 'Certified senior citizen fitness trainer at home in Delhi. Specialized in-home elderly workout, gentle knee pain rehabilitation, balance training, and fall prevention in South Delhi.',
  keywords: [
    'senior citizen fitness trainer at home delhi',
    'elderly fitness training delhi',
    'personal fitness trainer for elderly delhi',
    'senior citizen exercises delhi',
    'in-home senior gym coach south delhi'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/senior-citizen-fitness-trainer-at-home-delhi',
  },
};

export default function SeniorCitizenDelhiPage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <MapPin size={14} /> South Delhi Senior Service
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Senior Citizen Fitness Trainer at Home Delhi <br />
            <span className="text-gold">Gentle Elderly Care & Joint Restoration</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Safe, certified, and doctor-recommended fitness coaching delivered to your parents’ doorstep in Greater Kailash (GK 1 & 2), Vasant Kunj, Panchsheel Park, Anand Lok, Defence Colony, and South Delhi.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20looking%20for%20a%20Senior%20Citizen%20Fitness%20Trainer%20at%20Home%20in%20Delhi.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book South Delhi Assessment
            </a>
            <a href="tel:+919999448206" className="btn btn-outline">
              <Phone size={18} /> Call +91 99994 48206
            </a>
          </div>
        </div>
      </section>

      {/* WHY SENIOR FITNESS DELHI */}
      <section className="section-surface">
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="badge badge-navy" style={{ marginBottom: '16px' }}>
              <ShieldCheck size={14} /> Trusted by Delhi Families Since 2010
            </div>
            <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
              Why Fit4Steps is Delhi’s Most Trusted Senior Fitness Provider
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
              Senior bodies require an entirely different approach than young gym goers. Our Delhi trainers understand osteoarthritis, joint wear, cardiovascular pacing, and diabetes management, ensuring parents train with zero risk of strain.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {[
                {
                  title: 'Knee Pain & Cartilage Protection',
                  desc: 'Strengthening the quad muscles without standing weight-bearing pressure, helping clients avoid surgery.'
                },
                {
                  title: 'Fall Prevention & Balance',
                  desc: 'Proprioception and ankle drills that remove the fear of tripping or stumbling.'
                },
                {
                  title: 'Punctual Doorstep Arrival',
                  desc: 'Trainers stationed throughout South Delhi guarantee on-time morning arrival.'
                },
                {
                  title: 'Patience & Dignified Care',
                  desc: 'Our coaches treat elderly clients with immense respect, warmth, and constant encouragement.'
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
            Schedule an In-Home Assessment in Delhi
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
            Speak directly with Master Trainer Satheesan to discuss your parents’ physical needs.
          </p>
          <a
            href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20schedule%20a%20doorstep%20assessment%20for%20my%20parents%20in%20Delhi."
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
