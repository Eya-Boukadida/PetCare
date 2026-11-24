import { describe, expect, it } from 'vitest';
import { exercises } from '@/lib/training';
import { humanAge } from '@/lib/petcare';
describe('Preserved training catalogue',()=>{
 it('retains every dog exercise and its five steps',()=>{const dog=exercises.filter(e=>e.species==='dog');expect(dog.map(e=>e.id)).toEqual(['basics','sit','down','stay','come','heel','high-five']);expect(dog.map(e=>e.steps.length)).toEqual([5,5,5,5,5,5,5]);});
 it('retains every cat exercise and all original steps',()=>{const cat=exercises.filter(e=>e.species==='cat');expect(cat.map(e=>e.id)).toEqual(['basics','come','touch','sit','high-five','carrier']);expect(cat.map(e=>e.steps.length)).toEqual([5,5,5,5,4,5]);});
 it('assigns one unique real asset to each of the 64 steps',()=>{const steps=exercises.flatMap(e=>e.steps);expect(steps).toHaveLength(64);expect(new Set(steps.map(s=>s.image)).size).toBe(64);for(const s of steps)expect(s.image).toMatch(/^\/__l5e\/assets-v1\/.+\.webp$/);});
});
describe('Original calculator',()=>{it('preserves dog conversion',()=>{expect(humanAge('dog',1)).toBe(15);expect(humanAge('dog',2)).toBe(24);expect(humanAge('dog',4)).toBe(34);});it('preserves cat conversion',()=>{expect(humanAge('cat',.5)).toBe(8);expect(humanAge('cat',2)).toBe(24);expect(humanAge('cat',4)).toBe(32);});});
