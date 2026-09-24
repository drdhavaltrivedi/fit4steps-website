import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Flame,
  Activity,
  Dumbbell,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  Zap,
  Target,
  Users,
  Award,
  Heart
} from 'lucide-react';
import AssessmentWidget from '@/components/AssessmentWidget';

export const metadata: Metadata = {
  title: 'Dynamic Athletic & 360° In-Home Performance | Fit4Steps v5',
  description: 'High-performance personal training, strength conditioning, Pilates, and joint mobility at your doorstep in Noida, Delhi & Gurugram.',
};

export default function Version5DynamicPage() {
  const disciplines = [
    {
      title: 'Senior Citizen & Joint Care',
      tag: 'Flagship Core',
      calBurn: '250–350 kcal',
      jointSafety: '100% Non-Impact',
      bestFor: 'Parents 50+, knee arthritis & fall prevention',
      desc: 'Gentle joint decompression, safe range-of-motion restoration, and functional stair-climbing confidence.',
      img: '/assets/image/hero-senior-trainer.jpg',
    },
    {
      title: 'Functional Weight Training',
      tag: 'Metabolic Strength',
      calBurn: '450–650 kcal',
      jointSafety: 'High Safety / Guided',
      bestFor: 'Muscle toning, fat loss & metabolic health',
      desc: 'Progressive overload using calibrated elastic resistance bands, bodyweight leverage, and core bracing.',
      img: '/assets/image/programme-img-1.webp',
    },
    {
      title: 'Traditional & Power Yoga',
      tag: 'Mind & Flexibility',
      calBurn: '300–400 kcal',
      jointSafety: 'Therapeutic',
      bestFor: 'Stress relief, spinal flexibility & breathwork',
      desc: 'Classical asanas combined with pranayama, posture correction, and deep myofascial stretching.',
      img: '/assets/image/programme-img-2.webp',
    },
    {
      title: 'Classical Mat Pilates',
      tag: 'Core & Alignment',
      calBurn: '350–500 kcal',
      jointSafety: 'Orthopedic Friendly',
      bestFor: 'Pelvic floor, lower back pain & posture',
      desc: 'Deep transverse abdominis activation, spinal decompression, and elongated muscular tone.',
      img: '/assets/image/programme-img-3.webp',
    },
    {
      title: 'TRX & Kick Boxing Agility',
      tag: 'High Energy',
      calBurn: '550–750 kcal',
      jointSafety: 'Supervised Dynamic',
      bestFor: 'Athletic stamina, reflex speed & stress release',
      desc: 'Suspension training with cardiovascular shadow boxing for high calorie burn without joint damage.',
      img: '/assets/image/h-s2-servi-card-img-1.webp',
    },
    {
      title: 'Couple & Partner Training',
      tag: 'Shared Motivation',
      calBurn: '400–600 kcal',
      jointSafety: 'Customized Each',
      bestFor: 'Husband & wife, partners, or siblings',
      desc: 'Synchronized living room routines with customized exercises calibrated to each partner’s individual fitness level.',
      img: '/assets/image/h-s2-servi-card-img-2.webp',
    },
  ];

  return (
    <div style={{ background: 'var(--bg-page)' }}>
      {/* 1. DYNAMIC HIGH-PERFORMANCE HERO */}
      <section className="hero-clean" style={{ paddingTop: '64px', paddingBottom: '76px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            {/* Left Content */}
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
                <Zap size={14} /> 360° In-Home Athletic & Longevity Conditioning
              </div>

              <h1 style={{
                fontSize: 'clamp(34px, 4.6vw, 54px)',
                lineHeight: 1.15,
                color: 'var(--text-main)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '20px',
              }}>
                Elite In-Home Fitness Training & <span className="text-gold">Performance Health</span>
              </h1>

              <p style={{
                fontSize: '17px',
                color: 'var(--text-body)',
                lineHeight: 1.7,
                marginBottom: '28px',
                maxWidth: '560px',
              }}>
                Whether you need high-tempo executive fat loss, couple workouts, or restorative senior knee therapy, our master trainers deliver customized 1-on-1 sessions right to your living room.
              </p>

              {/* 3 Value Points */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '14px', marginBottom: '32px' }}>
                <div style={{
                  padding: '14px',
                  borderRadius: '12px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--brand-gold)', fontWeight: 700, fontSize: '13px', marginBottom: '4px' }}>
                    <Flame size={16} /> High Efficiency
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>45–60 min intense or restorative home sessions</div>
                </div>

                <div style={{
                  padding: '14px',
                  borderRadius: '12px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--brand-navy)', fontWeight: 700, fontSize: '13px', marginBottom: '4px' }}>
                    <ShieldCheck size={16} /> Zero Equipment Needed
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Trainer brings all sanitized apparatus & mats</div>
                </div>

                <div style={{
                  padding: '14px',
                  borderRadius: '12px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#16a34a', fontWeight: 700, fontSize: '13px', marginBottom: '4px' }}>
                    <Activity size={16} /> Heart & Vitals
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Continuous blood pressure and pulse logging</div>
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
                  href="https://wa.me/919778776136?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20high-performance%20in-home%20fitness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ padding: '14px 22px', fontSize: '15px' }}
                >
                  <MessageCircle size={18} /> Instant WhatsApp Dispatch
                </a>
              </div>
            </div>

            {/* Right Dynamic Visual */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1.5px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-lg)',
                position: 'relative',
              }}>
                <Image
                  src="/assets/image/satheesan-head-trainer.jpg"
                  alt="Master Trainer Satheesan - Founder & Head Coach"
                  width={640}
                  height={560}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  priority
                />

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
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'var(--brand-gold-soft)',
                    color: 'var(--brand-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Award size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#0b2737' }}>
                      Master Trainer Satheesan
                    </div>
                    <div style={{ fontSize: '12px', color: '#475569' }}>
                      15+ Years • Former Senior Coach at Gold’s Gym & Fitness First • Trusted by 7,000+ Clients
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 360° DISCIPLINE MATRIX */}
      <section className="section-surface">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold" style={{ marginBottom: '10px' }}>
              Multi-Disciplinary Spectrum
            </div>
            <h2>The Complete In-Home <span className="text-gold">Training Matrix</span></h2>
            <p>Every discipline is delivered 1-on-1 at your doorstep, calibrated to your exact joint health and metabolic goals.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {disciplines.map((d) => (
              <div key={d.title} className="theme-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ borderRadius: '12px', overflow: 'hidden', height: '180px', position: 'relative', marginBottom: '16px' }}>
                    <Image
                      src={d.img}
                      alt={d.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      background: 'rgba(11, 39, 55, 0.88)',
                      color: '#ffffff',
                      padding: '3px 9px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: 700,
                    }}>
                      {d.tag}
                    </div>
                  </div>

                  <h3 style={{ fontSize: '18px', color: 'var(--text-main)', marginBottom: '8px' }}>{d.title}</h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.55, marginBottom: '16px' }}>{d.desc}</p>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '8px',
                    padding: '10px 12px',
                    background: 'var(--bg-surface-alt)',
                    borderRadius: '8px',
                    fontSize: '12px',
                    marginBottom: '16px',
                  }}>
                    <div>
                      <span style={{ color: 'var(--text-muted)' }}>Calorie Burn:</span>
                      <div style={{ fontWeight: 700, color: 'var(--brand-gold-text)' }}>{d.calBurn}</div>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-muted)' }}>Joint Safety:</span>
                      <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>{d.jointSafety}</div>
                    </div>
                  </div>

                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    <strong>Best for:</strong> {d.bestFor}
                  </div>
                </div>

                <div style={{ marginTop: '18px', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
                  <Link
                    href="/contact"
                    className="btn btn-secondary"
                    style={{ width: '100%', justifyContent: 'center', padding: '9px', fontSize: '13px' }}
                  >
                    Select This Program <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ASSESSMENT TOOL */}
      <section className="section-page">
        <div className="container">
          <AssessmentWidget />
        </div>
      </section>

      {/* 4. AEO DIRECT FACT BLOCK */}
      <section className="section-alt" style={{ padding: '48px 0' }}>
        <div className="container">
          <div className="aeo-capsule" style={{ margin: 0 }}>
            <div className="aeo-capsule-badge">
              <CheckCircle2 size={13} /> Direct Answer • In-Home Exercise Apparatus & Space Requirements
            </div>
            <h2 className="aeo-capsule-question">
              How much living room space is required for in-home personal fitness training?
            </h2>
            <div className="aeo-capsule-answer">
              <p>
                <strong>Direct Answer:</strong> A standard 6x6 foot area (the size of a living room rug or yoga mat) is all that is required for Fit4Steps in-home sessions. Our trainers utilize functional resistance loops, calibrated Swiss balls, suspension straps, and bodyweight leverage. You do not need dedicated gym space or bulky treadmills.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
