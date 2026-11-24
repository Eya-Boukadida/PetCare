import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import dict from '@/lib/i18n-dict.json';
export type Lang = 'fr' | 'en' | 'ar';
export const languages: { code: Lang; label: string }[] = [{ code: 'fr', label: 'FR' }, { code: 'en', label: 'EN' }, { code: 'ar', label: 'ع' }];
const table = dict as Record<string, Partial<Record<Lang, string>>>;
export function translate(lang: Lang, s: string): string { return table[s]?.[lang] ?? s; }
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (s: string) => string }>({ lang: 'fr', setLang: () => {}, t: (s) => translate('fr', s) });
export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr');
  useEffect(() => { try { const v = localStorage.getItem('petcare-lang'); if (v === 'en' || v === 'ar' || v === 'fr') setLangState(v); } catch { /* ignore */ } }, []);
  useEffect(() => { document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'; }, [lang]);
  const setLang = (l: Lang) => { setLangState(l); try { localStorage.setItem('petcare-lang', l); } catch { /* ignore */ } };
  return <Ctx.Provider value={{ lang, setLang, t: (s) => translate(lang, s) }}>{children}</Ctx.Provider>;
}
export const useI18n = () => useContext(Ctx);
export const dateLocale = (l: Lang) => (l === 'ar' ? 'ar-TN' : l === 'en' ? 'en-GB' : 'fr-FR');
