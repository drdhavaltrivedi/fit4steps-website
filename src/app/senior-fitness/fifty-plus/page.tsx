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
  title: 'Personal Fitness Training for 50 Plus | Gentle Home Coaching | Fit4Steps',
  description: 'Specialized 1-on-1 personal fitness training for adults aged 50 and above in Noida, Delhi & Gurugram. Safe cardio conditioning, metabolic support, posture correction, and injury-free exercise.',
  keywords: [
    'personal fitness training for 50 plus',
    'fitness coaching for 50 plus at home',
    'workout routine for 50 year olds',
    'safe exercises after 50',
    'personal trainer for 50 plus noida delhi'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/senior-fitness/fifty-plus',
  },
};

export default function FiftyPlusPage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Activity size={14} /> Senior Fitness Pillar
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Personal Fitness Training for <span className="text-gold">50 Plus</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Entering your 50s brings natural changes to metabolic rate, hormonal balance, and joint recovery. Our dedicated 1-on-1 home coaching rebuilds sustained vitality without putting stress on vulnerable joints.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20Personal%20Fitness%20Training%20for%2050%20Plus.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book Doorstep Consultation
            </a>
            <Link href="/senior-fitness" className="btn btn-outline">
              All Senior Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY TRAINING AFTER 50 REQUIRES SPECIALIZATION */}
      <section className="section-surface">
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="badge badge-navy" style={{ marginBottom: '16px' }}>
              <Stethoscope size={14} /> Clinical Understanding
            </div>
            <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px', lineHeight: 1.3 }}>
              Why Fitness After 50 Requires a Specialized Approach
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
              Generic gym workouts designed for 25-year-olds can lead to chronic tendinitis, meniscus irritation, and burnout in individuals over 50. Our protocol focuses on physiological sustainability, preserving synovial fluid in joints, and strengthening stabilizing muscles first.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '28px' }}>
              {[
                {
                  title: 'Metabolic & Cardiac Pacing',
                  desc: 'Aerobic pacing tailored to safe heart-rate zones, assisting in managing blood sugar and cholesterol.'
                },
                {
                  title: 'Spine & Posture Realignment',
                  desc: 'Targeted strengthening of thoracic extensors and deep core to correct forward head tilt and back fatigue.'
                },
                {
                  title: 'Low-Impact Resistance',
                  desc: 'Elastic loop bands and controlled dumbbell movements that stimulate muscle tone without heavy spinal compression.'
                },
                {
                  title: 'Assisted Decompression',
                  desc: 'Post-workout assisted passive stretching to release tension in hips, hamstrings, and lower back.'
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

      {/* WHAT A TYPICAL SESSION LOOKS LIKE */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '840px' }}>
          <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '24px', textAlign: 'center' }}>
            Your 60-Minute 50+ In-Home Session Structure
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                time: '00 - 10 Min',
                phase: 'Gentle Joint Warm-Up & Dynamic Mobility',
                desc: 'Circulatory activation, synovial joint lubrication for shoulders, hips, and ankles.'
              },
              {
                time: '10 - 35 Min',
                phase: 'Functional Strength & Postural Stabilization',
                desc: 'Multi-joint movements focusing on core, glute engagement, and functional upper body posture.'
              },
              {
                time: '35 - 48 Min',
                phase: 'Controlled Low-Impact Cardiovascular Conditioning',
                desc: 'Shadow stepping, step touches, and reactive movement drills tailored to current cardiac fitness.'
              },
              {
                time: '48 - 60 Min',
                phase: 'Cool-Down, Deep Breathing & Assisted Stretching',
                desc: 'Parasympathetic recovery, gentle breathing exercises to lower blood pressure, and muscle release.'
              }
            ].map((step, idx) => (
              <div key={idx} className="card-clean" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{
                  padding: '10px 14px',
                  background: 'var(--bg-main)',
                  borderRadius: '10px',
                  color: 'var(--primary-gold)',
                  fontWeight: 700,
                  fontSize: '13px',
                  whiteSpace: 'nowrap'
                }}>
                  {step.time}
                </div>
                <div>
                  <h3 style={{ fontSize: '17px', color: 'var(--text-main)', marginBottom: '4px' }}>{step.phase}</h3>
                  <p style={{ color: 'var(--text-body)', fontSize: '14px', margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section-surface" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
            Begin Your 50+ Wellness Journey Today
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
            Speak directly with Master Trainer Satheesan to discuss your health history, medical advice, and tailored routine.
          </p>
          <a
            href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20discuss%20fitness%20training%20for%2050%20plus."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> WhatsApp Our Senior Coach
          </a>
        </div>
      </section>
    </div>
  );
}
