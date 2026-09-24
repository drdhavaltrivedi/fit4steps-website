'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MessageCircle, Menu, X, ArrowRight, ShieldCheck, HeartPulse } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Desktop navigation links (clean, concise, zero wrapping)
  const desktopLinks = [
    { name: 'Senior & Joint Care', href: '/senior-fitness', isPillar: true },
    { name: 'Services', href: '/services' },
    { name: 'Programs', href: '/programs' },
    { name: 'Trainers', href: '/about/trainers' },
    { name: 'Stories', href: '/success-stories' },
    { name: 'Blog', href: '/blog' },
    { name: 'Locations', href: '/locations' },
    { name: 'Contact', href: '/contact' },
  ];

  // Mobile navigation links (comprehensive with Home)
  const mobileLinks = [
    { name: 'Home', href: '/' },
    { name: 'Senior Citizen & Joint Care', href: '/senior-fitness', badge: 'Lead Pillar' },
    { name: 'In-Home Services Spectrum', href: '/services' },
    { name: 'Specialized Programs', href: '/programs' },
    { name: 'Our Certified Trainers', href: '/about/trainers' },
    { name: 'Client Success Stories', href: '/success-stories' },
    { name: 'Health & Longevity Blog', href: '/blog' },
    { name: 'Frequently Asked Questions (FAQ)', href: '/faq' },
    { name: 'Service Locations (Noida, Delhi, GGN)', href: '/locations' },
    { name: 'Contact & Free Consultation', href: '/contact' },
  ];

  return (
    <>
      {/* Top Banner Notice (Hidden on mobile to eliminate clutter) */}
      <div className="top-banner-bar" style={{
        background: 'var(--topbar-bg)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '6px 0',
        fontSize: '12px',
        color: 'var(--topbar-text)',
        transition: 'background-color 0.25s ease',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'var(--brand-gold)', fontWeight: 700 }}>
              <ShieldCheck size={14} /> Certified In-Home Trainers
            </span>
            <span style={{ opacity: 0.3 }}>|</span>
            <span style={{ display: 'inline-block' }}>Noida HQ (Jaypee Wishtown), South Delhi & Gurugram</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="tel:+919778776136" style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 700, color: 'inherit', textDecoration: 'none' }}>
              <Phone size={12} color="var(--brand-gold)" /> +91 977 877 6136
            </a>
            <a 
              href="https://wa.me/919778776136?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20book%20a%20free%20consultation" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#25d366', fontWeight: 700, textDecoration: 'none' }}
            >
              <MessageCircle size={13} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Clean Sticky Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        transition: 'all 0.2s ease',
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--nav-border)',
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 24px',
          gap: '16px',
        }}>
          {/* Logo (Serves as clean Home link) */}
          <Link
            href="/"
            aria-label="Fit4Steps Home"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: '6px 10px',
              borderRadius: '10px',
              background: '#0b2737', // Always dark navy pill for pristine logo contrast
              boxShadow: 'var(--shadow-sm)',
            }}>
              <img 
                src="/assets/image/logo.svg" 
                alt="Fit4Steps - Your Sustainable Fitness Partner" 
                style={{ height: '32px', width: 'auto', display: 'block' }} 
              />
            </div>
          </Link>

          {/* Desktop Nav Links (Clean, horizontal, zero awkward wrapping) */}
          <nav
            className="desktop-nav-group"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '6px',
              flexShrink: 1,
            }}
          >
            {desktopLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    fontSize: '13.5px',
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? 'var(--brand-gold-text)' : 'var(--text-main)',
                    background: isActive ? 'var(--brand-gold-badge)' : 'transparent',
                    border: isActive ? '1px solid var(--brand-gold-border)' : '1px solid transparent',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    transition: 'all 0.18s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--brand-gold)';
                      e.currentTarget.style.background = 'var(--bg-surface-alt)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-main)';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {link.isPillar && (
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--brand-gold)',
                      display: 'inline-block',
                      marginRight: '2px',
                    }} />
                  )}
                  {link.name}
                  {link.isPillar && (
                    <span style={{
                      fontSize: '9.5px',
                      background: 'var(--brand-gold-badge)',
                      color: 'var(--brand-gold-text)',
                      border: '1px solid var(--brand-gold-border)',
                      padding: '1px 5px',
                      borderRadius: '4px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                    }}>
                      Lead
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Area: Theme Toggle & CTAs */}
          <div
            className="desktop-nav-group"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '10px',
              flexShrink: 0,
            }}
          >
            {/* Sun / Moon Theme Toggle */}
            <ThemeToggle />

            {/* Compact WhatsApp CTA */}
            <a 
              href="https://wa.me/919778776136?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20book%20a%20free%20assessment"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{
                padding: '8px 14px',
                fontSize: '13px',
                whiteSpace: 'nowrap',
              }}
            >
              <MessageCircle size={15} /> WhatsApp
            </a>
            
            {/* Primary Consultation CTA */}
            <Link 
              href="/contact" 
              className="btn btn-primary"
              style={{
                padding: '8px 16px',
                fontSize: '13px',
                whiteSpace: 'nowrap',
              }}
            >
              Book Assessment <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div
            className="mobile-header-actions"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <ThemeToggle />

            {/* Robust Mobile Hamburger Button with 44px tap target */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                minWidth: '44px',
                minHeight: '44px',
                borderRadius: '10px',
                background: mobileMenuOpen ? 'var(--brand-gold-badge)' : 'var(--bg-surface-alt)',
                border: `1.5px solid ${mobileMenuOpen ? 'var(--brand-gold)' : 'var(--border-subtle)'}`,
                color: mobileMenuOpen ? 'var(--brand-gold-text)' : 'var(--text-main)',
                cursor: 'pointer',
                touchAction: 'manipulation',
                outline: 'none',
                transition: 'all 0.2s ease',
              }}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--bg-surface)',
              borderBottom: '2px solid var(--border-medium)',
              padding: '16px 20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              maxHeight: 'calc(100vh - 75px)',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              boxShadow: '0 16px 36px rgba(0, 0, 0, 0.2)',
              zIndex: 1002,
              animation: 'slideDown 0.2s ease-out forwards',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '4px 6px 10px',
              borderBottom: '1px solid var(--border-subtle)',
              marginBottom: '4px',
            }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Navigation Menu
              </span>
              <span style={{ fontSize: '11px', color: 'var(--brand-gold-text)', fontWeight: 600 }}>
                Noida • Delhi • Gurugram
              </span>
            </div>

            {mobileLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '10px',
                    fontSize: '14.5px',
                    fontWeight: 600,
                    color: isActive ? 'var(--brand-gold-text)' : 'var(--text-main)',
                    background: isActive ? 'var(--brand-gold-badge)' : 'var(--bg-surface-alt)',
                    border: isActive ? '1px solid var(--brand-gold-border)' : '1px solid transparent',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span>{link.name}</span>
                  {link.badge ? (
                    <span style={{
                      fontSize: '10.5px',
                      background: 'var(--brand-gold)',
                      color: '#ffffff',
                      padding: '2px 8px',
                      borderRadius: '6px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                    }}>
                      {link.badge}
                    </span>
                  ) : (
                    <ArrowRight size={14} color="var(--text-muted)" />
                  )}
                </Link>
              );
            })}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
              <a
                href="https://wa.me/919778776136?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20book%20a%20free%20assessment"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center', padding: '12px 16px', fontSize: '14px' }}
              >
                <MessageCircle size={18} /> Chat with Satheesan on WhatsApp
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '12px 16px', fontSize: '14px' }}
              >
                Book Doorstep Assessment <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Dim Backdrop Overlay for Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(3px)',
            WebkitBackdropFilter: 'blur(3px)',
            zIndex: 998,
          }}
          aria-hidden="true"
        />
      )}

      <style jsx global>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Breakpoints: Show desktop nav on screens 1024px and above */
        @media (min-width: 1024px) {
          .desktop-nav-group {
            display: flex !important;
          }
          .mobile-header-actions {
            display: none !important;
          }
        }

        @media (max-width: 1023px) {
          .desktop-nav-group {
            display: none !important;
          }
          .mobile-header-actions {
            display: flex !important;
          }
        }

        @media (max-width: 768px) {
          .top-banner-bar {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
