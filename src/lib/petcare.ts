import { useEffect, useState } from 'react';
export function useLocalState<T>(key: string, initial: T) {
  const [value,setValue] = useState<T>(initial);
  const [ready,setReady] = useState(false);
  const [storageError,setStorageError] = useState(false);
  useEffect(() => { try { const saved=localStorage.getItem(key); if(saved) setValue(JSON.parse(saved) as T); } catch { setStorageError(true); } setReady(true); },[key]);
  useEffect(() => { if(ready) { try { localStorage.setItem(key,JSON.stringify(value)); } catch { setStorageError(true); } } },[key,value,ready]);
  return [value,setValue,storageError] as const;
}
export const pageHead = (title: string, description: string) => ({meta:[{title:`${title} · PetCare`},{name:'description',content:description},{property:'og:title',content:`${title} · PetCare`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]});
export function humanAge(species: string, years: number) { return Math.round(years<=1?years*15:years<=2?15+(years-1)*9:24+(years-2)*(species==='dog'?5:4)); }
export function localDay() { const d=new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
