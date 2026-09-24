import React from 'react';
import {
  Clock,
  Activity,
  Award,
  PackageCheck,
  MapPin,
  ShieldCheck,
  Calendar,
  Users,
  Target,
  Sparkles,
  Flame,
  CheckCircle2
} from 'lucide-react';

export interface SpecItem {
  label: string;
  value: string;
  category?: string;
  subtext?: string;
  icon?: React.ReactNode;
}

interface SpecsMatrixProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  specs: SpecItem[];
}

export default function SpecsMatrix({
  badge = 'At a Glance',
  title = 'Program Specifications & Delivery Matrix',
  subtitle = 'Clinical standards, coaching parameters, and doorstep delivery protocols across Delhi NCR.',
  specs
}: SpecsMatrixProps) {
  // Intelligent icon fallback based on label keyword or index
  const getIcon = (label: string, index: number) => {
    const l = label.toLowerCase();
    if (l.includes('duration') || l.includes('length') || l.includes('time') || l.includes('hour') || l.includes('slot')) {
      return <Clock size={20} color="var(--brand-gold)" />;
    }
    if (l.includes('intensity') || l.includes('metric') || l.includes('burn') || l.includes('energy') || l.includes('vital') || l.includes('cardio') || l.includes('pacing') || l.includes('screening') || l.includes('modality') || l.includes('neurological')) {
      return <Activity size={20} color="var(--brand-gold)" />;
    }
    if (l.includes('equipment') || l.includes('kit') || l.includes('gear') || l.includes('props') || l.includes('brought') || l.includes('provided') || l.includes('deployed')) {
      return <PackageCheck size={20} color="var(--brand-gold)" />;
    }
    if (l.includes('location') || l.includes('coverage') || l.includes('region') || l.includes('area') || l.includes('zone') || l.includes('global')) {
      return <MapPin size={20} color="var(--brand-gold)" />;
    }
    if (l.includes('trainer') || l.includes('credential') || l.includes('certification') || l.includes('accredit') || l.includes('qualification') || l.includes('advantage') || l.includes('reporting') || l.includes('milestone')) {
      return <Award size={20} color="var(--brand-gold)" />;
    }
    if (l.includes('privacy') || l.includes('security') || l.includes('verify') || l.includes('safe') || l.includes('safety') || l.includes('clearance') || l.includes('physician') || l.includes('review') || l.includes('precaution') || l.includes('mandate') || l.includes('accountability')) {
      return <ShieldCheck size={20} color="var(--brand-gold)" />;
    }
    if (l.includes('frequency') || l.includes('days') || l.includes('schedule')) {
      return <Calendar size={20} color="var(--brand-gold)" />;
    }
    if (l.includes('demographic') || l.includes('age') || l.includes('bracket') || l.includes('cohort') || l.includes('client') || l.includes('partner') || l.includes('participant')) {
      return <Users size={20} color="var(--brand-gold)" />;
    }
    if (l.includes('format') || l.includes('focus') || l.includes('target') || l.includes('special') || l.includes('outcome') || l.includes('topic') || l.includes('tailor') || l.includes('adaptability')) {
      return <Target size={20} color="var(--brand-gold)" />;
    }

    // Index fallback
    const fallbackIcons = [
      <Users key="0" size={20} color="var(--brand-gold)" />,
      <Clock key="1" size={20} color="var(--brand-gold)" />,
      <Activity key="2" size={20} color="var(--brand-gold)" />,
      <PackageCheck key="3" size={20} color="var(--brand-gold)" />,
      <Award key="4" size={20} color="var(--brand-gold)" />,
      <MapPin key="5" size={20} color="var(--brand-gold)" />,
    ];
    return fallbackIcons[index % fallbackIcons.length];
  };

  return (
    <section className="section-surface" style={{ padding: '70px 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 40px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Activity size={14} /> {badge}
          </div>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', color: 'var(--text-main)', fontWeight: 800 }}>
            {title}
          </h2>
          {subtitle && (
            <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.6, marginTop: '8px' }}>
              {subtitle}
            </p>
          )}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {specs.map((spec, i) => (
            <div
              key={i}
              className="theme-card"
              style={{
                padding: '24px',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'var(--brand-gold-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {spec.icon || getIcon(spec.label, i)}
                  </div>
                  <div>
                    <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.8px', color: 'var(--text-muted)', fontWeight: 700, display: 'block' }}>
                      {spec.category || `Specification 0${i + 1}`}
                    </span>
                    <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-main)' }}>
                      {spec.label}
                    </span>
                  </div>
                </div>

                <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--brand-gold-text)', lineHeight: 1.4, marginBottom: spec.subtext ? '8px' : '0' }}>
                  {spec.value}
                </div>

                {spec.subtext && (
                  <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.55, margin: 0 }}>
                    {spec.subtext}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
