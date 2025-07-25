// Greek Gods Family Tree Data
const greekGodsData = {
    "Chaos": {
        name: "Chaos",
        title: "The Primordial Void",
        description: "The first being to exist, representing the void from which everything emerged.",
        avatar: "🌌",
        generation: 0,
        children: ["Gaia", "Tartarus", "Eros", "Erebus", "Nyx"],
        attributes: {
            "Domain": "Primordial void and creation",
            "Symbol": "Empty space, darkness",
            "Origin": "The very beginning of existence",
            "Role": "Primordial deity of creation"
        },
        mythology: "Chaos was the first of the primordial deities to emerge at the creation of the universe. From Chaos came Gaia (Earth), Tartarus (the Underworld), Eros (Love), Erebus (Darkness), and Nyx (Night)."
    },
    "Gaia": {
        name: "Gaia",
        title: "Mother Earth",
        description: "The personification of Earth and mother of all life.",
        avatar: "🌍",
        generation: 1,
        children: ["Uranus", "Pontus", "Ourea"],
        attributes: {
            "Domain": "Earth, fertility, nature",
            "Symbol": "Earth, mountains, forests",
            "Consort": "Uranus, Pontus",
            "Role": "Primordial goddess of Earth"
        },
        mythology: "Gaia emerged from Chaos and became the mother of all life. She gave birth to Uranus (Sky), Pontus (Sea), and the Ourea (Mountains). She is considered the mother of all gods and living beings."
    },
    "Uranus": {
        name: "Uranus",
        title: "Father Sky",
        description: "The personification of the sky and heavens.",
        avatar: "☁️",
        generation: 1,
        children: ["Cronus", "Rhea", "Oceanus", "Tethys", "Hyperion", "Theia", "Coeus", "Phoebe", "Iapetus", "Themis", "Mnemosyne", "Crius"],
        attributes: {
            "Domain": "Sky, heavens",
            "Symbol": "Sky, stars",
            "Consort": "Gaia",
            "Role": "Primordial god of the sky"
        },
        mythology: "Uranus was the sky god who covered Gaia and fathered the Titans with her. He was overthrown by his son Cronus, who castrated him with a sickle given by Gaia."
    },
    "Cronus": {
        name: "Cronus",
        title: "King of the Titans",
        description: "The leader of the Titans who overthrew his father Uranus.",
        avatar: "⏰",
        generation: 2,
        children: ["Zeus", "Hera", "Poseidon", "Demeter", "Hades", "Hestia"],
        attributes: {
            "Domain": "Time, agriculture",
            "Symbol": "Sickle, scythe",
            "Consort": "Rhea",
            "Role": "Titan of time and harvest"
        },
        mythology: "Cronus overthrew his father Uranus and ruled during the Golden Age. Fearing his children would overthrow him, he swallowed them whole, except for Zeus who was hidden by Rhea."
    },
    "Rhea": {
        name: "Rhea",
        title: "Mother of the Gods",
        description: "The mother of the Olympian gods and goddess of motherhood.",
        avatar: "👑",
        generation: 2,
        children: ["Zeus", "Hera", "Poseidon", "Demeter", "Hades", "Hestia"],
        attributes: {
            "Domain": "Motherhood, fertility",
            "Symbol": "Lion, crown",
            "Consort": "Cronus",
            "Role": "Titaness of motherhood"
        },
        mythology: "Rhea was the wife of Cronus and mother of the Olympian gods. She saved Zeus from being swallowed by hiding him and giving Cronus a stone wrapped in swaddling clothes instead."
    },
    "Zeus": {
        name: "Zeus",
        title: "King of the Gods",
        description: "The supreme ruler of Mount Olympus and god of the sky, thunder, and lightning.",
        avatar: "⚡",
        generation: 3,
        children: ["Ares", "Athena", "Apollo", "Artemis", "Hermes", "Dionysus", "Persephone", "Heracles", "Perseus", "Helen", "Minos", "Aphrodite", "Hephaestus"],
        attributes: {
            "Domain": "Sky, thunder, lightning, justice",
            "Symbol": "Thunderbolt, eagle, oak tree",
            "Consort": "Hera",
            "Role": "King of the Olympian gods"
        },
        mythology: "Zeus led the Olympian gods in overthrowing the Titans. He is known for his many affairs and children with both goddesses and mortal women. He rules from Mount Olympus with his thunderbolt."
    },
    "Hera": {
        name: "Hera",
        title: "Queen of the Gods",
        description: "The goddess of marriage, women, and family, and wife of Zeus.",
        avatar: "🦚",
        generation: 3,
        children: ["Ares", "Hephaestus", "Hebe", "Eileithyia"],
        attributes: {
            "Domain": "Marriage, women, family",
            "Symbol": "Peacock, cow, pomegranate",
            "Consort": "Zeus",
            "Role": "Queen of the Olympian gods"
        },
        mythology: "Hera is the queen of the gods and goddess of marriage. She is known for her jealousy of Zeus's many affairs and often punishes his lovers and illegitimate children."
    },
    "Poseidon": {
        name: "Poseidon",
        title: "God of the Sea",
        description: "The god of the sea, earthquakes, and horses.",
        avatar: "🌊",
        generation: 3,
        children: ["Triton", "Theseus", "Polyphemus", "Orion", "Pegasus"],
        attributes: {
            "Domain": "Sea, earthquakes, horses",
            "Symbol": "Trident, horse, bull",
            "Consort": "Amphitrite",
            "Role": "God of the sea and earthquakes"
        },
        mythology: "Poseidon is one of the three brothers who divided the world: Zeus got the sky, Hades the underworld, and Poseidon the sea. He is known for his powerful trident and temperamental nature."
    },
    "Demeter": {
        name: "Demeter",
        title: "Goddess of Agriculture",
        description: "The goddess of agriculture, harvest, and fertility of the earth.",
        avatar: "🌾",
        generation: 3,
        children: ["Persephone", "Plutus", "Arion"],
        attributes: {
            "Domain": "Agriculture, harvest, fertility",
            "Symbol": "Wheat, cornucopia, bread",
            "Consort": "Zeus, Iasion",
            "Role": "Goddess of agriculture and harvest"
        },
        mythology: "Demeter is the goddess of agriculture and the harvest. Her daughter Persephone was abducted by Hades, causing Demeter to neglect the earth, leading to winter."
    },
    "Hades": {
        name: "Hades",
        title: "God of the Underworld",
        description: "The god of the dead and ruler of the underworld.",
        avatar: "💀",
        generation: 3,
        children: ["Zagreus", "Macaria", "Melinoe"],
        attributes: {
            "Domain": "Underworld, dead, wealth",
            "Symbol": "Cerberus, cypress, narcissus",
            "Consort": "Persephone",
            "Role": "God of the underworld"
        },
        mythology: "Hades rules the underworld where the souls of the dead go. He is often portrayed as stern but just, and is not considered evil like the Christian devil."
    },
    "Athena": {
        name: "Athena",
        title: "Goddess of Wisdom",
        description: "The goddess of wisdom, warfare, and strategic warfare.",
        avatar: "🦉",
        generation: 3,
        children: ["Eryx", "Corybantes"],
        attributes: {
            "Domain": "Wisdom, warfare, crafts",
            "Symbol": "Owl, olive tree, aegis",
            "Birth": "Born from Zeus's head",
            "Role": "Goddess of wisdom and warfare"
        },
        mythology: "Athena was born fully grown and armored from Zeus's forehead. She is the patron goddess of Athens and represents wisdom, courage, and strategic warfare."
    },
    "Apollo": {
        name: "Apollo",
        title: "God of Light",
        description: "The god of light, music, poetry, medicine, and prophecy.",
        avatar: "☀️",
        generation: 3,
        children: ["Asclepius", "Orpheus", "Linus", "Aristaeus"],
        attributes: {
            "Domain": "Light, music, poetry, medicine",
            "Symbol": "Lyre, bow, laurel wreath",
            "Twin": "Artemis",
            "Role": "God of light and arts"
        },
        mythology: "Apollo is the twin brother of Artemis and one of the most important Olympian gods. He is associated with the sun, music, poetry, and prophecy through his oracle at Delphi."
    },
    "Artemis": {
        name: "Artemis",
        title: "Goddess of the Hunt",
        description: "The goddess of the hunt, wilderness, and chastity.",
        avatar: "🏹",
        generation: 3,
        children: ["Hippolytus"],
        attributes: {
            "Domain": "Hunt, wilderness, chastity",
            "Symbol": "Bow and arrow, deer, moon",
            "Twin": "Apollo",
            "Role": "Goddess of the hunt and wilderness"
        },
        mythology: "Artemis is the twin sister of Apollo and goddess of the hunt. She is a virgin goddess who protects young women and is associated with the moon and wilderness."
    },
    "Ares": {
        name: "Ares",
        title: "God of War",
        description: "The god of war, violence, and bloodshed.",
        avatar: "⚔️",
        generation: 3,
        children: ["Phobos", "Deimos", "Eros", "Harmonia", "Anteros"],
        attributes: {
            "Domain": "War, violence, bloodshed",
            "Symbol": "Spear, helmet, dog",
            "Consort": "Aphrodite",
            "Role": "God of war and violence"
        },
        mythology: "Ares represents the brutal and violent aspects of war, unlike Athena who represents strategic warfare. He is often portrayed as impulsive and bloodthirsty."
    },
    "Aphrodite": {
        name: "Aphrodite",
        title: "Goddess of Love",
        description: "The goddess of love, beauty, and desire.",
        avatar: "💕",
        generation: 3,
        children: ["Eros", "Harmonia", "Aeneas", "Hermaphroditus"],
        attributes: {
            "Domain": "Love, beauty, desire",
            "Symbol": "Dove, rose, myrtle",
            "Consort": "Hephaestus, Ares",
            "Role": "Goddess of love and beauty"
        },
        mythology: "Aphrodite was born from the sea foam after Cronus castrated Uranus. She is the goddess of love and beauty, often causing both gods and mortals to fall in love."
    },
    "Hephaestus": {
        name: "Hephaestus",
        title: "God of Fire",
        description: "The god of fire, metalworking, and craftsmanship.",
        avatar: "🔥",
        generation: 3,
        children: ["Eucleia", "Eupheme", "Philophrosyne"],
        attributes: {
            "Domain": "Fire, metalworking, crafts",
            "Symbol": "Hammer, anvil, tongs",
            "Consort": "Aphrodite",
            "Role": "God of fire and craftsmanship"
        },
        mythology: "Hephaestus is the divine blacksmith who creates weapons and armor for the gods. He is often portrayed as lame and is married to Aphrodite, though she is unfaithful to him."
    },
    "Hermes": {
        name: "Hermes",
        title: "Messenger of the Gods",
        description: "The messenger of the gods and god of trade, thieves, and travelers.",
        avatar: "🕊️",
        generation: 3,
        children: ["Pan", "Autolycus", "Hermaphroditus", "Abderus"],
        attributes: {
            "Domain": "Trade, thieves, travelers, messages",
            "Symbol": "Caduceus, winged sandals",
            "Role": "Messenger of the gods"
        },
        mythology: "Hermes is the swift messenger of the gods, known for his cunning and trickery. He guides souls to the underworld and is the patron of travelers and merchants."
    },
    "Dionysus": {
        name: "Dionysus",
        title: "God of Wine",
        description: "The god of wine, fertility, and ecstasy.",
        avatar: "🍷",
        generation: 3,
        children: ["Priapus", "Comus", "Hymen"],
        attributes: {
            "Domain": "Wine, fertility, ecstasy",
            "Symbol": "Grapevine, thyrsus, leopard",
            "Consort": "Ariadne",
            "Role": "God of wine and fertility"
        },
        mythology: "Dionysus is the god of wine and revelry. He represents the wild and ecstatic aspects of life, and his followers engage in frenzied celebrations and rituals."
    },
    "Persephone": {
        name: "Persephone",
        title: "Queen of the Underworld",
        description: "The goddess of spring and queen of the underworld.",
        avatar: "🌸",
        generation: 3,
        children: ["Zagreus", "Melinoe"],
        attributes: {
            "Domain": "Spring, underworld, vegetation",
            "Symbol": "Pomegranate, flowers, grain",
            "Consort": "Hades",
            "Role": "Queen of the underworld"
        },
        mythology: "Persephone is the daughter of Demeter and Zeus. She was abducted by Hades and became queen of the underworld, spending part of the year with her mother (spring/summer) and part with Hades (autumn/winter)."
    },
    "Hestia": {
        name: "Hestia",
        title: "Goddess of the Hearth",
        description: "The virgin goddess of the hearth, home, and family.",
        avatar: "🔥",
        generation: 3,
        children: [],
        attributes: {
            "Domain": "Hearth, home, family",
            "Symbol": "Hearth, fire, kettle",
            "Role": "Goddess of the hearth and home"
        },
        mythology: "Hestia is the eldest daughter of Cronus and Rhea. She is a virgin goddess who tends the sacred fire of Mount Olympus and represents the warmth and security of home."
    }
};

class FamilyTree {
    constructor() {
        this.familyTree = document.getElementById('familyTree');
        this.modal = document.getElementById('godModal');
        this.modalContent = document.getElementById('modalContent');
        this.expandedNodes = new Set();
        
        // Bind methods to preserve 'this' context
        this.createGodCard = this.createGodCard.bind(this);
        this.toggleChildren = this.toggleChildren.bind(this);
        this.expandChildren = this.expandChildren.bind(this);
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderFamilyTree();
    }

    setupEventListeners() {
        document.getElementById('expandAll').addEventListener('click', () => this.expandAll());
        document.getElementById('collapseAll').addEventListener('click', () => this.collapseAll());
        document.getElementById('resetView').addEventListener('click', () => this.resetView());
        
        // Modal close events
        document.querySelector('.close').addEventListener('click', () => this.closeModal());
        window.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });
    }

    renderFamilyTree() {
        this.familyTree.innerHTML = '';
        
        // Start with primordial deities
        const primordialGeneration = this.createGeneration('Primordial Deities', 0);
        this.familyTree.appendChild(primordialGeneration);

        // Add Titan generation
        const titanGeneration = this.createGeneration('Titans', 1);
        this.familyTree.appendChild(titanGeneration);

        // Add Olympian generation
        const olympianGeneration = this.createGeneration('Olympian Gods', 2);
        this.familyTree.appendChild(olympianGeneration);

        // Add minor deities generation
        const minorGeneration = this.createGeneration('Minor Deities', 3);
        this.familyTree.appendChild(minorGeneration);
    }

    createGeneration(label, generationLevel) {
        const generationDiv = document.createElement('div');
        generationDiv.className = 'generation fade-in';
        
        const labelDiv = document.createElement('div');
        labelDiv.className = 'generation-label';
        labelDiv.textContent = label;
        generationDiv.appendChild(labelDiv);

        const godsRow = document.createElement('div');
        godsRow.className = 'gods-row';

        // Get gods for this generation
        const godsInGeneration = Object.values(greekGodsData).filter(god => god.generation === generationLevel);
        
        godsInGeneration.forEach(god => {
            const godCard = this.createGodCard(god);
            godsRow.appendChild(godCard);
        });

        generationDiv.appendChild(godsRow);
        return generationDiv;
    }

    createGodCard(god) {
        const card = document.createElement('div');
        card.className = 'god-card';
        card.dataset.godName = god.name;

        card.innerHTML = `
            <div class="god-avatar">${god.avatar}</div>
            <div class="god-name">${god.name}</div>
            <div class="god-title">${god.title}</div>
            <div class="god-description">${god.description}</div>
            ${god.children && god.children.length > 0 ? 
                `<button class="expand-btn" data-god-name="${god.name}">
                    <i class="fas fa-chevron-down"></i>
                    Show Children (${god.children.length})
                </button>` : 
                `<div class="no-children" style="text-align: center; color: #999; font-style: italic; margin-top: 10px; font-size: 0.9rem;">
                    No children recorded
                </div>`
            }
            <div class="children-container" id="children-${god.name}" style="display: none;"></div>
        `;

        // Add click event for modal
        card.addEventListener('click', () => this.showGodModal(god));

        // Add click event for expand button if it exists
        const expandBtn = card.querySelector('.expand-btn');
        if (expandBtn) {
            expandBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                console.log('Button clicked for:', god.name); // Debug log
                this.toggleChildren(god.name, e.target);
            });
        }

        return card;
    }

    toggleChildren(godName, clickedElement = null) {
        console.log('Toggling children for:', godName); // Debug log
        const god = greekGodsData[godName];
        if (!god) {
            console.error('God not found:', godName);
            return;
        }
        
        // Find the specific card that was clicked
        let card;
        if (clickedElement) {
            // Find the closest god-card ancestor of the clicked element
            card = clickedElement.closest('.god-card');
        }
        
        // Fallback to first match if no specific card found
        if (!card) {
            card = document.querySelector(`[data-god-name="${godName}"]`);
        }
        
        if (!card) {
            console.error('Card not found for:', godName);
            return;
        }
        
        // Create a unique ID for this specific instance
        const uniqueId = `children-${godName}-${Date.now()}`;
        let childrenContainer = card.querySelector('.children-container');
        
        // If no children container exists, create one
        if (!childrenContainer) {
            childrenContainer = document.createElement('div');
            childrenContainer.className = 'children-container';
            childrenContainer.style.display = 'none';
            card.appendChild(childrenContainer);
        }
        
        const expandBtn = card.querySelector('.expand-btn');
        
        if (!expandBtn) {
            console.error('Expand button not found for:', godName);
            return;
        }

        if (this.expandedNodes.has(godName)) {
            // Collapse
            childrenContainer.style.display = 'none';
            card.classList.remove('expanded');
            expandBtn.innerHTML = `<i class="fas fa-chevron-down"></i> Show Children (${god.children.length})`;
            this.expandedNodes.delete(godName);
        } else {
            // Expand
            this.expandChildren(god, childrenContainer);
            childrenContainer.style.display = 'block';
            card.classList.add('expanded');
            expandBtn.innerHTML = `<i class="fas fa-chevron-up"></i> Hide Children (${god.children.length})`;
            this.expandedNodes.add(godName);
        }
    }

    expandChildren(parentGod, container) {
        container.innerHTML = '';
        
        if (!parentGod.children || parentGod.children.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #666; font-style: italic;">No children recorded</p>';
            return;
        }

        // Group children by their generation/type
        const childrenByType = this.groupChildrenByType(parentGod.children);
        
        Object.entries(childrenByType).forEach(([type, children]) => {
            const childrenGeneration = document.createElement('div');
            childrenGeneration.className = 'children-generation slide-in';
            
            const label = document.createElement('div');
            label.className = 'children-generation-label';
            label.textContent = `${parentGod.name}'s ${type}`;
            childrenGeneration.appendChild(label);
            
            const childrenRow = document.createElement('div');
            childrenRow.className = 'gods-row';

            children.forEach(childName => {
                const childGod = greekGodsData[childName];
                if (childGod) {
                    const childCard = this.createGodCard(childGod);
                    childrenRow.appendChild(childCard);
                } else {
                    // Create a placeholder for children not in our data
                    const placeholderCard = document.createElement('div');
                    placeholderCard.className = 'god-card';
                    placeholderCard.innerHTML = `
                        <div class="god-avatar">❓</div>
                        <div class="god-name">${childName}</div>
                        <div class="god-title">Unknown Deity</div>
                        <div class="god-description">Information about this deity is not available in our records.</div>
                    `;
                    childrenRow.appendChild(placeholderCard);
                }
            });

            childrenGeneration.appendChild(childrenRow);
            container.appendChild(childrenGeneration);
        });
    }

    groupChildrenByType(children) {
        const groups = {
            'Olympian Children': [],
            'Minor Deities': [],
            'Heroes & Mortals': [],
            'Other Offspring': []
        };

        children.forEach(childName => {
            const childGod = greekGodsData[childName];
            if (childGod) {
                if (childGod.generation === 3 && this.isOlympian(childName)) {
                    groups['Olympian Children'].push(childName);
                } else if (childGod.generation === 3) {
                    groups['Minor Deities'].push(childName);
                } else {
                    groups['Other Offspring'].push(childName);
                }
            } else {
                // Check if it's a known hero or mortal
                if (this.isHeroOrMortal(childName)) {
                    groups['Heroes & Mortals'].push(childName);
                } else {
                    groups['Other Offspring'].push(childName);
                }
            }
        });

        // Remove empty groups
        Object.keys(groups).forEach(key => {
            if (groups[key].length === 0) {
                delete groups[key];
            }
        });

        return groups;
    }

    isOlympian(name) {
        const olympians = ['Zeus', 'Hera', 'Poseidon', 'Demeter', 'Hades', 'Athena', 'Apollo', 'Artemis', 'Ares', 'Hephaestus', 'Hermes', 'Dionysus'];
        return olympians.includes(name);
    }

    isHeroOrMortal(name) {
        const heroes = ['Heracles', 'Perseus', 'Theseus', 'Helen', 'Minos', 'Orion', 'Pegasus'];
        return heroes.includes(name);
    }

    expandAll() {
        Object.keys(greekGodsData).forEach(godName => {
            if (!this.expandedNodes.has(godName)) {
                this.toggleChildren(godName, null);
            }
        });
    }

    collapseAll() {
        // Create a copy of the expanded nodes to avoid modification during iteration
        const expandedNodesCopy = Array.from(this.expandedNodes);
        expandedNodesCopy.forEach(godName => {
            this.toggleChildren(godName, null);
        });
    }

    resetView() {
        // Clear all expanded nodes
        this.expandedNodes.clear();
        
        // Re-render the entire tree to ensure clean state
        this.renderFamilyTree();
        
        // Scroll to top
        this.familyTree.scrollTo({ top: 0, behavior: 'smooth' });
    }

    showGodModal(god) {
        this.modalContent.innerHTML = `
            <div class="modal-header">
                <div class="modal-avatar">${god.avatar}</div>
                <div class="modal-name">${god.name}</div>
                <div class="modal-title">${god.title}</div>
            </div>
            <div class="modal-body">
                <div class="modal-section">
                    <h3>About</h3>
                    <p>${god.mythology}</p>
                </div>
                
                <div class="modal-section">
                    <h3>Attributes</h3>
                    <ul>
                        ${Object.entries(god.attributes).map(([key, value]) => 
                            `<li><span class="attribute-label">${key}:</span> <span class="attribute-value">${value}</span></li>`
                        ).join('')}
                    </ul>
                </div>
                
                ${god.children && god.children.length > 0 ? `
                    <div class="modal-section">
                        <h3>Children</h3>
                        <ul>
                            ${god.children.map(child => `<li><span class="attribute-value">${child}</span></li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        `;
        
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Initialize the family tree when the page loads
let familyTree;
document.addEventListener('DOMContentLoaded', () => {
    familyTree = new FamilyTree();
}); 