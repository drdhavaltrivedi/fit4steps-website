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
  Users,
  AlertCircle,
  Stethoscope
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Senior Citizen Fitness Training & Knee Pain Therapy at Home | Fit4Steps',
  description: 'Specialized in-home senior citizen fitness, gentle knee pain rehabilitation, joint restoration, and balance training in Noida, Delhi & Gurugram. Doctor-recommended and 100% injury-free.',
  keywords: [
    'senior citizen fitness trainer at home delhi',
    'strength training for seniors gurugram',
    'knee pain exercises therapy noida',
    'mobility exercises for senior citizens',
    'safe exercises for elderly at home',
    'personal fitness coaching for 50 plus'
  ],
};

export default function SeniorFitnessPage() {
  const pillars = [
    {
      id: 'fifty-plus',
      title: 'Personal Fitness Coaching for 50+',
      subtitle: 'Gentle, structured workouts respecting individual health history',
      desc: 'Entering your 50s brings distinct physiological changes in metabolic rate, hormone levels, and joint lubrication. Our 1-on-1 coaching is designed to safely build cardiovascular stamina, reduce visceral fat, and maintain vibrant daily energy without placing unneeded stress on vulnerable joints.',
      points: [
        'Safe cardiovascular pacing for healthy blood pressure & heart health',
        'Posture realignment to reduce chronic lower back and neck fatigue',
        'Metabolic conditioning to assist with diabetes and cholesterol control',
        'Private in-home training at a comfortable, unhurried pace'
      ],
      icon: Activity
    },
    {
      id: 'knee-therapy',
      title: 'Joint Restoration & Knee Pain Therapy',
      subtitle: 'Non-invasive rehabilitation helping clients avoid knee replacement surgery',
      desc: 'Chronic knee stiffness and osteoarthritis shouldn’t force you into premature surgery. Our specialized joint restoration protocol strengthens the surrounding quadriceps, hamstrings, and calves while applying assisted traction stretches that naturally decompress the patellofemoral joint space.',
      points: [
        'Non-weight bearing quad and VMO strengthening',
        'Assisted fascial release for tight IT bands and hip flexors',
        'Relieves morning joint stiffness and ascending/descending stairs pain',
        'Coordinated with your orthopedic doctor’s clinical advice'
      ],
      icon: Heart
    },
    {
      id: 'strength-seniors',
      title: 'Strength Training for Seniors (60+ & 70+)',
      subtitle: 'Preserving lean muscle mass and bone mineral density',
      desc: 'Sarcopenia (age-related muscle loss) is the single biggest cause of frailty and lost independence in older age. Using progressive elastic resistance bands, light weights, and functional movements, we help seniors safely regain grip strength, arm tone, and leg power.',
      points: [
        'Increases bone mineral density to combat osteopenia and osteoporosis',
        'Restores functional independence for lifting groceries and getting out of chairs',
        'Improves resting metabolic rate and muscular stamina',
        'Strictly supervised by certified coaches to prevent hyperextension or strain'
      ],
      icon: Award
    },
    {
      id: 'mobility-balance',
      title: 'Mobility, Flexibility & Fall Prevention',
      subtitle: 'Proprioception exercises for confident, fearless walking',
      desc: 'Falls are the leading cause of hip fractures and trauma among the elderly. Our balance and stability programs retrain neurological reflexes, ankle stability, and vestibular equilibrium so your loved ones walk steadily, confidently, and without fear.',
      points: [
        'Single-leg balance drills using soft foam pads and stable chair support',
        'Dynamic ankle and hip mobility routines to correct shuffling gait',
        'Core stabilizer activation for reactive balance control',
        'Home hazard awareness and safe movement ergonomics'
      ],
      icon: ShieldCheck
    },
  ];

  return (
    <div>
      {/* 1. HERO BANNER */}
      <section className="page-header-clean">
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
              <Heart size={14} /> Our Lead Specialist Service
            </div>
            <h1 style={{ fontSize: 'clamp(34px, 4.8vw, 52px)', color: 'var(--text-main)', lineHeight: 1.16, marginBottom: '20px' }}>
              Senior Citizen In-Home Fitness & <br />
              <span className="text-gold">Joint Restoration Therapy</span>
            </h1>
            <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '32px' }}>
              Specialized 1-on-1 physical coaching, gentle knee pain rehabilitation, and fall prevention at your residence in Noida, Delhi & Gurugram. Proven to decompress joints, rebuild lost muscle, and restore independent mobility.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <Link href="/contact" className="btn btn-primary" style={{ padding: '14px 28px' }}>
                Book Free Senior Assessment <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/919778776136?text=Hi%20Satheesan,%20I%20would%20like%20to%20consult%20about%20senior%20citizen%20fitness%20and%20knee%20pain%20therapy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '14px 24px' }}
              >
                <MessageCircle size={18} /> Chat with Specialist on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AEO KNOWLEDGE CAPSULE FOR SEARCH ENGINES & AI OVERVIEWS */}
      <section className="section-alt" style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="aeo-capsule" style={{ margin: 0 }}>
            <div className="aeo-capsule-badge">
              <ShieldCheck size={13} /> AEO Clinical Protocol • Senior Knee & Mobility Care
            </div>
            <h2 className="aeo-capsule-question">
              Can elderly seniors with knee osteoarthritis or severe stiffness exercise safely at home?
            </h2>
            <div className="aeo-capsule-answer">
              <p style={{ marginBottom: '10px' }}>
                <strong>Direct Answer:</strong> Yes, gentle targeted non-weight-bearing exercises are recommended by orthopedists to slow arthritis progression and prevent surgical intervention. Fit4Steps senior trainers use manual joint decompression, seated quadriceps strengthening, and assisted myofascial stretching right on a living room rug.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', marginTop: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={16} color="var(--brand-gold)" /> <strong>Doctor Alignment:</strong> Pre-screened with Orthopedic guidance
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={16} color="var(--brand-gold)" /> <strong>Zero Jumping:</strong> 100% low impact & supported
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={16} color="var(--brand-gold)" /> <strong>Doorstep Service:</strong> Noida, Delhi & Gurugram
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY SENIOR BODIES REQUIRE SPECIALIST CARE */}
      <section className="section-surface">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}>
            <div>
              <div className="badge badge-cyan" style={{ marginBottom: '12px' }}>
                <Stethoscope size={13} /> Medical-Grade Compassion
              </div>
              <h2 style={{ fontSize: '34px', color: 'var(--text-main)', marginBottom: '18px' }}>
                Why Senior Bodies Require a <span className="text-gold">Different Approach</span>
              </h2>
              <p style={{ color: 'var(--text-body)', fontSize: '15.5px', lineHeight: 1.7, marginBottom: '18px' }}>
                Standard commercial gyms and generic personal trainers frequently cause injuries to older adults by prescribing heavy squats, high-impact jumps, or improper weights.
              </p>
              <p style={{ color: 'var(--text-body)', fontSize: '15.5px', lineHeight: 1.7, marginBottom: '24px' }}>
                At Fit4Steps, our senior specialists understand cartilage wear, spinal degeneration, bone density changes, and blood pressure dynamics. Every movement is calculated, supported, and continuously monitored.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  '100% Non-Impact, joint-friendly protocols',
                  'Individualized heart rate & blood pressure pacing',
                  'Trainers carry soft resistance bands and joint decompression straps',
                  'Zero travel hazard—conducted safely on your home rug or mat'
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={18} color="var(--brand-gold)" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--card-shadow)',
              }}>
                <img
                  src="/assets/image/senior-joint-therapy.jpg"
                  alt="Specialized physical trainer assisting an Indian elderly lady with knee joint care at home"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 4 CORE SENIOR PILLARS */}
      <section className="section-page">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold" style={{ marginBottom: '12px' }}>
              Comprehensive Rehabilitation
            </div>
            <h2>
              The 4 Pillars of <span className="text-gold">Fit4Steps Senior Care</span>
            </h2>
            <p>
              Structured to address every dimension of healthy aging: cardiovascular health, cartilage preservation, muscle tone, and fall resistance.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.id}
                  id={p.id}
                  className="theme-card"
                  style={{ padding: '32px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', flexWrap: 'wrap' }}>
                    <div style={{
                      background: 'var(--brand-gold-soft)',
                      color: 'var(--brand-gold)',
                      padding: '14px',
                      borderRadius: '14px',
                    }}>
                      <Icon size={26} />
                    </div>

                    <div style={{ flex: 1, minWidth: '280px' }}>
                      <h3 style={{ fontSize: '22px', color: 'var(--text-main)', marginBottom: '6px' }}>
                        {p.title}
                      </h3>
                      <div style={{ fontSize: '14px', color: 'var(--brand-gold)', fontWeight: 600, marginBottom: '14px' }}>
                        {p.subtitle}
                      </div>
                      <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '18px' }}>
                        {p.desc}
                      </p>

                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '10px',
                      }}>
                        {p.points.map((pt, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-body)' }}>
                            <CheckCircle2 size={16} color="var(--brand-gold)" /> {pt}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CLIENT RECOVERY STORIES */}
      <section className="section-alt">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold" style={{ marginBottom: '12px' }}>
              Real Recoveries
            </div>
            <h2>
              How Our Senior Clients Avoided <span className="text-gold">Knee Surgeries</span>
            </h2>
            <p>
              Real testimonials from clients who were struggling with chronic joint pain and regained fearless movement.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            <div className="theme-card" style={{ padding: '32px' }}>
              <div style={{
                background: 'var(--brand-gold-soft)',
                color: 'var(--brand-gold-text)',
                border: '1px solid var(--brand-gold-border)',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 700,
                display: 'inline-block',
                marginBottom: '16px'
              }}>
                80% Knee Pain Reduction
              </div>
              <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '24px' }}>
                "I suffer from weak knees and I thought I was going for surgery, but the reality is my pain is now 20% of what it was! A unique massage and assisted stretching really makes the difference. I can climb, I can run down steps, and I can walk well."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
                <img
                  src="/assets/image/ftr-testiminial-padmaja.webp"
                  alt="Padmaja Ruparel"
                  style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <div style={{ fontSize: '15.5px', fontWeight: 700, color: 'var(--text-main)' }}>Padmaja Ruparel</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>President, Indian Angel Network (IAN)</div>
                </div>
              </div>
            </div>

            <div className="theme-card" style={{ padding: '32px' }}>
              <div style={{
                background: 'var(--brand-gold-soft)',
                color: 'var(--brand-gold-text)',
                border: '1px solid var(--brand-gold-border)',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 700,
                display: 'inline-block',
                marginBottom: '16px'
              }}>
                Cured Chronic Pain in Early 60s
              </div>
              <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '24px' }}>
                "My trainer understands the human body well and cured me of a constant pain in my knees and ankle with his stretching exercises without medication, something that my ortho had warned could mean a knee replacement surgery."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
                <img
                  src="/assets/image/ftr-testiminial-shailen.webp"
                  alt="Shailen Ruparel"
                  style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <div style={{ fontSize: '15.5px', fontWeight: 700, color: 'var(--text-main)' }}>Shailen Ruparel</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Director of Sales & Marketing, Fluor Corporation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section style={{
        padding: '76px 0',
        backgroundColor: 'var(--brand-navy)',
        color: '#ffffff',
        textAlign: 'center',
      }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontSize: '34px', color: '#ffffff', marginBottom: '16px' }}>
            Give Your Parents the Gift of Pain-Free Walking
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: 1.7, marginBottom: '28px' }}>
            Book a complimentary in-home mobility and knee joint assessment in Noida, Delhi, or Gurugram.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px' }}>
            <Link href="/contact" className="btn btn-gold" style={{ padding: '14px 30px' }}>
              Schedule Free Assessment <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/919778776136?text=Hi%20Satheesan,%20I%20would%20like%20to%20book%20a%20joint%20mobility%20assessment%20for%20my%20parents"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '14px 24px' }}
            >
              <MessageCircle size={18} /> WhatsApp +91 97787 76136
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
