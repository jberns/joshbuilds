import { createContext, useEffect, useState } from 'react';

const LOCAL_THEME_KEY = 'LOCAL_THEME_KEY';

export enum ETheme {
  Light = 'light',
  Dark = 'dark',
}

interface IThemeProvider {
  children: React.ReactNode;
}

interface IThemeContext {
  theme: ETheme | null;
  setTheme: (theme: ETheme) => void;
}

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    if (
      window.localStorage[LOCAL_THEME_KEY] === ETheme.Dark ||
      (!('color-theme' in window.localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      return ETheme.Dark;
    } else {
      return ETheme.Light;
    }
  } else {
    return null;
  }
};

//@ts-ignore
const ThemeContext = createContext<IThemeContext>();

const ThemeProvider = ({ children }: IThemeProvider) => {
  const [theme, rawSetTheme] = useState<ETheme | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const root = window.document.documentElement.classList;
      const initialThemeValue = getInitialTheme();

      if (initialThemeValue != null) {
        rawSetTheme(initialThemeValue);
        root.add(initialThemeValue);
      }
    }
  }, []);

  const setTheme = (theme: ETheme | null) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const root = window.document.documentElement.classList;
      rawSetTheme(theme);
      if (theme === ETheme.Dark) {
        root.add(theme);
        window.localStorage[LOCAL_THEME_KEY] = theme;
      } else {
        root.remove(ETheme.Dark);
        window.localStorage[LOCAL_THEME_KEY] = theme;
      }
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
