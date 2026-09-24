import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  HelpCircle,
  MessageCircle,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';
import FAQAccordionClient, { FAQCategory, FAQItem } from '@/components/FAQAccordionClient';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | Fit4Steps Personal Training',
  description:
    'Find answers to common questions about in-home personal training, senior fitness, knee therapy, trial sessions, pricing, and trainer qualifications across Noida, Delhi & Gurugram.',
  keywords: [
    'fit4steps faq',
    'in-home personal training cost delhi',
    'how home fitness training works',
    'senior citizen workout questions noida',
    'personal trainer trial session gurugram',
    'female fitness trainer at home delhi',
    'knee pain exercises for elderly parents'
  ],
  alternates: {
    canonical: 'https://fit4steps.com/faq',
  },
};

const categories: FAQCategory[] = [
  {
    id: 'logistics',
    label: 'Logistics & Space',
    iconName: 'home',
    description: 'Doorstep portable setup, minimal space requirements, and flexible session schedules.'
  },
  {
    id: 'senior-care',
    label: 'Senior Care & Safety',
    iconName: 'heart',
    description: 'Gentle, doctor-aligned rehabilitation for arthritis, osteoporosis, and fall prevention.'
  },
  {
    id: 'trainers',
    label: 'Trainer Verification',
    iconName: 'shield',
    description: '100% background verification, certified female trainers, and backup coach guarantee.'
  },
  {
    id: 'pricing',
    label: 'Pricing & Trials',
    iconName: 'pricing',
    description: 'Transparent pricing, 45-min in-home trial screenings, and vacation pause options.'
  },
  {
    id: 'coverage',
    label: 'NCR Coverage',
    iconName: 'map',
    description: 'Dedicated trainer clusters stationed across Noida, South Delhi, and Gurugram.'
  }
];

const faqs: FAQItem[] = [
  // 1. LOGISTICS & SPACE
  {
    id: 'equipment-needed',
    category: 'logistics',
    badge: 'Equipment Provided',
    q: 'Do I need to buy expensive gym equipment before starting?',
    a: 'No, not at all! Fit4Steps trainers arrive with all essential portable functional equipment directly to your doorstep for every session. This includes sanitized resistance bands, mini-loops, light dumbbells, ankle weights, Swiss stability balls, agility markers, yoga blocks, and stretching straps. If your condominium or residential society has an on-site gym, we can also train you there.'
  },
  {
    id: 'space-required',
    category: 'logistics',
    badge: '6x6 Ft Area',
    q: 'How much space is required in my home for workouts?',
    a: 'All you need is a clear 6x6 foot area in your living room, bedroom, or balcony. Our trainers adapt the workout to fit your available space comfortably without moving heavy furniture or creating disruptions.'
  },
  {
    id: 'operating-hours',
    category: 'logistics',
    badge: '6 AM - 8:30 PM',
    q: 'What are your operating hours and session timings?',
    a: 'We offer sessions 7 days a week from 6:00 AM to 8:30 PM. You can choose a fixed recurring slot (e.g., Monday/Wednesday/Friday at 7:00 AM) or adjust timings as needed with prior notice to fit executive and family routines.'
  },
  {
    id: 'condo-gym-training',
    category: 'logistics',
    badge: 'Clubhouse Training',
    q: 'Can our trainer coach us in our residential society clubhouse or apartment gym?',
    a: 'Yes, absolutely. Our coaches routinely train clients in private condominium gyms (such as Jaypee Greens, ATS, DLF, and Supertech). We optimize your routine using your clubhouse machines combined with our proprietary functional biomechanics protocols.'
  },

  // 2. SENIOR CITIZEN CARE & SAFETY
  {
    id: 'senior-arthritis-safety',
    category: 'senior-care',
    badge: 'Doctor Approved',
    q: 'Is it safe for someone in their 60s or 70s with arthritis to exercise?',
    a: 'Yes, absolutely. Inactivity actually accelerates cartilage thinning and joint stiffness. Our senior protocols are 100% gentle, non-impact, and non-weight bearing initially. We strengthen the supporting shock-absorbing muscles (such as the VMO quadriceps) while lying down or seated, protecting the joint while rebuilding natural synovial lubrication.'
  },
  {
    id: 'doctor-coordination',
    category: 'senior-care',
    badge: 'Clinical Collaboration',
    q: 'Can your trainers coordinate with my orthopedic doctor or physiotherapist?',
    a: 'Yes. Master Trainer Satheesan and our team routinely review MRI, X-ray, and clinical reports provided by our clients’ orthopedic doctors. We align our movement prescriptions strictly within medical recommendations.'
  },
  {
    id: 'senior-balance-fall-risk',
    category: 'senior-care',
    badge: 'Fall Prevention',
    q: 'What if my elderly parent has a balance problem or fear of falling?',
    a: 'Every senior program begins with a balance and stability assessment. We use supported chair drills, tandem walking along stable furniture, and proprioception retraining to build ankle strength and remove the fear of tripping.'
  },
  {
    id: 'senior-vitals-monitoring',
    category: 'senior-care',
    badge: 'Safety Checks',
    q: 'How do you monitor vitals (blood pressure, heart rate) during senior sessions?',
    a: 'Our trainers carry digital pulse oximeters and conduct pre-session and post-session check-ins. If blood pressure or resting heart rate is elevated due to weather or missed medication, the session is dialed back to gentle breathwork and restorative joint circulation.'
  },

  // 3. TRAINER QUALIFICATIONS & VERIFICATION
  {
    id: 'police-verification',
    category: 'trainers',
    badge: '100% Verified',
    q: 'Are your trainers background checked and police verified?',
    a: 'Yes. 100% of our coaches undergo complete identity verification, residential background checks, and formal police verification. We maintain strict safety and professionalism standards for entering private family homes.'
  },
  {
    id: 'trainer-certifications',
    category: 'trainers',
    badge: 'ACE & Gold\'s Certified',
    q: 'What certifications do your trainers hold?',
    a: 'Our trainers are certified by internationally recognized bodies including Gold’s Gym Fitness Institute, ACE (American Council on Exercise), ISSA, and K11. They undergo rigorous internal mentoring under Master Coach Satheesan in senior biomechanics and CPR/First Aid emergency response.'
  },
  {
    id: 'female-trainers',
    category: 'trainers',
    badge: 'Female Faculty',
    q: 'Can I request a certified female trainer?',
    a: 'Yes. We have a dedicated wing of certified female coaches available across Noida, South Delhi, and Gurugram for women, elderly mothers, and prenatal/postnatal clients.'
  },
  {
    id: 'backup-trainer-guarantee',
    category: 'trainers',
    badge: 'Backup Guarantee',
    q: 'What happens if my assigned trainer falls sick or goes on leave?',
    a: 'Unlike freelance marketplaces where you are left stranded, Fit4Steps provides a certified backup coach guarantee. A briefed replacement trainer can step in seamlessly, or your missed sessions are credited forward without penalty.'
  },

  // 4. PRICING, PACKAGES & TRIALS
  {
    id: 'trial-session-process',
    category: 'pricing',
    badge: 'Doorstep Assessment',
    q: 'How does the initial trial session work?',
    a: 'The trial session is a comprehensive 45-to-60 minute doorstep appointment. Your trainer conducts a postural movement screening, assesses joint range-of-motion, discusses your health history, and guides you through a gentle sample workout so you experience our teaching style firsthand.'
  },
  {
    id: 'pricing-structure',
    category: 'pricing',
    badge: 'Flexible Plans',
    q: 'What are your package pricing structures?',
    a: 'We offer flexible 1-month, 3-month, and 6-month plans depending on session frequency (typically 3 or 5 days per week). We also offer shared couple/partner packages that provide substantial savings. Contact our team on WhatsApp for an instant, transparent quote tailored to your location.'
  },
  {
    id: 'travel-pause-policy',
    category: 'pricing',
    badge: '30-Day Pause',
    q: 'Can I pause my package if I travel for business or vacation?',
    a: 'Yes. We understand busy executive and travel schedules. You can pause your package for up to 30 days with advance notice, and your remaining sessions will be preserved without loss.'
  },
  {
    id: 'couple-family-discount',
    category: 'pricing',
    badge: 'Partner Packages',
    q: 'Is there any couple or family discount for shared sessions?',
    a: 'Yes! Our Couples & Partner Training package allows two family members (husband and wife, or mother and daughter) to train in the same hour at significantly discounted per-person rates while still receiving customized individual modifications.'
  },

  // 5. NCR LOCATIONS & COVERAGE
  {
    id: 'service-areas-ncr',
    category: 'coverage',
    badge: 'Delhi NCR Hubs',
    q: 'Which specific areas and sectors in Delhi NCR do your trainers travel to?',
    a: 'We have localized trainer clusters stationed across Noida (Expressway, Sectors 50, 78, 128, 137, 150), South Delhi (Greater Kailash, Vasant Vihar, Defence Colony, Panchsheel, Hauz Khas), Central/East Delhi, and Gurugram (DLF Phase 1–5, Golf Course Road, Golf Course Extension, Sohna Road).'
  },
  {
    id: 'booking-dispatch-speed',
    category: 'coverage',
    badge: '24-48 Hr Dispatch',
    q: 'How quickly can we start our first session after booking?',
    a: 'Following your initial phone consultation or WhatsApp inquiry, we can match and dispatch a certified local coach to your home within 24 to 48 hours for your baseline assessment.'
  }
];

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <div>
      {/* Schema.org FAQPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* BREADCRUMB */}
      <div style={{ background: 'var(--bg-surface-alt)', borderBottom: '1px solid var(--border-subtle)', padding: '12px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
          <Link href="/" style={{ color: 'var(--text-body)', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>Frequently Asked Questions</span>
        </div>
      </div>

      {/* 1. HERO HEADER */}
      <section className="page-header-clean" style={{ padding: '60px 0 50px' }}>
        <div className="container" style={{ maxWidth: '880px', textAlign: 'center' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <HelpCircle size={14} /> Clear, Honest Answers
          </div>
          <h1
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              color: 'var(--text-main)',
              lineHeight: 1.18,
              fontWeight: 800,
              marginBottom: '18px',
              letterSpacing: '-0.02em',
            }}
          >
            Frequently Asked <span className="text-gold">Questions</span>
          </h1>
          <p
            style={{
              fontSize: '17px',
              color: 'var(--text-body)',
              lineHeight: 1.7,
              maxWidth: '680px',
              margin: '0 auto 28px auto',
            }}
          >
            Everything you need to know about our in-home training logistics, senior joint safety, certified trainer vetting, and doorstep trial appointments across Delhi NCR.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20have%20a%20question%20about%20your%20in-home%20training%20sessions."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <MessageCircle size={18} /> Chat with Master Coach
            </a>
            <a
              href="tel:+919999448206"
              className="btn btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <Phone size={18} /> Call +91 99994 48206
            </a>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE ACCORDION HUB */}
      <section className="section-surface" style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <FAQAccordionClient categories={categories} faqs={faqs} />
        </div>
      </section>

      {/* 3. FINAL CONVERSION & DIRECT CONTACT BANNER */}
      <section style={{ background: 'var(--brand-navy)', color: '#ffffff', padding: '70px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '12.5px',
              color: 'var(--brand-gold)',
              fontWeight: 600,
              marginBottom: '18px',
            }}
          >
            <ShieldCheck size={14} /> 100% Direct Trainer Communication
          </div>

          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 36px)',
              color: '#ffffff',
              fontWeight: 800,
              marginBottom: '16px',
            }}
          >
            Have a Specific Medical or Scheduling Query?
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: 1.65, marginBottom: '32px' }}>
            Speak directly with Master Trainer Satheesan. We review MRI reports, coordinate with treating physicians, and design custom in-home routines tailored to your family&apos;s routine.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999448206?text=Hi%20Fit4Steps,%20I%20have%20a%20specific%20question%20before%20booking%20a%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ padding: '14px 28px', fontSize: '15px' }}
            >
              <MessageCircle size={18} /> WhatsApp Master Coach Directly
            </a>
            <Link
              href="/in-home-personal-trainer-near-me"
              className="btn btn-outline"
              style={{
                padding: '14px 28px',
                fontSize: '15px',
                color: '#ffffff',
                borderColor: 'rgba(255, 255, 255, 0.3)',
              }}
            >
              View In-Home Trainer Protocol
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
