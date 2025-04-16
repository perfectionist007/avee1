// ./src/components/ThemeProvider.jsx
'use client';
import { createContext, useEffect, useState, useContext } from 'react';

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const activeTheme = storedTheme || (prefersDark ? 'dark' : 'light');

    setTheme(activeTheme);
    document.documentElement.classList.toggle('dark', activeTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode: theme === 'dark' }}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
}
