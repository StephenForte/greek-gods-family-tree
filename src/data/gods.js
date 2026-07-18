/**
 * Canonical deity records for the Greek gods family tree.
 * generation: 0 = primordial void, 1 = earth & sky, 2 = titans, 3 = olympians & kin
 */
export const GENERATION_META = Object.freeze([
  { level: 0, label: 'Primordial Void', description: 'The first forces of existence' },
  { level: 1, label: 'Earth & Sky', description: 'Foundations of the world' },
  { level: 2, label: 'Titans', description: 'The elder gods before Olympus' },
  { level: 3, label: 'Olympians & Kin', description: 'The ruling generation and their children' },
]);

export const OLYMPIANS = Object.freeze([
  'Zeus',
  'Hera',
  'Poseidon',
  'Demeter',
  'Hades',
  'Athena',
  'Apollo',
  'Artemis',
  'Ares',
  'Hephaestus',
  'Hermes',
  'Dionysus',
  'Hestia',
  'Aphrodite',
]);

export const HEROES_AND_MORTALS = Object.freeze([
  'Heracles',
  'Perseus',
  'Theseus',
  'Helen',
  'Minos',
  'Orion',
  'Pegasus',
  'Aeneas',
]);

export const greekGodsData = Object.freeze({
  Chaos: {
    name: 'Chaos',
    title: 'The Primordial Void',
    description: 'The first being to exist, representing the void from which everything emerged.',
    avatar: '🌌',
    generation: 0,
    children: ['Gaia', 'Tartarus', 'Eros', 'Erebus', 'Nyx'],
    attributes: {
      Domain: 'Primordial void and creation',
      Symbol: 'Empty space, darkness',
      Origin: 'The very beginning of existence',
      Role: 'Primordial deity of creation',
    },
    mythology:
      'Chaos was the first of the primordial deities to emerge at the creation of the universe. From Chaos came Gaia (Earth), Tartarus (the Underworld), Eros (Love), Erebus (Darkness), and Nyx (Night).',
  },
  Gaia: {
    name: 'Gaia',
    title: 'Mother Earth',
    description: 'The personification of Earth and mother of all life.',
    avatar: '🌍',
    generation: 1,
    children: ['Uranus', 'Pontus', 'Ourea'],
    attributes: {
      Domain: 'Earth, fertility, nature',
      Symbol: 'Earth, mountains, forests',
      Consort: 'Uranus, Pontus',
      Role: 'Primordial goddess of Earth',
    },
    mythology:
      'Gaia emerged from Chaos and became the mother of all life. She gave birth to Uranus (Sky), Pontus (Sea), and the Ourea (Mountains). She is considered the mother of all gods and living beings.',
  },
  Uranus: {
    name: 'Uranus',
    title: 'Father Sky',
    description: 'The personification of the sky and heavens.',
    avatar: '☁️',
    generation: 1,
    children: [
      'Cronus',
      'Rhea',
      'Oceanus',
      'Tethys',
      'Hyperion',
      'Theia',
      'Coeus',
      'Phoebe',
      'Iapetus',
      'Themis',
      'Mnemosyne',
      'Crius',
    ],
    attributes: {
      Domain: 'Sky, heavens',
      Symbol: 'Sky, stars',
      Consort: 'Gaia',
      Role: 'Primordial god of the sky',
    },
    mythology:
      'Uranus was the sky god who covered Gaia and fathered the Titans with her. He was overthrown by his son Cronus, who castrated him with a sickle given by Gaia.',
  },
  Cronus: {
    name: 'Cronus',
    title: 'King of the Titans',
    description: 'The leader of the Titans who overthrew his father Uranus.',
    avatar: '⏰',
    generation: 2,
    children: ['Zeus', 'Hera', 'Poseidon', 'Demeter', 'Hades', 'Hestia'],
    attributes: {
      Domain: 'Time, agriculture',
      Symbol: 'Sickle, scythe',
      Consort: 'Rhea',
      Role: 'Titan of time and harvest',
    },
    mythology:
      'Cronus overthrew his father Uranus and ruled during the Golden Age. Fearing his children would overthrow him, he swallowed them whole, except for Zeus who was hidden by Rhea.',
  },
  Rhea: {
    name: 'Rhea',
    title: 'Mother of the Gods',
    description: 'The mother of the Olympian gods and goddess of motherhood.',
    avatar: '👑',
    generation: 2,
    children: ['Zeus', 'Hera', 'Poseidon', 'Demeter', 'Hades', 'Hestia'],
    attributes: {
      Domain: 'Motherhood, fertility',
      Symbol: 'Lion, crown',
      Consort: 'Cronus',
      Role: 'Titaness of motherhood',
    },
    mythology:
      'Rhea was the wife of Cronus and mother of the Olympian gods. She saved Zeus from being swallowed by hiding him and giving Cronus a stone wrapped in swaddling clothes instead.',
  },
  Zeus: {
    name: 'Zeus',
    title: 'King of the Gods',
    description: 'The supreme ruler of Mount Olympus and god of the sky, thunder, and lightning.',
    avatar: '⚡',
    generation: 3,
    children: [
      'Ares',
      'Athena',
      'Apollo',
      'Artemis',
      'Hermes',
      'Dionysus',
      'Persephone',
      'Heracles',
      'Perseus',
      'Helen',
      'Minos',
      'Aphrodite',
      'Hephaestus',
    ],
    attributes: {
      Domain: 'Sky, thunder, lightning, justice',
      Symbol: 'Thunderbolt, eagle, oak tree',
      Consort: 'Hera',
      Role: 'King of the Olympian gods',
    },
    mythology:
      'Zeus led the Olympian gods in overthrowing the Titans. He is known for his many affairs and children with both goddesses and mortal women. He rules from Mount Olympus with his thunderbolt.',
  },
  Hera: {
    name: 'Hera',
    title: 'Queen of the Gods',
    description: 'The goddess of marriage, women, and family, and wife of Zeus.',
    avatar: '🦚',
    generation: 3,
    children: ['Ares', 'Hephaestus', 'Hebe', 'Eileithyia'],
    attributes: {
      Domain: 'Marriage, women, family',
      Symbol: 'Peacock, cow, pomegranate',
      Consort: 'Zeus',
      Role: 'Queen of the Olympian gods',
    },
    mythology:
      "Hera is the queen of the gods and goddess of marriage. She is known for her jealousy of Zeus's many affairs and often punishes his lovers and illegitimate children.",
  },
  Poseidon: {
    name: 'Poseidon',
    title: 'God of the Sea',
    description: 'The god of the sea, earthquakes, and horses.',
    avatar: '🌊',
    generation: 3,
    children: ['Triton', 'Theseus', 'Polyphemus', 'Orion', 'Pegasus'],
    attributes: {
      Domain: 'Sea, earthquakes, horses',
      Symbol: 'Trident, horse, bull',
      Consort: 'Amphitrite',
      Role: 'God of the sea and earthquakes',
    },
    mythology:
      'Poseidon is one of the three brothers who divided the world: Zeus got the sky, Hades the underworld, and Poseidon the sea. He is known for his powerful trident and temperamental nature.',
  },
  Demeter: {
    name: 'Demeter',
    title: 'Goddess of Agriculture',
    description: 'The goddess of agriculture, harvest, and fertility of the earth.',
    avatar: '🌾',
    generation: 3,
    children: ['Persephone', 'Plutus', 'Arion'],
    attributes: {
      Domain: 'Agriculture, harvest, fertility',
      Symbol: 'Wheat, cornucopia, bread',
      Consort: 'Zeus, Iasion',
      Role: 'Goddess of agriculture and harvest',
    },
    mythology:
      'Demeter is the goddess of agriculture and the harvest. Her daughter Persephone was abducted by Hades, causing Demeter to neglect the earth, leading to winter.',
  },
  Hades: {
    name: 'Hades',
    title: 'God of the Underworld',
    description: 'The god of the dead and ruler of the underworld.',
    avatar: '💀',
    generation: 3,
    children: ['Zagreus', 'Macaria', 'Melinoe'],
    attributes: {
      Domain: 'Underworld, dead, wealth',
      Symbol: 'Cerberus, cypress, narcissus',
      Consort: 'Persephone',
      Role: 'God of the underworld',
    },
    mythology:
      'Hades rules the underworld where the souls of the dead go. He is often portrayed as stern but just, and is not considered evil like the Christian devil.',
  },
  Athena: {
    name: 'Athena',
    title: 'Goddess of Wisdom',
    description: 'The goddess of wisdom, warfare, and strategic warfare.',
    avatar: '🦉',
    generation: 3,
    children: ['Eryx', 'Corybantes'],
    attributes: {
      Domain: 'Wisdom, warfare, crafts',
      Symbol: 'Owl, olive tree, aegis',
      Birth: "Born from Zeus's head",
      Role: 'Goddess of wisdom and warfare',
    },
    mythology:
      "Athena was born fully grown and armored from Zeus's forehead. She is the patron goddess of Athens and represents wisdom, courage, and strategic warfare.",
  },
  Apollo: {
    name: 'Apollo',
    title: 'God of Light',
    description: 'The god of light, music, poetry, medicine, and prophecy.',
    avatar: '☀️',
    generation: 3,
    children: ['Asclepius', 'Orpheus', 'Linus', 'Aristaeus'],
    attributes: {
      Domain: 'Light, music, poetry, medicine',
      Symbol: 'Lyre, bow, laurel wreath',
      Twin: 'Artemis',
      Role: 'God of light and arts',
    },
    mythology:
      'Apollo is the twin brother of Artemis and one of the most important Olympian gods. He is associated with the sun, music, poetry, and prophecy through his oracle at Delphi.',
  },
  Artemis: {
    name: 'Artemis',
    title: 'Goddess of the Hunt',
    description: 'The goddess of the hunt, wilderness, and chastity.',
    avatar: '🏹',
    generation: 3,
    children: ['Hippolytus'],
    attributes: {
      Domain: 'Hunt, wilderness, chastity',
      Symbol: 'Bow and arrow, deer, moon',
      Twin: 'Apollo',
      Role: 'Goddess of the hunt and wilderness',
    },
    mythology:
      'Artemis is the twin sister of Apollo and goddess of the hunt. She is a virgin goddess who protects young women and is associated with the moon and wilderness.',
  },
  Ares: {
    name: 'Ares',
    title: 'God of War',
    description: 'The god of war, violence, and bloodshed.',
    avatar: '⚔️',
    generation: 3,
    children: ['Phobos', 'Deimos', 'Eros', 'Harmonia', 'Anteros'],
    attributes: {
      Domain: 'War, violence, bloodshed',
      Symbol: 'Spear, helmet, dog',
      Consort: 'Aphrodite',
      Role: 'God of war and violence',
    },
    mythology:
      'Ares represents the brutal and violent aspects of war, unlike Athena who represents strategic warfare. He is often portrayed as impulsive and bloodthirsty.',
  },
  Aphrodite: {
    name: 'Aphrodite',
    title: 'Goddess of Love',
    description: 'The goddess of love, beauty, and desire.',
    avatar: '💕',
    generation: 3,
    children: ['Eros', 'Harmonia', 'Aeneas', 'Hermaphroditus'],
    attributes: {
      Domain: 'Love, beauty, desire',
      Symbol: 'Dove, rose, myrtle',
      Consort: 'Hephaestus, Ares',
      Role: 'Goddess of love and beauty',
    },
    mythology:
      'Aphrodite was born from the sea foam after Cronus castrated Uranus. She is the goddess of love and beauty, often causing both gods and mortals to fall in love.',
  },
  Hephaestus: {
    name: 'Hephaestus',
    title: 'God of Fire',
    description: 'The god of fire, metalworking, and craftsmanship.',
    avatar: '🔥',
    generation: 3,
    children: ['Eucleia', 'Eupheme', 'Philophrosyne'],
    attributes: {
      Domain: 'Fire, metalworking, crafts',
      Symbol: 'Hammer, anvil, tongs',
      Consort: 'Aphrodite',
      Role: 'God of fire and craftsmanship',
    },
    mythology:
      'Hephaestus is the divine blacksmith who creates weapons and armor for the gods. He is often portrayed as lame and is married to Aphrodite, though she is unfaithful to him.',
  },
  Hermes: {
    name: 'Hermes',
    title: 'Messenger of the Gods',
    description: 'The messenger of the gods and god of trade, thieves, and travelers.',
    avatar: '🕊️',
    generation: 3,
    children: ['Pan', 'Autolycus', 'Hermaphroditus', 'Abderus'],
    attributes: {
      Domain: 'Trade, thieves, travelers, messages',
      Symbol: 'Caduceus, winged sandals',
      Role: 'Messenger of the gods',
    },
    mythology:
      'Hermes is the swift messenger of the gods, known for his cunning and trickery. He guides souls to the underworld and is the patron of travelers and merchants.',
  },
  Dionysus: {
    name: 'Dionysus',
    title: 'God of Wine',
    description: 'The god of wine, fertility, and ecstasy.',
    avatar: '🍷',
    generation: 3,
    children: ['Priapus', 'Comus', 'Hymen'],
    attributes: {
      Domain: 'Wine, fertility, ecstasy',
      Symbol: 'Grapevine, thyrsus, leopard',
      Consort: 'Ariadne',
      Role: 'God of wine and fertility',
    },
    mythology:
      'Dionysus is the god of wine and revelry. He represents the wild and ecstatic aspects of life, and his followers engage in frenzied celebrations and rituals.',
  },
  Persephone: {
    name: 'Persephone',
    title: 'Queen of the Underworld',
    description: 'The goddess of spring and queen of the underworld.',
    avatar: '🌸',
    generation: 3,
    children: ['Zagreus', 'Melinoe'],
    attributes: {
      Domain: 'Spring, underworld, vegetation',
      Symbol: 'Pomegranate, flowers, grain',
      Consort: 'Hades',
      Role: 'Queen of the underworld',
    },
    mythology:
      'Persephone is the daughter of Demeter and Zeus. She was abducted by Hades and became queen of the underworld, spending part of the year with her mother (spring/summer) and part with Hades (autumn/winter).',
  },
  Hestia: {
    name: 'Hestia',
    title: 'Goddess of the Hearth',
    description: 'The virgin goddess of the hearth, home, and family.',
    avatar: '🔥',
    generation: 3,
    children: [],
    attributes: {
      Domain: 'Hearth, home, family',
      Symbol: 'Hearth, fire, kettle',
      Role: 'Goddess of the hearth and home',
    },
    mythology:
      'Hestia is the eldest daughter of Cronus and Rhea. She is a virgin goddess who tends the sacred fire of Mount Olympus and represents the warmth and security of home.',
  },
});

/**
 * Validate and normalize a deity record. Throws on invalid shapes.
 */
export function assertDeityShape(deity, key) {
  if (!deity || typeof deity !== 'object') {
    throw new Error(`Invalid deity at key "${key}"`);
  }
  const required = ['name', 'title', 'description', 'avatar', 'generation', 'children', 'attributes', 'mythology'];
  for (const field of required) {
    if (!(field in deity)) {
      throw new Error(`Deity "${key}" is missing required field "${field}"`);
    }
  }
  if (!Array.isArray(deity.children)) {
    throw new Error(`Deity "${key}" children must be an array`);
  }
  if (typeof deity.attributes !== 'object' || deity.attributes === null) {
    throw new Error(`Deity "${key}" attributes must be an object`);
  }
  return deity;
}

export function getGodsByGeneration(data, level) {
  return Object.values(data).filter((god) => god.generation === level);
}

export function getDeity(data, name) {
  if (typeof name !== 'string' || !name) return null;
  return data[name] ?? null;
}
