'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  ClipboardCheck,
  MessageCircle,
  RotateCcw,
  HeartPulse,
  Clock,
  MapPin,
  User,
  Copy,
  Check,
  Phone,
  Send
} from 'lucide-react';

export default function AssessmentWidget() {
  const [step, setStep] = useState(1);
  const [recipient, setRecipient] = useState('Elderly Parents (50+ / 60+)');
  const [primaryGoal, setPrimaryGoal] = useState('Knee & Joint Pain Therapy');
  const [location, setLocation] = useState('Noida (Jaypee Wishtown / Expressway / Sectors 1-168)');
  const [timeSlot, setTimeSlot] = useState('Morning (6:30 AM – 9:30 AM)');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [copied, setCopied] = useState(false);

  const recipientOptions = [
    { label: 'Elderly Parents (50+ / 60+)', desc: 'Focus on gentle mobility, knee care & fall prevention' },
    { label: 'Myself (Individual)', desc: 'Personalized 1-on-1 fitness coaching at home' },
    { label: 'Couple / Partner Training', desc: 'Workout together with synchronized routines' },
    { label: 'Kids & Teens (6–16)', desc: 'Postural correction, athletic agility & stamina' },
    { label: 'Corporate Team / Group', desc: 'Desk posture relief, ergonomic yoga & mindfulness' },
  ];

  const goalOptions = [
    { label: 'Knee & Joint Pain Therapy', tag: 'Restorative Therapy', protocol: 'Orthopedic non-impact mobilization, joint decompression, and safe range-of-motion restoration.' },
    { label: 'Weight Management & Fat Loss', tag: 'Metabolic Health', protocol: 'Cardiometabolic HIIT conditioning, metabolic acceleration, and body composition optimization.' },
    { label: 'Strength & Muscle Toning', tag: 'Functional Fitness', protocol: 'Progressive functional resistance, core stabilization, and muscular endurance protocols.' },
    { label: 'Corrective Exercise (Diabetes/BP/Spine)', tag: 'Lifestyle Health', protocol: 'Spinal alignment, glycemic control exercise regimens, and physician-aligned routines.' },
    { label: 'Prenatal or Postnatal Care', tag: 'Gentle Yoga', protocol: 'Trimester-safe pelvic floor conditioning, gentle mobility, and diaphragmatic breathing.' },
    { label: 'Flexibility, Balance & Stress Relief', tag: 'Mobility & Mind', protocol: 'Deep myofascial release, classical restorative yoga, and postural balancing.' },
  ];

  const locationOptions = [
    'Noida (Jaypee Wishtown / Expressway / Sectors 1-168)',
    'South Delhi (Greater Kailash, Vasant Kunj, Panchsheel, Defence Colony)',
    'Gurugram (DLF Phase 1-5, Golf Course Road, Sohna Road)',
    'Other Delhi NCR / Personalized Online Training',
  ];

  const timeSlotOptions = [
    'Morning (6:30 AM – 9:30 AM)',
    'Mid-Day (10:00 AM – 2:00 PM)',
    'Evening (4:30 PM – 8:30 PM)',
    'Flexible Schedule',
  ];

  const selectedGoalObj = goalOptions.find(g => g.label === primaryGoal) || goalOptions[0];

  const getAssessmentMessage = () => {
    return `Hi Satheesan & Fit4Steps Team,\n\nI just completed the In-Home Fitness Assessment on fit4steps.in:\n• Participant: ${recipient}\n• Primary Focus: ${primaryGoal}\n• Doorstep Location: ${location}\n• Preferred Time: ${timeSlot}${clientName ? `\n• Client Name: ${clientName}` : ''}${clientPhone ? `\n• Phone Number: ${clientPhone}` : ''}\n\nPlease recommend our matched certified trainer and confirm consultation availability.`;
  };

  const generateWhatsAppUrl = () => {
    const rawText = getAssessmentMessage();
    return `https://wa.me/919778776136?text=${encodeURIComponent(rawText)}`;
  };

  const generateSmsUrl = () => {
    const rawText = getAssessmentMessage();
    return `sms:+919778776136?body=${encodeURIComponent(rawText)}`;
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(getAssessmentMessage());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // fallback
    }
  };

  return (
    <div style={{
      background: 'var(--bg-surface)',
      border: '1.5px solid var(--border-subtle)',
      borderRadius: '20px',
      padding: '36px',
      boxShadow: 'var(--shadow-md)',
      position: 'relative',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
        <div>
          <div className="badge badge-gold" style={{ marginBottom: '8px' }}>
            <ClipboardCheck size={14} /> Interactive Assessment Tool
          </div>
          <h3 style={{ fontSize: '24px', color: 'var(--text-main)', fontWeight: 700 }}>
            Find Your Ideal In-Home Fitness & Joint Plan
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', marginTop: '4px' }}>
            Takes 30 seconds. Get an instant personalized trainer match and send your complete plan directly.
          </p>
        </div>

        {/* Step indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              style={{
                width: s === step ? '28px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: s === step ? 'var(--brand-gold)' : s < step ? 'var(--brand-navy)' : 'var(--border-medium)',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>

      {/* Step 1: Who is this for */}
      {step === 1 && (
        <div>
          <div style={{ fontSize: '15.5px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '16px' }}>
            Step 1 of 3: Who will be training?
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '28px' }}>
            {recipientOptions.map((opt) => {
              const selected = recipient === opt.label;
              return (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setRecipient(opt.label)}
                  style={{
                    padding: '16px',
                    borderRadius: '12px',
                    background: selected ? 'var(--brand-gold-badge)' : 'var(--bg-surface-alt)',
                    border: selected ? '2px solid var(--brand-gold)' : '1px solid var(--border-subtle)',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontWeight: 700, fontSize: '14px', color: selected ? 'var(--brand-gold-text)' : 'var(--text-main)' }}>
                      {opt.label}
                    </span>
                    {selected && <CheckCircle2 size={16} color="var(--brand-gold)" />}
                  </div>
                  <div style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>{opt.desc}</div>
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={() => setStep(2)}
              className="btn btn-primary"
            >
              Next: Select Health Goal <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Primary Goal */}
      {step === 2 && (
        <div>
          <div style={{ fontSize: '15.5px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '16px' }}>
            Step 2 of 3: What is the primary focus or condition?
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '28px' }}>
            {goalOptions.map((opt) => {
              const selected = primaryGoal === opt.label;
              return (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setPrimaryGoal(opt.label)}
                  style={{
                    padding: '16px',
                    borderRadius: '12px',
                    background: selected ? 'var(--brand-gold-badge)' : 'var(--bg-surface-alt)',
                    border: selected ? '2px solid var(--brand-gold)' : '1px solid var(--border-subtle)',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontWeight: 700, fontSize: '14px', color: selected ? 'var(--brand-gold-text)' : 'var(--text-main)' }}>
                      {opt.label}
                    </span>
                    {selected && <CheckCircle2 size={16} color="var(--brand-gold)" />}
                  </div>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: 'var(--brand-ice-text)',
                    background: 'var(--brand-ice-blue)',
                    padding: '2px 8px',
                    borderRadius: '6px',
                    marginTop: '4px',
                  }}>
                    {opt.tag}
                  </span>
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button
              onClick={() => setStep(1)}
              style={{ color: 'var(--text-muted)', fontSize: '14px', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              ← Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="btn btn-primary"
            >
              Next: Select Location & Timing <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Location, Timing & Contact */}
      {step === 3 && (
        <div>
          <div style={{ fontSize: '15.5px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '16px' }}>
            Step 3 of 3: Doorstep Location & Preferred Schedule
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px' }}>
              Select Delhi NCR Hub:
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {locationOptions.map((loc) => {
                const selected = location === loc;
                return (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setLocation(loc)}
                    style={{
                      padding: '14px 18px',
                      borderRadius: '10px',
                      background: selected ? 'var(--brand-gold-badge)' : 'var(--bg-surface-alt)',
                      border: selected ? '2px solid var(--brand-gold)' : '1px solid var(--border-subtle)',
                      textAlign: 'left',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ fontWeight: 600, fontSize: '14px', color: selected ? 'var(--brand-gold-text)' : 'var(--text-main)' }}>
                      {loc}
                    </span>
                    {selected && <CheckCircle2 size={16} color="var(--brand-gold)" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px' }}>
              Preferred Workout Time:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px' }}>
              {timeSlotOptions.map((ts) => {
                const selected = timeSlot === ts;
                return (
                  <button
                    key={ts}
                    type="button"
                    onClick={() => setTimeSlot(ts)}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '8px',
                      background: selected ? 'var(--brand-gold-badge)' : 'var(--bg-surface-alt)',
                      border: selected ? '2px solid var(--brand-gold)' : '1px solid var(--border-subtle)',
                      textAlign: 'center',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: selected ? 'var(--brand-gold-text)' : 'var(--text-main)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {ts}
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{
            background: 'var(--bg-surface-alt)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '24px',
          }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
              Optional: Add Your Name & Phone to Include in the Message
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              <input
                type="text"
                placeholder="Your Name (e.g. Ramesh Sharma)"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                style={{
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-medium)',
                  background: 'var(--bg-surface)',
                  color: 'var(--text-main)',
                  fontSize: '13.5px',
                  outline: 'none',
                }}
              />
              <input
                type="tel"
                placeholder="Phone Number (e.g. +91 98100 XXXXX)"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                style={{
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-medium)',
                  background: 'var(--bg-surface)',
                  color: 'var(--text-main)',
                  fontSize: '13.5px',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button
              onClick={() => setStep(2)}
              style={{ color: 'var(--text-muted)', fontSize: '14px', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              ← Back
            </button>
            <button
              onClick={() => setStep(4)}
              className="btn btn-primary"
            >
              Generate Complete Plan & Message <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Results & Full Message Ready to Send */}
      {step === 4 && (
        <div style={{
          background: 'var(--bg-surface-alt)',
          border: '1.5px solid var(--brand-gold-border)',
          borderRadius: '16px',
          padding: '28px',
        }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--brand-gold)', fontWeight: 700, fontSize: '18px' }}>
              <HeartPulse size={22} /> Assessment Complete — Summary Message Prepared
            </div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(22, 163, 74, 0.1)',
              color: '#16a34a',
              border: '1px solid rgba(22, 163, 74, 0.25)',
              padding: '4px 10px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 700,
            }}>
              <CheckCircle2 size={14} /> Ready to Send
            </div>
          </div>

          {/* 4 Selected Details Summary */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '12px',
            marginBottom: '18px',
            padding: '16px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '12px',
          }}>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>1. Participant</div>
              <div style={{ fontSize: '14px', color: 'var(--text-main)', fontWeight: 700, marginTop: '2px' }}>{recipient}</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>2. Primary Focus</div>
              <div style={{ fontSize: '14px', color: 'var(--brand-gold-text)', fontWeight: 700, marginTop: '2px' }}>{primaryGoal}</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>3. Location</div>
              <div style={{ fontSize: '14px', color: 'var(--brand-ice-text)', fontWeight: 700, marginTop: '2px' }}>{location}</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>4. Preferred Timing</div>
              <div style={{ fontSize: '14px', color: 'var(--text-main)', fontWeight: 700, marginTop: '2px' }}>{timeSlot}</div>
            </div>
          </div>

          {/* Clinical protocol snippet */}
          <div style={{ color: 'var(--text-body)', fontSize: '13.5px', lineHeight: 1.6, marginBottom: '20px' }}>
            <strong>Matched Clinical Protocol:</strong> {selectedGoalObj.protocol} Your coach arrives with sanitized equipment, assessment kit, and heart-rate monitoring tools. <em>Zero equipment purchase required from your end.</em>
          </div>

          {/* Dedicated Message Box displaying all selected options */}
          <div style={{
            background: 'var(--bg-surface)',
            border: '1.5px dashed var(--brand-gold-border)',
            borderRadius: '12px',
            padding: '18px 20px',
            marginBottom: '24px',
            position: 'relative',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Assessment Inquiry Message (Auto-Filled):
              </span>
              <button
                type="button"
                onClick={handleCopyMessage}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: copied ? 'rgba(22, 163, 74, 0.12)' : 'var(--bg-surface-alt)',
                  color: copied ? '#16a34a' : 'var(--text-main)',
                  border: `1px solid ${copied ? '#16a34a' : 'var(--border-medium)'}`,
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                {copied ? 'Copied!' : 'Copy Text'}
              </button>
            </div>

            <pre style={{
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              fontFamily: 'inherit',
              fontSize: '13.5px',
              lineHeight: 1.6,
              color: 'var(--text-main)',
              margin: 0,
            }}>
              {getAssessmentMessage()}
            </pre>
          </div>

          {/* Action Buttons: WhatsApp Send, SMS Send, Call, Recalculate */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ flex: '1 1 240px', justifyContent: 'center', padding: '14px 20px', fontSize: '15px' }}
            >
              <MessageCircle size={19} /> Send Complete Assessment on WhatsApp
            </a>

            <a
              href={generateSmsUrl()}
              className="btn btn-primary"
              style={{ flex: '1 1 180px', justifyContent: 'center', padding: '14px 20px', fontSize: '14px' }}
            >
              <Send size={16} /> Send via SMS
            </a>

            <a
              href="tel:+919778776136"
              className="btn btn-secondary"
              style={{ flex: '0 1 auto', justifyContent: 'center', padding: '14px 18px', fontSize: '14px' }}
            >
              <Phone size={16} /> Call +91 97787 76136
            </a>

            <button
              onClick={() => setStep(1)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--text-muted)',
                fontSize: '13px',
                padding: '8px 12px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <RotateCcw size={14} /> Retake Assessment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
