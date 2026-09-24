'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  X,
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Phone,
  ShieldCheck,
  Heart,
  Home,
  Tag,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export interface FAQItem {
  id: string;
  q: string;
  a: string;
  category: string;
  badge?: string;
  highlight?: boolean;
}

export interface FAQCategory {
  id: string;
  label: string;
  iconName: 'home' | 'heart' | 'shield' | 'pricing' | 'map';
  description: string;
}

interface FAQAccordionClientProps {
  categories: FAQCategory[];
  faqs: FAQItem[];
}

export default function FAQAccordionClient({ categories, faqs }: FAQAccordionClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<Set<string>>(new Set([faqs[0]?.id || '']));

  // Toggle single item
  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Expand all / Collapse all
  const areAllExpanded = useMemo(() => {
    return faqs.length > 0 && openIds.size >= faqs.length;
  }, [openIds, faqs]);

  const toggleAll = () => {
    if (areAllExpanded) {
      setOpenIds(new Set());
    } else {
      setOpenIds(new Set(faqs.map((f) => f.id)));
    }
  };

  // Filtered FAQs based on category & search query
  const filteredFAQs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      return (
        faq.q.toLowerCase().includes(q) ||
        faq.a.toLowerCase().includes(q) ||
        faq.badge?.toLowerCase().includes(q)
      );
    });
  }, [faqs, activeCategory, searchQuery]);

  // Group filtered faqs by category if viewing all
  const groupedFAQs = useMemo(() => {
    if (activeCategory !== 'all') {
      const cat = categories.find((c) => c.id === activeCategory);
      return [
        {
          category: cat || { id: activeCategory, label: 'Questions', description: '', iconName: 'home' as const },
          items: filteredFAQs,
        },
      ];
    }

    const groups: { category: FAQCategory; items: FAQItem[] }[] = [];
    categories.forEach((cat) => {
      const items = filteredFAQs.filter((f) => f.category === cat.id);
      if (items.length > 0) {
        groups.push({ category: cat, items });
      }
    });
    return groups;
  }, [filteredFAQs, activeCategory, categories]);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Home size={16} />;
      case 'heart':
        return <Heart size={16} />;
      case 'shield':
        return <ShieldCheck size={16} />;
      case 'pricing':
        return <Tag size={16} />;
      case 'map':
        return <MapPin size={16} />;
      default:
        return <HelpCircle size={16} />;
    }
  };

  return (
    <div>
      {/* SEARCH & FILTER CONTROLS */}
      <div style={{ maxWidth: '880px', margin: '0 auto 40px auto' }}>
        {/* Search Bar */}
        <div
          style={{
            position: 'relative',
            marginBottom: '24px',
            background: 'var(--bg-surface)',
            borderRadius: '16px',
            border: '1.5px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            padding: '4px 16px',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          }}
        >
          <Search size={20} color="var(--brand-gold)" style={{ flexShrink: 0, marginRight: '12px' }} />
          <input
            type="text"
            placeholder="Search questions (e.g. knee pain, equipment, female trainer, trial, pricing)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              border: 'none',
              background: 'transparent',
              padding: '14px 0',
              fontSize: '15.5px',
              color: 'var(--text-main)',
              outline: 'none',
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
              style={{
                background: 'var(--bg-surface-alt)',
                border: 'none',
                borderRadius: '50%',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-muted)',
              }}
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Category Pills Bar */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
          }}
        >
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
            <button
              onClick={() => setActiveCategory('all')}
              style={{
                padding: '9px 18px',
                borderRadius: '30px',
                fontSize: '13.5px',
                fontWeight: 600,
                border: activeCategory === 'all' ? '1.5px solid var(--brand-gold)' : '1px solid var(--border-subtle)',
                background: activeCategory === 'all' ? 'var(--brand-navy)' : 'var(--bg-surface)',
                color: activeCategory === 'all' ? '#ffffff' : 'var(--text-main)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease',
              }}
            >
              <Sparkles size={14} color={activeCategory === 'all' ? 'var(--brand-gold)' : 'var(--text-muted)'} />
              All Topics ({faqs.length})
            </button>

            {categories.map((cat) => {
              const count = faqs.filter((f) => f.category === cat.id).length;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '9px 18px',
                    borderRadius: '30px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    border: isActive ? '1.5px solid var(--brand-gold)' : '1px solid var(--border-subtle)',
                    background: isActive ? 'var(--brand-navy)' : 'var(--bg-surface)',
                    color: isActive ? '#ffffff' : 'var(--text-main)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span style={{ color: isActive ? 'var(--brand-gold)' : 'var(--text-muted)', display: 'flex' }}>
                    {getCategoryIcon(cat.iconName)}
                  </span>
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>

          {/* Expand/Collapse Toggle */}
          <button
            onClick={toggleAll}
            style={{
              padding: '8px 14px',
              borderRadius: '8px',
              fontSize: '12.5px',
              fontWeight: 600,
              background: 'transparent',
              border: '1px solid var(--border-medium)',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            {areAllExpanded ? 'Collapse All' : 'Expand All'}
          </button>
        </div>

        {searchQuery && (
          <div style={{ fontSize: '13.5px', color: 'var(--text-muted)', padding: '4px 0' }}>
            Found <strong>{filteredFAQs.length}</strong> matching questions for &ldquo;{searchQuery}&rdquo;
          </div>
        )}
      </div>

      {/* ACCORDION GROUPS */}
      <div style={{ maxWidth: '880px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '42px' }}>
        {groupedFAQs.length === 0 ? (
          <div
            className="theme-card"
            style={{
              padding: '48px 24px',
              textAlign: 'center',
              borderRadius: '16px',
            }}
          >
            <HelpCircle size={44} color="var(--brand-gold)" style={{ margin: '0 auto 16px auto' }} />
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
              No matching questions found
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto 20px auto' }}>
              We could not find answers matching &ldquo;{searchQuery}&rdquo;. Master Coach Satheesan is available on WhatsApp to answer your specific inquiry immediately.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="btn btn-outline"
                style={{ fontSize: '13.5px', padding: '10px 20px' }}
              >
                Clear Search
              </button>
              <a
                href={`https://wa.me/919999448206?text=${encodeURIComponent(
                  `Hi Fit4Steps, I had a question about: "${searchQuery}"`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ fontSize: '13.5px', padding: '10px 20px' }}
              >
                <MessageCircle size={16} /> Ask on WhatsApp
              </a>
            </div>
          </div>
        ) : (
          groupedFAQs.map((group, groupIdx) => (
            <div key={groupIdx}>
              {/* Category Header */}
              {activeCategory === 'all' && (
                <div style={{ marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'var(--brand-gold-soft)',
                      color: 'var(--brand-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getCategoryIcon(group.category.iconName)}
                  </div>
                  <div>
                    <h2
                      style={{
                        fontSize: '20px',
                        fontWeight: 800,
                        color: 'var(--text-main)',
                        margin: 0,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {group.category.label}
                    </h2>
                    {group.category.description && (
                      <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '2px 0 0 0' }}>
                        {group.category.description}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Items Accordion List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {group.items.map((item) => {
                  const isOpen = openIds.has(item.id);
                  return (
                    <div
                      key={item.id}
                      className="theme-card"
                      style={{
                        borderRadius: '16px',
                        border: isOpen ? '1.5px solid var(--brand-gold)' : '1px solid var(--border-subtle)',
                        boxShadow: isOpen
                          ? '0 8px 24px rgba(201, 117, 8, 0.09)'
                          : 'var(--card-shadow)',
                        background: 'var(--card-bg)',
                        overflow: 'hidden',
                        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                        transform: 'none', // override translateY on accordion
                      }}
                    >
                      {/* Accordion Header / Button */}
                      <button
                        onClick={() => toggleFAQ(item.id)}
                        aria-expanded={isOpen}
                        style={{
                          width: '100%',
                          padding: '20px 24px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '18px',
                          textAlign: 'left',
                          background: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          outline: 'none',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                          {item.badge && (
                            <span
                              style={{
                                fontSize: '11px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.04em',
                                fontWeight: 700,
                                background: 'var(--brand-gold-soft)',
                                color: 'var(--brand-gold-text)',
                                padding: '3px 8px',
                                borderRadius: '6px',
                                flexShrink: 0,
                              }}
                            >
                              {item.badge}
                            </span>
                          )}
                          <span
                            style={{
                              fontSize: '16.5px',
                              fontWeight: 700,
                              color: isOpen ? 'var(--brand-gold)' : 'var(--text-main)',
                              lineHeight: 1.45,
                              transition: 'color 0.2s ease',
                            }}
                          >
                            {item.q}
                          </span>
                        </div>

                        {/* Animated Chevron Indicator */}
                        <div
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            background: isOpen ? 'var(--brand-gold)' : 'var(--bg-surface-alt)',
                            color: isOpen ? '#ffffff' : 'var(--text-muted)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s ease, color 0.2s ease',
                          }}
                        >
                          <ChevronDown size={17} />
                        </div>
                      </button>

                      {/* Accordion Answer Content */}
                      {isOpen && (
                        <div
                          style={{
                            padding: '0 24px 22px 24px',
                            borderTop: '1px solid var(--border-subtle)',
                            paddingTop: '16px',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '15px',
                              color: 'var(--text-body)',
                              lineHeight: 1.75,
                              margin: '0 0 16px 0',
                            }}
                          >
                            {item.a}
                          </p>

                          {/* Quick Inquiry Footer */}
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              flexWrap: 'wrap',
                              gap: '10px',
                              paddingTop: '12px',
                              borderTop: '1px dashed var(--border-subtle)',
                              fontSize: '13px',
                            }}
                          >
                            <span style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                              <CheckCircle2 size={14} color="#16a34a" /> Verified clinical protocol
                            </span>
                            <a
                              href={`https://wa.me/919999448206?text=${encodeURIComponent(
                                `Hi Fit4Steps, I have a specific question about: "${item.q}"`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: 'var(--brand-gold)',
                                fontWeight: 600,
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                              }}
                            >
                              Need further details? Ask on WhatsApp <ArrowRight size={13} />
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
