'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Star,
  Quote,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Award,
  Heart
} from 'lucide-react';

export default function SuccessStoriesPage() {
  const [filter, setFilter] = useState('all');

  const stories = [
    {
      id: 'padmaja',
      category: 'joint-rehab',
      name: 'Padmaja Ruparel',
      role: 'President, Indian Angel Network (IAN)',
      headline: 'It has been a life changing experience with Fit4Steps',
      quote: 'It has been a life changing experience for me with Fit4Steps. I think they have a unique differentiator: a unique massage and stretching that really makes me get quiet. I do suffer from weak knees and I thought I was going for surgery, but the reality is my pain is now 20% of what it was! I can climb, I can run down steps, and I can walk well. I am still on the way to doing much more to be fitter, healthier, and stronger, but it has made a huge difference in my life and lifestyle.',
      image: '/assets/image/ftr-testiminial-padmaja.webp',
      badge: '80% Knee Pain Reduction',
      years: 'Senior Joint Recovery'
    },
    {
      id: 'rajeev',
      category: 'executive',
      name: 'Rajeev Batra',
      role: 'CIO, Times Group',
      headline: 'Gives accurate advice and works in accordance with your fitness goals',
      quote: 'SATHEESAN is a fitness instructor of a very high caliber. I can emphatically say that I have not found any other instructor with holistic knowledge of fitness and dedication to his work as Satheesan. Extremely driven, gives accurate advice and works in accordance with your fitness goals. Never in my six years of association with Satheesan had there been any injury during the training sessions, which speaks volumes of his excellence and technically sound knowledge.',
      image: '/assets/image/ftr-testiminial-rajeev.webp',
      badge: '6+ Years Ongoing',
      years: '100% Injury-Free Record'
    },
    {
      id: 'shailen',
      category: 'joint-rehab',
      name: 'Shailen Ruparel',
      role: 'Director of Sales & Marketing, Fluor Corporation',
      headline: 'My trainer understands the human body well and cured me of a constant pain',
      quote: 'My trainer understands the human body well and cured me of a constant pain in my knees and ankle with his stretching exercises without medication, something that my ortho had warned could mean a knee replacement surgery. Since I am in my early 60s and overweight, he was careful and gave me fairly light exercises in the beginning. Over a period of time, as I became fitter and he gained more confidence in my abilities, he gradually kept making my exercises more challenging, all the while keeping a strict watch while I exercised.',
      image: '/assets/image/ftr-testiminial-shailen.webp',
      badge: 'Avoided Knee Surgery',
      years: 'Early 60s Transformation'
    },
    {
      id: 'shruthi',
      category: 'long-term',
      name: 'Shruti Dvivedi Sodhi',
      role: 'Partner, Khaitan Legal Associates',
      headline: 'Only thing that has not failed to keep me fit are my sessions with him',
      quote: 'I started my personal training in 2010 with Satheesan when I was in the midst of a critical medical treatment. From that day to now, the only thing that has not failed to keep me fit are my sessions with him. His passion, astuteness, commitment, and most importantly ability to mold each session into a unique experience are what makes him incomparable to the craft he practices. For me, health and being healthy is a function of workouts with Satheesan and Fit4Steps.',
      image: '/assets/image/ftr-testiminial-shruthi.webp',
      badge: '14+ Years Client',
      years: 'Rehabilitative Fitness'
    },
    {
      id: 'mukundan',
      category: 'long-term',
      name: 'Mukundan Chakrapani',
      role: 'Senior Vice President & Head IP Asset Management, Clairvolex',
      headline: 'Despite us moving halfway across the world, we rely on Satheesan',
      quote: 'Over the past 9+ years, Satheesan has been one of the mainstays of our life. Despite us moving halfway across the world, we have been able to rely on Satheesan to keep us fit, and more importantly, healthy! Satheesan’s knowledge in traditional remedies, ayurveda, yoga, pilates, and cross-fit has led to a holistic approach to our exercise routine. That Satheesan is an extremely well-rounded and knowledgeable individual only adds to interesting discussions before and after workouts!',
      image: '/assets/image/ftr-testiminial-mukundan.webp',
      badge: '9+ Years Global Client',
      years: 'Online & In-Home Training'
    },
    {
      id: 'babitha',
      category: 'executive',
      name: 'Babitha Rajeev',
      role: 'Senior Professional & Homemaker',
      headline: 'Now I feel extremely energetic with the routine of my workout',
      quote: 'My trainer in Fit4Steps is extremely bright and knows the finer nuances of health and fitness. I never liked working out. I was always too tired and too lazy to workout, but he went at the pace I was comfortable with and motivated me to go beyond my limits. He makes the session very interesting and suggests exercise routines that are individualized and challenging. Under his training, I never had any injury. Now I feel extremely energetic!',
      image: '/assets/image/ftr-testiminial-babitha.webp',
      badge: 'Zero Workout Burnout',
      years: 'Individualized Pacing'
    },
  ];

  const filtered = filter === 'all'
    ? stories
    : stories.filter(s => s.category === filter);

  return (
    <div>
      {/* 1. HERO BANNER */}
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Award size={14} /> Proven Track Record
          </div>
          <h1 style={{ fontSize: 'clamp(34px, 4.8vw, 52px)', color: 'var(--text-main)', lineHeight: 1.16, marginBottom: '20px' }}>
            Executive Success Stories & <br />
            <span className="text-gold">Client Recoveries</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Hear directly from senior corporate leaders, legal partners, and families who trust Master Trainer Satheesan and Fit4Steps to keep them pain-free, active, and thriving.
          </p>
        </div>
      </section>

      {/* 2. FILTER TABS */}
      <section className="section-alt" style={{ padding: '32px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'joint-rehab', label: 'Senior Knee & Joint Recovery' },
              { id: 'executive', label: 'Executive & Corporate Leaders' },
              { id: 'long-term', label: '9+ Years Long-Term Clients' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`filter-tab ${filter === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS GRID */}
      <section className="section-page">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
            {filtered.map((s) => (
              <div
                key={s.id}
                className="theme-card"
                style={{
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{
                      background: 'var(--brand-gold-soft)',
                      color: 'var(--brand-gold-text)',
                      border: '1px solid var(--brand-gold-border)',
                      padding: '4px 12px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: 700,
                    }}>
                      {s.badge}
                    </span>
                    <div style={{ display: 'flex', gap: '2px', color: '#f59e0b' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} fill="#f59e0b" />
                      ))}
                    </div>
                  </div>

                  <h3 style={{ fontSize: '18px', color: 'var(--text-main)', marginBottom: '14px', lineHeight: 1.4 }}>
                    "{s.headline}"
                  </h3>

                  <p style={{ fontSize: '14.5px', color: 'var(--text-body)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '24px' }}>
                    "{s.quote}"
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '18px',
                }}>
                  <img
                    src={s.image}
                    alt={s.name}
                    style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--border-medium)' }}
                  />
                  <div>
                    <div style={{ fontSize: '15.5px', fontWeight: 700, color: 'var(--text-main)' }}>
                      {s.name}
                    </div>
                    <div style={{ fontSize: '12.5px', color: 'var(--brand-gold)', fontWeight: 600 }}>
                      {s.role}
                    </div>
                    <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {s.years}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '52px' }}>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '14px 32px' }}>
              Experience Fit4Steps In Your Home <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

