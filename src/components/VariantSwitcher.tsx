'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Layers, ChevronUp, ChevronDown, X } from 'lucide-react';

export default function VariantSwitcher() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const variants = [
    { label: 'Original', path: '/', badge: 'Default', desc: 'Editorial Concierge' },
    { label: 'v1: Clinical', path: '/v1', badge: 'v1', desc: 'Medical & Triage' },
    { label: 'v2: Fast-Track', path: '/v2', badge: 'v2', desc: 'Direct Booking' },
    { label: 'v3: Longevity', path: '/v3', badge: 'v3', desc: 'Family & Senior' },
    { label: 'v4: Luxury Club', path: '/v4', badge: 'v4', desc: 'Modern Minimalist' },
    { label: 'v5: Dynamic 360°', path: '/v5', badge: 'v5', desc: 'Executive Performance' },
    { label: 'v6: Market Edge', path: '/v6', badge: 'v6', desc: 'Competitor Benchmark' },
  ];

  const currentVariant = variants.find(v => v.path === pathname) || variants[0];

  return (
    <>
      {/* DESKTOP VARIANT BAR: Centered at bottom, clean & horizontal */}
      <div className="desktop-variant-bar">
        <div style={{
          background: 'var(--bg-surface)',
          border: '1.5px solid var(--border-medium)',
          borderRadius: '30px',
          padding: '6px 14px',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            color: 'var(--brand-gold-text)',
            fontSize: '11.5px',
            fontWeight: 700,
            textTransform: 'uppercase',
            paddingRight: '6px',
            borderRight: '1px solid var(--border-subtle)',
          }}>
            <Layers size={13} color="var(--brand-gold)" />
            <span>UI Variants:</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {variants.map((v) => {
              const isActive = pathname === v.path;
              return (
                <Link
                  key={v.path}
                  href={v.path}
                  style={{
                    padding: '5px 11px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--brand-gold-text)' : 'var(--text-main)',
                    background: isActive ? 'var(--brand-gold-badge)' : 'transparent',
                    border: isActive ? '1px solid var(--brand-gold-border)' : '1px solid transparent',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {v.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* MOBILE COMPACT TRIGGER: Small bottom-left pill that NEVER clashes with WhatsApp button */}
      <div className="mobile-variant-container">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 12px',
            borderRadius: '20px',
            background: 'var(--bg-surface)',
            border: '1.5px solid var(--brand-gold)',
            color: 'var(--text-main)',
            boxShadow: 'var(--shadow-md)',
            fontSize: '12px',
            fontWeight: 700,
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            touchAction: 'manipulation',
          }}
          aria-label="Switch UI Variant"
        >
          <Layers size={14} color="var(--brand-gold)" />
          <span>UI: <strong style={{ color: 'var(--brand-gold-text)' }}>{currentVariant.badge}</strong></span>
          {mobileOpen ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
        </button>

        {/* Mobile Expandable Drawer/Popover */}
        {mobileOpen && (
          <>
            <div
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(2px)',
                zIndex: 996,
              }}
            />
            <div style={{
              position: 'fixed',
              bottom: '64px',
              left: '16px',
              right: '16px',
              maxWidth: '360px',
              background: 'var(--bg-surface)',
              border: '1.5px solid var(--brand-gold-border)',
              borderRadius: '16px',
              padding: '16px',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.25)',
              zIndex: 997,
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              animation: 'slideUp 0.18s ease-out forwards',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px', paddingBottom: '8px', borderBottom: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 800, color: 'var(--text-main)' }}>
                  <Layers size={15} color="var(--brand-gold)" /> Select UI/UX Concept
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                >
                  <X size={16} />
                </button>
              </div>

              {variants.map((v) => {
                const isActive = pathname === v.path;
                return (
                  <Link
                    key={v.path}
                    href={v.path}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '10px',
                      fontSize: '13px',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--brand-gold-text)' : 'var(--text-main)',
                      background: isActive ? 'var(--brand-gold-badge)' : 'var(--bg-surface-alt)',
                      border: isActive ? '1px solid var(--brand-gold-border)' : '1px solid transparent',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700 }}>{v.label}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{v.desc}</div>
                    </div>
                    {isActive && (
                      <span style={{ fontSize: '10px', background: 'var(--brand-gold)', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
                        Active
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>

      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Desktop: Centered bottom pill */
        @media (min-width: 769px) {
          .desktop-variant-bar {
            position: fixed;
            bottom: 16px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 995;
            display: flex;
          }
          .mobile-variant-container {
            display: none !important;
          }
        }

        /* Mobile: Compact bottom-left trigger (completely separate from bottom-right WhatsApp) */
        @media (max-width: 768px) {
          .desktop-variant-bar {
            display: none !important;
          }
          .mobile-variant-container {
            position: fixed;
            bottom: 16px;
            left: 16px;
            z-index: 995;
            display: block;
          }
        }
      `}</style>
    </>
  );
}
