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
  CheckCircle2,
  Phone,
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';

export default function ProgramsPage() {
  const [filter, setFilter] = useState('all');

  const programs = [
    {
      id: 'weight-training',
      category: 'strength',
      title: 'In-Home Weight Training',
      tag: 'Strength & Hypertrophy',
      desc: 'Progressive resistance training utilizing adjustable selectorized dumbbells, kettlebells, and heavy bands to stimulate muscle hypertrophy, increase metabolism, and sculpt lean body mass.',
      img: '/assets/image/programme-img-1.webp',
      intensity: 'Moderate to High',
      burn: '380 - 550 kcal',
      benefits: ['Hypertrophy & body toning', 'Boosts resting metabolic rate', 'Strengthens tendon connections']
    },
    {
      id: 'yoga',
      category: 'mind-body',
      title: 'Traditional Yoga',
      tag: 'Spinal Decompression & Flow',
      desc: 'Hatha and Vinyasa asana flows synchronized with conscious pranayama breathing to enhance joint range of motion, relieve spinal compression, and promote mental serenity.',
      img: '/assets/image/programme-img-2.webp',
      intensity: 'Gentle to Moderate',
      burn: '220 - 350 kcal',
      benefits: ['Spinal decompression & posture', 'Reduces cortisol & stress levels', 'Deep hamstring and hip opening']
    },
    {
      id: 'power-yoga',
      category: 'mind-body',
      title: 'Athletic Power Yoga',
      tag: 'Dynamic Strength & Sweat',
      desc: 'An athletic, faster-paced yoga discipline combining isometric holds and core-centric transitions to build internal heat, sweat out toxins, and develop functional power.',
      img: '/assets/image/h-s2-servi-card-img-2.webp',
      intensity: 'High',
      burn: '360 - 520 kcal',
      benefits: ['Calorie burn with flexibility', 'Total body muscular endurance', 'Enhances balance & mental grit']
    },
    {
      id: 'pilates',
      category: 'mind-body',
      title: 'Mat & Core Pilates',
      tag: 'Pelvic Alignment & Toning',
      desc: 'Precision core activation focusing on the transverse abdominis, pelvic floor, and lumbar stabilizers. Ideal for toning the waistline and fixing chronic lower back aches.',
      img: '/assets/image/h-s2-servi-card-img-5.webp',
      intensity: 'Moderate',
      burn: '250 - 380 kcal',
      benefits: ['Flattens abdominal wall', 'Fixes anterior pelvic tilt', 'Strengthens deep stabilizers']
    },
    {
      id: 'aerobics',
      category: 'cardio',
      title: 'Aerobics & Cardio Dance',
      tag: 'Heart & High Stamina',
      desc: 'Rhythmic, high-energy cardio choreographies that elevate heart rate, improve cardiovascular oxygenation, and turn home workouts into an exhilarating rhythm session.',
      img: '/assets/image/programme-img-3.webp',
      intensity: 'Moderate to High',
      burn: '350 - 500 kcal',
      benefits: ['Optimizes cardiovascular health', 'Elevates mood & endorphins', 'High caloric expenditure']
    },
    {
      id: 'kick-boxing',
      category: 'cardio',
      title: 'Kick Boxing & Agility',
      tag: 'Combat Agility & Catharsis',
      desc: 'High-intensity striking drills using focus pads and shadow boxing. Enhances hand-eye coordination, hip rotational speed, and releases workday stress and frustration.',
      img: '/assets/image/h-s2-servi-card-img-1.webp',
      intensity: 'Very High',
      burn: '480 - 680 kcal',
      benefits: ['Explosive punching & kicking power', 'Intense stress relief & catharsis', 'Sharpened reflexes & agility']
    },
    {
      id: 'stretching-mobility',
      category: 'rehab',
      title: 'Assisted Stretching & Fascial Mobility',
      tag: 'Joint Restoration & Traction',
      desc: 'Our signature assisted passive stretching protocol. Your trainer applies calculated traction to decompress tight joints, release myofascial knots, and restore pain-free walking.',
      img: '/assets/image/senior-joint-therapy.jpg',
      intensity: 'Restorative',
      burn: '150 - 220 kcal',
      benefits: ['Eliminates neck & lower back spasms', 'Restores full joint range of motion', 'Crucial for senior knee recovery']
    },
    {
      id: 'ball-exercise',
      category: 'rehab',
      title: 'Swiss Ball Stability Training',
      tag: 'Balance & Core Control',
      desc: 'Unstable surface training on anti-burst Swiss exercise balls. Forces micro-stabilizer muscles in the hips, spine, and ankles to fire, creating unbreakable balance.',
      img: '/assets/image/h-ban-img.webp',
      intensity: 'Moderate',
      burn: '240 - 380 kcal',
      benefits: ['Strengthens deep core stabilizers', 'Improves sitting posture at work', 'Zero-impact spinal support']
    },
    {
      id: 'circuit-training',
      category: 'strength',
      title: 'In-Home Circuit Training',
      tag: 'Endurance & Work Density',
      desc: 'Multi-station timed workout circuits alternating upper body, lower body, and core stations with minimal rest to keep heart rates in the optimal fat-burning zone.',
      img: '/assets/image/h-s6-img-1.webp',
      intensity: 'High',
      burn: '420 - 620 kcal',
      benefits: ['High metabolic afterburn (EPOC)', 'Time-efficient full body workout', 'Keeps routines fresh and exciting']
    },
    {
      id: 'hiit',
      category: 'cardio',
      title: 'High-Intensity Interval Training (HIIT)',
      tag: 'Max Metabolic Afterburn',
      desc: 'Short, explosive bursts of exercise paired with brief active recovery intervals. Maximizes post-workout calorie burn in half the time of steady-state cardio.',
      img: '/assets/image/h-s6-img-2.webp',
      intensity: 'Very High',
      burn: '450 - 650 kcal',
      benefits: ['Maximum fat burn in 35-45 minutes', 'Preserves lean muscle while cutting fat', 'Improves VO2 max and stamina']
    },
    {
      id: 'trx-exercise',
      category: 'strength',
      title: 'TRX Suspension Training',
      tag: 'Bodyweight Mastery & Physics',
      desc: 'Using military-grade suspension straps anchored to a home door or beam, TRX uses gravity and your bodyweight to develop 3-dimensional functional power.',
      img: '/assets/image/h-s2-servi-card-img-4.webp',
      intensity: 'Customizable',
      burn: '320 - 480 kcal',
      benefits: ['Infinite resistance scaling', 'Forces constant core engagement', 'Joint-friendly functional angles']
    },
    {
      id: 'sports-games',
      category: 'cardio',
      title: 'Sports Conditioning & Games',
      tag: 'Athletic Court Agility',
      desc: 'Sport-specific conditioning for badminton, tennis, marathon running, or golf. Combines lateral footwork, rotational power, and injury-prevention drills.',
      img: '/assets/image/h-s2-servi-card-img-3.webp',
      intensity: 'Moderate to High',
      burn: '400 - 580 kcal',
      benefits: ['Enhances court and field performance', 'Prevents rotator cuff & ACL injuries', 'Fun, gamified physical challenges']
    },
  ];

  const filteredPrograms = filter === 'all'
    ? programs
    : programs.filter(p => p.category === filter);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Fit4Steps In-Home Fitness & Wellness Programs',
    description: '12 specialized in-home fitness disciplines delivered 1-on-1 by certified personal trainers in Noida, Delhi & Gurugram.',
    itemListElement: programs.map((p, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: p.title,
      url: `https://fit4steps.com/programs/${p.id}`,
      description: p.desc,
    })),
  };

  return (
    <div>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO BANNER */}
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '880px', textAlign: 'center' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Dumbbell size={14} /> 12 Certified Disciplines Delivered to Your Door
          </div>
          <h1 style={{ fontSize: 'clamp(34px, 4.8vw, 54px)', color: 'var(--text-main)', lineHeight: 1.16, marginBottom: '20px', fontWeight: 800 }}>
            Curated In-Home Training Disciplines <br />
            <span className="text-gold">Tailored to Your Biology</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px', maxWidth: '740px', margin: '0 auto 28px' }}>
            Explore 12 clinically structured training disciplines delivered 1-on-1 by certified exercise physiologists and fitness trainers at your home in Noida, Delhi, and Gurugram.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20consult%20about%20your%20in-home%20fitness%20programs."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <MessageCircle size={18} /> Consult on WhatsApp
            </a>
            <a
              href="tel:+919999448206"
              className="btn btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <Phone size={16} /> Call +91 99994 48206
            </a>
          </div>
        </div>
      </section>

      {/* 2. FILTER TABS */}
      <section className="section-alt" style={{ padding: '28px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All 12 Disciplines' },
              { id: 'strength', label: 'Strength & Hypertrophy' },
              { id: 'mind-body', label: 'Yoga & Pilates' },
              { id: 'cardio', label: 'Cardio, HIIT & Combat' },
              { id: 'rehab', label: 'Joint Rehab & Mobility' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`filter-tab ${filter === tab.id ? 'active' : ''}`}
                style={{
                  cursor: 'pointer',
                  padding: '10px 18px',
                  borderRadius: '30px',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                }}
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                id={prog.id}
                className="theme-card"
                style={{
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '18px',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                <Link href={`/programs/${prog.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={prog.img}
                      alt={prog.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      background: 'var(--bg-surface)',
                      color: 'var(--brand-gold-text)',
                      padding: '5px 12px',
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
                      background: 'rgba(11, 39, 55, 0.92)',
                      color: '#ffffff',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <Flame size={12} color="#ffb703" /> {prog.burn}
                    </div>
                  </div>
                </Link>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <Link href={`/programs/${prog.id}`} style={{ textDecoration: 'none' }}>
                      <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px', fontWeight: 700 }}>
                        {prog.title}
                      </h3>
                    </Link>
                    <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '18px' }}>
                      {prog.desc}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '22px' }}>
                      {prog.benefits.map((b, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-body)' }}>
                          <CheckCircle2 size={15} color="var(--brand-gold)" style={{ flexShrink: 0 }} /> {b}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <Link
                      href={`/programs/${prog.id}`}
                      style={{
                        fontSize: '13.5px',
                        fontWeight: 700,
                        color: 'var(--brand-gold)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        textDecoration: 'none'
                      }}
                    >
                      Curriculum & Specs <ArrowRight size={15} />
                    </Link>
                    <a
                      href={`https://wa.me/919999448206?text=${encodeURIComponent(`Hi Fit4Steps, I would like to book a doorstep trial for the "${prog.title}" program.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#25d366',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '13px',
                        fontWeight: 600,
                        textDecoration: 'none'
                      }}
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

      {/* 4. DOORSTEP EQUIPMENT REASSURANCE */}
      <section className="section-alt" style={{ padding: '50px 0' }}>
        <div className="container" style={{ maxWidth: '860px', textAlign: 'center' }}>
          <div className="badge badge-navy" style={{ marginBottom: '12px' }}>
            <ShieldCheck size={14} /> The Fit4Steps Doorstep Standard
          </div>
          <h2 style={{ fontSize: '26px', color: 'var(--text-main)', fontWeight: 700, marginBottom: '14px' }}>
            All Sanitized Equipment Brought Directly to Your Home
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
            You do not need to invest in home gym equipment. Whether you choose Weight Training, Swiss Ball Stability, TRX, Kickboxing, or Mat Pilates, your personal coach arrives with sanitized gear calibrated to your goals.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '13.5px', fontWeight: 600, color: 'var(--text-main)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="var(--brand-gold)" /> Disinfected Prior to Every Session
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="var(--brand-gold)" /> Zero Space Damage or Marking
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="var(--brand-gold)" /> Full Movement Screen on Day 1
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
