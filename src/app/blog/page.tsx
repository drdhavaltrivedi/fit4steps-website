'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  ArrowRight,
  Clock,
  Tag,
  Heart,
  Activity,
  Users,
  Building,
  CheckCircle2,
  Calendar
} from 'lucide-react';

export default function BlogHubPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'senior-fitness', label: 'Senior Fitness' },
    { id: 'joint-pain', label: 'Joint Pain & Mobility' },
    { id: 'home-workouts', label: 'Home Workouts' },
    { id: 'pregnancy', label: 'Pregnancy & Postnatal' },
    { id: 'kids-fitness', label: 'Kids Fitness' },
    { id: 'corporate', label: 'Corporate Wellness' },
  ];

  const articles = [
    {
      slug: 'exercises-for-knee-pain',
      category: 'joint-pain',
      title: '7 Safe In-Home Exercises for Knee Pain & Osteoarthritis Relief',
      excerpt: 'Learn the doctor-recommended non-weight bearing exercises that decompress the patellofemoral joint, strengthen the VMO, and help seniors avoid knee replacement surgery.',
      readTime: '6 min read',
      date: 'Updated Aug 2026',
      serviceLink: '/senior-fitness/knee-therapy',
      serviceText: 'Explore Knee Therapy Service'
    },
    {
      slug: 'safe-exercises-for-elderly',
      category: 'senior-fitness',
      title: 'Safe Daily Exercises for Senior Citizens at Home: Complete Guide',
      excerpt: 'A physical therapist’s guide for seniors aged 60+ and 70+. Chair-assisted squats, ankle dorsiflexion, tandem balance, and gentle spinal decompression.',
      readTime: '8 min read',
      date: 'Updated Aug 2026',
      serviceLink: '/senior-fitness',
      serviceText: 'Explore Senior Citizen Training'
    },
    {
      slug: 'benefits-of-strength-training-after-50',
      category: 'senior-fitness',
      title: 'Why Strength Training is Non-Negotiable After Age 50',
      excerpt: 'How progressive resistance training combats sarcopenia, prevents osteopenia, elevates resting metabolic rate, and preserves functional independence.',
      readTime: '5 min read',
      date: 'Updated Aug 2026',
      serviceLink: '/senior-fitness/fifty-plus',
      serviceText: 'Explore 50+ Fitness Coaching'
    },
    {
      slug: 'joint-mobility-routine-for-seniors',
      category: 'joint-pain',
      title: 'The 15-Minute Morning Joint Mobility Routine for Stiff Joints',
      excerpt: 'Eliminate morning stiffness and knee crepitus with gentle synovial lubrication exercises designed for older adults to do before getting out of bed.',
      readTime: '5 min read',
      date: 'Updated Aug 2026',
      serviceLink: '/senior-fitness/mobility-balance',
      serviceText: 'Explore Mobility & Balance Training'
    },
    {
      slug: 'posture-correction-desk-workers',
      category: 'corporate',
      title: 'Fixing Text Neck & Anterior Pelvic Tilt from Long Desk Hours',
      excerpt: 'Practical ergonomic stretches and scapular retractions for corporate tech professionals working in Noida and Gurugram office parks.',
      readTime: '7 min read',
      date: 'Updated Aug 2026',
      serviceLink: '/services/corporate-wellness-yoga',
      serviceText: 'Explore Corporate Wellness'
    },
    {
      slug: 'diastasis-recti-postnatal-recovery',
      category: 'pregnancy',
      title: 'Safe Postnatal Core Recovery & Diastasis Recti Exercises',
      excerpt: 'How new mothers can safely heal abdominal separation, retrain the pelvic floor, and regain core tone without high-impact crunches.',
      readTime: '6 min read',
      date: 'Updated Aug 2026',
      serviceLink: '/services/prenatal-postnatal-yoga',
      serviceText: 'Explore Prenatal & Postnatal Yoga'
    },
    {
      slug: 'screen-time-and-kids-posture',
      category: 'kids-fitness',
      title: 'Combatting Child Screen-Time Slouching Through Functional Play',
      excerpt: 'Fun, gamified agility and posture drills to counteract heavy school bags and screen hunching for children in high-rise apartments.',
      readTime: '5 min read',
      date: 'Updated Aug 2026',
      serviceLink: '/services/kids-fitness-functional-training',
      serviceText: 'Explore Kids Functional Training'
    },
    {
      slug: 'how-to-set-up-home-workout-space',
      category: 'home-workouts',
      title: 'How to Set Up an Effective Home Workout Space in an Apartment',
      excerpt: 'You do not need a dedicated room or expensive machines. Here is how to create a high-impact functional training corner in your living room.',
      readTime: '4 min read',
      date: 'Updated Aug 2026',
      serviceLink: '/services/personal-training-at-home',
      serviceText: 'Explore In-Home Personal Training'
    }
  ];

  const filtered = activeCategory === 'all'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  return (
    <div>
      {/* 1. HERO */}
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <BookOpen size={14} /> Evidence-Based Wellness Guides
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 50px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            The Fit4Steps Health & <br />
            <span className="text-gold">Longevity Knowledge Hub</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '32px' }}>
            Expert advice, non-surgical joint rehabilitation guides, and in-home fitness strategies written by Master Trainer Satheesan and certified physical therapists.
          </p>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                type="button"
                style={{
                  padding: '8px 16px',
                  borderRadius: '24px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: activeCategory === c.id ? '1.5px solid var(--primary-gold)' : '1px solid var(--border-color)',
                  background: activeCategory === c.id ? 'var(--card-navy)' : 'var(--bg-card)',
                  color: activeCategory === c.id ? '#ffffff' : 'var(--text-main)',
                  transition: 'all 0.15s ease'
                }}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. ARTICLES GRID */}
      <section className="section-surface">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px'
          }}>
            {filtered.map((art, idx) => (
              <article
                key={idx}
                className="card-clean"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span className="badge badge-navy" style={{ textTransform: 'capitalize' }}>
                      {art.category.replace('-', ' ')}
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={12} /> {art.readTime}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '12px', fontWeight: 700, lineHeight: 1.35 }}>
                    <Link href={`/blog/${art.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {art.title}
                    </Link>
                  </h2>

                  <p style={{ color: 'var(--text-body)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                    {art.excerpt}
                  </p>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                    <Link
                      href={`/blog/${art.slug}`}
                      style={{
                        color: 'var(--primary-gold)',
                        fontWeight: 700,
                        fontSize: '14px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        textDecoration: 'none'
                      }}
                    >
                      Read Guide <ArrowRight size={14} />
                    </Link>
                    <Link
                      href={art.serviceLink}
                      style={{
                        fontSize: '12px',
                        color: 'var(--text-muted)',
                        textDecoration: 'underline'
                      }}
                    >
                      {art.serviceText}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
