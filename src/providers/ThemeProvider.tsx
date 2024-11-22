import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';
import {usePrefersDark} from '@src/hooks/media-queries/usePrefersDark.ts';

export type AppTheme = 'light' | 'dark';

export interface AppThemeState {
  theme: AppTheme;
  setTheme: Dispatch<SetStateAction<AppTheme>>;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<AppThemeState | null>(null);

export function ThemeProvider({children}: ThemeProviderProps) {
  const prefersDark = usePrefersDark();

  const [theme, setTheme] = useState<AppTheme>(() =>
    prefersDark ? 'dark' : 'light'
  );

  // Does this really need to be memoized?
  const value = useMemo(() => ({theme, setTheme}), [theme]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme() must be used within a <ThemeProvider />');
  }

  const toggle = useCallback(() => {
    context?.setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  }, [context]);

  return {
    // If memoization is required, does this destroy that?
    ...context,
    toggle,
  };
}
