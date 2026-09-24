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
  Sparkles,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Prenatal & Postnatal Yoga at Home | Noida, Delhi & Gurugram | Fit4Steps',
  description: 'Certified in-home prenatal and postnatal yoga instructors in Delhi NCR. Gentle pelvic opening, breathing techniques for labor, diastasis recti safe postpartum recovery in your home.',
  keywords: [
    'prenatal yoga at home noida',
    'postnatal yoga trainer delhi',
    'pregnancy yoga instructor gurugram',
    'diastasis recti safe exercise',
    'postpartum core recovery trainer'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/services/prenatal-postnatal-yoga',
  },
};

export default function PrenatalPostnatalYogaPage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Heart size={14} /> Maternal Health Specialist
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Prenatal & Postnatal Yoga <br />
            <span className="text-gold">Gentle In-Home Care</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Nurture your body and baby through every trimester and restore your core strength post-delivery. Our certified female instructors bring safe, doctor-aligned prenatal and postnatal yoga directly to your living room.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20Prenatal/Postnatal%20Yoga%20at%20Home.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book Prenatal Trial
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
              <ShieldCheck size={14} /> Trimester-by-Trimester Safety
            </div>
            <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
              Tailored for Every Stage of Motherhood
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '24px' }}>
              {[
                {
                  title: 'Pelvic Floor & Hip Opening',
                  desc: 'Gentle modified asanas that release tension in the sacrum, relieve sciatica, and prepare the pelvic basin for childbirth.'
                },
                {
                  title: 'Pranayama & Labor Breathing',
                  desc: 'Calming breathwork routines to lower maternal cortisol, ease pregnancy anxiety, and practice labor contraction pacing.'
                },
                {
                  title: 'Diastasis Recti Safe Recovery',
                  desc: 'Postpartum rehabilitation that re-approximates separated abdominal muscles without damaging intra-abdominal pressure.'
                },
                {
                  title: 'Postural Realignment',
                  desc: 'Relieves upper back and neck strain caused by breastfeeding, carrying baby, and changing hormonal laxity.'
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
            Consult Our Maternal Wellness Coach
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
            Safe, comfortable, and private yoga sessions in Noida, South Delhi, and Gurugram.
          </p>
          <a
            href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20consult%20about%20prenatal%20yoga%20at%20home."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> WhatsApp Prenatal Specialist
          </a>
        </div>
      </section>
    </div>
  );
}
