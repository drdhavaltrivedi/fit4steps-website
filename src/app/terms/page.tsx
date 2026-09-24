import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Fit4Steps Wellness',
  description: 'Terms of Service and training guidelines for Fit4Steps in-home personal training services.',
  alternates: {
    canonical: 'https://fit4steps.com/terms',
  },
};

export default function TermsPage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h1 style={{ fontSize: 'clamp(30px, 4vw, 44px)', color: 'var(--text-main)', marginBottom: '14px', fontWeight: 800 }}>
            Terms of Service
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
            Effective Date: August 2026 • Fit4Steps Wellness
          </p>
        </div>
      </section>

      <section className="section-surface">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="card-clean" style={{ padding: '36px', lineHeight: 1.8, color: 'var(--text-body)' }}>
            <h2 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '10px', fontWeight: 700 }}>1. In-Home Training Scope</h2>
            <p style={{ marginBottom: '20px' }}>
              Fit4Steps provides in-home physical fitness coaching, functional exercise, and joint rehabilitation services. While our coaches follow evidence-based biomechanical protocols and coordinate with physician guidance, our services do not substitute for emergency medical care or hospital surgery.
            </p>

            <h2 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '10px', fontWeight: 700 }}>2. Session Scheduling & Rescheduling</h2>
            <p style={{ marginBottom: '20px' }}>
              Sessions are scheduled during agreed morning or evening slots. Clients may reschedule sessions by providing at least 12 hours prior notice to their trainer or concierge desk.
            </p>

            <h2 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '10px', fontWeight: 700 }}>3. Health Disclosure</h2>
            <p style={{ marginBottom: '20px' }}>
              Clients must disclose all known pre-existing medical conditions, past surgeries, cardiovascular concerns, and medications during the initial intake assessment.
            </p>

            <h2 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '10px', fontWeight: 700 }}>4. Replacement Trainer Guarantee</h2>
            <p style={{ margin: 0 }}>
              If your regular coach is unavailable due to illness or scheduled leave, Fit4Steps will provide a qualified replacement trainer or roll your sessions forward.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
