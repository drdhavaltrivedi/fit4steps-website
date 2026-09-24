'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Dumbbell,
  ArrowRight,
  MessageCircle,
  Activity,
  Flame,
  Zap,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function ProgramsPage() {
  const [filter, setFilter] = useState('all');

  const programs = [
    {
      id: 'weight-training',
      category: 'strength',
      title: 'Weight Training',
      tag: 'Strength & Tone',
      desc: 'Progressive resistance training utilizing adjustable dumbbells, kettlebells, and bodyweight to stimulate muscle hypertrophy, increase metabolism, and sculpt lean body mass.',
      img: '/assets/image/programme-img-1.webp',
      intensity: 'Moderate to High',
      benefits: ['Hypertrophy & body toning', 'Boosts resting metabolic rate', 'Strengthens tendon connections']
    },
    {
      id: 'yoga',
      category: 'mind-body',
      title: 'Traditional Yoga',
      tag: 'Flexibility & Flow',
      desc: 'Hatha and Vinyasa asana flows synchronized with conscious pranayama breathing to enhance joint range of motion, relieve spinal compression, and promote mental serenity.',
      img: '/assets/image/programme-img-2.webp',
      intensity: 'Gentle to Moderate',
      benefits: ['Spinal decompression & posture', 'Reduces cortisol & stress levels', 'Deep hamstring and hip opening']
    },
    {
      id: 'power-yoga',
      category: 'mind-body',
      title: 'Power Yoga',
      tag: 'Dynamic Strength',
      desc: 'An athletic, faster-paced yoga discipline combining isometric holds and core-centric transitions to build internal heat, sweat out toxins, and develop functional power.',
      img: '/assets/image/h-s2-servi-card-img-2.webp',
      intensity: 'High',
      benefits: ['Calorie burn with flexibility', 'Total body muscular endurance', 'Enhances balance & mental grit']
    },
    {
      id: 'pilates',
      category: 'mind-body',
      title: 'Mat & Core Pilates',
      tag: 'Core & Alignment',
      desc: 'Precision core activation focusing on the transverse abdominis, pelvic floor, and lumbar stabilizers. Ideal for toning the waistline and fixing chronic lower back aches.',
      img: '/assets/image/h-s2-servi-card-img-5.webp',
      intensity: 'Moderate',
      benefits: ['Flattens abdominal wall', 'Fixes anterior pelvic tilt', 'Strengthens deep stabilizers']
    },
    {
      id: 'aerobics',
      category: 'cardio',
      title: 'Aerobics & Cardio Dance',
      tag: 'Heart & Stamina',
      desc: 'Rhythmic, high-energy cardio choreographies that elevate heart rate, improve cardiovascular oxygenation, and turn home workouts into an exhilarating rhythm session.',
      img: '/assets/image/programme-img-3.webp',
      intensity: 'Moderate to High',
      benefits: ['Optimizes cardiovascular health', 'Elevates mood & endorphins', 'High caloric expenditure']
    },
    {
      id: 'kick-boxing',
      category: 'cardio',
      title: 'Kick Boxing & Agility',
      tag: 'Agility & Power',
      desc: 'High-intensity striking drills using focus pads and shadow boxing. Enhances hand-eye coordination, hip rotational speed, and releases workday stress and frustration.',
      img: '/assets/image/programme-img-1.webp',
      intensity: 'Very High',
      benefits: ['Explosive punching & kicking power', 'Intense stress relief & catharsis', 'Sharpened reflexes & agility']
    },
    {
      id: 'stretching-mobility',
      category: 'rehab',
      title: 'Stretching & Fascial Mobility',
      tag: 'Joint Restoration',
      desc: 'Our signature assisted passive stretching protocol. Your trainer applies calculated traction to decompress tight joints, release myofascial knots, and restore pain-free walking.',
      img: '/assets/image/h-s3-img.webp',
      intensity: 'Restorative',
      benefits: ['Eliminates neck & lower back spasms', 'Restores full joint range of motion', 'Crucial for senior knee recovery']
    },
    {
      id: 'ball-exercise',
      category: 'rehab',
      title: 'Swiss Ball Stability Training',
      tag: 'Balance & Core',
      desc: 'Unstable surface training on anti-burst Swiss exercise balls. Forces micro-stabilizer muscles in the hips, spine, and ankles to fire, creating unbreakable balance.',
      img: '/assets/image/h-ban-img.webp',
      intensity: 'Moderate',
      benefits: ['Strengthens deep core stabilizers', 'Improves sitting posture at work', 'Zero-impact spinal support']
    },
    {
      id: 'circuit-training',
      category: 'strength',
      title: 'Circuit Training',
      tag: 'Endurance & Tone',
      desc: 'Multi-station timed workout circuits alternating upper body, lower body, and core stations with minimal rest to keep heart rates in the optimal fat-burning zone.',
      img: '/assets/image/programme-img-3.webp',
      intensity: 'High',
      benefits: ['High metabolic afterburn (EPOC)', 'Time-efficient full body workout', 'Keeps routines fresh and exciting']
    },
    {
      id: 'hiit',
      category: 'cardio',
      title: 'HIIT (High Intensity Interval Training)',
      tag: 'Metabolic Boost',
      desc: 'Short, explosive bursts of exercise paired with brief active recovery intervals. Maximizes post-workout calorie burn in half the time of steady-state cardio.',
      img: '/assets/image/programme-img-1.webp',
      intensity: 'Very High',
      benefits: ['Maximum fat burn in 35-45 minutes', 'Preserves lean muscle while cutting fat', 'Improves VO2 max and stamina']
    },
    {
      id: 'trx-exercise',
      category: 'strength',
      title: 'TRX Suspension Training',
      tag: 'Bodyweight Mastery',
      desc: 'Using military-grade suspension straps anchored to a home door or beam, TRX uses gravity and your bodyweight to develop 3-dimensional functional power.',
      img: '/assets/image/h-s2-servi-card-img-4.webp',
      intensity: 'Customizable',
      benefits: ['Infinite resistance scaling', 'Forces constant core engagement', 'Joint-friendly functional angles']
    },
    {
      id: 'sports-games',
      category: 'cardio',
      title: 'Sports Conditioning & Games',
      tag: 'Athletic Play',
      desc: 'Sport-specific conditioning for badminton, tennis, marathon running, or golf. Combines lateral footwork, rotational power, and injury-prevention drills.',
      img: '/assets/image/h-s2-servi-card-img-5.webp',
      intensity: 'Moderate to High',
      benefits: ['Enhances court and field performance', 'Prevents rotator cuff & ACL injuries', 'Fun, gamified physical challenges']
    },
  ];

  const filteredPrograms = filter === 'all'
    ? programs
    : programs.filter(p => p.category === filter);

  return (
    <div>
      {/* 1. HERO BANNER */}
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Dumbbell size={14} /> Training Disciplines
          </div>
          <h1 style={{ fontSize: 'clamp(34px, 4.8vw, 52px)', color: 'var(--text-main)', lineHeight: 1.16, marginBottom: '20px' }}>
            The Essence of <br />
            <span className="text-gold">Our In-Home Programs</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Explore 12 specialized fitness disciplines taught 1-on-1 by certified experts at your home in Noida, Delhi, and Gurugram.
          </p>
        </div>
      </section>

      {/* 2. FILTER TABS */}
      <section className="section-alt" style={{ padding: '32px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All 12 Programs' },
              { id: 'strength', label: 'Strength & Tone' },
              { id: 'mind-body', label: 'Yoga & Pilates' },
              { id: 'cardio', label: 'Cardio & HIIT' },
              { id: 'rehab', label: 'Joint Rehab & Mobility' },
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

      {/* 3. PROGRAMS GRID */}
      <section className="section-page">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                id={prog.id}
                className="theme-card"
                style={{
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ height: '200px', position: 'relative' }}>
                  <img
                    src={prog.img}
                    alt={prog.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'var(--bg-surface)',
                    color: 'var(--brand-gold-text)',
                    padding: '4px 10px',
                    borderRadius: '8px',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    border: '1px solid var(--border-subtle)',
                    boxShadow: 'var(--shadow-sm)',
                  }}>
                    {prog.tag}
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: 'rgba(11, 39, 55, 0.9)',
                    color: '#ffffff',
                    padding: '3px 9px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 600,
                  }}>
                    Intensity: {prog.intensity}
                  </div>
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '19px', color: 'var(--text-main)', marginBottom: '8px' }}>
                      {prog.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '16px' }}>
                      {prog.desc}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                      {prog.benefits.map((b, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-body)' }}>
                          <CheckCircle2 size={15} color="var(--brand-gold)" /> {b}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link
                      href="/contact"
                      style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--brand-gold)', display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                      Book Free Trial <ArrowRight size={15} />
                    </Link>
                    <a
                      href={`https://wa.me/919778776136?text=Hi%20Fit4Steps,%20I%20am%20interested%20in%20${encodeURIComponent(prog.title)}%20training`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#25d366', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: 600 }}
                    >
                      <MessageCircle size={15} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

