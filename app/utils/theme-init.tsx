// utils/theme-init.tsx
export function ThemeInitScript() {
  const codeToRunOnClient = `
   export function getInitialTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'light'; // SSR fallback

  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return stored === 'dark' || (!stored && prefersDark) ? 'dark' : 'light';
}
  `;

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
}
