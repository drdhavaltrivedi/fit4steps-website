import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Heart,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  Users,
  AlertTriangle,
  Clock,
  MapPin,
  Star,
  Award,
  Lock,
  FileCheck
} from 'lucide-react';
import AssessmentWidget from '@/components/AssessmentWidget';

export const metadata: Metadata = {
  title: 'Senior Citizen Longevity & Family Peace of Mind | Fit4Steps v3',
  description: 'Compassionate, certified in-home personal training for elderly parents in Noida, South Delhi & Gurugram. Fall prevention, knee therapy, and post-session WhatsApp updates for children.',
};

export default function Version3SeniorFamilyPage() {
  const familyPillars = [
    {
      title: 'Police Verified & Background Checked',
      desc: 'Every trainer’s identity, credentials, and clean legal history are verified and shared with you before they ever enter your parents’ home.',
      icon: <Lock size={22} color="var(--brand-gold)" />,
    },
    {
      title: 'Post-Workout WhatsApp Reports to Children',
      desc: 'Whether you live in Gurgaon, Bangalore, or overseas in the US/UK, you receive a detailed summary of your parents’ vitals, exercises, and mood after every session.',
      icon: <MessageCircle size={22} color="var(--brand-gold)" />,
    },
    {
      title: 'Non-Surgical Knee & Joint Restoration',
      desc: 'Gentle, zero-impact joint decompression and muscle re-education designed to slow down arthritis and keep your parents walking independently without pain.',
      icon: <Heart size={22} color="var(--brand-gold)" />,
    },
    {
      title: 'Fall-Prevention & Balance Retraining',
      desc: 'Proprioceptive foam pad exercises, core balancing, and safe gait training that dramatically lowers slip and fall risks on household tiles and stairs.',
      icon: <ShieldCheck size={22} color="var(--brand-gold)" />,
    },
  ];

  const seniorTestimonials = [
    {
      daughter: 'Ananya Singhania (Daughter in Singapore)',
      parent: 'Parents (Ages 68 & 72), Jaypee Wishtown, Noida',
      story: 'Living in Singapore, I was constantly anxious about my father’s severe knee pain and mom’s balance. Master Trainer Satheesan has been a godsend. He sends me regular workout updates and my parents haven’t missed a single week in 2 years. Their knee stiffness has virtually vanished.',
    },
    {
      daughter: 'Vikram Malhotra (Son in Gurugram)',
      parent: 'Mother (Age 65), Greater Kailash 2, South Delhi',
      story: 'My mother was advised knee replacement surgery. We wanted to try non-invasive rehabilitation first. Within 4 months of Fit4Steps living room sessions, she climbed the stairs of our home without holding onto the railing. The relief for our family is priceless.',
    },
    {
      daughter: 'Meera & Rohan Kapoor (Children in London)',
      parent: 'Father (Age 74), Sector 50, Noida',
      story: 'The police verification and extreme courtesy of the trainers gave us total trust. Our father looks forward to his morning sessions. His posture has straightened and his energy is back to what it was a decade ago.',
    },
  ];

  return (
    <div style={{ background: 'var(--bg-page)' }}>
      {/* 1. EMOTIONAL, FAMILY-FIRST HERO */}
      <section className="hero-clean" style={{ paddingTop: '60px', paddingBottom: '76px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            {/* Left Content */}
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
                <Heart size={14} /> Family Peace of Mind & Elder Care
              </div>

              <h1 style={{
                fontSize: 'clamp(32px, 4.4vw, 52px)',
                lineHeight: 1.15,
                color: 'var(--text-main)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '20px',
              }}>
                Give Your Elderly Parents the Gift of <span className="text-gold">Pain-Free Independence</span> at Home
              </h1>

              <p style={{
                fontSize: '17px',
                color: 'var(--text-body)',
                lineHeight: 1.7,
                marginBottom: '28px',
                maxWidth: '560px',
              }}>
                Certified, police-verified personal trainers and joint rehabilitation specialists who visit your parents’ residence in Noida, South Delhi, and Gurugram. Safe, unhurried, and orthopedic-guided.
              </p>

              {/* 3 Family Safeguards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'var(--text-main)', fontWeight: 600 }}>
                  <CheckCircle2 size={18} color="#16a34a" />
                  <span>100% Police Verified & Background Checked In-Home Coaches</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'var(--text-main)', fontWeight: 600 }}>
                  <CheckCircle2 size={18} color="#16a34a" />
                  <span>Post-Session WhatsApp Progress Reports Sent Directly to Children</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'var(--text-main)', fontWeight: 600 }}>
                  <CheckCircle2 size={18} color="#16a34a" />
                  <span>Zero Heavy Lifting • Non-Surgical Knee & Balance Care</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
                <Link
                  href="/contact"
                  className="btn btn-primary"
                  style={{ padding: '14px 24px', fontSize: '15px' }}
                >
                  Book Parent Consultation <ArrowRight size={16} />
                </Link>

                <a
                  href="https://wa.me/919778776136?text=Hi%20Satheesan,%20I%20want%20to%20arrange%20in-home%20fitness%20and%20joint%20care%20for%20my%20parents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ padding: '14px 22px', fontSize: '15px' }}
                >
                  <MessageCircle size={18} /> Chat with Satheesan
                </a>
              </div>
            </div>

            {/* Right Human-First Imagery */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1.5px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-lg)',
                position: 'relative',
              }}>
                <Image
                  src="/assets/image/hero-senior-trainer.jpg"
                  alt="Fit4Steps Certified Female Trainer Assisting Senior Parent with Gentle Joint Care"
                  width={640}
                  height={520}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  priority
                />

                {/* Overlaid Parent Care Pill */}
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
                    <Heart size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#0b2737' }}>
                      Patience, Respect & Compassion
                    </div>
                    <div style={{ fontSize: '12.5px', color: '#475569' }}>
                      Senior citizens treated with deep care, dignity, and zero rushed workouts.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 4 FAMILY PEACE-OF-MIND PILLARS */}
      <section className="section-surface">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold" style={{ marginBottom: '10px' }}>
              Family Standards
            </div>
            <h2>Why Adult Children <span className="text-gold">Trust Fit4Steps</span></h2>
            <p>Designed from the ground up to give sons and daughters complete confidence while caring for elderly parents.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {familyPillars.map((p) => (
              <div key={p.title} className="theme-card" style={{ padding: '28px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--brand-gold-badge)',
                  border: '1px solid var(--brand-gold-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize: '17px', color: 'var(--text-main)', marginBottom: '8px' }}>{p.title}</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.6 }}>{p.desc}</p>
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

      {/* 4. STORIES FROM GRATEFUL SONS & DAUGHTERS */}
      <section className="section-surface">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold" style={{ marginBottom: '10px' }}>
              Family Stories
            </div>
            <h2>Real Feedback From <span className="text-gold">Sons & Daughters</span></h2>
            <p>Read how families across Delhi NCR and abroad found peaceful reassurance in our senior fitness protocols.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {seniorTestimonials.map((t) => (
              <div key={t.daughter} className="theme-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} color="var(--brand-gold)" fill="var(--brand-gold)" />
                    ))}
                  </div>

                  <blockquote style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '20px' }}>
                    "{t.story}"
                  </blockquote>
                </div>

                <div style={{ paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-main)' }}>{t.daughter}</div>
                  <div style={{ fontSize: '12.5px', color: 'var(--brand-gold-text)' }}>{t.parent}</div>
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
              <CheckCircle2 size={13} /> Direct Answer • Senior In-Home Safety Protocols
            </div>
            <h2 className="aeo-capsule-question">
              Is it safe to have an in-home fitness trainer for elderly parents living alone in Noida or Delhi?
            </h2>
            <div className="aeo-capsule-answer">
              <p>
                <strong>Direct Answer:</strong> Yes. Fit4Steps enforces rigorous background verification and police clearance for every trainer before residential deployment. Our trainers have specialized geriatric training, measure resting heart rate and blood pressure before every session, and send post-session activity reports directly to the children via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
