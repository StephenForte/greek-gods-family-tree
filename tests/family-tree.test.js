import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { FamilyTree } from '../src/app/FamilyTree.js';
import { greekGodsData } from '../src/data/gods.js';

function mountDom() {
  document.body.innerHTML = `
    <button id="expandAll" type="button">Expand all</button>
    <button id="collapseAll" type="button">Collapse all</button>
    <button id="resetView" type="button">Reset</button>
    <input id="searchGods" type="search" />
    <p id="searchSummary"></p>
    <div id="generationFilters">
      <button type="button" data-generation="all" aria-pressed="true">All</button>
      <button type="button" data-generation="0" aria-pressed="false">Primordial</button>
      <button type="button" data-generation="2" aria-pressed="false">Titans</button>
      <button type="button" data-generation="3" aria-pressed="false">Olympians</button>
    </div>
    <div id="statusRegion" role="status"></div>
    <div class="family-tree-container">
      <div id="familyTree"></div>
    </div>
    <div id="godModal" class="modal" aria-hidden="true" role="dialog">
      <button type="button" data-close-modal aria-label="Close">×</button>
      <div id="modalContent"></div>
    </div>
  `;
}

describe('FamilyTree UI', () => {
  let app;

  beforeEach(() => {
    mountDom();
    app = new FamilyTree({
      root: document.getElementById('familyTree'),
      modal: document.getElementById('godModal'),
      modalContent: document.getElementById('modalContent'),
      searchInput: document.getElementById('searchGods'),
      statusRegion: document.getElementById('statusRegion'),
      summary: document.getElementById('searchSummary'),
      generationFilters: document.getElementById('generationFilters'),
      data: greekGodsData,
    });
    app.init();
  });

  afterEach(() => {
    app?.destroy();
    document.body.innerHTML = '';
  });

  it('renders corrected generation sections including Olympians', () => {
    const labels = [...document.querySelectorAll('.generation-label')].map((n) => n.textContent);
    expect(labels).toContain('Primordial Void');
    expect(labels).toContain('Titans');
    expect(labels).toContain('Olympians & Kin');
    expect(document.querySelector('[data-god-name="Zeus"]')).not.toBeNull();
    expect(document.querySelector('[data-god-name="Chaos"]')).not.toBeNull();
  });

  it('builds deity cards with text content rather than raw HTML injection', () => {
    const evilData = {
      Evil: {
        name: '<img src=x onerror=alert(1)>',
        title: '<script>alert(1)</script>',
        description: 'Safe description',
        avatar: '⚠️',
        generation: 0,
        children: ['<img src=x onerror=alert(1)>'],
        attributes: { Domain: '<b>hack</b>' },
        mythology: '<svg onload=alert(1)>',
      },
    };

    app.destroy();
    document.body.innerHTML = '';
    mountDom();
    app = new FamilyTree({
      root: document.getElementById('familyTree'),
      modal: document.getElementById('godModal'),
      modalContent: document.getElementById('modalContent'),
      data: evilData,
    });
    app.init();

    const name = document.querySelector('.god-name');
    expect(name.textContent).toBe('<img src=x onerror=alert(1)>');
    expect(document.querySelectorAll('img').length).toBe(0);
    expect(document.querySelectorAll('script').length).toBe(0);

    app.showGodModal(evilData.Evil);
    expect(document.querySelector('.modal-name').textContent).toBe('<img src=x onerror=alert(1)>');
    expect(document.querySelector('.modal-body').innerHTML).not.toContain('<svg');
    expect(document.querySelector('.attribute-value').textContent).toBe('<b>hack</b>');
    expect(document.querySelector('.lineage-missing .attribute-value').textContent).toBe(
      '<img src=x onerror=alert(1)>'
    );
    expect(document.querySelectorAll('img').length).toBe(0);
  });

  it('toggles children for a specific card instance', () => {
    const zeusCard = document.querySelector('[data-god-name="Zeus"]');
    const btn = zeusCard.querySelector('.expand-btn');
    expect(zeusCard.querySelector('.children-container').hidden).toBe(true);

    btn.click();
    expect(zeusCard.classList.contains('expanded')).toBe(true);
    expect(zeusCard.querySelector('.children-container').hidden).toBe(false);
    expect(zeusCard.querySelector('[data-god-name="Athena"]')).not.toBeNull();

    btn.click();
    expect(zeusCard.classList.contains('expanded')).toBe(false);
    expect(zeusCard.querySelector('.children-container').hidden).toBe(true);
  });

  it('filters the tree from search input and updates the summary', () => {
    const input = document.getElementById('searchGods');
    input.value = 'Hestia';
    input.dispatchEvent(new Event('input', { bubbles: true }));

    expect(document.querySelector('[data-god-name="Hestia"]')).not.toBeNull();
    expect(document.querySelector('[data-god-name="Zeus"]')).toBeNull();
    expect(document.getElementById('searchSummary').textContent).toBe('1 deity matches “Hestia”.');
    expect(document.getElementById('statusRegion').textContent).toBe('1 deity matches “Hestia”.');
    expect(document.querySelector('[data-god-name="Hestia"] .god-domain').textContent).toBe('Hearth, home, family');
  });

  it('filters the visible tree to one generation and can reset', () => {
    document.querySelector('[data-generation="2"]').click();

    expect(document.querySelector('[data-god-name="Cronus"]')).not.toBeNull();
    expect(document.querySelector('[data-god-name="Zeus"]')).toBeNull();
    expect(document.querySelector('[data-god-name="Chaos"]')).toBeNull();
    expect(document.querySelector('[data-generation="2"]').getAttribute('aria-pressed')).toBe('true');
    expect(document.querySelector('[data-generation="all"]').getAttribute('aria-pressed')).toBe('false');
    expect(document.getElementById('searchSummary').textContent).toMatch(/in Titans\.$/);

    const input = document.getElementById('searchGods');
    input.value = 'caduceus';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    expect(document.querySelector('[data-god-name="Hermes"]')).toBeNull();
    expect(document.getElementById('searchSummary').textContent).toBe('No deities in Titans match “caduceus”.');
    expect(document.getElementById('statusRegion').textContent).toBe('No deities in Titans match “caduceus”.');

    document.getElementById('resetView').click();
    expect(document.querySelector('[data-god-name="Zeus"]')).not.toBeNull();
    expect(document.querySelector('[data-generation="all"]').classList.contains('is-active')).toBe(true);
  });

  it('opens a recorded parent or child from the detail dialog', () => {
    app.showGodModal(greekGodsData.Zeus);

    const parentNames = [...document.querySelectorAll('.modal-section')].find((section) =>
      section.querySelector('h3')?.textContent === 'Parents'
    );
    expect([...parentNames.querySelectorAll('.lineage-link')].map((button) => button.textContent)).toEqual([
      'Cronus',
      'Rhea',
    ]);

    const athena = [...document.querySelectorAll('.lineage-link')].find((button) => button.textContent === 'Athena');
    athena.click();
    expect(document.getElementById('modal-title').textContent).toBe('Athena');
    expect(document.getElementById('godModal').classList.contains('is-open')).toBe(true);
  });

  it('opens and closes the modal with Escape', () => {
    app.showGodModal(greekGodsData.Apollo);
    expect(document.getElementById('godModal').classList.contains('is-open')).toBe(true);
    expect(document.getElementById('modal-title').textContent).toBe('Apollo');

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(document.getElementById('godModal').classList.contains('is-open')).toBe(false);
  });

  it('expand all only expands deities that have children', () => {
    document.getElementById('expandAll').click();
    const expanded = document.querySelectorAll('.god-card.expanded');
    expect(expanded.length).toBeGreaterThan(0);
    const hestia = document.querySelector('[data-god-name="Hestia"]');
    expect(hestia.classList.contains('expanded')).toBe(false);
  });
});
