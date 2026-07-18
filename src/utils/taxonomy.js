import { HEROES_AND_MORTALS, OLYMPIANS } from '../data/gods.js';

/**
 * Classify a child name into a display group for nested tree sections.
 */
export function classifyChild(childName, data, olympians = OLYMPIANS, heroes = HEROES_AND_MORTALS) {
  const child = data[childName];

  if (child) {
    if (olympians.includes(childName)) return 'Olympian Children';
    if (child.generation >= 3) return 'Minor Deities';
    return 'Other Offspring';
  }

  if (heroes.includes(childName)) return 'Heroes & Mortals';
  return 'Other Offspring';
}

/**
 * Group child names by taxonomy bucket; omit empty groups; preserve order.
 */
export function groupChildrenByType(children, data, olympians = OLYMPIANS, heroes = HEROES_AND_MORTALS) {
  const order = ['Olympian Children', 'Minor Deities', 'Heroes & Mortals', 'Other Offspring'];
  const groups = Object.fromEntries(order.map((key) => [key, []]));

  for (const childName of children) {
    const bucket = classifyChild(childName, data, olympians, heroes);
    groups[bucket].push(childName);
  }

  return Object.fromEntries(order.filter((key) => groups[key].length > 0).map((key) => [key, groups[key]]));
}

/**
 * Return deities whose name/title/description match a query (case-insensitive).
 */
export function searchDeities(data, query) {
  const q = String(query ?? '')
    .trim()
    .toLowerCase();
  if (!q) return Object.values(data);

  return Object.values(data).filter((god) => {
    const haystack = [god.name, god.title, god.description, god.mythology, ...(god.children || [])]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
}

/**
 * Collect deity names that have at least one recorded child.
 */
export function deitiesWithChildren(data) {
  return Object.keys(data).filter((name) => Array.isArray(data[name].children) && data[name].children.length > 0);
}

/**
 * Resolve children into deity records or lightweight placeholders.
 */
export function resolveChildren(children, data) {
  return children.map((name) => {
    const known = data[name];
    if (known) return { kind: 'known', deity: known };
    return {
      kind: 'placeholder',
      deity: {
        name,
        title: 'Unknown Deity',
        description: 'Information about this deity is not available in our records.',
        avatar: '❓',
        generation: -1,
        children: [],
        attributes: {},
        mythology: 'No mythology recorded in this dataset.',
      },
    };
  });
}
