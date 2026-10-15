'use client';
import { useState, useEffect } from 'react';
import { Theme, toggleColorTheme, persistThemePreference, applyDarkThemeStyles, getSavedTheme } from '../lib/theme';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const saved = getSavedTheme();
    setTheme(saved);
    applyDarkThemeStyles(saved);
  }, []);

  const toggleTheme = () => {
    const next = toggleColorTheme(theme);
    setTheme(next);
    persistThemePreference(next);
    applyDarkThemeStyles(next);
  };

  return { theme, toggleTheme };
}
