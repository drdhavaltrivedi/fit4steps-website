import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  MapPin,
  HeartPulse,
  Compass,
  Layers,
  Sparkles
} from 'lucide-react';
import AssessmentWidget from '@/components/AssessmentWidget';

export const metadata: Metadata = {
  title: 'Luxury In-Home Wellness Concierge | Fit4Steps v4',
  description: 'Bespoke private wellness concierge, personal training and restorative joint therapy for luxury residences in Noida, South Delhi & Gurugram.',
};

export default function Version4LuxuryClubPage() {
  const steps = [
    {
      num: '01',
      title: 'Biomechanical Evaluation',
      desc: 'Comprehensive in-home movement screening, spinal alignment review, and cartilage decompression audit.',
    },
    {
      num: '02',
      title: 'Equipment Dispatch',
      desc: 'Your coach arrives with sanitized resistance bands, balance foam pads, and monitoring devices. Zero equipment needed from you.',
    },
    {
      num: '03',
      title: '1-on-1 Supervised Practice',
      desc: 'Bespoke, unhurried 60-minute session tailored strictly to your physiological threshold and orthopedic limitations.',
    },
    {
      num: '04',
      title: 'Continuous Joint Monitoring',
      desc: 'Weekly range-of-motion assessments and joint health metrics logged to guarantee sustained longevity and pain relief.',
    },
  ];

  const hubs = [
    {
      city: 'Noida (Headquarters)',
      hub: 'Jaypee Wishtown, Sectors 1-168 & Expressway',
      specs: 'Senior joint rehabilitation, couple training, executive home gyms.',
    },
    {
      city: 'South Delhi',
      hub: 'Greater Kailash, Vasant Kunj, Panchsheel, Defence Colony',
      specs: 'Orthopedic surgeon referrals, non-surgical knee care, postnatal yoga.',
    },
    {
      city: 'Gurugram',
      hub: 'DLF Phase 1–5, Golf Course Road, Sohna Road',
      specs: 'Corporate leadership fitness, core Pilates, functional athletic endurance.',
    },
  ];

  return (
    <div style={{ background: 'var(--bg-page)' }}>
      {/* 1. LUXURY MINIMALIST EDITORIAL HERO */}
      <section className="hero-clean" style={{ paddingTop: '80px', paddingBottom: '90px' }}>
        <div className="container" style={{ maxWidth: '1080px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand-gold)' }}>
              01 / Private In-Home Wellness Concierge
            </span>
            <span style={{ width: '40px', height: '1.5px', background: 'var(--brand-gold)' }} />
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Noida • Delhi • Gurugram
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 5.4vw, 68px)',
            lineHeight: 1.08,
            color: 'var(--text-main)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginBottom: '28px',
            maxWidth: '920px',
          }}>
            Bespoke In-Home Movement Science & <span className="text-gold">Restorative Joint Care</span>
          </h1>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'flex-start', marginBottom: '40px' }}>
            <p style={{
              fontSize: '18px',
              color: 'var(--text-body)',
              lineHeight: 1.7,
            }}>
              Fit4Steps delivers certified personal trainers and joint rehabilitation specialists directly to your private residence. Unhurried, discreet, and doctor-endorsed.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'flex-end' }}>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary" style={{ padding: '14px 26px', fontSize: '14.5px' }}>
                  Reserve Consultation <ArrowRight size={15} />
                </Link>
                <a
                  href="https://wa.me/919778776136?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20inquire%20about%20private%20in-home%20training"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ padding: '14px 22px', fontSize: '14.5px' }}
                >
                  <MessageCircle size={17} /> Direct WhatsApp
                </a>
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>
                Direct consultation with Master Trainer Satheesan • Zero equipment purchase required
              </div>
            </div>
          </div>

          {/* Minimalist Key Stats Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            padding: '24px 0',
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
          }}>
            <div>
              <div className="stat-number">15+</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '4px' }}>Years Operating</div>
            </div>
            <div>
              <div className="stat-number">7,000+</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '4px' }}>Private Sessions</div>
            </div>
            <div>
              <div className="stat-number">100%</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '4px' }}>Police Verified</div>
            </div>
            <div>
              <div className="stat-number">3 Hubs</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '4px' }}>Delhi NCR Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 4-STEP METHODOLOGY (Editorial Stack) */}
      <section className="section-surface">
        <div className="container" style={{ maxWidth: '1080px' }}>
          <div style={{ marginBottom: '48px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand-gold)' }}>
              Methodology
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.6vw, 42px)', color: 'var(--text-main)', marginTop: '8px' }}>
              The Four Principles of <span className="text-gold">Sustainable Home Fitness</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {steps.map((s) => (
              <div
                key={s.num}
                style={{
                  background: 'var(--bg-surface-alt)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '16px',
                  padding: '28px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--brand-gold)', opacity: 0.8, marginBottom: '14px' }}>
                    {s.num}
                  </div>
                  <h3 style={{ fontSize: '17px', color: 'var(--text-main)', marginBottom: '8px' }}>{s.title}</h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ASSESSMENT TOOL */}
      <section className="section-page">
        <div className="container" style={{ maxWidth: '1080px' }}>
          <AssessmentWidget />
        </div>
      </section>

      {/* 4. NCR PRIVATE HUBS (Minimalist Grid) */}
      <section className="section-surface">
        <div className="container" style={{ maxWidth: '1080px' }}>
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand-gold)' }}>
              Coverage
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.6vw, 42px)', color: 'var(--text-main)', marginTop: '8px' }}>
              Delhi NCR Residential <span className="text-gold">Hubs</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {hubs.map((h) => (
              <div key={h.city} className="theme-card" style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--brand-gold)', fontWeight: 700, fontSize: '18px', marginBottom: '8px' }}>
                  <MapPin size={18} /> {h.city}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px' }}>
                  {h.hub}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {h.specs}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AEO DIRECT FACT BLOCK */}
      <section className="section-alt" style={{ padding: '48px 0' }}>
        <div className="container" style={{ maxWidth: '1080px' }}>
          <div className="aeo-capsule" style={{ margin: 0 }}>
            <div className="aeo-capsule-badge">
              <CheckCircle2 size={13} /> Direct Answer • Delhi NCR Luxury In-Home Fitness
            </div>
            <h2 className="aeo-capsule-question">
              Can Fit4Steps trainers conduct sessions in apartment clubhouses or living rooms?
            </h2>
            <div className="aeo-capsule-answer">
              <p>
                <strong>Direct Answer:</strong> Yes. Fit4Steps is completely flexible. Sessions are seamlessly conducted either in the privacy of your living room, on private terrace lawns, or in your residential complex's private clubhouse gym (e.g. Jaypee Wishtown, DLF Magnolias, or Greater Kailash kothis). Our coaches bring portable resistance apparatus and mats.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
