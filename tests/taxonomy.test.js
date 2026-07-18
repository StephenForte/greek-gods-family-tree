import { describe, expect, it } from 'vitest';
import { greekGodsData } from '../src/data/gods.js';
import {
  classifyChild,
  deitiesWithChildren,
  groupChildrenByType,
  resolveChildren,
  searchDeities,
} from '../src/utils/taxonomy.js';

describe('classifyChild', () => {
  it('classifies olympians, minor deities, heroes, and unknowns', () => {
    expect(classifyChild('Athena', greekGodsData)).toBe('Olympian Children');
    expect(classifyChild('Persephone', greekGodsData)).toBe('Minor Deities');
    expect(classifyChild('Heracles', greekGodsData)).toBe('Heroes & Mortals');
    expect(classifyChild('Tartarus', greekGodsData)).toBe('Other Offspring');
  });
});

describe('groupChildrenByType', () => {
  it('groups Zeus children and omits empty buckets', () => {
    const groups = groupChildrenByType(greekGodsData.Zeus.children, greekGodsData);
    expect(Object.keys(groups)).toEqual(['Olympian Children', 'Minor Deities', 'Heroes & Mortals']);
    expect(groups['Olympian Children']).toContain('Athena');
    expect(groups['Heroes & Mortals']).toContain('Heracles');
    expect(groups['Minor Deities']).toContain('Persephone');
  });
});

describe('searchDeities', () => {
  it('returns all deities for empty query', () => {
    expect(searchDeities(greekGodsData, '')).toHaveLength(Object.keys(greekGodsData).length);
  });

  it('filters by name and domain text', () => {
    const byName = searchDeities(greekGodsData, 'zeus');
    expect(byName.some((g) => g.name === 'Zeus')).toBe(true);

    const byDomain = searchDeities(greekGodsData, 'underworld');
    expect(byDomain.map((g) => g.name)).toEqual(expect.arrayContaining(['Hades', 'Persephone']));
  });

  it('does not match parents solely because they list a child', () => {
    const apolloMatches = searchDeities(greekGodsData, 'Apollo').map((g) => g.name);
    expect(apolloMatches).toContain('Apollo');
    expect(apolloMatches).not.toContain('Zeus');

    const hestiaMatches = searchDeities(greekGodsData, 'Hestia').map((g) => g.name);
    expect(hestiaMatches).toEqual(['Hestia']);
  });
});

describe('deitiesWithChildren', () => {
  it('excludes childless deities like Hestia', () => {
    const names = deitiesWithChildren(greekGodsData);
    expect(names).toContain('Zeus');
    expect(names).not.toContain('Hestia');
  });
});

describe('resolveChildren', () => {
  it('returns known records and placeholders', () => {
    const resolved = resolveChildren(['Athena', 'Tartarus'], greekGodsData);
    expect(resolved[0]).toMatchObject({ kind: 'known', deity: { name: 'Athena' } });
    expect(resolved[1]).toMatchObject({
      kind: 'placeholder',
      deity: { name: 'Tartarus', title: 'Unknown Deity' },
    });
  });
});
