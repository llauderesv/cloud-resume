import {useEffect, useState} from 'react';

type theme = 'light' | 'dark';

const THEME_KEY = 'theme_vince';

export default function usePageTheme() {
  const [theme, setTheme] = useState<theme>(
    (localStorage.getItem(THEME_KEY) as theme) ?? 'light',
  );

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return {theme, toggleTheme};
}
