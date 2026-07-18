# Theoi — Greek Gods Family Tree

An interactive web app for exploring Greek divine lineage: expand branches, search the pantheon, and open each deity’s story.

## Features

- **Interactive lineage** — Expand any deity to reveal children, grouped by type
- **Search** — Filter the tree by name, title, or mythology keywords
- **Detail dialog** — Keyboard-accessible modal with mythology and attributes
- **Controls** — Expand all, collapse all, and reset view
- **Accessible UX** — Skip link, focus management, Escape to close, live status updates
- **Hardened rendering** — Deity text is inserted via DOM APIs (not raw HTML concatenation)

## Quick start

```bash
npm install
npm start
```

Open [http://localhost:8000](http://localhost:8000).

Or open `index.html` via any static file server (ES modules require HTTP, not `file://`).

## Tests

```bash
npm test
```

Coverage includes data integrity, taxonomy helpers, HTML escaping, and Family Tree UI behavior (expand/collapse, search, modal, XSS-safe rendering).

## Security notes

| Risk | Mitigation |
|------|------------|
| XSS via `innerHTML` with deity fields | UI builds nodes with `textContent` / DOM helpers; escape utilities covered by tests |
| Third-party script CDN | Removed Font Awesome; only Google Fonts CSS (style/font) remains |
| Clickjacking / unexpected embeds | `Content-Security-Policy` meta restricts scripts to `'self'` and blocks framing |
| Modal focus leaks | Focus trap + Escape + restore previous focus |

Run `npm run security:audit` after dependency changes.

## Project structure

```
├── index.html
├── package.json
├── vitest.config.js
├── src/
│   ├── main.js
│   ├── styles.css
│   ├── data/gods.js
│   ├── utils/dom.js
│   ├── utils/taxonomy.js
│   └── app/FamilyTree.js
└── tests/
```

## Customization

Add deities in `src/data/gods.js`. Each record needs:

```js
Name: {
  name: 'Name',
  title: 'Epithet',
  description: 'Short blurb',
  avatar: '⚡',
  generation: 0 | 1 | 2 | 3,
  children: ['ChildName'],
  attributes: { Domain: '…' },
  mythology: 'Longer story',
}
```

Generation levels: `0` Primordial Void, `1` Earth & Sky, `2` Titans, `3` Olympians & Kin.

## License

MIT
