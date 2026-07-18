import { GENERATION_META, getDeity, getGodsByGeneration, greekGodsData } from '../data/gods.js';
import { el, focusFirstFocusable, trapFocus } from '../utils/dom.js';
import { groupChildrenByType, resolveChildren, searchDeities } from '../utils/taxonomy.js';

let instanceCounter = 0;

export class FamilyTree {
  /**
   * @param {object} options
   * @param {HTMLElement} options.root - #familyTree container
   * @param {HTMLElement} options.modal - dialog/modal root
   * @param {HTMLElement} options.modalContent - modal body host
   * @param {HTMLElement} [options.searchInput]
   * @param {HTMLElement} [options.statusRegion] - live region for announcements
   * @param {object} [options.data]
   */
  constructor({ root, modal, modalContent, searchInput = null, statusRegion = null, data = greekGodsData }) {
    if (!root || !modal || !modalContent) {
      throw new Error('FamilyTree requires root, modal, and modalContent elements');
    }

    this.data = data;
    this.root = root;
    this.modal = modal;
    this.modalContent = modalContent;
    this.searchInput = searchInput;
    this.statusRegion = statusRegion;
    this.expandedNodes = new Set();
    this.filterQuery = '';
    this.lastFocused = null;
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onDocumentClick = this._onDocumentClick.bind(this);
  }

  init() {
    this.setupEventListeners();
    this.render();
    this.announce(`${Object.keys(this.data).length} deities loaded. Explore the lineage.`);
  }

  setupEventListeners() {
    document.getElementById('expandAll')?.addEventListener('click', () => this.expandAll());
    document.getElementById('collapseAll')?.addEventListener('click', () => this.collapseAll());
    document.getElementById('resetView')?.addEventListener('click', () => this.resetView());

    this.modal.querySelector('[data-close-modal]')?.addEventListener('click', () => this.closeModal());
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.closeModal();
    });

    document.addEventListener('keydown', this._onKeyDown);

    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.filterQuery = e.target.value;
        this.render();
        const matches = searchDeities(this.data, this.filterQuery).length;
        this.announce(
          this.filterQuery.trim()
            ? `${matches} ${matches === 1 ? 'deity' : 'deities'} match “${this.filterQuery.trim()}”.`
            : 'Filter cleared. Showing all generations.'
        );
      });
    }
  }

  destroy() {
    document.removeEventListener('keydown', this._onKeyDown);
    document.removeEventListener('click', this._onDocumentClick);
  }

  _onKeyDown(e) {
    if (e.key === 'Escape' && this.isModalOpen()) {
      e.preventDefault();
      this.closeModal();
      return;
    }
    if (this.isModalOpen()) {
      trapFocus(this.modal, e);
    }
  }

  _onDocumentClick() {
    // reserved for future popover dismissals
  }

  isModalOpen() {
    return this.modal.classList.contains('is-open') || this.modal.getAttribute('aria-hidden') === 'false';
  }

  announce(message) {
    if (!this.statusRegion) return;
    this.statusRegion.textContent = message;
  }

  render() {
    this.root.replaceChildren();
    this.expandedNodes.clear();

    const matches = new Set(searchDeities(this.data, this.filterQuery).map((g) => g.name));
    const hasFilter = Boolean(this.filterQuery.trim());

    const tree = el('div', { className: 'tree-stack', attrs: { role: 'tree', 'aria-label': 'Greek gods family tree' } });

    for (const meta of GENERATION_META) {
      const gods = getGodsByGeneration(this.data, meta.level).filter((god) => !hasFilter || matches.has(god.name));
      if (gods.length === 0) continue;
      tree.appendChild(this.createGeneration(meta, gods));
    }

    if (!tree.childElementCount) {
      tree.appendChild(
        el('p', {
          className: 'empty-state',
          text: 'No deities match your search. Try another name or domain.',
          attrs: { role: 'status' },
        })
      );
    }

    this.root.appendChild(tree);
  }

  createGeneration(meta, gods) {
    const section = el('section', {
      className: 'generation fade-in',
      attrs: {
        'aria-labelledby': `gen-label-${meta.level}`,
      },
    });

    const header = el('header', { className: 'generation-header' }, [
      el('h2', {
        className: 'generation-label',
        text: meta.label,
        attrs: { id: `gen-label-${meta.level}` },
      }),
      el('p', { className: 'generation-desc', text: meta.description }),
    ]);

    const row = el('div', { className: 'gods-row', attrs: { role: 'group', 'aria-label': meta.label } });
    for (const god of gods) {
      row.appendChild(this.createGodCard(god));
    }

    section.append(header, row);
    return section;
  }

  createGodCard(god, { nested = false } = {}) {
    const instanceId = `god-${++instanceCounter}`;
    const hasChildren = Array.isArray(god.children) && god.children.length > 0;
    const isPlaceholder = god.generation === -1;

    const card = el('article', {
      className: `god-card${nested ? ' god-card--nested' : ''}${isPlaceholder ? ' god-card--placeholder' : ''}`,
      dataset: { godName: god.name, instanceId },
      attrs: {
        tabindex: '0',
        role: 'treeitem',
        'aria-expanded': hasChildren ? 'false' : undefined,
        'aria-label': `${god.name}, ${god.title}`,
      },
    });

    const avatar = el('div', { className: 'god-avatar', attrs: { 'aria-hidden': 'true' }, text: god.avatar });
    const name = el('h3', { className: 'god-name', text: god.name });
    const title = el('p', { className: 'god-title', text: god.title });
    const description = el('p', { className: 'god-description', text: god.description });

    card.append(avatar, name, title, description);

    const childrenContainer = el('div', {
      className: 'children-container',
      attrs: {
        id: `children-${instanceId}`,
        hidden: '',
        role: 'group',
        'aria-label': `Children of ${god.name}`,
      },
    });

    if (hasChildren && !isPlaceholder) {
      const expandBtn = el('button', {
        className: 'expand-btn',
        attrs: {
          type: 'button',
          'aria-controls': `children-${instanceId}`,
          'aria-expanded': 'false',
        },
        on: {
          click: (e) => {
            e.stopPropagation();
            this.toggleChildren(card, god);
          },
        },
      });
      expandBtn.append(
        el('span', { className: 'expand-btn__icon', attrs: { 'aria-hidden': 'true' }, text: '▾' }),
        document.createTextNode(` Show children (${god.children.length})`)
      );
      card.append(expandBtn, childrenContainer);
    } else if (!isPlaceholder) {
      card.appendChild(el('p', { className: 'no-children', text: 'No children recorded' }));
    }

    const openDetails = () => {
      if (!isPlaceholder) this.showGodModal(god);
    };

    card.addEventListener('click', (e) => {
      if (e.target.closest('.expand-btn') || e.target.closest('.children-container')) return;
      openDetails();
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.closest('.expand-btn')) return;
        e.preventDefault();
        openDetails();
      }
    });

    return card;
  }

  toggleChildren(card, god) {
    const instanceId = card.dataset.instanceId;
    const childrenContainer = card.querySelector('.children-container');
    const expandBtn = card.querySelector('.expand-btn');
    if (!childrenContainer || !expandBtn) return;

    const isExpanded = this.expandedNodes.has(instanceId);

    if (isExpanded) {
      childrenContainer.hidden = true;
      childrenContainer.replaceChildren();
      card.classList.remove('expanded');
      card.setAttribute('aria-expanded', 'false');
      expandBtn.setAttribute('aria-expanded', 'false');
      expandBtn.replaceChildren(
        el('span', { className: 'expand-btn__icon', attrs: { 'aria-hidden': 'true' }, text: '▾' }),
        document.createTextNode(` Show children (${god.children.length})`)
      );
      this.expandedNodes.delete(instanceId);
      this.announce(`Collapsed children of ${god.name}.`);
    } else {
      this.renderChildren(god, childrenContainer);
      childrenContainer.hidden = false;
      card.classList.add('expanded');
      card.setAttribute('aria-expanded', 'true');
      expandBtn.setAttribute('aria-expanded', 'true');
      expandBtn.replaceChildren(
        el('span', { className: 'expand-btn__icon', attrs: { 'aria-hidden': 'true' }, text: '▴' }),
        document.createTextNode(` Hide children (${god.children.length})`)
      );
      this.expandedNodes.add(instanceId);
      this.announce(`Expanded children of ${god.name}.`);
    }
  }

  renderChildren(parentGod, container) {
    container.replaceChildren();
    const groups = groupChildrenByType(parentGod.children, this.data);

    for (const [type, children] of Object.entries(groups)) {
      const block = el('div', { className: 'children-generation slide-in' });
      block.appendChild(
        el('h4', {
          className: 'children-generation-label',
          text: `${parentGod.name}'s ${type}`,
        })
      );

      const row = el('div', { className: 'gods-row' });
      for (const resolved of resolveChildren(children, this.data)) {
        row.appendChild(this.createGodCard(resolved.deity, { nested: true }));
      }
      block.appendChild(row);
      container.appendChild(block);
    }
  }

  expandAll() {
    // Iteratively expand so newly revealed nested cards are included.
    let guard = 0;
    while (guard < 50) {
      const expandable = [...this.root.querySelectorAll('.god-card')].filter((card) => {
        const god = getDeity(this.data, card.dataset.godName);
        return Boolean(god?.children?.length) && !card.classList.contains('expanded') && card.querySelector('.expand-btn');
      });
      if (expandable.length === 0) break;
      for (const card of expandable) {
        const god = getDeity(this.data, card.dataset.godName);
        if (god) this.toggleChildren(card, god);
      }
      guard += 1;
    }
    this.announce('Expanded all visible lineages.');
  }

  collapseAll() {
    const expanded = [...this.root.querySelectorAll('.god-card.expanded')];
    for (const card of expanded) {
      const god = getDeity(this.data, card.dataset.godName);
      if (god) this.toggleChildren(card, god);
    }
    this.announce('Collapsed all lineages.');
  }

  resetView() {
    if (this.searchInput) {
      this.searchInput.value = '';
      this.filterQuery = '';
    }
    this.render();
    this.root.closest('.family-tree-container')?.scrollTo({ top: 0, behavior: 'smooth' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.announce('View reset.');
  }

  showGodModal(god) {
    this.lastFocused = document.activeElement;

    // Build modal content with text nodes / escaped values only — never raw HTML from data.
    const header = el('div', { className: 'modal-header' }, [
      el('div', { className: 'modal-avatar', attrs: { 'aria-hidden': 'true' }, text: god.avatar }),
      el('h2', { className: 'modal-name', text: god.name, attrs: { id: 'modal-title' } }),
      el('p', { className: 'modal-title', text: god.title }),
    ]);

    const about = el('section', { className: 'modal-section' }, [
      el('h3', { text: 'About' }),
      el('p', { text: god.mythology }),
    ]);

    const attrList = el('ul');
    for (const [key, value] of Object.entries(god.attributes || {})) {
      const li = el('li');
      li.append(
        el('span', { className: 'attribute-label', text: `${key}:` }),
        document.createTextNode(' '),
        el('span', { className: 'attribute-value', text: value })
      );
      attrList.appendChild(li);
    }
    const attributes = el('section', { className: 'modal-section' }, [el('h3', { text: 'Attributes' }), attrList]);

    const bodyChildren = [about, attributes];

    if (god.children?.length) {
      const childList = el('ul');
      for (const child of god.children) {
        childList.appendChild(el('li', {}, [el('span', { className: 'attribute-value', text: child })]));
      }
      bodyChildren.push(el('section', { className: 'modal-section' }, [el('h3', { text: 'Children' }), childList]));
    }

    const body = el('div', { className: 'modal-body' }, bodyChildren);
    this.modalContent.replaceChildren(header, body);

    this.modal.classList.add('is-open');
    this.modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    // Ensure dialog labelling stays correct even if markup is rebuilt.
    this.modal.setAttribute('aria-labelledby', 'modal-title');
    focusFirstFocusable(this.modal) || this.modal.querySelector('[data-close-modal]')?.focus();
    this.announce(`Opened details for ${god.name}.`);
  }

  closeModal() {
    this.modal.classList.remove('is-open');
    this.modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    this.modalContent.replaceChildren();
    if (this.lastFocused && typeof this.lastFocused.focus === 'function') {
      this.lastFocused.focus();
    }
    this.lastFocused = null;
  }
}

export function bootstrapFamilyTree(documentRef = document) {
  const root = documentRef.getElementById('familyTree');
  const modal = documentRef.getElementById('godModal');
  const modalContent = documentRef.getElementById('modalContent');
  const searchInput = documentRef.getElementById('searchGods');
  const statusRegion = documentRef.getElementById('statusRegion');

  const app = new FamilyTree({ root, modal, modalContent, searchInput, statusRegion });
  app.init();
  return app;
}
