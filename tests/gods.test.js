import { describe, expect, it } from 'vitest';
import {
  GENERATION_META,
  assertDeityShape,
  getDeity,
  getGodsByGeneration,
  greekGodsData,
} from '../src/data/gods.js';

describe('greekGodsData integrity', () => {
  it('has valid shapes for every deity', () => {
    for (const [key, deity] of Object.entries(greekGodsData)) {
      expect(() => assertDeityShape(deity, key)).not.toThrow();
      expect(deity.name).toBe(key);
    }
  });

  it('maps generations to the corrected labels', () => {
    expect(getGodsByGeneration(greekGodsData, 0).map((g) => g.name)).toEqual(['Chaos']);
    expect(getGodsByGeneration(greekGodsData, 1).map((g) => g.name).sort()).toEqual(['Gaia', 'Uranus']);
    expect(getGodsByGeneration(greekGodsData, 2).map((g) => g.name).sort()).toEqual(['Cronus', 'Rhea']);
    expect(getGodsByGeneration(greekGodsData, 3).length).toBeGreaterThan(10);
    expect(GENERATION_META.find((g) => g.level === 2).label).toBe('Titans');
    expect(GENERATION_META.find((g) => g.level === 3).label).toBe('Olympians & Kin');
  });

  it('references only string children and resolves known olympian parents', () => {
    const zeus = getDeity(greekGodsData, 'Zeus');
    expect(zeus.children.every((name) => typeof name === 'string')).toBe(true);
    expect(getDeity(greekGodsData, 'Athena')).not.toBeNull();
    expect(getDeity(greekGodsData, '')).toBeNull();
  });
});
