import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Fit4Steps Wellness',
  description: 'Privacy Policy and data protection terms for Fit4Steps in-home personal training services in Noida, Delhi and Gurugram.',
  alternates: {
    canonical: 'https://fit4steps.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h1 style={{ fontSize: 'clamp(30px, 4vw, 44px)', color: 'var(--text-main)', marginBottom: '14px', fontWeight: 800 }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
            Effective Date: August 2026 • Fit4Steps Wellness, Jaypee Wishtown, Noida, UP
          </p>
        </div>
      </section>

      <section className="section-surface">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="card-clean" style={{ padding: '36px', lineHeight: 1.8, color: 'var(--text-body)' }}>
            <h2 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '10px', fontWeight: 700 }}>1. Information We Collect</h2>
            <p style={{ marginBottom: '20px' }}>
              At Fit4Steps, we collect personal contact details (name, phone number, address in Noida, Delhi, or Gurugram) and voluntary health and physical screening data solely for designing safe, individualized personal training protocols.
            </p>

            <h2 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '10px', fontWeight: 700 }}>2. How We Use Your Information</h2>
            <p style={{ marginBottom: '20px' }}>
              Your information is used strictly to dispatch verified coaches to your residence, personalize movement programs, communicate schedule updates, and monitor rehabilitation progress. We never sell, rent, or trade your personal or health data to third-party advertisers.
            </p>

            <h2 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '10px', fontWeight: 700 }}>3. Health & Medical Confidentiality</h2>
            <p style={{ marginBottom: '20px' }}>
              Any medical reports, orthopedic assessments, or fitness evaluations shared with Master Trainer Satheesan are handled with strict professional confidentiality and are accessed solely by your assigned coach.
            </p>

            <h2 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '10px', fontWeight: 700 }}>4. Contact Us</h2>
            <p style={{ margin: 0 }}>
              If you have any questions regarding this Privacy Policy, please reach out via email at <a href="mailto:fit4steps@gmail.com" style={{ color: 'var(--primary-gold)' }}>fit4steps@gmail.com</a> or phone at <a href="tel:+919999448206" style={{ color: 'var(--primary-gold)' }}>+91 99994 48206</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
