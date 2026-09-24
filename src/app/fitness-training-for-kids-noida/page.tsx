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
  Sparkles,
  MapPin
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kids Fitness Training in Noida - Fun Workout Programs | Fit4Steps',
  description: 'In-home functional fitness training for kids and teenagers in Noida. Posture correction, agility, screen-time reduction, and sports conditioning across Noida Expressway societies.',
  keywords: [
    'fitness training for kids in noida',
    'kids fitness training noida',
    'children exercise coach noida expressway',
    'jaypee wishtown kids fitness trainer'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/fitness-training-for-kids-noida',
  },
};

export default function KidsFitnessNoidaPage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <MapPin size={14} /> Noida Youth Fitness
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Fitness Training for Kids in Noida <br />
            <span className="text-gold">Fun, Functional Workouts at Home</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Help your children develop strong posture, sports agility, and lifelong healthy habits right at your apartment or society lawn in Jaypee Wishtown and Noida Expressway.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20Kids%20Fitness%20Training%20in%20Noida.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book Kids Trial in Noida
            </a>
            <Link href="/services/kids-fitness-functional-training" className="btn btn-outline">
              Program Details <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="container" style={{ maxWidth: '840px' }}>
          <h2 style={{ fontSize: '26px', color: 'var(--text-main)', marginBottom: '16px' }}>
            Why Noida Parents Trust Fit4Steps for Youth Conditioning
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '20px' }}>
            {[
              { title: 'Reverses Digital Slouching', desc: 'Corrects forward neck posture caused by school tablets and online study.' },
              { title: 'Sports Performance Boost', desc: 'Improves footwork, lateral speed, and endurance for tennis, football, and cricket.' },
              { title: 'Safe Functional Games', desc: 'Zero dangerous heavy lifting—only bodyweight coordination and agility games.' },
              { title: 'Condo & Lawn Friendly', desc: 'Dispatched to Kalypso Court, Pavilion, ATS Village, Mahagun, and Eldeco.' }
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
            Book a Trial for Your Child in Noida
          </h2>
          <a
            href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20schedule%20a%20kids%20fitness%20trial%20in%20Noida."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> WhatsApp Noida Youth Coach
          </a>
        </div>
      </section>
    </div>
  );
}
