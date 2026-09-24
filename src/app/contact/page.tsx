'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Send,
  Calendar
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Noida (Jaypee Wishtown / Expressway)',
    goal: 'Senior Citizen Joint Care & Knee Pain',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `*New In-Home Assessment Request*%0A- *Name:* ${encodeURIComponent(formData.name)}%0A- *Phone:* ${encodeURIComponent(formData.phone)}%0A- *Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A- *Location:* ${encodeURIComponent(formData.city)}%0A- *Goal:* ${encodeURIComponent(formData.goal)}%0A- *Medical/Joint Notes:* ${encodeURIComponent(formData.notes || 'None')}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/919778776136?text=${message}`, '_blank');
    }, 800);
  };

  return (
    <div>
      {/* 1. HERO BANNER */}
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Calendar size={14} /> Doorstep Assessment
          </div>
          <h1 style={{ fontSize: 'clamp(34px, 4.8vw, 52px)', color: 'var(--text-main)', lineHeight: 1.16, marginBottom: '20px' }}>
            Book Your Complimentary <br />
            <span className="text-gold">In-Home Consultation</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            Let our senior coaches evaluate your joint health, muscle balance, and personal goals. We visit your residence at your preferred time.
          </p>
        </div>
      </section>

      {/* 2. MAIN FORM & CONTACT INFORMATION */}
      <section className="section-page">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
          }}>
            {/* Contact Info Card */}
            <div>
              <div className="theme-card" style={{ padding: '36px', marginBottom: '28px' }}>
                <h2 style={{ fontSize: '24px', color: 'var(--text-main)', marginBottom: '24px' }}>
                  Head Office & Inquiries
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ background: 'var(--brand-gold-soft)', color: 'var(--brand-gold)', padding: '10px', borderRadius: '12px' }}>
                      <MapPin size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '12.5px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>Noida Headquarters</div>
                      <div style={{ fontSize: '15px', color: 'var(--text-main)', fontWeight: 600, marginTop: '2px' }}>
                        H155, KP1, Jaypee Wishtown, Sector 133, Noida, UP - 201304
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ background: 'var(--brand-ice-blue)', color: 'var(--brand-cyan)', padding: '10px', borderRadius: '12px' }}>
                      <Phone size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '12.5px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>Direct Line & WhatsApp</div>
                      <a href="tel:+919778776136" style={{ fontSize: '15px', color: 'var(--text-main)', fontWeight: 600, marginTop: '2px', display: 'block' }}>
                        +91 977 877 6136
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ background: 'rgba(37, 211, 102, 0.15)', color: '#25d366', padding: '10px', borderRadius: '12px' }}>
                      <Mail size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '12.5px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>Official Email</div>
                      <a href="mailto:info@fit4steps.in" style={{ fontSize: '15px', color: 'var(--text-main)', fontWeight: 600, marginTop: '2px', display: 'block' }}>
                        info@fit4steps.in / fit4stepswellness@gmail.com
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ background: 'var(--bg-surface-alt)', color: 'var(--text-main)', padding: '10px', borderRadius: '12px' }}>
                      <Clock size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '12.5px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>Training Operating Hours</div>
                      <div style={{ fontSize: '15px', color: 'var(--text-main)', fontWeight: 600, marginTop: '2px' }}>
                        Monday – Sunday: 6:00 AM – 8:30 PM (IST)
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)' }}>
                  <a
                    href="https://wa.me/919778776136?text=Hi%20Satheesan,%20I%20am%20messaging%20from%20the%20Fit4Steps%20contact%20page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <MessageCircle size={18} /> Instant Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Trust Box */}
              <div className="theme-subcard" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--brand-gold)', fontWeight: 700, fontSize: '15px', marginBottom: '8px' }}>
                  <ShieldCheck size={20} /> 100% Home Safety Assured
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.6 }}>
                  All visiting trainers are police background-verified, health screened, and carry professional credentials with portable sanitized equipment.
                </p>
              </div>
            </div>

            {/* Interactive Booking Form */}
            <div className="theme-card" style={{ padding: '36px' }}>
              <h2 style={{ fontSize: '24px', color: 'var(--text-main)', marginBottom: '10px' }}>
                Schedule Doorstep Consultation
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>
                Fill out the details below. We typically confirm appointment slots within 30 minutes.
              </p>

              {submitted ? (
                <div style={{
                  background: 'var(--bg-surface-alt)',
                  border: '1.5px solid #25d366',
                  borderRadius: '16px',
                  padding: '30px',
                  textAlign: 'center',
                }}>
                  <CheckCircle2 size={48} color="#25d366" style={{ margin: '0 auto 16px' }} />
                  <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>
                    Request Received!
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '20px' }}>
                    Thank you, <strong>{formData.name}</strong>. Opening WhatsApp to connect you directly with Head Trainer Satheesan...
                  </p>
                  <a
                    href="tel:+919778776136"
                    className="btn btn-secondary"
                  >
                    Need urgent booking? Call +91 97787 76136
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '10px',
                        color: 'var(--text-main)',
                        fontSize: '14.5px',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                        Phone Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: 'var(--bg-surface)',
                          border: '1px solid var(--border-medium)',
                          borderRadius: '10px',
                          color: 'var(--text-main)',
                          fontSize: '14.5px',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: 'var(--bg-surface)',
                          border: '1px solid var(--border-medium)',
                          borderRadius: '10px',
                          color: 'var(--text-main)',
                          fontSize: '14.5px',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                        Location / City *
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: 'var(--bg-surface)',
                          border: '1px solid var(--border-medium)',
                          borderRadius: '10px',
                          color: 'var(--text-main)',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      >
                        <option value="Noida (Jaypee Wishtown / Expressway)">Noida (Jaypee Wishtown / Expressway)</option>
                        <option value="Noida (Central / Sectors 50-78)">Noida (Central / Sectors 50-78)</option>
                        <option value="South Delhi (Greater Kailash 1 & 2)">South Delhi (Greater Kailash 1 & 2)</option>
                        <option value="South Delhi (Vasant Kunj / Panchsheel)">South Delhi (Vasant Kunj / Panchsheel)</option>
                        <option value="Gurugram (DLF Phase 1-5)">Gurugram (DLF Phase 1-5)</option>
                        <option value="Gurugram (Golf Course Road / Sohna Rd)">Gurugram (Golf Course Road / Sohna Rd)</option>
                        <option value="Other / Online Training">Other / Online Training</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                        Primary Service Needed *
                      </label>
                      <select
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: 'var(--bg-surface)',
                          border: '1px solid var(--border-medium)',
                          borderRadius: '10px',
                          color: 'var(--text-main)',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      >
                        <option value="Senior Citizen Joint Care & Knee Pain">Senior Citizen Joint Care & Knee Pain</option>
                        <option value="1-on-1 Personal In-Home Fitness">1-on-1 Personal In-Home Fitness</option>
                        <option value="Female Trainer for Women">Female Trainer for Women</option>
                        <option value="Couple / Partner Fitness">Couple / Partner Fitness</option>
                        <option value="Kids & Teens Functional Training">Kids & Teens Functional Training</option>
                        <option value="Prenatal or Postnatal Yoga">Prenatal or Postnatal Yoga</option>
                        <option value="Lifestyle Disease Corrective Exercise">Lifestyle Disease Corrective Exercise</option>
                        <option value="Corporate Wellness Workshop">Corporate Wellness Workshop</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                      Any Knee/Joint Pain, Surgery, or Medical History? (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Mild arthritis in right knee, doctor advised gentle quad strengthening..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '10px',
                        color: 'var(--text-main)',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '14px', fontSize: '16px', marginTop: '8px' }}
                  >
                    Submit & Connect on WhatsApp <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
