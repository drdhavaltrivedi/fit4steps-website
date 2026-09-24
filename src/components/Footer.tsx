import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--footer-bg)',
      color: 'var(--footer-text)',
      borderTop: '1px solid var(--footer-border)',
      paddingTop: '64px',
      paddingBottom: '32px',
      position: 'relative',
      transition: 'background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease',
    }}>
      <div className="container">
        {/* Top Verified Business Bar (Supporting Noida Map & Local SEO Rankings) */}
        <div style={{
          background: 'var(--footer-card-bg)',
          border: '1px solid var(--footer-card-border)',
          borderRadius: '16px',
          padding: '24px 32px',
          marginBottom: '56px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          alignItems: 'center',
          boxShadow: 'var(--shadow-sm)',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <div style={{
              background: 'var(--brand-gold-badge)',
              color: 'var(--brand-gold)',
              padding: '10px',
              borderRadius: '12px',
              border: '1px solid var(--brand-gold-border)',
            }}>
              <MapPin size={22} />
            </div>
            <div>
              <div style={{ fontSize: '12.5px', textTransform: 'uppercase', color: 'var(--footer-muted)', fontWeight: 600, letterSpacing: '0.04em' }}>
                Head Office & Consultation
              </div>
              <div style={{ fontSize: '14.5px', color: 'var(--footer-title)', fontWeight: 600, marginTop: '2px' }}>
                H155, KP1, Jaypee Wishtown, Sector 133, Noida, UP - 201304
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <div style={{
              background: 'var(--brand-ice-blue)',
              color: 'var(--brand-ice-text)',
              padding: '10px',
              borderRadius: '12px',
              border: '1px solid var(--brand-ice-border)',
            }}>
              <Phone size={22} />
            </div>
            <div>
              <div style={{ fontSize: '12.5px', textTransform: 'uppercase', color: 'var(--footer-muted)', fontWeight: 600, letterSpacing: '0.04em' }}>
                Direct Line & WhatsApp
              </div>
              <a
                href="tel:+919999448206"
                className="footer-link-bold"
                style={{ fontSize: '15px', marginTop: '2px', display: 'block' }}
              >
                +91 99994 48206
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <div style={{
              background: 'rgba(37, 211, 102, 0.12)',
              color: '#16a34a',
              padding: '10px',
              borderRadius: '12px',
              border: '1px solid rgba(37, 211, 102, 0.25)',
            }}>
              <Mail size={22} />
            </div>
            <div>
              <div style={{ fontSize: '12.5px', textTransform: 'uppercase', color: 'var(--footer-muted)', fontWeight: 600, letterSpacing: '0.04em' }}>
                Official Email Inquiries
              </div>
              <a
                href="mailto:fit4steps@gmail.com"
                className="footer-link-bold"
                style={{ fontSize: '14px', marginTop: '2px', display: 'block' }}
              >
                fit4steps@gmail.com / info@fit4steps.com
              </a>
            </div>
          </div>
        </div>

        {/* 4-Column Structured Architecture Hierarchy strictly from Blueprint */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '56px',
        }}>
          {/* Column 1: Senior Fitness (Flagship Lead Pillar) */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--brand-gold)',
              fontWeight: 700,
              fontSize: '15px',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}>
              <Heart size={16} /> Senior Fitness
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
              <li><Link href="/fitness-training-program-for-senior-citizens" className="footer-link-bold">Senior Citizen Training</Link></li>
              <li><Link href="/personal-fitness-training-for-50-plus" className="footer-link">Fitness for 50+</Link></li>
              <li><Link href="/strength-training-for-seniors-at-home-delhi" className="footer-link">Strength Training Delhi</Link></li>
              <li><Link href="/strength-training-for-seniors-at-home-gurugram" className="footer-link">Strength Training Gurugram</Link></li>
              <li><Link href="/senior-fitness/knee-therapy" className="footer-link">Joint Restoration & Knee Pain</Link></li>
              <li><Link href="/mobility-exercises-for-senior-citizens" className="footer-link">Mobility & Balance Training</Link></li>
              <li><Link href="/senior-citizen-fitness-trainer-at-home-delhi" className="footer-link">Senior Fitness Trainer Delhi</Link></li>
              <li><Link href="/senior-citizen-fitness-trainer-at-home-gurugram" className="footer-link">Senior Fitness Trainer Gurugram</Link></li>
              <li><Link href="/exercises-for-senior-citizens-gurugram" className="footer-link">Senior Exercises Gurugram</Link></li>
            </ul>
          </div>

          {/* Column 2: In-Home Services */}
          <div>
            <div style={{
              color: 'var(--footer-title)',
              fontWeight: 700,
              fontSize: '15px',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}>
              Services
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
              <li><Link href="/in-home-personal-trainer-near-me" className="footer-link-bold">Personal Training at Home</Link></li>
              <li><Link href="/female-fitness-trainers-in-delhi" className="footer-link">Female Fitness Trainers</Link></li>
              <li><Link href="/couples-fitness-training-at-home-delhi" className="footer-link">Couple Training</Link></li>
              <li><Link href="/fitness-training-for-kids-noida" className="footer-link">Kids & Youth Training</Link></li>
              <li><Link href="/services/prenatal-postnatal-yoga" className="footer-link">Prenatal & Postnatal</Link></li>
              <li><Link href="/services/corrective-exercise-lifestyle-diseases" className="footer-link">Corrective Exercise</Link></li>
              <li><Link href="/services/stress-management-training" className="footer-link">Stress Management</Link></li>
              <li><Link href="/services/personalized-online-training" className="footer-link">Online Training</Link></li>
              <li><Link href="/services/corporate-wellness-yoga" className="footer-link">Corporate Wellness</Link></li>
            </ul>
          </div>

          {/* Column 3: Workout Programs */}
          <div>
            <div style={{
              color: 'var(--footer-title)',
              fontWeight: 700,
              fontSize: '15px',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}>
              Programs
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
              <li><Link href="/programs/weight-training" className="footer-link">Weight Training</Link></li>
              <li><Link href="/programs/yoga" className="footer-link">Yoga</Link></li>
              <li><Link href="/programs/power-yoga" className="footer-link">Power Yoga</Link></li>
              <li><Link href="/programs/pilates" className="footer-link">Pilates</Link></li>
              <li><Link href="/programs/aerobics" className="footer-link">Aerobics</Link></li>
              <li><Link href="/programs/kick-boxing" className="footer-link">Kick Boxing</Link></li>
              <li><Link href="/programs/stretching-mobility" className="footer-link">Stretching & Mobility</Link></li>
              <li><Link href="/programs/ball-exercise" className="footer-link">Ball Exercise</Link></li>
              <li><Link href="/programs/circuit-training" className="footer-link">Circuit Training</Link></li>
              <li><Link href="/programs/hiit" className="footer-link">HIIT</Link></li>
              <li><Link href="/programs/trx-exercise" className="footer-link">TRX Exercise</Link></li>
              <li><Link href="/programs/sports-games" className="footer-link">Sports & Games</Link></li>
            </ul>
          </div>

          {/* Column 4: Company, Trust & NCR Locations */}
          <div>
            <div style={{
              color: 'var(--footer-title)',
              fontWeight: 700,
              fontSize: '15px',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}>
              Company
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
              <li><Link href="/about" className="footer-link">About Us</Link></li>
              <li><Link href="/about/trainers" className="footer-link-bold" style={{ color: 'var(--brand-gold)' }}>Our Trainers</Link></li>
              <li><Link href="/success-stories" className="footer-link">Success Stories</Link></li>
              <li><Link href="/blog" className="footer-link">Blog</Link></li>
              <li><Link href="/faq" className="footer-link">FAQ</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
              <li style={{ marginTop: '10px', paddingTop: '12px', borderTop: '1px solid var(--footer-border)' }}>
                <span style={{ fontSize: '11.5px', textTransform: 'uppercase', color: 'var(--footer-muted)', fontWeight: 700, display: 'block', marginBottom: '8px', letterSpacing: '0.04em' }}>
                  Locations:
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <Link href="/locations/noida" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={13} color="var(--brand-gold)" /> Noida (HQ Jaypee Wishtown)
                  </Link>
                  <Link href="/personal-fitness-trainer-delhi" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={13} color="var(--brand-gold)" /> Delhi (South Delhi & GK)
                  </Link>
                  <Link href="/locations/gurugram" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={13} color="var(--brand-gold)" /> Gurugram (DLF & Cyber City)
                  </Link>
                  <Link href="/personal-trainer-greater-kailash-delhi" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={13} color="var(--brand-gold)" /> Greater Kailash (GK 1 & 2)
                  </Link>
                  <Link href="/locations/gurugram" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={13} color="var(--brand-gold)" /> Gurugram (DLF & Golf Course)
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div style={{
          borderTop: '1px solid var(--footer-border)',
          paddingTop: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '13px',
          color: 'var(--footer-muted)',
        }}>
          <div>
            © {new Date().getFullYear()} Fit4Steps Wellness Pvt Ltd. All rights reserved. Your Sustainable Fitness Partner in Noida, Delhi & Gurugram.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/privacy-policy" className="footer-link" style={{ fontSize: '13px' }}>Privacy Policy</Link>
            <Link href="/terms" className="footer-link" style={{ fontSize: '13px' }}>Terms of Service</Link>
            <a href="/sitemap.xml" className="footer-link" style={{ fontSize: '13px' }}>Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
