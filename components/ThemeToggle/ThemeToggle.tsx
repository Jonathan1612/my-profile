'use client';

import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    const prefersDark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(prefersDark);
  }, []);

 useEffect(() => {
  const html = document.documentElement;
  if (darkMode) {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}, [darkMode]);

  if (!mounted) return null;

  return (
    <button
      className="theme-toggle"
      onClick={() => setDarkMode(prev => !prev)}
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '0.5rem 1rem',
        fontSize: '24px',
        display: 'flex',
        alignItems: 'center',
        color: 'inherit',
      }}
      aria-label="Toggle dark mode"
    >
      <span className="material-symbols-outlined" style={{ transition: '0.3s' }}>
        {darkMode ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;
