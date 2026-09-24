import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Building,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  Activity,
  Award,
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Corporate Yoga & Executive Wellness Programs | Delhi NCR | Fit4Steps',
  description: 'Custom corporate yoga, desk posture correction, and executive wellness workshops for tech parks and enterprises in Noida, Delhi & Gurugram. Boost energy, reduce absenteeism, and enhance focus.',
  keywords: [
    'corporate yoga noida',
    'corporate wellness programs gurugram',
    'office desk posture workshop delhi',
    'executive fitness training ncr',
    'employee wellness sessions'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/services/corporate-wellness-yoga',
  },
};

export default function CorporateWellnessPage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Building size={14} /> Workplace Health Solutions
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Corporate Yoga & <br />
            <span className="text-gold">Executive Wellness Programs</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Energize your teams, eliminate chronic sedentary neck and back strain, and cultivate mental sharpness. We deliver turnkey corporate yoga workshops, ergonomic seminars, and fitness challenges to offices across Noida Expressway, Cyber City Gurugram, and South Delhi.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20Corporate%20Wellness%20and%20Yoga%20sessions%20for%20our%20company.%20Please%20share%20a%20proposal."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Request Corporate Proposal
            </a>
            <a href="tel:+919999448206" className="btn btn-outline">
              <Phone size={18} /> Call +91 99994 48206
            </a>
          </div>
        </div>
      </section>

      {/* CORE CORPORATE OFFERINGS */}
      <section className="section-surface">
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="badge badge-navy" style={{ marginBottom: '16px' }}>
              <ShieldCheck size={14} /> High-ROI Workplace Health
            </div>
            <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
              Turnkey Programs for Progressive Organizations
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '24px' }}>
              {[
                {
                  title: 'Chair & Desk Ergonomic Yoga',
                  desc: '15 to 30-minute quick-relief sessions focused on cervical spine alignment, wrist carpal tunnel release, and lumbar relief.'
                },
                {
                  title: 'Executive Stress Reduction Seminars',
                  desc: 'Pranayama breathwork, sound mindfulness, and cognitive de-escalation drills that prevent executive burnout.'
                },
                {
                  title: 'On-Site Group Fitness Bootcamps',
                  desc: 'High-energy team building functional conditioning on your campus grounds or indoor recreational zones.'
                },
                {
                  title: 'Hybrid Virtual Wellness Webinars',
                  desc: 'Interactive live health sessions accessible to your remote and hybrid workforce distributed across India.'
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
            Elevate Your Team's Well-Being
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
            Speak directly with Master Trainer Satheesan to customize a corporate wellness package for your organization.
          </p>
          <a
            href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20we%20want%20to%20schedule%20a%20corporate%20wellness%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> WhatsApp Corporate Desk
          </a>
        </div>
      </section>
    </div>
  );
}
