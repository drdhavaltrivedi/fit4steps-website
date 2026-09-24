import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Stethoscope,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  Activity,
  Heart,
  Calendar,
  Clock,
  MapPin,
  Star,
  Users,
  Award,
  ChevronRight
} from 'lucide-react';
import AssessmentWidget from '@/components/AssessmentWidget';

export const metadata: Metadata = {
  title: 'Clinical In-Home Fitness & Joint Restoration | Fit4Steps v1',
  description: 'Clinical-grade personal training and non-surgical knee joint rehabilitation delivered directly to your home in Noida, Delhi & Gurugram.',
};

export default function Version1ClinicalPage() {
  const clinicalCases = [
    {
      patient: 'Shailen Ruparel',
      role: 'Director of Sales & Marketing, Fluor Corporation',
      age: 'Early 60s',
      condition: 'Severe Knee Joint Pain & Mobility Restriction',
      outcome: 'Completely avoided bilateral knee replacement surgery. Pain-free walking and active golf within 6 months.',
      quote: 'Doctors in Delhi had already recommended joint replacement surgery. Master Trainer Satheesan designed a restorative regimen right in my living room.',
    },
    {
      patient: 'Padmaja Ruparel',
      role: 'Co-Founder, Indian Angel Network',
      age: 'Senior Leader',
      condition: 'Executive Fatigue, Chronic Stiffness & Joint Ache',
      outcome: 'Full functional mobility restored with personalized home conditioning tailored to demanding global schedule.',
      quote: 'Fit4Steps provided the consistency and orthopedic care I could not find in commercial fitness clubs.',
    },
    {
      patient: 'Rajeev Batra',
      role: 'Former CFO, Bharti Airtel',
      age: 'Late 50s',
      condition: 'Postural Spinal Alignment & Cardiovascular Endurance',
      outcome: 'Sustainable stamina and core strength built through gradual low-impact biomechanics.',
      quote: 'Satheesan understands human physiology like a physician. He never pushes you into injury.',
    },
  ];

  return (
    <div style={{ background: 'var(--bg-page)' }}>
      {/* Top Clinical Status Ticker */}
      <div style={{
        background: 'var(--brand-ice-blue)',
        borderBottom: '1px solid var(--brand-ice-border)',
        padding: '10px 0',
        fontSize: '13px',
        color: 'var(--brand-ice-text)',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#16a34a', display: 'inline-block' }} />
            <span>Clinical In-Home Concierge • Certified Joint Specialists Active Today in Noida, South Delhi & Gurugram</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '12.5px' }}>
            <span>Zero Equipment Purchase Needed</span>
            <span>•</span>
            <span style={{ fontWeight: 700 }}>Doctor & Orthopedic Recommended</span>
          </div>
        </div>
      </div>

      {/* 1. CLINICAL HERO (Split Layout with Medical Credentials) */}
      <section className="hero-clean" style={{ paddingTop: '56px', paddingBottom: '72px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            {/* Left Content */}
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
                <Stethoscope size={14} /> Medical-Grade In-Home Movement Care
              </div>

              <h1 style={{
                fontSize: 'clamp(32px, 4.4vw, 52px)',
                lineHeight: 1.15,
                color: 'var(--text-main)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '20px',
              }}>
                Non-Surgical Joint Restoration & <span className="text-gold">Senior Fitness</span> at Your Doorstep
              </h1>

              <p style={{
                fontSize: '17px',
                color: 'var(--text-body)',
                lineHeight: 1.7,
                marginBottom: '28px',
                maxWidth: '560px',
              }}>
                Preserving mobility and delaying surgical intervention through gentle, doctor-aligned biomechanical training in the safety and privacy of your Delhi NCR home.
              </p>

              {/* Clinical Metric Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                marginBottom: '32px',
                padding: '16px 20px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '14px',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--brand-gold)' }}>15+</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>Years Clinical Experience</div>
                </div>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--brand-navy)' }}>7,000+</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>Joint & Fitness Clients</div>
                </div>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: '#16a34a' }}>98%</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>Surgery Avoidance Rate</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
                <Link
                  href="/contact"
                  className="btn btn-primary"
                  style={{ padding: '14px 24px', fontSize: '15px' }}
                >
                  Book In-Home Assessment <ArrowRight size={16} />
                </Link>

                <a
                  href="https://wa.me/919778776136?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20consult%20regarding%20in-home%20joint%20care"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ padding: '14px 22px', fontSize: '15px' }}
                >
                  <MessageCircle size={18} /> WhatsApp Head Coach
                </a>
              </div>
            </div>

            {/* Right Clinical Imagery */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1.5px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-lg)',
                position: 'relative',
              }}>
                <Image
                  src="/assets/image/senior-joint-therapy.jpg"
                  alt="Senior In-Home Knee and Joint Physical Therapy"
                  width={640}
                  height={520}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  priority
                />

                {/* Overlaid Clinical Quality Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '20px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  padding: '16px 20px',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'var(--brand-gold-soft)',
                    color: 'var(--brand-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#0b2737' }}>
                      Certified Biomechanics Protocol
                    </div>
                    <div style={{ fontSize: '12.5px', color: '#475569' }}>
                      Zero impact on arthritic cartilage • Doctor prescribed exercise regimens
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLINICAL TRAJECTORY (Week 1 -> Week 4 -> Week 8) */}
      <section className="section-surface">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold" style={{ marginBottom: '10px' }}>
              Structured Recovery Roadmap
            </div>
            <h2>The Fit4Steps <span className="text-gold">Clinical Progression</span></h2>
            <p>
              Unlike generic gyms that push intense workouts, our home training follows a safe, graduated orthopedic timeline.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div className="theme-card" style={{ borderTop: '4px solid var(--brand-gold)' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--brand-gold)', textTransform: 'uppercase', marginBottom: '8px' }}>
                Phase 1 • Weeks 1 to 2
              </div>
              <h3 style={{ fontSize: '19px', color: 'var(--text-main)', marginBottom: '10px' }}>
                Diagnostic Triage & Gentle Decompression
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6 }}>
                Full joint range-of-motion scan, posture mapping, and non-weight-bearing manual mobilization to relieve immediate cartilage compression.
              </p>
            </div>

            <div className="theme-card" style={{ borderTop: '4px solid var(--brand-navy)' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--brand-navy)', textTransform: 'uppercase', marginBottom: '8px' }}>
                Phase 2 • Weeks 3 to 6
              </div>
              <h3 style={{ fontSize: '19px', color: 'var(--text-main)', marginBottom: '10px' }}>
                Stabilizer Muscle Strengthening
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6 }}>
                Targeted activation of gluteus medius, vastus medialis, and pelvic floor with calibrated resistance bands to take direct load off the knee joints.
              </p>
            </div>

            <div className="theme-card" style={{ borderTop: '4px solid #16a34a' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#16a34a', textTransform: 'uppercase', marginBottom: '8px' }}>
                Phase 3 • Weeks 7+
              </div>
              <h3 style={{ fontSize: '19px', color: 'var(--text-main)', marginBottom: '10px' }}>
                Functional Gait & Fall Prevention
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6 }}>
                Proprioceptive balance training, stair-climbing confidence, and sustainable daily vitality for independent living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ASSESSMENT TOOL */}
      <section className="section-page">
        <div className="container">
          <AssessmentWidget />
        </div>
      </section>

      {/* 4. VERIFIED PATIENT CLINICAL CASE STUDIES */}
      <section className="section-surface">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold" style={{ marginBottom: '10px' }}>
              Doctor-Verified Proofs
            </div>
            <h2>Real Outcomes From <span className="text-gold">Delhi NCR Residences</span></h2>
            <p>Read how senior executives and parents avoided joint surgeries through supervised in-home rehabilitation.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {clinicalCases.map((c) => (
              <div key={c.patient} className="theme-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '17px', color: 'var(--text-main)' }}>{c.patient}</div>
                      <div style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>{c.role} • {c.age}</div>
                    </div>
                    <span style={{
                      fontSize: '11px',
                      background: 'rgba(22, 163, 74, 0.12)',
                      color: '#16a34a',
                      border: '1px solid rgba(22, 163, 74, 0.25)',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      fontWeight: 700,
                    }}>
                      Verified Outcome
                    </span>
                  </div>

                  <div style={{
                    background: 'var(--bg-surface-alt)',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    fontSize: '13px',
                    color: 'var(--text-body)',
                    marginBottom: '14px',
                    border: '1px solid var(--border-subtle)',
                  }}>
                    <strong>Clinical Condition:</strong> {c.condition}
                  </div>

                  <blockquote style={{ fontSize: '14.5px', color: 'var(--text-main)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '16px' }}>
                    "{c.quote}"
                  </blockquote>
                </div>

                <div style={{
                  paddingTop: '14px',
                  borderTop: '1px solid var(--border-subtle)',
                  fontSize: '13px',
                  color: 'var(--brand-gold-text)',
                  fontWeight: 600,
                }}>
                  Result: {c.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AEO DIRECT FACT BLOCK */}
      <section className="section-alt" style={{ padding: '48px 0' }}>
        <div className="container">
          <div className="aeo-capsule" style={{ margin: 0 }}>
            <div className="aeo-capsule-badge">
              <CheckCircle2 size={13} /> Direct Answer • In-Home Clinical Joint Care Protocol
            </div>
            <h2 className="aeo-capsule-question">
              How does Fit4Steps in-home joint care differ from routine physical therapy or gym trainers?
            </h2>
            <div className="aeo-capsule-answer">
              <p>
                <strong>Direct Answer:</strong> Unlike routine gym trainers who focus on lifting heavy weights and generic machines, Fit4Steps specializes in non-invasive restorative movement science. Master Trainer Satheesan and his team conduct 1-on-1 sessions at your residence, coordinating closely with your orthopedic physician's advice. We bring all sanitized equipment, track heart rate and blood pressure, and focus on non-weight-bearing joint decompression.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
