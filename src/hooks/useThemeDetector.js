import { useEffect, useState } from 'react';

const useThemeDetector = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Check for Material-UI theme
  const getMuiTheme = () => {
    if (typeof window !== 'undefined') {
      const muiTheme = document.documentElement.getAttribute('data-mui-theme');
      return muiTheme === 'dark';
    }
    return false;
  };

  // Check for system preference
  const getSystemTheme = () => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  };

  // Check for Tailwind dark mode
  const getTailwindTheme = () => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  };

  // Update state when theme changes
  const updateTheme = () => {
    const darkMode = getMuiTheme() || getSystemTheme() || getTailwindTheme();
    setIsDarkTheme(darkMode);
  };

  useEffect(() => {
    // Initial check
    updateTheme();

    // Set up system theme change listener
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateTheme);

    // Set up MutationObserver to detect class changes on html element
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { 
      attributes: true,
      attributeFilter: ['class', 'data-mui-theme']
    });

    return () => {
      mediaQuery.removeEventListener('change', updateTheme);
      observer.disconnect();
    };
  }, []);

  return isDarkTheme;
};

export default useThemeDetector;
