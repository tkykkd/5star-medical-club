import {createContext, useCallback, useContext, useMemo, useSyncExternalStore} from 'react';

export type Locale = 'th' | 'ja';

const STORAGE_KEY = '5smc-locale';

type Listener = () => void;
let memoryLocale: Locale = 'th';
const listeners = new Set<Listener>();

function readStoredLocale(): Locale {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'ja' || v === 'th') return v;
  } catch {
    /* ignore */
  }
  return 'th';
}

function getLocaleSnapshot(): Locale {
  if (typeof window === 'undefined') return memoryLocale;
  memoryLocale = readStoredLocale();
  return memoryLocale;
}

function subscribeLocale(cb: Listener) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function setStoredLocale(next: Locale) {
  memoryLocale = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* ignore */
  }
  document.documentElement.lang = next === 'ja' ? 'ja' : 'th';
  listeners.forEach((l) => l());
}

type I18nValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({children}: {children: React.ReactNode}) {
  const locale = useSyncExternalStore(subscribeLocale, getLocaleSnapshot, () => 'th');

  const setLocale = useCallback((l: Locale) => {
    setStoredLocale(l);
  }, []);

  const value = useMemo(() => ({locale, setLocale}), [locale, setLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

export function useLocale(): Locale {
  return useI18n().locale;
}
