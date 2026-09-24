'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Star,
  CheckCircle2,
  ArrowRight,
  Heart,
  Activity,
  Award,
  Users,
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  Clock,
  Dumbbell,
  HelpCircle,
  Stethoscope
} from 'lucide-react';
import AssessmentWidget from '@/components/AssessmentWidget';

export default function HomePage() {
  const [activeServiceFilter, setActiveServiceFilter] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      id: 'senior-restoration',
      category: 'senior',
      title: 'Senior Citizen Training & Joint Restoration',
      tag: 'Flagship Program',
      description: 'Specialized 1-on-1 physical rehabilitation, knee pain therapy, balance training, and fall prevention for adults aged 50+ in the comfort of home.',
      image: '/assets/image/senior-joint-therapy.jpg',
      link: '/senior-fitness',
      benefits: ['Knee & joint pain decompression', 'Fall prevention & balance training', 'Preserve muscle & bone density']
    },
    {
      id: 'personal-home',
      category: 'personal',
      title: '1-on-1 Personal Training at Home',
      tag: 'Most Popular',
      description: 'Customized workouts delivered straight to your living room. Dedicated certified coach brings all necessary resistance gear.',
      image: '/assets/image/h-ban-img.webp',
      link: '/services#personal-training',
      benefits: ['Zero gym travel or waiting', '100% focused attention', 'Customized nutrition & tracking']
    },
    {
      id: 'female-trainers',
      category: 'personal',
      title: 'Certified Female Fitness Trainers',
      tag: 'Dedicated Care',
      description: 'Verified, elite female trainers offering supportive, private in-home workouts tailored for women, homemakers, and mothers.',
      image: '/assets/image/h-s2-servi-card-img-2.webp',
      link: '/services#female-trainers',
      benefits: ['Women-centric strength & tone', 'PCOS/PCOD & hormonal balance', 'Comfortable home environment']
    },
    {
      id: 'couple-training',
      category: 'personal',
      title: 'Couple & Partner Fitness',
      tag: 'Shared Motivation',
      description: 'Stay active together with partner workouts that combine healthy competition, accountability, and customized routines for both.',
      image: '/assets/image/h-s2-servi-card-img-5.webp',
      link: '/services#couple-training',
      benefits: ['Dual personalized pacing', 'Fun synchronized exercises', 'Convenient shared home time']
    },
    {
      id: 'kids-fitness',
      category: 'specialized',
      title: 'Functional Training for Kids',
      tag: 'Youth Development',
      description: 'Gamified agility, posture correction, and screen-time antidote designed to build coordination and lifelong athletic confidence in ages 6-16.',
      image: '/assets/image/h-s2-servi-card-img-4.webp',
      link: '/services#kids-fitness',
      benefits: ['Combats sedentary screen habits', 'Corrects poor school bag posture', 'Builds natural athletic stamina']
    },
    {
      id: 'prenatal-yoga',
      category: 'specialized',
      title: 'Prenatal & Postnatal Care',
      tag: 'Gentle Therapy',
      description: 'Doctor-guided gentle prenatal stretches and postpartum core restoration to maintain pelvic strength and easy delivery preparation.',
      image: '/assets/image/h-s2-servi-card-img-2.webp',
      link: '/services#prenatal-yoga',
      benefits: ['Pelvic floor & lower back relief', 'Guided safe breathing exercises', 'Postpartum core reconnection']
    },
    {
      id: 'corporate-wellness',
      category: 'corporate',
      title: 'Corporate Yoga & Ergonomics',
      tag: 'Workplace Health',
      description: 'Desk posture correction, group yoga, and stress decompression sessions designed for high-stress corporate teams in Delhi NCR.',
      image: '/assets/image/h-s2-servi-card-img-1.webp',
      link: '/services#corporate-wellness',
      benefits: ['Relieves desk slouch & cervical pain', 'Boosts focus & workplace morale', 'On-site or virtual delivery']
    },
  ];

  const filteredServices = activeServiceFilter === 'all'
    ? services
    : services.filter(s => s.category === activeServiceFilter);

  const programs = [
    { title: 'Weight & Strength Training', desc: 'Progressive overload using dumbbells, kettlebells & bands to build functional lean muscle.', img: '/assets/image/programme-img-1.webp', level: 'Custom Pace' },
    { title: 'Yoga & Power Yoga', desc: 'Traditional asanas combined with modern biomechanics for spinal mobility and breath flow.', img: '/assets/image/programme-img-2.webp', level: 'All Levels' },
    { title: 'Aerobics & HIIT', desc: 'Cardiovascular conditioning to improve lung capacity, heart health and burn stubborn fat.', img: '/assets/image/programme-img-3.webp', level: 'Moderate to High' },
    { title: 'Stretching & Fascial Mobility', desc: 'Assisted stretching protocols to eliminate chronic joint stiffness and muscle knots.', img: '/assets/image/h-s3-img.webp', level: 'Restorative' },
  ];

  const testimonials = [
    {
      name: 'Padmaja Ruparel',
      role: 'President, Indian Angel Network (IAN)',
      quote: 'It has been a life changing experience for me with Fit4Steps. I suffer from weak knees and thought I was headed for surgery, but my pain is now 20% of what it was! I can climb, run down stairs, and walk well. It made a huge difference in my lifestyle.',
      image: '/assets/image/ftr-testiminial-padmaja.webp',
      highlight: 'Avoided Knee Surgery • 80% Pain Reduction'
    },
    {
      name: 'Rajeev Batra',
      role: 'CIO, Times Group',
      quote: 'Satheesan is a fitness instructor of the highest caliber. I have not found any instructor with such holistic knowledge and dedication. In my six years of association with him, there has never been any injury during sessions, which speaks volumes of his technical precision.',
      image: '/assets/image/ftr-testiminial-rajeev.webp',
      highlight: '6+ Years Client • 100% Injury-Free'
    },
    {
      name: 'Shailen Ruparel',
      role: 'Director of Sales & Marketing, Fluor Corporation',
      quote: 'My trainer understands the human body exceptionally well. He cured me of a constant pain in my knees and ankles with his stretching exercises without medication, something my ortho warned would require surgery. In my early 60s, I now feel stronger than ever.',
      image: '/assets/image/ftr-testiminial-shailen.webp',
      highlight: 'Cured Chronic Knee Pain in 60s'
    },
    {
      name: 'Shruti Dvivedi Sodhi',
      role: 'Partner, Khaitan Legal Associates',
      quote: 'I started personal training in 2010 with Satheesan while in the midst of critical medical treatment. From that day to now, the only thing that has not failed to keep me fit are my sessions with him. His ability to mold each session is incomparable.',
      image: '/assets/image/ftr-testiminial-shruthi.webp',
      highlight: '14+ Years of Ongoing Training'
    },
  ];

  const faqs = [
    {
      q: 'How does in-home personal training work with Fit4Steps?',
      a: 'A certified fitness coach or joint rehabilitation specialist visits your home in Noida, Delhi, or Gurugram at your scheduled time. Your trainer brings all required sanitized equipment (resistance bands, balance pads, weights, yoga blocks). You just need a 6x6 ft open floor space in your living room or balcony.'
    },
    {
      q: 'Can elderly parents with severe knee pain or arthritis train safely?',
      a: 'Yes, this is our core specialization. Over 60% of our clients are senior citizens (aged 50 to 80+). Master Trainer Satheesan and our rehab coaches use non-weight-bearing joint decompression, assisted stretching, and gentle quadriceps strengthening. We coordinate with your orthopedic doctor’s guidelines to avoid knee surgery and restore natural walking mobility.'
    },
    {
      q: 'Do I need to buy any expensive gym machines or equipment?',
      a: 'Not at all. Fit4Steps believes in functional fitness using bodyweight, resistance bands, mobility tools, and light weights that our trainers carry. This ensures workouts are natural, safe on joints, and sustainable anywhere.'
    },
    {
      q: 'Are female trainers available for in-home sessions?',
      a: 'Yes! We have an elite roster of certified, thoroughly background-checked female fitness instructors specializing in women’s strength, prenatal/postnatal yoga, weight management, and elderly lady wellness.'
    },
    {
      q: 'Which locations in Delhi NCR do you serve?',
      a: 'Our trainers provide doorstep sessions across Noida (Headquarters in Jaypee Wishtown, Expressway, Sectors 1–168), South Delhi (Greater Kailash, Vasant Kunj, Panchsheel, Defence Colony), and Gurugram (DLF Phase 1–5, Golf Course Road, Sohna Road). For clients outside NCR or traveling abroad, we offer 1-on-1 live interactive online training.'
    },
    {
      q: 'How do I start with a consultation or trial session?',
      a: 'You can tap the "Book Free Assessment" button or directly message Master Trainer Satheesan on WhatsApp at +91 97787 76136. We will understand your health history, assign the right trainer, and schedule a convenient doorstep assessment.'
    },
  ];

  // FAQ Schema JSON-LD for rich Google AEO snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      {/* Inject FAQ Schema for Rich Search Snippets and AI Overviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO SECTION (Clean, Welcoming, Medical-Grade Concierge) */}
      <section className="hero-clean">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}>
            {/* Left Content */}
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '18px' }}>
                <span className="badge-pulse-dot" />
                <span>Certified In-Home Personal Training • Delhi NCR</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(28px, 6vw, 54px)',
                fontWeight: 800,
                color: 'var(--text-main)',
                lineHeight: 1.16,
                marginBottom: '18px',
                letterSpacing: '-0.02em',
              }}>
                Your Sustainable <br />
                <span className="text-gold">In-Home Fitness</span> & <br />
                <span className="text-navy">Joint Health Partner</span>
              </h1>

              <p style={{
                fontSize: 'clamp(14.5px, 3.8vw, 17px)',
                color: 'var(--text-body)',
                lineHeight: 1.65,
                marginBottom: '26px',
                maxWidth: '560px',
              }}>
                Personalized 1-on-1 workouts, non-invasive knee pain restoration, and mobility coaching at your doorstep in Noida, Delhi & Gurugram. Experienced trainers, flexible schedules, and verified life-changing outcomes.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
                <Link
                  href="/contact"
                  className="btn btn-primary hero-btn"
                  style={{ padding: '12px 22px', fontSize: '14.5px' }}
                >
                  Book Free Consultation <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/919778776136?text=Hi%20Satheesan,%20I%20would%20like%20to%20book%20an%20in-home%20fitness%20and%20joint%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp hero-btn"
                  style={{ padding: '12px 20px', fontSize: '14.5px' }}
                >
                  <MessageCircle size={17} /> Chat with Satheesan
                </a>
              </div>

              {/* Social Proof Strip */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                flexWrap: 'wrap',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-subtle)',
              }}>
                {/* Client Avatars */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src="/assets/image/ftr-testiminial-padmaja.webp"
                    alt="Padmaja Ruparel - President Indian Angel Network"
                    style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid var(--bg-surface)', objectFit: 'cover' }}
                  />
                  <img
                    src="/assets/image/ftr-testiminial-rajeev.webp"
                    alt="Rajeev Batra - CIO Times Group"
                    style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid var(--bg-surface)', marginLeft: '-10px', objectFit: 'cover' }}
                  />
                  <img
                    src="/assets/image/ftr-testiminial-shailen.webp"
                    alt="Shailen Ruparel - Fluor Corporation"
                    style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid var(--bg-surface)', marginLeft: '-10px', objectFit: 'cover' }}
                  />
                  <img
                    src="/assets/image/ftr-testiminial-mukundan.webp"
                    alt="Mukundan Chakrapani"
                    style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid var(--bg-surface)', marginLeft: '-10px', objectFit: 'cover' }}
                  />
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '22px', fontWeight: 800, color: 'var(--brand-gold)' }}>7,040+</span>
                    <span style={{ display: 'flex', gap: '2px', color: '#f59e0b' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#f59e0b" />
                      ))}
                    </span>
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    Transformations across Noida, Delhi & Gurugram
                  </div>
                </div>

                <div className="badge badge-cyan" style={{ fontSize: '12px' }}>
                  <Stethoscope size={13} /> Doctor & Ortho Recommended
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div>
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: 'var(--card-shadow)',
                border: '1px solid var(--border-medium)',
              }}>
                <img
                  src="/assets/image/hero-senior-trainer.jpg"
                  alt="Fit4Steps In-Home Personal Fitness Trainer guiding senior client in an upscale living room"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    aspectRatio: '16/11',
                    objectFit: 'cover',
                  }}
                />
                
                {/* Floating overlay badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  background: 'var(--bg-surface)',
                  padding: '14px 18px',
                  borderRadius: '14px',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      background: 'var(--brand-gold-soft)',
                      color: 'var(--brand-gold)',
                      padding: '8px',
                      borderRadius: '10px',
                    }}>
                      <ShieldCheck size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-main)' }}>
                        100% In-Home Convenience
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                        Trainer brings all resistance equipment to your doorstep
                      </div>
                    </div>
                  </div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: 800,
                    color: 'var(--brand-gold)',
                    textAlign: 'right',
                  }}>
                    98%
                    <div style={{ fontSize: '10.5px', color: 'var(--text-muted)', fontWeight: 500 }}>Relief Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AEO (ANSWER ENGINE OPTIMIZATION) DIRECT KNOWLEDGE CAPSULE */}
      <section className="section-alt" style={{ padding: '48px 0' }}>
        <div className="container">
          <div className="aeo-capsule" style={{ margin: 0 }}>
            <div className="aeo-capsule-badge">
              <CheckCircle2 size={13} /> Direct Answer • Delhi NCR In-Home Fitness Fact Sheet
            </div>
            <h2 className="aeo-capsule-question">
              Why choose Fit4Steps in-home personal training over a commercial gym?
            </h2>
            <div className="aeo-capsule-answer">
              <p style={{ marginBottom: '10px' }}>
                <strong>Direct Answer:</strong> Fit4Steps delivers certified personal trainers and joint rehabilitation specialists directly to residences across Noida, South Delhi, and Gurugram. Unlike crowded commercial gyms, in-home training eliminates traffic commute time, provides 100% private unhurried attention, and focuses heavily on safe functional movement, posture alignment, and non-surgical knee joint decompression.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginTop: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={16} color="var(--brand-gold)" /> <strong>Headquarters:</strong> Jaypee Wishtown, Noida
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={16} color="var(--brand-gold)" /> <strong>Track Record:</strong> 15+ Yrs & 100% Injury-Free
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={16} color="var(--brand-gold)" /> <strong>Safety:</strong> Police-Verified Male & Female Coaches
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LEAD SERVICE PILLAR: SENIOR CITIZEN TRAINING & JOINT RESTORATION */}
      <section className="section-page">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold" style={{ marginBottom: '12px' }}>
              <Heart size={14} /> Our Lead Specialist Pillar
            </div>
            <h2>
              Senior Citizen Training & <span className="text-gold">Joint Restoration</span>
            </h2>
            <p>
              Fit4Steps is Delhi NCR’s recognized authority in non-invasive joint restoration, knee pain relief, and gentle physical strengthening for seniors aged 50 to 80+.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center',
            marginBottom: '44px',
          }}>
            {/* Visual with realistic human photo */}
            <div>
              <div style={{
                position: 'relative',
                borderRadius: '18px',
                overflow: 'hidden',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--card-shadow)',
              }}>
                <img
                  src="/assets/image/senior-joint-therapy.jpg"
                  alt="Fit4Steps Specialist guiding knee pain therapy and mobility for elderly client"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'var(--bg-surface)',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '12.5px',
                  color: 'var(--brand-navy)',
                  fontWeight: 700,
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  Non-Surgical Joint Care
                </div>
              </div>
            </div>

            {/* 4 Core Pillars Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                {
                  title: '1. Personal Fitness Coaching for 50+',
                  desc: 'Gentle, structured workouts that respect individual stamina, cardiac health, and mobility limits without dangerous strain.'
                },
                {
                  title: '2. Joint Restoration & Knee Pain Therapy',
                  desc: 'Non-invasive assisted stretching and quadricep strengthening to decompress knee cartilage, avoiding surgical replacements.'
                },
                {
                  title: '3. Strength Training for Seniors',
                  desc: 'Combats sarcopenia (muscle loss) and boosts bone density with controlled resistance bands and bodyweight movements.'
                },
                {
                  title: '4. Mobility, Balance & Fall Prevention',
                  desc: 'Proprioception and core balance exercises designed to prevent accidental falls and give seniors fearless walking confidence.'
                },
              ].map((pillar, idx) => (
                <div
                  key={idx}
                  className="theme-subcard"
                  style={{
                    padding: '18px 22px',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ fontSize: '16.5px', fontWeight: 700, color: 'var(--brand-gold)', marginBottom: '5px' }}>
                    {pillar.title}
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6 }}>
                    {pillar.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Proof Quote */}
          <div className="theme-card-highlight" style={{
            padding: '28px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}>
            <div style={{ maxWidth: '760px' }}>
              <div style={{ fontStyle: 'italic', fontSize: '15.5px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '10px' }}>
                "My trainer understands the human body well and cured me of a constant pain in my knees and ankle with his stretching exercises without medication, something that my ortho had warned could mean a knee replacement surgery."
              </div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--brand-gold)' }}>
                Shailen Ruparel — Director of Sales & Marketing, Fluor Corporation (Client in early 60s)
              </div>
            </div>

            <Link
              href="/senior-fitness"
              className="btn btn-primary"
              style={{ padding: '12px 24px', fontSize: '14px' }}
            >
              Explore Senior Fitness Hub <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE 3-STEP ASSESSMENT WIDGET */}
      <section className="section-surface">
        <div className="container">
          <AssessmentWidget />
        </div>
      </section>

      {/* 5. COMPLETE IN-HOME SERVICES SPECTRUM */}
      <section className="section-page">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold" style={{ marginBottom: '12px' }}>
              Tailored In-Home Programs
            </div>
            <h2>
              Explore Our Comprehensive <span className="text-gold">Services</span>
            </h2>
            <p>
              Every service is delivered 1-on-1 with customized progression, medical history awareness, and dedicated trainer attention.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '44px',
          }}>
            {[
              { id: 'all', label: 'All Services' },
              { id: 'senior', label: 'Senior & Joint Care' },
              { id: 'personal', label: 'Personal & In-Home' },
              { id: 'specialized', label: 'Specialized & Yoga' },
              { id: 'corporate', label: 'Corporate Wellness' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveServiceFilter(f.id)}
                className={`filter-tab ${activeServiceFilter === f.id ? 'active' : ''}`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}>
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="theme-card"
                style={{
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '220px' }}>
                  <img
                    src={service.image}
                    alt={`${service.title} - Fit4Steps in-home personal training`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'var(--bg-surface)',
                    color: 'var(--brand-gold-text)',
                    padding: '4px 12px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: 700,
                    border: '1px solid var(--border-subtle)',
                    boxShadow: 'var(--shadow-sm)',
                  }}>
                    {service.tag}
                  </div>
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '19px', color: 'var(--text-main)', marginBottom: '10px' }}>
                      {service.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '18px' }}>
                      {service.description}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '22px' }}>
                      {service.benefits.map((b, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-body)' }}>
                          <CheckCircle2 size={15} color="var(--brand-gold)" /> {b}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
                    <Link
                      href={service.link}
                      style={{ fontSize: '14px', fontWeight: 700, color: 'var(--brand-gold)', display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                      Learn More <ArrowRight size={15} />
                    </Link>
                    <Link
                      href="/contact"
                      className="btn btn-secondary"
                      style={{ padding: '6px 14px', fontSize: '12.5px' }}
                    >
                      Book Session
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '44px' }}>
            <Link href="/services" className="btn btn-primary" style={{ padding: '13px 32px' }}>
              View All 10 Specialized Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. MEET MASTER TRAINER SATHEESAN & TEAM */}
      <section id="trainers" className="section-surface">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}>
            {/* Portrait with realistic human photo */}
            <div>
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--card-shadow)',
              }}>
                <img
                  src="/assets/image/satheesan-head-trainer.jpg"
                  alt="Satheesan - Master Trainer & Founder at Fit4Steps"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  background: 'var(--bg-surface)',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-md)',
                }}>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)' }}>
                    Satheesan
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--brand-gold)', fontWeight: 600 }}>
                    Founder & Head Master Trainer • 15+ Years Clinical Practice
                  </div>
                </div>
              </div>
            </div>

            {/* Credibility & E-E-A-T details */}
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
                <Award size={14} /> Founder Spotlight
              </div>
              <h2 style={{ fontSize: '36px', color: 'var(--text-main)', marginBottom: '18px' }}>
                Guided by <span className="text-gold">Satheesan</span> & Certified Master Coaches
              </h2>
              <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.7, marginBottom: '20px' }}>
                For over 15 years, Satheesan has guided corporate leaders, doctors, and senior citizens across Noida, Delhi, and Gurugram toward lifelong vitality. His unique methodology merges traditional assisted stretching, Ayurvedic posture knowledge, and modern orthopedic biomechanics.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '14px',
                marginBottom: '28px',
              }}>
                <div className="theme-subcard">
                  <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--brand-gold)' }}>15+ Years</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Clinical Practice</div>
                </div>
                <div className="theme-subcard">
                  <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--brand-navy)' }}>100%</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Injury-Free Record</div>
                </div>
                <div className="theme-subcard">
                  <div style={{ fontSize: '24px', fontWeight: 800, color: '#16a34a' }}>Police-Verified</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Background Checked</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                <a
                  href="https://wa.me/919778776136?text=Hi%20Satheesan,%20I%20would%20like%20to%20discuss%20a%20training%20plan%20directly%20with%20you"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={18} /> Chat Directly with Satheesan
                </a>
                <Link href="/about" className="btn btn-secondary">
                  Read Philosophy & Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ESSENCE OF OUR PROGRAMS */}
      <section className="section-page">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-cyan" style={{ marginBottom: '12px' }}>
              Structured Training Disciplines
            </div>
            <h2>
              The Essence of <span className="text-gold">Our Programs</span>
            </h2>
            <p>
              We bring world-class training disciplines to your living room. No gym crowds, no commute—just focused athletic progression.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '44px',
          }}>
            {programs.map((prog, idx) => (
              <div
                key={idx}
                className="theme-card"
                style={{
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ height: '180px', position: 'relative' }}>
                  <img
                    src={prog.img}
                    alt={`${prog.title} - Fit4Steps discipline`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'var(--bg-surface)',
                    color: 'var(--brand-gold-text)',
                    padding: '3px 10px',
                    borderRadius: '8px',
                    fontSize: '11px',
                    fontWeight: 700,
                    border: '1px solid var(--border-subtle)',
                  }}>
                    {prog.level}
                  </div>
                </div>

                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', color: 'var(--text-main)', marginBottom: '8px' }}>
                      {prog.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '16px' }}>
                      {prog.desc}
                    </p>
                  </div>
                  <Link
                    href="/programs"
                    style={{ fontSize: '13px', fontWeight: 700, color: 'var(--brand-gold)', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/programs" className="btn btn-secondary">
              View All 12 Training Programs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. VERIFIED EXECUTIVE SUCCESS STORIES & TESTIMONIALS */}
      <section className="section-alt">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold" style={{ marginBottom: '12px' }}>
              <Star size={14} fill="var(--brand-gold)" /> Authentic Social Proof
            </div>
            <h2>
              Executive Success Stories & <span className="text-gold">Recoveries</span>
            </h2>
            <p>
              Read firsthand accounts from prominent leaders, senior corporate executives, and families who rely on Satheesan and Fit4Steps.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}>
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="theme-card"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                }}
              >
                <div>
                  <div style={{
                    display: 'inline-block',
                    background: 'var(--brand-gold-soft)',
                    color: 'var(--brand-gold-text)',
                    border: '1px solid var(--brand-gold-border)',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '6px',
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                  }}>
                    {t.highlight}
                  </div>

                  <p style={{
                    fontSize: '14.5px',
                    color: 'var(--text-body)',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    marginBottom: '20px',
                  }}>
                    "{t.quote}"
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '16px',
                }}>
                  <img
                    src={t.image}
                    alt={t.name}
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-main)' }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/success-stories" className="btn btn-secondary" style={{ padding: '13px 28px' }}>
              Read All Verified Testimonials <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. DELHI NCR LOCATION HUBS */}
      <section className="section-surface">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold" style={{ marginBottom: '12px' }}>
              <MapPin size={14} /> Doorstep Service Coverage
            </div>
            <h2>
              Doorstep Personal Training Across <span className="text-gold">Delhi NCR</span>
            </h2>
            <p>
              Dedicated trainers stationed locally to ensure punctual, unhurried 1-on-1 sessions at your residence.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {/* Noida Hub */}
            <div className="theme-card" style={{ padding: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--brand-gold)', fontWeight: 700, fontSize: '20px', marginBottom: '10px' }}>
                <MapPin size={22} /> Noida (Headquarters)
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '14px', fontWeight: 600 }}>
                H155, KP1, Jaypee Wishtown, Sector 133
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: '20px' }}>
                Complete coverage along Noida-Greater Noida Expressway, Jaypee Wishtown, ATS Village, Sector 50, 78, 128, 137, and all residential sectors.
              </p>
              <Link href="/locations#noida" style={{ fontSize: '14px', color: 'var(--brand-gold)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                Explore Noida Training <ArrowRight size={15} />
              </Link>
            </div>

            {/* Delhi Hub */}
            <div className="theme-card" style={{ padding: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--brand-navy)', fontWeight: 700, fontSize: '20px', marginBottom: '10px' }}>
                <MapPin size={22} /> South Delhi
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '14px', fontWeight: 600 }}>
                Greater Kailash, Vasant Kunj & Environs
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: '20px' }}>
                Serving Greater Kailash (GK 1 & 2), Vasant Kunj, Panchsheel Park, Defence Colony, Hauz Khas, Gulmohar Park, and New Friends Colony.
              </p>
              <Link href="/locations#delhi" style={{ fontSize: '14px', color: 'var(--brand-navy)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                Explore Delhi Training <ArrowRight size={15} />
              </Link>
            </div>

            {/* Gurugram Hub */}
            <div className="theme-card" style={{ padding: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#16a34a', fontWeight: 700, fontSize: '20px', marginBottom: '10px' }}>
                <MapPin size={22} /> Gurugram
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '14px', fontWeight: 600 }}>
                DLF, Golf Course Road & Sohna Road
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: '20px' }}>
                Doorstep trainers dispatched to DLF Phase 1–5, Golf Course Road, Golf Course Ext, Nirvana Country, Sohna Road, and Sector 56/57.
              </p>
              <Link href="/locations#gurugram" style={{ fontSize: '14px', color: '#16a34a', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                Explore Gurugram Training <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section className="section-page">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="section-header">
            <div className="badge badge-gold" style={{ marginBottom: '12px' }}>
              Got Questions?
            </div>
            <h2>Frequently Asked <span className="text-gold">Questions</span></h2>
            <p>
              Everything you need to know about our in-home sessions, trainer vetting, senior knee therapy, and booking.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="theme-card"
                  style={{
                    overflow: 'hidden',
                    borderColor: isOpen ? 'var(--brand-gold)' : 'var(--card-border)',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      color: isOpen ? 'var(--brand-gold)' : 'var(--text-main)',
                      fontSize: '16.5px',
                      fontWeight: 600,
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} color="var(--brand-gold)" /> : <ChevronDown size={20} color="var(--text-muted)" />}
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 24px 22px 24px',
                      fontSize: '14.5px',
                      color: 'var(--text-body)',
                      lineHeight: 1.7,
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '16px',
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. FINAL CALL TO ACTION */}
      <section style={{
        padding: '76px 0',
        backgroundColor: 'var(--brand-navy)',
        color: '#ffffff',
        textAlign: 'center',
        position: 'relative',
      }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            Doorstep Consultation
          </div>
          <h2 style={{ fontSize: '36px', color: '#ffffff', marginBottom: '18px' }}>
            Ready to Reclaim Your Energy & Pain-Free Joints?
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '16.5px', lineHeight: 1.7, marginBottom: '32px' }}>
            Schedule a complimentary in-home assessment. We evaluate your mobility, joint mechanics, and design a customized roadmap tailored for your life.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <Link
              href="/contact"
              className="btn btn-gold"
              style={{ padding: '15px 34px', fontSize: '15.5px' }}
            >
              Book In-Home Consultation <ArrowRight size={17} />
            </Link>
            <a
              href="https://wa.me/919778776136?text=Hi%20Satheesan,%20I%20am%20ready%20to%20schedule%20my%20in-home%20fitness%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '15px 28px', fontSize: '15.5px' }}
            >
              <MessageCircle size={20} /> Chat on WhatsApp (+91 97787 76136)
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
