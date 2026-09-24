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
  title: 'Joint Restoration & Knee Pain Therapy at Home | Avoid Surgery | Fit4Steps',
  description: 'Specialized in-home knee pain rehabilitation and joint restoration in Noida, Delhi & Gurugram. Proven protocols helping clients avoid knee replacement surgery through non-weight-bearing strengthening and gentle decompression.',
  keywords: [
    'joint restoration knee pain therapy',
    'knee pain exercises therapy noida',
    'avoid knee replacement exercise delhi',
    'osteoarthritis knee therapy at home',
    'knee joint strengthening seniors gurugram'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/senior-fitness/knee-therapy',
  },
};

export default function KneeTherapyPage() {
  return (
    <div>
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Heart size={14} /> Flagship Therapy
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Joint Restoration & <br />
            <span className="text-gold">Knee Pain Therapy at Home</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Chronic knee stiffness and osteoarthritis shouldn’t force you into premature knee replacement surgery. Our gentle in-home joint restoration protocol decompresses the joint space and strengthens supporting musculature.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20am%20suffering%20from%20knee%20pain%20and%20want%20to%20know%20about%20your%20in-home%20Joint%20Restoration%20therapy."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book Knee Assessment
            </a>
            <Link href="/success-stories" className="btn btn-outline">
              Read Patient Case Studies <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW OUR PROTOCOL WORKS */}
      <section className="section-surface">
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="badge badge-navy" style={{ marginBottom: '16px' }}>
              <Stethoscope size={14} /> Clinical Biomechanics
            </div>
            <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
              Why Strengthening the Muscle Saves the Joint
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
              When cartilage wears down, walking transmits heavy impact directly onto bone. By strengthening the Vastus Medialis Oblique (VMO), hamstrings, and calves while lying down or seated (non-weight bearing), we build an anatomical shock absorber around the knee.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '28px' }}>
              {[
                {
                  title: 'Non-Weight Bearing VMO Work',
                  desc: 'Isometric straight leg raises, seated terminal knee extensions, and ankle dorsiflexion without standing pressure.'
                },
                {
                  title: 'Assisted Decompression Stretches',
                  desc: 'Gentle traction stretching of tight IT bands, hip flexors, and hamstrings to relieve patellofemoral friction.'
                },
                {
                  title: 'Morning Stiffness Relief',
                  desc: 'Targeted mobility routines to stimulate synovial fluid production so the joint glides smoothly upon waking.'
                },
                {
                  title: 'Orthopedic Coordination',
                  desc: 'We strictly review your MRI and X-ray reports and ensure all movements align with your doctor’s guidelines.'
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

      {/* TESTIMONIAL HIGHLIGHT */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
            <Award size={14} /> Documented Patient Transformation
          </div>
          <blockquote style={{ fontSize: '20px', fontStyle: 'italic', color: 'var(--text-main)', lineHeight: 1.6, marginBottom: '18px' }}>
            "I had severe knee pain and my orthopedic doctor warned I was headed for knee replacement surgery. Within months of training with Satheesan, my pain dropped by 80% without medication. I can walk and climb stairs again!"
          </blockquote>
          <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>Padmaja Ruparel</div>
          <div style={{ fontSize: '14px', color: 'var(--primary-gold)' }}>President, Indian Angel Network (IAN)</div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-surface" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
            Explore Non-Surgical Knee Relief at Home
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
            Speak directly with Master Trainer Satheesan to understand how our joint restoration therapy can help you.
          </p>
          <a
            href="https://wa.me/919999448206?text=Hi%20Master%20Trainer%20Satheesan,%20I%20would%20like%20to%20consult%20about%20knee%20pain%20therapy%20at%20home."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> WhatsApp Knee Specialist
          </a>
        </div>
      </section>
    </div>
  );
}
