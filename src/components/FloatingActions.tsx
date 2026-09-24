'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <aside
        aria-label="Quick contact and navigation actions"
        className="floating-action-group"
      >
        {/* Scroll to Top button */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--brand-navy)',
              color: 'var(--brand-gold)',
              border: '1px solid var(--border-medium)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-md)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <ArrowUp size={18} />
          </button>
        )}

        {/* Direct Call Button (Desktop only to prevent clutter on mobile) */}
        <a
          href="tel:+919778776136"
          className="desktop-call-btn"
          aria-label="Call Fit4Steps Trainer directly at +91 977 877 6136"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'var(--brand-navy)',
            color: '#ffffff',
            padding: '10px 16px',
            borderRadius: '9999px',
            border: '1px solid var(--border-medium)',
            boxShadow: 'var(--shadow-md)',
            fontSize: '13px',
            fontWeight: 600,
            transition: 'all 0.25s ease',
            textDecoration: 'none',
          }}
        >
          <span style={{
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            background: 'rgba(246, 193, 29, 0.2)',
            color: '#f6c11d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Phone size={14} />
          </span>
          <span>Call +91 97787 76136</span>
        </a>

        {/* WhatsApp Floating Action (Sleek, responsive) */}
        <a
          href="https://wa.me/919778776136?text=Hi%20Fit4Steps,%20I%20would%20like%20to%20inquire%20about%20In-Home%20Personal%20Training%20and%20Joint%20Care"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Fit4Steps on WhatsApp"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #25d366 0%, #16a34a 100%)',
            color: '#ffffff',
            padding: '11px 18px',
            borderRadius: '9999px',
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
            fontSize: '13.5px',
            fontWeight: 700,
            transition: 'all 0.2s ease',
            textDecoration: 'none',
          }}
        >
          <MessageCircle size={18} />
          <span className="whatsapp-text">Chat on WhatsApp</span>
        </a>
      </aside>

      <style jsx global>{`
        .floating-action-group {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 990;
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: flex-end;
        }

        @media (max-width: 768px) {
          .floating-action-group {
            bottom: 16px !important;
            right: 16px !important;
            gap: 8px !important;
          }
          .desktop-call-btn {
            display: none !important;
          }
          .whatsapp-text {
            display: none !important;
          }
          .floating-action-group a {
            padding: 12px !important;
            border-radius: 50% !important;
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.45) !important;
          }
        }
      `}</style>
    </>
  );
}
