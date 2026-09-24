import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Users,
  Award,
  Zap,
  Check,
  X
} from 'lucide-react';
import AssessmentWidget from '@/components/AssessmentWidget';

export const metadata: Metadata = {
  title: 'Instant Booking & Trainer Matching | Fit4Steps v2',
  description: 'Fast-track in-home personal training and senior joint rehabilitation booking across Noida, South Delhi, and Gurugram.',
};

export default function Version2FastTrackPage() {
  const trainers = [
    {
      name: 'Master Trainer Satheesan',
      role: 'Founder & Head Rehabilitation Coach',
      experience: '15+ Years',
      sectors: 'Noida (Jaypee Wishtown) & South Delhi',
      specialty: 'Senior Joint Pain & Non-Surgical Knee Care',
      img: '/assets/image/satheesan-head-trainer.jpg',
    },
    {
      name: 'Certified Senior Rehab Specialist',
      role: 'Senior Mobility & Posture Coach',
      experience: '10+ Years',
      sectors: 'South Delhi (GK, Vasant Kunj, Panchsheel)',
      specialty: 'Spine Health & Corrective Biomechanics',
      img: '/assets/image/hero-senior-trainer.jpg',
    },
    {
      name: 'Certified Female Wellness Coach',
      role: 'Lady Fitness & Prenatal Specialist',
      experience: '8+ Years',
      sectors: 'Gurugram (DLF Phase 1-5, Golf Course Rd)',
      specialty: 'Prenatal Yoga, Fat Loss & Toning',
      img: '/assets/image/programme-img-2.webp',
    },
  ];

  const comparison = [
    {
      feature: 'Travel / Commute Time',
      fit4steps: '0 Minutes (Trainer arrives at your doorstep)',
      gym: '45–60 mins stuck in Delhi NCR traffic',
      clinic: '30–45 mins waiting room delays',
    },
    {
      feature: 'Orthopedic & Joint Safety',
      fit4steps: '100% 1-on-1 supervised, non-impact biomechanics',
      gym: 'High injury risk from generic heavy machines',
      clinic: 'Limited 15-min electrical modalities only',
    },
    {
      feature: 'Personalized Attention',
      fit4steps: 'Dedicated coach exclusively for your session',
      gym: 'Shared trainer distracted by 10+ people',
      clinic: 'Multiple patients handled simultaneously',
    },
    {
      feature: 'Equipment & Hygiene',
      fit4steps: 'All sanitized bands & foam pads brought to you',
      gym: 'Sweaty shared gym machines and locker rooms',
      clinic: 'Sterile clinical bed with limited workout',
    },
    {
      feature: 'Family & Senior Friendly',
      fit4steps: 'Comfort of living room, zero stairs or escalators',
      gym: 'Intimidating, loud music, crowded floors',
      clinic: 'Clinical hospital vibe',
    },
  ];

  return (
    <div style={{ background: 'var(--bg-page)' }}>
      {/* 1. FAST-TRACK HERO WITH INTEGRATED INSTANT DISPATCH BAR */}
      <section className="hero-clean" style={{ paddingTop: '64px', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px auto' }}>
            <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
              <Zap size={14} /> Fast-Track In-Home Trainer Dispatch
            </div>

            <h1 style={{
              fontSize: 'clamp(34px, 4.8vw, 56px)',
              lineHeight: 1.14,
              color: 'var(--text-main)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '20px',
            }}>
              Book a Certified Personal Trainer at Your Residence in <span className="text-gold">30 Seconds</span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: 'var(--text-body)',
              lineHeight: 1.6,
            }}>
              Private, 1-on-1 personalized workouts and gentle knee joint therapy delivered to your doorstep in Noida, South Delhi, and Gurugram.
            </p>
          </div>

          {/* Integrated Fast-Track Booking Card */}
          <div style={{
            background: 'var(--bg-surface)',
            border: '2px solid var(--brand-gold-border)',
            borderRadius: '20px',
            padding: '32px',
            boxShadow: 'var(--shadow-lg)',
            maxWidth: '1000px',
            margin: '0 auto',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '24px',
              paddingBottom: '16px',
              borderBottom: '1px solid var(--border-subtle)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 700, color: 'var(--text-main)' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#16a34a' }} />
                <span>12 Certified Coaches Available for Doorstep Booking This Week</span>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--brand-gold-text)', fontWeight: 600 }}>
                Average Trainer Match Time: Under 15 Minutes
              </div>
            </div>

            {/* Quick 3-Field Instant Action */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px', textTransform: 'uppercase' }}>
                  1. Your Delhi NCR Hub
                </label>
                <div style={{
                  padding: '12px 14px',
                  borderRadius: '10px',
                  border: '1px solid var(--border-medium)',
                  background: 'var(--bg-surface-alt)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <MapPin size={16} color="var(--brand-gold)" />
                  <span>Noida, South Delhi, Gurugram</span>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px', textTransform: 'uppercase' }}>
                  2. Focus / Condition
                </label>
                <div style={{
                  padding: '12px 14px',
                  borderRadius: '10px',
                  border: '1px solid var(--border-medium)',
                  background: 'var(--bg-surface-alt)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <ShieldCheck size={16} color="var(--brand-navy)" />
                  <span>Senior Knee Care & Personal Fitness</span>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px', textTransform: 'uppercase' }}>
                  3. Instant Action
                </label>
                <a
                  href="https://wa.me/919778776136?text=Hi%20Satheesan,%20I%20would%20like%20to%20match%20a%20trainer%20for%20my%20residence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '14px' }}
                >
                  <MessageCircle size={18} /> Match My Trainer on WhatsApp
                </a>
              </div>
            </div>

            <div style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)' }}>
              Or call Master Trainer Satheesan directly at <a href="tel:+919778776136" style={{ color: 'var(--brand-gold-text)', fontWeight: 700 }}>+91 977 877 6136</a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MEET YOUR NEIGHBORHOOD IN-HOME COACHES */}
      <section className="section-surface">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold" style={{ marginBottom: '10px' }}>
              Verified In-Home Coaches
            </div>
            <h2>Meet Your <span className="text-gold">Neighborhood Trainers</span></h2>
            <p>Every Fit4Steps trainer is police-verified, certified, and trained under Founder Satheesan's joint safety protocols.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {trainers.map((t) => (
              <div key={t.name} className="theme-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ borderRadius: '14px', overflow: 'hidden', height: '220px', position: 'relative', marginBottom: '18px' }}>
                    <Image
                      src={t.img}
                      alt={t.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(11, 39, 55, 0.9)',
                      color: '#ffffff',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontSize: '11px',
                      fontWeight: 700,
                    }}>
                      {t.experience} Experience
                    </div>
                  </div>

                  <h3 style={{ fontSize: '18px', color: 'var(--text-main)', marginBottom: '4px' }}>{t.name}</h3>
                  <div style={{ fontSize: '13px', color: 'var(--brand-gold-text)', fontWeight: 600, marginBottom: '10px' }}>{t.role}</div>
                  <div style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.5, marginBottom: '12px' }}>
                    <strong>Specialty:</strong> {t.specialty}
                  </div>
                  <div style={{ fontSize: '12.5px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <MapPin size={13} color="var(--brand-gold)" /> Serving: {t.sectors}
                  </div>
                </div>

                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                  <a
                    href={`https://wa.me/919778776136?text=Hi,%20I%20am%20interested%20in%20consulting%20with%20${encodeURIComponent(t.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '10px', fontSize: '13.5px' }}
                  >
                    Request Session with Coach <ArrowRight size={14} />
                  </a>
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

      {/* 4. 3-WAY COMPARISON MATRIX (Fit4Steps vs Gym vs Clinic) */}
      <section className="section-surface">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold" style={{ marginBottom: '10px' }}>
              Side-by-Side Comparison
            </div>
            <h2>Why Delhi NCR Families Choose <span className="text-gold">Doorstep Care</span></h2>
            <p>Compare the real day-to-day experience of in-home training versus commercial gyms and physical therapy clinics.</p>
          </div>

          <div style={{
            overflowX: 'auto',
            background: 'var(--bg-surface)',
            border: '1.5px solid var(--border-subtle)',
            borderRadius: '16px',
            boxShadow: 'var(--shadow-md)',
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '650px' }}>
              <thead>
                <tr style={{ background: 'var(--bg-surface-alt)', borderBottom: '2px solid var(--border-medium)' }}>
                  <th style={{ padding: '16px 20px', fontSize: '14px', color: 'var(--text-main)', width: '25%' }}>Feature</th>
                  <th style={{ padding: '16px 20px', fontSize: '14px', color: 'var(--brand-gold)', fontWeight: 800, width: '30%', background: 'var(--brand-gold-badge)' }}>
                    Fit4Steps In-Home Concierge
                  </th>
                  <th style={{ padding: '16px 20px', fontSize: '14px', color: 'var(--text-muted)', width: '22%' }}>Commercial Gym</th>
                  <th style={{ padding: '16px 20px', fontSize: '14px', color: 'var(--text-muted)', width: '23%' }}>Physio Clinic</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, idx) => (
                  <tr key={row.feature} style={{ borderBottom: '1px solid var(--border-subtle)', background: idx % 2 === 0 ? 'transparent' : 'var(--bg-surface-tint)' }}>
                    <td style={{ padding: '16px 20px', fontWeight: 700, fontSize: '13.5px', color: 'var(--text-main)' }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: '16px 20px', fontWeight: 600, fontSize: '13.5px', color: 'var(--brand-gold-text)', background: 'var(--brand-gold-badge)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Check size={16} color="var(--brand-gold)" /> {row.fit4steps}
                      </div>
                    </td>
                    <td style={{ padding: '16px 20px', fontSize: '13px', color: 'var(--text-body)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <X size={15} color="#ef4444" /> {row.gym}
                      </div>
                    </td>
                    <td style={{ padding: '16px 20px', fontSize: '13px', color: 'var(--text-body)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <X size={15} color="#f59e0b" /> {row.clinic}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. AEO DIRECT FACT BLOCK */}
      <section className="section-alt" style={{ padding: '48px 0' }}>
        <div className="container">
          <div className="aeo-capsule" style={{ margin: 0 }}>
            <div className="aeo-capsule-badge">
              <CheckCircle2 size={13} /> Direct Answer • Doorstep Fitness Match Timeline
            </div>
            <h2 className="aeo-capsule-question">
              How quickly can an in-home personal trainer start sessions in Noida or Delhi?
            </h2>
            <div className="aeo-capsule-answer">
              <p>
                <strong>Direct Answer:</strong> Fit4Steps confirms trainer allocation within 30 to 60 minutes of your inquiry. Initial doorstep consultation and joint assessment are scheduled within 24 to 48 hours at your preferred morning or evening time slot. Our coaches arrive with all sanitized equipment, allowing your first session to begin right away.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
