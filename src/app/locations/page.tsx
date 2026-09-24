import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  MapPin,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  Clock,
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Doorstep In-Home Personal Training Locations | Noida, Delhi & Gurugram',
  description: 'Certified personal fitness trainers and senior joint therapy at your doorstep across Noida (HQ Jaypee Wishtown), South Delhi (Greater Kailash, Vasant Kunj), and Gurugram (DLF, Golf Course Road).',
  keywords: [
    'personal fitness trainer in noida',
    'senior citizen fitness trainer at home delhi',
    'personal trainer in greater kailash',
    'fitness trainer gurugram dlf',
    'personal trainer jaypee wishtown noida'
  ],
};

export default function LocationsPage() {
  const locations = [
    {
      id: 'noida',
      city: 'Noida (Headquarters)',
      tag: 'Head Office & Primary Hub',
      address: 'H155, KP1, Jaypee Wishtown, Sector 133, Noida, UP - 201304',
      coverage: [
        'Jaypee Greens Wishtown (Kalypso, Pavilion, Pebble Court, Kensington)',
        'Noida-Greater Noida Expressway (Sectors 93A, 93B, 108, 128, 137, 143, 168)',
        'Central & Premium Noida (Sectors 14, 15A, 44, 50, 74, 76, 78, 121)',
        'ATS Village, Eldeco Utopia, Mahagun Moderne, Grand Omaxe'
      ],
      trainerCount: '18+ Certified Coaches',
      dispatchTime: 'Trainers based locally for punctual 6:00 AM – 8:30 PM slots',
      seoKeywords: [
        'Personal Fitness Trainer in Noida',
        'Senior Citizen Joint Rehabilitation Noida',
        'Lady Fitness Trainer Noida Expressway',
        'In-Home Gym Trainer Jaypee Wishtown'
      ]
    },
    {
      id: 'delhi',
      city: 'South Delhi & Greater Kailash',
      tag: 'Premier South Delhi Hub',
      address: 'Serving Greater Kailash (GK 1 & 2), Vasant Kunj & Environs',
      coverage: [
        'Greater Kailash 1, 2, Enclave & Masjid Moth',
        'Vasant Kunj (Sectors A to E), Vasant Vihar, Shanti Niketan',
        'Panchsheel Park, Anand Lok, Gulmohar Park, Defence Colony',
        'New Friends Colony, Friends Colony West, Maharani Bagh, Green Park'
      ],
      trainerCount: '15+ Certified Coaches',
      dispatchTime: 'Serving VIP residential enclaves with dedicated morning & evening slots',
      seoKeywords: [
        'Personal Trainer in Greater Kailash Delhi',
        'Senior Citizen Fitness Trainer at Home Delhi',
        'Strength Training for Seniors South Delhi',
        'Lady Yoga & Fitness Instructor Vasant Kunj'
      ]
    },
    {
      id: 'gurugram',
      city: 'Gurugram (Gurgaon)',
      tag: 'Millennium City Hub',
      address: 'Serving DLF Phase 1–5, Golf Course Road & Sohna Road',
      coverage: [
        'DLF Phase 1, 2, 3, 4, 5 & DLF The Aralias, Magnolias, Camellias',
        'Golf Course Road, Golf Course Extension Road (Pioneer, Palm Springs)',
        'Sohna Road, Nirvana Country, Malibu Towne, South City 1 & 2',
        'Sectors 54, 56, 57, 43, 48, 49 & 67'
      ],
      trainerCount: '14+ Certified Coaches',
      dispatchTime: 'Dispatched to high-rise condominiums with all portable gear',
      seoKeywords: [
        'Senior Citizen Fitness Trainer at Home Gurugram',
        'Strength Training for Seniors Gurugram',
        'Exercises for Senior Citizens DLF Gurugram',
        'Personal Fitness Trainer Golf Course Road'
      ]
    },
  ];

  return (
    <div>
      {/* 1. HERO BANNER */}
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <MapPin size={14} /> Doorstep Coverage
          </div>
          <h1 style={{ fontSize: 'clamp(34px, 4.8vw, 52px)', color: 'var(--text-main)', lineHeight: 1.16, marginBottom: '20px' }}>
            In-Home Personal Training Across <br />
            <span className="text-gold">Noida, Delhi & Gurugram</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Our certified personal trainers and senior joint therapy coaches are stationed throughout Delhi NCR to guarantee punctuality, consistency, and personalized doorstep service.
          </p>
        </div>
      </section>

      {/* 2. LOCATIONS CARDS */}
      <section className="section-page">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {locations.map((loc) => (
              <div
                key={loc.id}
                id={loc.id}
                className="theme-card"
                style={{ padding: '36px' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
                  <div>
                    <span style={{
                      background: 'var(--brand-gold-soft)',
                      color: 'var(--brand-gold-text)',
                      padding: '4px 12px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: 700,
                      display: 'inline-block',
                      marginBottom: '8px',
                      border: '1px solid var(--brand-gold-border)',
                    }}>
                      {loc.tag}
                    </span>
                    <h2 style={{ fontSize: '28px', color: 'var(--text-main)' }}>
                      {loc.city}
                    </h2>
                    <div style={{ fontSize: '14px', color: 'var(--brand-gold)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
                      <MapPin size={15} color="var(--brand-gold)" /> {loc.address}
                    </div>
                  </div>

                  <div className="theme-subcard" style={{ padding: '12px 18px', textAlign: 'right' }}>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--brand-gold)' }}>{loc.trainerCount}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Available in Sector</div>
                  </div>
                </div>

                {/* Coverage Sectors */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '12px' }}>
                    Neighborhoods & Residential Condominiums Served:
                  </div>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '10px',
                  }}>
                    {loc.coverage.map((c, i) => (
                      <div key={i} className="theme-subcard" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: 'var(--text-body)', padding: '10px 14px' }}>
                        <CheckCircle2 size={16} color="var(--brand-gold)" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Popular searches tag cloud */}
                <div style={{
                  padding: '16px 20px',
                  background: 'var(--bg-surface-alt)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  flexWrap: 'wrap',
                }}>
                  <span style={{ fontSize: '12.5px', color: 'var(--text-muted)', fontWeight: 600 }}>Top Verified Services:</span>
                  {loc.seoKeywords.map((k, i) => (
                    <span key={i} style={{ fontSize: '12px', background: 'var(--brand-gold-soft)', color: 'var(--brand-gold-text)', border: '1px solid var(--brand-gold-border)', padding: '3px 9px', borderRadius: '6px' }}>
                      {k}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                  <Link href="/contact" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '14px' }}>
                    Book In-Home Trainer in {loc.city.split(' ')[0]} <ArrowRight size={15} />
                  </Link>
                  <a
                    href={`https://wa.me/919778776136?text=Hi%20Fit4Steps,%20I%20am%20looking%20for%20an%20in-home%20trainer%20in%20${encodeURIComponent(loc.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ padding: '12px 22px', fontSize: '14px' }}
                  >
                    <MessageCircle size={16} /> WhatsApp Trainer Dispatch
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

