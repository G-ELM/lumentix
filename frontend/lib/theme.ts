export type Theme = 'light' | 'dark';

export function toggleColorTheme(current: Theme): Theme {
  return current === 'light' ? 'dark' : 'light';
}

export function toggleTheme(current?: Theme): Theme {
  const active = current ?? getSavedTheme();
  const next = active === 'light' ? 'dark' : 'light';
  persistThemePreference(next);
  applyThemeTokens(next);
  return next;
}

export function persistThemePreference(theme: Theme): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }
}

export function applyThemeTokens(theme: Theme): void {
  if (typeof window !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    if (theme === 'dark') {
      document.documentElement.style.setProperty('--bg-primary', '#0f172a');
      document.documentElement.style.setProperty('--text-primary', '#f8fafc');
      document.documentElement.style.setProperty('--border-color', '#334155');
      document.documentElement.style.setProperty('--card-bg', '#1e293b');
    } else {
      document.documentElement.style.setProperty('--bg-primary', '#ffffff');
      document.documentElement.style.setProperty('--text-primary', '#0f172a');
      document.documentElement.style.setProperty('--border-color', '#e2e8f0');
      document.documentElement.style.setProperty('--card-bg', '#ffffff');
    }
  }
}

export function applyDarkThemeStyles(theme: Theme): void {
  applyThemeTokens(theme);
}

export function getSavedTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  return (localStorage.getItem('theme') as Theme) ?? 'light';
}

