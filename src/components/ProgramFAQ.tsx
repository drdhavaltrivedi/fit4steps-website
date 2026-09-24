'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export default function ProgramFAQ({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="theme-card"
            style={{
              padding: '18px 24px',
              borderRadius: '14px',
              cursor: 'pointer',
              border: '1px solid var(--border-subtle)',
              transition: 'all 0.2s ease',
            }}
            onClick={() => setOpenIndex(isOpen ? null : i)}
          >
            <div
              style={{
                fontSize: '16px',
                fontWeight: 700,
                color: 'var(--text-main)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                userSelect: 'none',
              }}
            >
              <span>{faq.q}</span>
              <ChevronDown
                size={18}
                color="var(--brand-gold)"
                style={{
                  flexShrink: 0,
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s ease',
                }}
              />
            </div>
            {isOpen && (
              <p
                style={{
                  marginTop: '14px',
                  fontSize: '14.5px',
                  color: 'var(--text-body)',
                  lineHeight: 1.7,
                  margin: '14px 0 0',
                }}
              >
                {faq.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
