'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  Heart,
  Star,
  Activity,
  Award,
  Users,
  ChevronDown,
  Building,
  Check,
  X,
  Stethoscope,
  Calendar,
  Sparkles,
  Clock,
  MapPin,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

export default function VariantSixPage() {
  // Interactive Protocol Calculator State
  const [selectedGoal, setSelectedGoal] = useState<'knee' | 'senior' | 'female' | 'weight'>('knee');
  const [selectedLoc, setSelectedLoc] = useState<'noida' | 'delhi' | 'gurugram'>('noida');

  const protocolData = {
    knee: {
      name: 'Non-Invasive Knee Restoration & Joint Care',
      tagline: 'Avoid premature surgery with targeted VMO strengthening and joint decompression',
      suitableFor: 'Adults 50+ experiencing osteoarthritic stiffness, pain on stairs, or post-injury fatigue',
      milestones: [
        { week: 'Week 2', outcome: 'Noticeable reduction in morning knee stiffness & faster get-up speed' },
        { week: 'Week 4', outcome: 'Stair climbing with 60% less joint pressure; improved patellar tracking' },
        { week: 'Week 8', outcome: 'Pain-free walking for 30+ minutes; Quadriceps and glute stability restored' },
        { week: 'Month 3', outcome: 'Doctor-verified joint integrity, enhanced synovial lubrication, full daily mobility' },
      ],
      equipment: 'Micro-resistance loops, ankle traction cuffs, high-density foam balance pad',
      leadCoach: 'Satheesan (Master Trainer, 15+ Yrs Rehabilitation Experience)',
      availability: '2 slots open this week in your selected area'
    },
    senior: {
      name: 'Active Senior Longevity & Fall Prevention (60+ & 70+)',
      tagline: 'Preserve bone density, reverse muscle loss (sarcopenia), and walk with total confidence',
      suitableFor: 'Seniors seeking gentle, dignified in-home coaching without gym intimidation',
      milestones: [
        { week: 'Week 2', outcome: 'Enhanced ankle stability, confident chair-to-stand transitions without pushing' },
        { week: 'Week 4', outcome: 'Single-leg balance improved by 80%; eliminates fear of tripping or shuffling' },
        { week: 'Week 8', outcome: 'Significant gain in grip strength and posture; increased daily vitality' },
        { week: 'Month 3', outcome: 'Sustained bone mineral density protection and independent lifestyle' },
      ],
      equipment: 'Safety gait bands, light ergonomic dumbbells, stability spheres, grip trainers',
      leadCoach: 'Senior Geriatric Certified Coaching Team',
      availability: 'Morning slots (7:00 AM – 9:00 AM) available'
    },
    female: {
      name: 'Private Lady Fitness & Postural Restoration',
      tagline: 'Certified female personal trainers delivering confidential, goal-oriented training at home',
      suitableFor: 'Women seeking weight loss, core toning, PCOS/Thyroid metabolic support, or prenatal/postnatal care',
      milestones: [
        { week: 'Week 2', outcome: 'Noticeable energy surge, improved core engagement, and zero lower back ache' },
        { week: 'Week 4', outcome: 'Measurable reduction in visceral waist circumference and metabolic stamina' },
        { week: 'Week 8', outcome: 'Toned lean muscle definition, corrected pelvic alignment, hormonal balance' },
        { week: 'Month 3', outcome: 'Sustainable nutritional habits and permanent metabolic transformation' },
      ],
      equipment: 'Kettlebells, Pilates resistance cords, yoga blocks, core stabilization sliders',
      leadCoach: 'Certified Female Specialist Coaches (ACE / K11 Certified)',
      availability: 'Flexible daytime & evening slots available'
    },
    weight: {
      name: 'Executive Functional Conditioning & Body Recomposition',
      tagline: 'High-efficiency 45-minute workouts tailored for busy C-suite executives and entrepreneurs',
      suitableFor: 'Professionals seeking fat loss, posture alignment, and stress reduction without losing work hours',
      milestones: [
        { week: 'Week 2', outcome: 'Desk-neck tension eliminated, improved deep sleep architecture' },
        { week: 'Week 4', outcome: 'Cardiovascular VO2 max boost; fat loss visible in shirt measurements' },
        { week: 'Week 8', outcome: '4-7 kg healthy recomposition, peak stamina during long business meetings' },
        { week: 'Month 3', outcome: 'Optimal metabolic health markers, sustained peak cognitive & physical performance' },
      ],
      equipment: 'TRX suspension straps, battle cord alternatives, agility ladders, smart HR bands',
      leadCoach: 'Executive Performance Coaches',
      availability: 'Early bird 6:00 AM slots or late evening slots'
    }
  };

  const currentProtocol = protocolData[selectedGoal];

  const locationNames = {
    noida: 'Noida (HQ Jaypee Wishtown, Expressway & Sectors 1-168)',
    delhi: 'South Delhi (Greater Kailash, Vasant Kunj, Panchsheel, Def Col)',
    gurugram: 'Gurugram (DLF Phase 1-5, Golf Course Road, Sohna Rd)'
  };

  return (
    <div>
      {/* 1. TOP ANNOUNCEMENT & COMPETITOR DIFFERENTIATOR BANNER */}
      <div style={{
        background: 'var(--card-navy)',
        color: '#ffffff',
        padding: '10px 16px',
        fontSize: '13px',
        fontWeight: 500,
        textAlign: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <ShieldCheck size={15} color="var(--primary-gold)" />
            <strong>The Fit4Steps Standard:</strong> 100% Police Verified • Orthopedic-Endorsed • Zero Missed Sessions
          </span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span style={{ color: 'var(--secondary-cyan)' }}>
            Noida • South Delhi • Gurugram Doorstep Service
          </span>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="section-padding" style={{ paddingTop: '56px', paddingBottom: '70px', background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}>
            {/* Left Hero Column */}
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '18px' }}>
                <Award size={14} /> Delhi NCR's #1 In-Home Health Concierge
              </div>
              <h1 style={{
                fontSize: 'clamp(34px, 4.8vw, 54px)',
                color: 'var(--text-main)',
                lineHeight: 1.15,
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '22px'
              }}>
                Medical-Grade Fitness <br />
                <span className="text-gold">Delivered to Your Living Room.</span>
              </h1>
              <p style={{
                fontSize: '17px',
                color: 'var(--text-body)',
                lineHeight: 1.7,
                marginBottom: '32px',
                maxWidth: '560px'
              }}>
                Stop settling for unverified freelance trainers from marketplace apps. Fit4Steps delivers verified master coaches, orthopedic rehabilitation protocols, and customized equipment right to your doorstep across Noida, South Delhi & Gurugram.
              </p>

              {/* 3 Value Pillars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
                {[
                  'Preserves Joints: Clinically designed protocols that helped clients avoid knee surgery',
                  '100% Background Verified: University-certified coaches vetted by local law enforcement',
                  'Zero Travel Hassle: Complete functional equipment brought to your doorstep each session'
                ].map((text, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: 'rgba(201, 117, 8, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary-gold)',
                      flexShrink: 0
                    }}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '15px', color: 'var(--text-main)', fontWeight: 500 }}>{text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                <a
                  href="#protocol-matcher"
                  className="btn btn-gold"
                  style={{ padding: '14px 28px', fontSize: '16px' }}
                >
                  <Activity size={18} /> Match Your Protocol Below
                </a>
                <a
                  href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20book%20a%20doorstep%20assessment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ padding: '14px 24px', fontSize: '15px' }}
                >
                  <MessageCircle size={18} /> Instant WhatsApp
                </a>
              </div>

              {/* Real Client Proof Bar */}
              <div style={{
                marginTop: '36px',
                paddingTop: '24px',
                borderTop: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                flexWrap: 'wrap'
              }}>
                <div style={{ display: 'flex' }}>
                  {['ftr-testiminial-padmaja.webp', 'ftr-testiminial-rajeev.webp', 'ftr-testiminial-shailen.webp', 'ftr-testiminial-shruthi.webp'].map((img, i) => (
                    <img
                      key={i}
                      src={`/assets/image/${img}`}
                      alt="Verified Client"
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        border: '2px solid var(--bg-card)',
                        marginLeft: i > 0 ? '-10px' : 0,
                        objectFit: 'cover'
                      }}
                    />
                  ))}
                </div>
                <div>
                  <div style={{ display: 'flex', gap: '2px', color: '#E5A519' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="#E5A519" />
                    ))}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-body)', marginTop: '2px' }}>
                    <strong>4.9/5 Rating</strong> by C-Suite Execs & Senior Citizens in Delhi NCR
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Column: Interactive Quick Triage Card */}
            <div>
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '24px',
                padding: '36px 32px',
                boxShadow: 'var(--shadow-lg)',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '24px',
                  background: 'var(--primary-gold)',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  letterSpacing: '0.05em'
                }}>
                  Zero Risk Trial
                </div>

                <h3 style={{ fontSize: '22px', color: 'var(--text-main)', marginBottom: '8px', fontWeight: 700 }}>
                  Book a 45-Min Doorstep Assessment
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', marginBottom: '24px', lineHeight: 1.5 }}>
                  A master coach visits your home, conducts a non-invasive joint mobility screening, and prescribes your safe custom exercise protocol.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-main)', display: 'block', marginBottom: '6px' }}>
                      1. Who is this training for?
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      {[
                        { id: 'knee', label: 'Joint & Knee Care' },
                        { id: 'senior', label: 'Senior Parents (60+)' },
                        { id: 'female', label: 'Lady / In-Home' },
                        { id: 'weight', label: 'Executive Fitness' }
                      ].map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setSelectedGoal(t.id as any)}
                          style={{
                            padding: '10px 12px',
                            fontSize: '13px',
                            fontWeight: 600,
                            borderRadius: '10px',
                            textAlign: 'left',
                            cursor: 'pointer',
                            border: selectedGoal === t.id ? '2px solid var(--primary-gold)' : '1px solid var(--border-color)',
                            background: selectedGoal === t.id ? 'rgba(201, 117, 8, 0.08)' : 'var(--bg-main)',
                            color: selectedGoal === t.id ? 'var(--primary-gold)' : 'var(--text-main)',
                            transition: 'all 0.15s ease'
                          }}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-main)', display: 'block', marginBottom: '6px' }}>
                      2. Your City / NCR Location
                    </label>
                    <select
                      value={selectedLoc}
                      onChange={(e) => setSelectedLoc(e.target.value as any)}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1px solid var(--border-color)',
                        background: 'var(--bg-main)',
                        color: 'var(--text-main)',
                        fontSize: '14px',
                        fontWeight: 500,
                        outline: 'none'
                      }}
                    >
                      <option value="noida">Noida (Jaypee Wishtown, Expressway & Sectors)</option>
                      <option value="delhi">South Delhi (Greater Kailash, Vasant Kunj, etc.)</option>
                      <option value="gurugram">Gurugram (DLF Phase 1-5, Golf Course Rd)</option>
                    </select>
                  </div>

                  <div style={{
                    padding: '14px',
                    borderRadius: '12px',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-color)',
                    fontSize: '13px',
                    color: 'var(--text-body)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-gold)', fontWeight: 600, marginBottom: '4px' }}>
                      <Clock size={14} /> Immediate Dispatch Active
                    </div>
                    <span>Assigned from: <strong>{locationNames[selectedLoc]}</strong></span>
                  </div>

                  <a
                    href={`https://wa.me/919999448206?text=${encodeURIComponent(`Hi Fit4Steps, I would like to book a Doorstep Assessment for ${currentProtocol.name} in ${selectedLoc.toUpperCase()}. Please check trainer availability.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: '14px',
                      fontSize: '15px'
                    }}
                  >
                    <MessageCircle size={18} /> Confirm Assessment on WhatsApp
                  </a>

                  <div style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)' }}>
                    No payment needed now • Cancel or reschedule anytime with 0 fees
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPETITOR COMPARISON TABLE: FIT4STEPS VS URBAN MARKETPLACES VS GYMS */}
      <section className="section-surface">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
              <TrendingUp size={14} /> The Fit4Steps Advantage
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--text-main)', marginBottom: '16px' }}>
              Why Discerning NCR Residents Choose Us Over Apps & Local Gyms
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6 }}>
              Marketplace apps send random gig-workers with unverified claims. Commercial gyms are loud and dangerous for elderly joints. Here is how we compare:
            </p>
          </div>

          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '20px',
            overflowX: 'auto',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '640px' }}>
              <thead>
                <tr style={{ background: 'var(--card-navy)', color: '#ffffff' }}>
                  <th style={{ padding: '20px 24px', fontSize: '15px', fontWeight: 600 }}>Health & Safety Feature</th>
                  <th style={{ padding: '20px 24px', fontSize: '15px', fontWeight: 700, color: 'var(--primary-gold)' }}>Fit4Steps In-Home Concierge</th>
                  <th style={{ padding: '20px 24px', fontSize: '14px', fontWeight: 500, opacity: 0.8 }}>Marketplace Apps (UrbanPro/Sulekha)</th>
                  <th style={{ padding: '20px 24px', fontSize: '14px', fontWeight: 500, opacity: 0.8 }}>Commercial Gym Memberships</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: 'Orthopedic & Joint Safety',
                    fit4steps: 'Tailored by Master Trainer Satheesan (15+ yrs rehab); doctor coordinated',
                    marketplace: 'Generic exercise; high risk of knee & spine strain',
                    gym: 'High injury rate from unsupervised heavy machine usage'
                  },
                  {
                    feature: 'Trainer Background & Police Vetting',
                    fit4steps: '100% In-house verified, full police verification, identity guaranteed',
                    marketplace: 'Third-party gig workers; zero ongoing accountability',
                    gym: 'Gym floor trainers constantly rotate or quit without notice'
                  },
                  {
                    feature: 'Elderly & Senior Care Specialization',
                    fit4steps: 'Dedicated senior wing: Chair balance, osteopenia & sarcopenia protocol',
                    marketplace: 'Almost zero geriatric specialization or patience',
                    gym: 'Intimidating, loud music, crowded locker rooms, slippery floors'
                  },
                  {
                    feature: 'Portable Equipment at Doorstep',
                    fit4steps: 'Full kit brought every session (bands, balls, agility pads, sanitised)',
                    marketplace: 'Client must buy own equipment or trainer shows up empty-handed',
                    gym: 'Must wait in line for sweaty machines during peak hours'
                  },
                  {
                    feature: 'Missed Session Protection',
                    fit4steps: 'Certified backup trainer guarantee or 100% credit rollover',
                    marketplace: 'Frequent trainer no-shows with no replacement support',
                    gym: 'Fees expire every month regardless of attendance'
                  },
                  {
                    feature: 'Proven Executive Transformations',
                    fit4steps: 'Documented results for President of IAN, CIO Times Group, Fluor Corp',
                    marketplace: 'Unverified anonymous star reviews prone to manipulation',
                    gym: 'Sales-driven upselling of supplements and unneeded packages'
                  }
                ].map((row, idx) => (
                  <tr key={idx} style={{
                    borderBottom: '1px solid var(--border-color)',
                    background: idx % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.015)'
                  }}>
                    <td style={{ padding: '18px 24px', fontWeight: 600, color: 'var(--text-main)', fontSize: '15px' }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: '18px 24px', color: 'var(--text-main)', fontSize: '14px', background: 'rgba(201, 117, 8, 0.04)' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <CheckCircle2 size={17} color="var(--primary-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontWeight: 600 }}>{row.fit4steps}</span>
                      </div>
                    </td>
                    <td style={{ padding: '18px 24px', color: 'var(--text-muted)', fontSize: '14px' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <X size={16} color="#94A3B8" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{row.marketplace}</span>
                      </div>
                    </td>
                    <td style={{ padding: '18px 24px', color: 'var(--text-muted)', fontSize: '14px' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <X size={16} color="#94A3B8" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{row.gym}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE PROTOCOL MATCHER & MILESTONE TIMELINE */}
      <section id="protocol-matcher" className="section-padding" style={{ background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
              <Stethoscope size={14} /> Evidence-Based Methodology
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--text-main)', marginBottom: '14px' }}>
              Your Tailored Protocol & Progression Timeline
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6 }}>
              Select a specialized program below to preview the exact progression milestones, required equipment, and clinical outcome schedule.
            </p>

            {/* Interactive Program Tabs */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              marginTop: '28px'
            }}>
              {[
                { id: 'knee', label: 'Knee & Joint Restoration' },
                { id: 'senior', label: 'Senior Balance (60+ & 70+)' },
                { id: 'female', label: 'Lady In-Home Coach' },
                { id: 'weight', label: 'Executive Recomposition' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedGoal(tab.id as any)}
                  style={{
                    padding: '12px 22px',
                    borderRadius: '30px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: selectedGoal === tab.id ? '2px solid var(--primary-gold)' : '1px solid var(--border-color)',
                    background: selectedGoal === tab.id ? 'var(--card-navy)' : 'var(--bg-card)',
                    color: selectedGoal === tab.id ? '#ffffff' : 'var(--text-main)',
                    boxShadow: selectedGoal === tab.id ? 'var(--shadow-md)' : 'none'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Protocol Card */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
              marginBottom: '36px'
            }}>
              <div>
                <span className="badge badge-navy" style={{ marginBottom: '14px' }}>
                  Clinical Protocol Overview
                </span>
                <h3 style={{ fontSize: '26px', color: 'var(--text-main)', marginBottom: '10px', fontWeight: 700 }}>
                  {currentProtocol.name}
                </h3>
                <p style={{ fontSize: '16px', color: 'var(--primary-gold)', fontWeight: 600, marginBottom: '14px' }}>
                  {currentProtocol.tagline}
                </p>
                <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '20px' }}>
                  <strong>Designed for:</strong> {currentProtocol.suitableFor}
                </p>
                <div style={{
                  padding: '16px',
                  borderRadius: '14px',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-color)'
                }}>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>
                    Sanitized Equipment Provided by Coach:
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-main)' }}>
                    {currentProtocol.equipment}
                  </div>
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '18px', color: 'var(--text-main)', marginBottom: '18px', fontWeight: 700 }}>
                  Measurable 12-Week Transformation Schedule
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {currentProtocol.milestones.map((m, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      gap: '16px',
                      alignItems: 'flex-start',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: 'var(--bg-main)',
                      border: '1px solid var(--border-color)'
                    }}>
                      <div style={{
                        padding: '4px 10px',
                        borderRadius: '8px',
                        background: 'var(--card-navy)',
                        color: '#ffffff',
                        fontSize: '12px',
                        fontWeight: 700,
                        whiteSpace: 'nowrap'
                      }}>
                        {m.week}
                      </div>
                      <div style={{ fontSize: '14px', color: 'var(--text-main)', lineHeight: 1.5, fontWeight: 500 }}>
                        {m.outcome}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Protocol Action Box */}
            <div style={{
              paddingTop: '24px',
              borderTop: '1px solid var(--border-color)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '18px'
            }}>
              <div>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Assigned Master Trainer:</div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)' }}>
                  {currentProtocol.leadCoach}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href={`https://wa.me/919999448206?text=${encodeURIComponent(`Hi Master Trainer Satheesan, I want to book a doorstep trial for the "${currentProtocol.name}" protocol.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  <MessageCircle size={18} /> Schedule This Protocol on WhatsApp
                </a>
                <Link href="/fitness-training-program-for-senior-citizens" className="btn btn-outline">
                  Read Full Clinical Case Studies <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4-STEP ONBOARDING JOURNEY (EASY & TRANSPARENT) */}
      <section className="section-surface">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            <h2 style={{ fontSize: '32px', color: 'var(--text-main)', marginBottom: '14px' }}>
              How Doorstep Training Works with Fit4Steps
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6 }}>
              Zero friction, zero gym commutes. A structured 4-step concierge journey from your first call to your lasting health breakthrough.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px'
          }}>
            {[
              {
                step: '01',
                title: 'Screening & Health Intake',
                desc: '10-minute confidential consultation discussing past surgeries, orthopedic reports, cardiac history, and lifestyle goals.'
              },
              {
                step: '02',
                title: 'Doorstep Mobility Test',
                desc: 'Senior coach visits your home with portable screening tools to evaluate joint range-of-motion, gait, and balance.'
              },
              {
                step: '03',
                title: 'Bespoke Protocol & Equipment',
                desc: 'Your trainer brings all required sanitized resistance bands, loops, and stability gear for each 60-minute session.'
              },
              {
                step: '04',
                title: 'Monitored Results & Reviews',
                desc: 'Monthly re-assessments with progress reports. Regular adjustments as your strength and flexibility steadily advance.'
              }
            ].map((s, idx) => (
              <div key={idx} className="card-clean" style={{ position: 'relative' }}>
                <div style={{
                  fontSize: '36px',
                  fontWeight: 800,
                  color: 'var(--primary-gold)',
                  opacity: 0.35,
                  marginBottom: '10px'
                }}>
                  {s.step}
                </div>
                <h3 style={{ fontSize: '18px', color: 'var(--text-main)', marginBottom: '10px', fontWeight: 700 }}>
                  {s.title}
                </h3>
                <p style={{ color: 'var(--text-body)', fontSize: '14px', lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VERIFIED CLIENT TRANSFORMATIONS WITH AUTHENTIC QUOTES */}
      <section className="section-padding" style={{ background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
              <Award size={14} /> Real Testimonials
            </div>
            <h2 style={{ fontSize: '32px', color: 'var(--text-main)', marginBottom: '14px' }}>
              Stories from Delhi NCR Leaders & Families
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6 }}>
              Real results with clients who have trained with Master Trainer Satheesan and the Fit4Steps team for years.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px'
          }}>
            <div className="card-clean" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <img
                  src="/assets/image/ftr-testiminial-padmaja.webp"
                  alt="Padmaja Ruparel"
                  style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h3 style={{ fontSize: '17px', color: 'var(--text-main)', margin: 0, fontWeight: 700 }}>Padmaja Ruparel</h3>
                  <div style={{ fontSize: '13px', color: 'var(--primary-gold)', fontWeight: 600 }}>President, Indian Angel Network (IAN)</div>
                </div>
              </div>
              <blockquote style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.7, flexGrow: 1, fontStyle: 'italic', margin: 0 }}>
                "It has been a life changing experience for me with Fit4Steps. I suffered from weak knees and thought I was headed for knee replacement surgery, but the reality is my pain is now 20% of what it was! I can climb, run down steps, and walk well."
              </blockquote>
              <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-color)', fontSize: '12px', color: 'var(--text-muted)' }}>
                Result: 80% Knee Pain Reduction & Avoided Surgery
              </div>
            </div>

            <div className="card-clean" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <img
                  src="/assets/image/ftr-testiminial-shailen.webp"
                  alt="Shailen Ruparel"
                  style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h3 style={{ fontSize: '17px', color: 'var(--text-main)', margin: 0, fontWeight: 700 }}>Shailen Ruparel</h3>
                  <div style={{ fontSize: '13px', color: 'var(--primary-gold)', fontWeight: 600 }}>Director, Fluor Corporation</div>
                </div>
              </div>
              <blockquote style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.7, flexGrow: 1, fontStyle: 'italic', margin: 0 }}>
                "My trainer understands the human body well and cured me of constant pain in my knees and ankle without medication—something my orthopedic doctor warned could mean replacement surgery. As someone in my early 60s, having a strict, watchful coach at home changed everything."
              </blockquote>
              <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-color)', fontSize: '12px', color: 'var(--text-muted)' }}>
                Result: Pain-Free Mobility in 60s
              </div>
            </div>

            <div className="card-clean" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <img
                  src="/assets/image/ftr-testiminial-rajeev.webp"
                  alt="Rajeev Batra"
                  style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h3 style={{ fontSize: '17px', color: 'var(--text-main)', margin: 0, fontWeight: 700 }}>Rajeev Batra</h3>
                  <div style={{ fontSize: '13px', color: 'var(--primary-gold)', fontWeight: 600 }}>CIO, Times Group</div>
                </div>
              </div>
              <blockquote style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.7, flexGrow: 1, fontStyle: 'italic', margin: 0 }}>
                "SATHEESAN is a fitness instructor of very high caliber. Never in my six years of association with him has there been any injury during sessions, which speaks volumes of his excellence and technically sound anatomical knowledge."
              </blockquote>
              <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-color)', fontSize: '12px', color: 'var(--text-muted)' }}>
                Result: 6+ Years 100% Injury-Free Coaching
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CONCIERGE CTA */}
      <section className="section-surface" style={{ textAlign: 'center', padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <ShieldCheck size={14} /> 100% Doorstep Satisfaction Guarantee
          </div>
          <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 44px)', color: 'var(--text-main)', marginBottom: '18px', fontWeight: 800 }}>
            Experience the Gold Standard in <br />
            <span className="text-gold">Doorstep Personal Fitness</span>
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '17px', lineHeight: 1.7, marginBottom: '36px' }}>
            Book your introductory 45-minute mobility screening and personalized training session today. Available across Jaypee Wishtown, Noida Expressway, South Delhi (GK 1 & 2), and Gurugram (DLF).
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20schedule%20a%20doorstep%20trial%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ padding: '16px 32px', fontSize: '16px' }}
            >
              <MessageCircle size={20} /> Schedule Doorstep Trial on WhatsApp
            </a>
            <a
              href="tel:+919999448206"
              className="btn btn-outline"
              style={{ padding: '16px 28px', fontSize: '16px' }}
            >
              <Phone size={18} /> Call +91 99994 48206
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
