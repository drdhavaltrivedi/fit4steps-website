import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Heart,
  Users,
  ArrowRight,
  MessageCircle,
  Activity,
  Target,
  Stethoscope
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Master Trainer Satheesan & Fit4Steps Wellness',
  description: 'Meet Master Trainer Satheesan and the Fit4Steps Wellness team. Providing certified, sustainable 1-on-1 personal training and restorative joint care at home in Noida, Delhi & Gurugram since 2010.',
  keywords: [
    'about fit4steps wellness',
    'satheesan master trainer noida',
    'in-home personal trainer credentials delhi',
    'fit4steps trainers certification'
  ],
};

export default function AboutPage() {
  return (
    <div>
      {/* 1. HERO BANNER */}
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Award size={14} /> Our Story & Mission
          </div>
          <h1 style={{ fontSize: 'clamp(34px, 4.8vw, 52px)', color: 'var(--text-main)', lineHeight: 1.16, marginBottom: '20px' }}>
            Sustainable Fitness <br />
            <span className="text-gold">Delivered to Your Doorstep</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            We believe that true wellness is not about extreme diets or punishing gym bootcamps. It is about sustainable lifestyle changes, individualized care, and pain-free mobility nurtured in the sanctuary of your home.
          </p>
        </div>
      </section>

      {/* 2. FOUNDER SPOTLIGHT: SATHEESAN */}
      <section id="trainers" className="section-surface">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}>
            <div>
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--card-shadow)',
              }}>
                <img
                  src="/assets/image/satheesan-head-trainer.jpg"
                  alt="Satheesan - Founder & Master Trainer"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  background: 'var(--bg-surface)',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-md)',
                }}>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)' }}>Satheesan</div>
                  <div style={{ fontSize: '13px', color: 'var(--brand-gold)', fontWeight: 600 }}>Founder & Head Master Trainer • ACE Certified</div>
                </div>
              </div>
            </div>

            <div>
              <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
                <Award size={14} /> Founder & Master Trainer
              </div>
              <h2 style={{ fontSize: '34px', color: 'var(--text-main)', marginBottom: '18px' }}>
                Meet Master Trainer <span className="text-gold">Satheesan</span>
              </h2>
              <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.7, marginBottom: '16px' }}>
                With over 15 years of dedicated personal training experience in Delhi NCR, Satheesan has earned the unwavering trust of corporate titans, high court partners, senior doctors, and elderly retirees.
              </p>
              <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
                His approach combines traditional Ayurvedic knowledge of joint mobility, fascial massage, and stretching with contemporary sports biomechanics. The result is a signature coaching method that is 100% injury-free, highly therapeutic, and deeply transformative.
              </p>

              <div className="theme-subcard" style={{ marginBottom: '28px', padding: '20px 24px' }}>
                <div style={{ fontStyle: 'italic', fontSize: '14.5px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '10px' }}>
                  "Satheesan is a fitness instructor of the highest caliber. In six years of training with him, there has never been any injury. His holistic knowledge of fitness and dedication to his work is unmatched."
                </div>
                <div style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--brand-gold)' }}>
                  — Rajeev Batra, CIO, Times Group
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                <a
                  href="https://wa.me/919778776136?text=Hi%20Satheesan,%20I%20would%20like%20to%20consult%20with%20you%20directly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={18} /> Chat with Satheesan on WhatsApp
                </a>
                <Link href="/contact" className="btn btn-primary">
                  Book In-Home Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE 4 CORE ELEMENTS OF SUSTAINABLE HEALTH */}
      <section className="section-page">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-cyan" style={{ marginBottom: '12px' }}>
              Our Training Philosophy
            </div>
            <h2>
              The 4 Core Elements of <span className="text-gold">Sustainable Health</span>
            </h2>
            <p>
              Rather than pushing quick-fix exhaustion, our customized routines develop balanced bodily vitality across four foundational dimensions:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              {
                title: 'Strength',
                desc: 'Progressive resistance training that builds functional muscle, fortifies bone density, and supports daily posture.',
                tag: 'Foundation'
              },
              {
                title: 'Flexibility & Joint Mobility',
                desc: 'Specialized assisted stretching that decompresses compressed joints, elongates tight fascia, and eliminates chronic stiffness.',
                tag: 'Restoration'
              },
              {
                title: 'Endurance',
                desc: 'Controlled cardiovascular exercises that improve heart stroke volume, lung oxygenation, and steady daily stamina.',
                tag: 'Vitality'
              },
              {
                title: 'Coordination & Balance',
                desc: 'Neuromuscular drills, agility work, and proprioception to prevent falls in seniors and enhance grace and athletic agility.',
                tag: 'Grace & Control'
              },
            ].map((col, idx) => (
              <div key={idx} className="theme-card" style={{ padding: '28px' }}>
                <div style={{
                  display: 'inline-block',
                  background: 'var(--brand-gold-soft)',
                  color: 'var(--brand-gold-text)',
                  border: '1px solid var(--brand-gold-border)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  marginBottom: '14px',
                }}>
                  {col.tag}
                </div>
                <h3 style={{ fontSize: '19px', color: 'var(--text-main)', marginBottom: '10px' }}>
                  {col.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6 }}>
                  {col.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SAFETY & TRAINER SELECTION STANDARDS */}
      <section className="section-alt">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold" style={{ marginBottom: '12px' }}>
              In-Home Safety Protocol
            </div>
            <h2>
              Why Families Trust Us <span className="text-gold">In Their Homes</span>
            </h2>
            <p>
              Inviting a trainer into your residence requires total peace of mind. We maintain rigorous vetting and background verification standards across Delhi NCR.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div className="theme-card" style={{ padding: '28px' }}>
              <ShieldCheck size={32} color="var(--brand-gold)" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '18px', color: 'var(--text-main)', marginBottom: '8px' }}>100% Police Verified</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6 }}>
                Every coach undergoes multi-point identity verification and background clearance before ever visiting a client’s residence.
              </p>
            </div>

            <div className="theme-card" style={{ padding: '28px' }}>
              <Award size={32} color="var(--brand-gold)" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '18px', color: 'var(--text-main)', marginBottom: '8px' }}>Certified Fitness Professionals</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6 }}>
                Our trainers hold recognized credentials (ACE, ACSM, Gold's Gym Fitness Institute, Yoga Alliance) with continuing education in rehabilitation.
              </p>
            </div>

            <div className="theme-card" style={{ padding: '28px' }}>
              <Stethoscope size={32} color="var(--brand-gold)" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '18px', color: 'var(--text-main)', marginBottom: '8px' }}>Doctor & Ortho Alignment</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6 }}>
                We actively review clients’ clinical reports, MRI scans, and orthopedic advice to tailor joint-friendly, safe exercise prescriptions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
