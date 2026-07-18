import { describe, expect, it } from 'vitest';
import { escapeAttr, escapeHtml } from '../src/utils/dom.js';

describe('escapeHtml', () => {
  it('escapes HTML special characters', () => {
    expect(escapeHtml(`<img src=x onerror="alert('xss')">`)).toBe(
      '&lt;img src=x onerror=&quot;alert(&#39;xss&#39;)&quot;&gt;'
    );
  });

  it('handles nullish values', () => {
    expect(escapeHtml(null)).toBe('');
    expect(escapeHtml(undefined)).toBe('');
  });

  it('stringifies non-strings safely', () => {
    expect(escapeHtml(42)).toBe('42');
  });
});

describe('escapeAttr', () => {
  it('escapes quotes for attributes', () => {
    expect(escapeAttr('foo"bar')).toBe('foo&quot;bar');
  });
});
