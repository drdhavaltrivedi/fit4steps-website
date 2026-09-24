'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read from localStorage or default to 'light'
    const savedTheme = localStorage.getItem('fit4steps-theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'light';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('fit4steps-theme', nextTheme);
  };

  if (!mounted) {
    return (
      <div style={{ width: '38px', height: '38px' }} />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: theme === 'light' ? '#f1f5f9' : '#1e384b',
        border: theme === 'light' ? '1px solid #cbd5e1' : '1px solid rgba(246, 193, 29, 0.4)',
        color: 'var(--text-main)',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: theme === 'dark' ? '0 0 12px rgba(246, 193, 29, 0.15)' : 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {theme === 'light' ? (
        <Moon size={19} color="#0b2737" strokeWidth={2.2} />
      ) : (
        <Sun size={20} color="#f6c11d" strokeWidth={2.2} />
      )}
    </button>
  );
}

