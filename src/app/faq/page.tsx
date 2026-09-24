import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  HelpCircle,
  MessageCircle,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | Fit4Steps Personal Training',
  description: 'Find answers to common questions about in-home personal training, senior fitness, knee therapy, trial sessions, pricing, and trainer qualifications across Noida, Delhi & Gurugram.',
  keywords: [
    'fit4steps faq',
    'in-home personal training cost delhi',
    'how home fitness training works',
    'senior citizen workout questions noida',
    'personal trainer trial session gurugram'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/faq',
  },
};

export default function FAQPage() {
  const faqCategories = [
    {
      category: 'In-Home Training Logistics & Equipment',
      items: [
        {
          q: 'Do I need to buy expensive gym equipment before starting?',
          a: 'No, not at all! Fit4Steps trainers bring all essential portable functional equipment directly to your doorstep for every session. This includes sanitized resistance bands, micro-loops, ankle weights, Swiss stability balls, agility markers, yoga blocks, and stretching straps. If your residential society has an on-site gym, we can also train you there.'
        },
        {
          q: 'How much space is required in my home for workouts?',
          a: 'All you need is a clear 6x6 foot area in your living room, bedroom, or balcony. Our trainers adapt the workout to fit your available space comfortably without moving heavy furniture or creating disruptions.'
        },
        {
          q: 'What are your operating hours and session timings?',
          a: 'We offer sessions 7 days a week from 6:00 AM to 8:30 PM. You can choose a fixed recurring slot (e.g., Monday/Wednesday/Friday at 7:00 AM) or adjust timings as needed with prior notice.'
        }
      ]
    },
    {
      category: 'Senior Citizen Care & Medical Safety',
      items: [
        {
          q: 'Is it safe for someone in their 60s or 70s with arthritis to exercise?',
          a: 'Yes, absolutely. Inactivity actually accelerates cartilage thinning and joint stiffness. Our senior protocols are 100% gentle, non-impact, and non-weight bearing initially. We strengthen the supporting muscles (such as the VMO quadriceps) while lying or seated, protecting the joint while rebuilding natural shock absorption.'
        },
        {
          q: 'Can your trainers coordinate with my orthopedic doctor or physiotherapist?',
          a: 'Yes. Master Trainer Satheesan and our team routinely review MRI, X-ray, and clinical reports provided by our clients’ doctors. We align our movement prescriptions strictly within medical recommendations.'
        },
        {
          q: 'What if my elderly parent has a balance problem or fear of falling?',
          a: 'Every senior program begins with a balance and stability assessment. We use supported chair drills, tandem walking along stable furniture, and proprioception retraining to build ankle strength and remove the fear of tripping.'
        }
      ]
    },
    {
      category: 'Trainer Qualifications, Safety & Verification',
      items: [
        {
          q: 'Are your trainers background checked and police verified?',
          a: 'Yes. 100% of our coaches undergo complete identity verification, residential background checks, and formal police verification. We maintain strict safety and professionalism standards for entering private homes.'
        },
        {
          q: 'What certifications do your trainers hold?',
          a: 'Our trainers are certified by internationally recognized bodies including Gold’s Gym Fitness Institute, ACE (American Council on Exercise), ISSA, and K11. They undergo rigorous practical training in biomechanics and CPR/First Aid emergency response.'
        },
        {
          q: 'Can I request a certified female trainer?',
          a: 'Yes. We have a dedicated wing of certified female coaches available across Noida, South Delhi, and Gurugram for women, elderly mothers, and prenatal/postnatal clients.'
        },
        {
          q: 'What happens if my assigned trainer falls sick or goes on leave?',
          a: 'Unlike freelance marketplaces where you are left stranded, Fit4Steps provides a certified backup coach guarantee. A briefed replacement trainer can step in seamlessly, or your missed sessions are credited forward without penalty.'
        }
      ]
    },
    {
      category: 'Pricing, Packages & Trial Sessions',
      items: [
        {
          q: 'How does the initial trial session work?',
          a: 'The trial session is a comprehensive 45-to-60 minute doorstep appointment. Your trainer conducts a postural movement screening, assesses joint range-of-motion, discusses your health goals, and guides you through a gentle sample workout so you experience our teaching style firsthand.'
        },
        {
          q: 'What are your package pricing structures?',
          a: 'We offer flexible 1-month, 3-month, and 6-month plans depending on session frequency (typically 3 or 5 days per week). We also offer shared couple/partner packages that provide substantial savings. Contact our team on WhatsApp for an instant, transparent quote tailored to your location.'
        },
        {
          q: 'Can I pause my package if I travel for business or vacation?',
          a: 'Yes. We understand busy executive and travel schedules. You can pause your package for up to 30 days with advance notice, and your remaining sessions will be preserved.'
        }
      ]
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqCategories.flatMap(cat =>
      cat.items.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a
        }
      }))
    )
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO */}
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <HelpCircle size={14} /> Clear, Honest Answers
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 50px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '20px' }}>
            Frequently Asked <span className="text-gold">Questions</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Everything you need to know about our in-home training logistics, senior joint safety, pricing, and certified coaching faculty in Noida, South Delhi, and Gurugram.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20have%20a%20question%20about%20your%20in-home%20training%20sessions."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Ask Us on WhatsApp
            </a>
            <a href="tel:+919999448206" className="btn btn-outline">
              <Phone size={18} /> Call +91 99994 48206
            </a>
          </div>
        </div>
      </section>

      {/* 2. FAQ CATEGORIES WITH NATIVE DETAILS ACCORDIONS */}
      <section className="section-surface">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {faqCategories.map((cat, catIdx) => (
              <div key={catIdx}>
                <h2 style={{
                  fontSize: '22px',
                  color: 'var(--text-main)',
                  marginBottom: '20px',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--primary-gold)'
                  }}></span>
                  {cat.category}
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {cat.items.map((item, itemIdx) => (
                    <details
                      key={itemIdx}
                      name={`faq-group-${catIdx}`}
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '16px',
                        padding: '18px 24px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <summary style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: 'var(--text-main)',
                        listStyle: 'none',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '16px',
                        outline: 'none'
                      }}>
                        <span>{item.q}</span>
                        <ChevronDown size={18} color="var(--primary-gold)" style={{ flexShrink: 0 }} />
                      </summary>
                      <p style={{
                        marginTop: '14px',
                        paddingTop: '14px',
                        borderTop: '1px solid var(--border-color)',
                        color: 'var(--text-body)',
                        fontSize: '15px',
                        lineHeight: 1.7,
                        margin: '14px 0 0'
                      }}>
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="section-padding" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
            Still Have Questions?
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
            Speak directly with Master Trainer Satheesan to discuss your requirements, medical history, and trial booking.
          </p>
          <a
            href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20have%20a%20specific%20question%20before%20booking."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> Chat with Master Coach
          </a>
        </div>
      </section>
    </div>
  );
}
