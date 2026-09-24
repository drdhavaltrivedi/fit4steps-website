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
  Stethoscope
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Corrective Exercise for Lifestyle Diseases | Diabetes & Cardiac Care | Fit4Steps',
  description: 'Certified corrective exercise specialist at home in Noida, Delhi & Gurugram. Safe, medically-informed training for Type 2 diabetes, hypertension, fatty liver, and cervical/lumbar disc issues.',
  keywords: [
    'corrective exercise lifestyle diseases',
    'exercise for type 2 diabetes at home',
    'blood pressure control workout delhi',
    'medical fitness trainer noida',
    'lumbar spine rehab trainer gurugram'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/services/corrective-exercise-lifestyle-diseases',
  },
};

export default function CorrectiveExercisePage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Stethoscope size={14} /> Medical Fitness Therapy
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Corrective Exercise for <br />
            <span className="text-gold">Lifestyle Diseases & Spinal Care</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Manage and reverse chronic lifestyle conditions through structured, non-pharmaceutical exercise therapy. Our coaches coordinate with your clinical physicians to build safe, symptom-reducing fitness routines at home.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20looking%20for%20Corrective%20Exercise%20for%20a%20lifestyle%20health%20condition.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book Medical Consultation
            </a>
            <a href="tel:+919999448206" className="btn btn-outline">
              <Phone size={18} /> Call +91 99994 48206
            </a>
          </div>
        </div>
      </section>

      {/* CONDITIONS WE MANAGE */}
      <section className="section-surface">
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="badge badge-navy" style={{ marginBottom: '16px' }}>
              <ShieldCheck size={14} /> Clinical Protocols
            </div>
            <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
              Targeted Rehabilitation for Chronic Health Conditions
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '24px' }}>
              {[
                {
                  title: 'Type 2 Diabetes & Insulin Resistance',
                  desc: 'Large muscle group resistance drills that increase GLUT-4 glucose transporter uptake, directly lowering HbA1c levels.'
                },
                {
                  title: 'Hypertension & Cardiovascular Pacing',
                  desc: 'Controlled low-intensity steady-state cardio that reduces arterial stiffness without causing blood pressure spikes.'
                },
                {
                  title: 'Lumbar & Cervical Spine Herniations',
                  desc: 'Decompression routines, core bracing, and glute activation to relieve sciatic nerve impingement and lower back spasms.'
                },
                {
                  title: 'Fatty Liver & Metabolic Syndrome',
                  desc: 'Sustained caloric and metabolic conditioning protocols that reduce visceral adiposity around vital organs.'
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
            Take Control of Your Health Markers
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
            Consult with Master Trainer Satheesan and start a doctor-coordinated in-home corrective plan.
          </p>
          <a
            href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20consult%20about%20corrective%20exercises%20for%20my%20health%20condition."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> WhatsApp Medical Intake
          </a>
        </div>
      </section>
    </div>
  );
}
