'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export default function ProgramFAQ({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="card-clean"
          style={{
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: openIndex === i ? '1px solid var(--brand-gold)' : undefined,
          }}
          onClick={() => setOpenIndex(openIndex === i ? null : i)}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
              <HelpCircle size={18} color="var(--brand-gold)" style={{ flexShrink: 0 }} />
              <h3 style={{
                fontSize: '15px',
                fontWeight: 700,
                color: 'var(--text-main)',
                margin: 0,
                lineHeight: 1.4,
              }}>
                {faq.q}
              </h3>
            </div>
            <ChevronDown
              size={18}
              color="var(--text-muted)"
              style={{
                flexShrink: 0,
                transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
              }}
            />
          </div>
          {openIndex === i && (
            <p style={{
              fontSize: '14px',
              color: 'var(--text-body)',
              lineHeight: 1.7,
              margin: '12px 0 0 28px',
            }}>
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
