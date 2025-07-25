# Greek Gods Family Tree

An interactive web application that displays the family tree of Greek gods and goddesses with expandable nodes and detailed information about each deity.

## Features

- **Interactive Family Tree**: Click on any god or goddess to expand and see their children
- **Detailed Information**: Each deity has comprehensive information including mythology, attributes, and relationships
- **Beautiful UI**: Modern, responsive design with smooth animations and transitions
- **Modal Details**: Click on any deity card to open a detailed modal with extensive information
- **Control Buttons**: 
  - Expand All: Shows all children at once
  - Collapse All: Hides all children
  - Reset View: Returns to the top and collapses all nodes

## How to Use

1. **Open the Application**: Simply open `index.html` in any modern web browser
2. **Explore the Family Tree**: The tree is organized by generations:
   - Primordial Deities (Chaos, Gaia, Uranus)
   - Titans (Cronus, Rhea, Aphrodite)
   - Olympian Gods (Zeus, Hera, Poseidon, etc.)
   - Minor Deities (various children of the Olympians)

3. **Expand Nodes**: Click the "Show Children" button on any deity card to see their offspring
4. **View Details**: Click anywhere on a deity card to open a detailed modal with:
   - Mythology and background
   - Attributes and symbols
   - List of children
   - Domain and role information

5. **Navigation**: Use the control buttons at the top to manage the view

## Deities Included

### Primordial Deities
- **Chaos**: The primordial void from which everything emerged
- **Gaia**: Mother Earth, the personification of Earth
- **Uranus**: Father Sky, the personification of the heavens

### Titans
- **Cronus**: King of the Titans, god of time and harvest
- **Rhea**: Mother of the Gods, goddess of motherhood
- **Aphrodite**: Goddess of love and beauty

### Olympian Gods
- **Zeus**: King of the Gods, god of sky and thunder
- **Hera**: Queen of the Gods, goddess of marriage
- **Poseidon**: God of the sea and earthquakes
- **Demeter**: Goddess of agriculture and harvest
- **Hades**: God of the underworld
- **Athena**: Goddess of wisdom and warfare
- **Apollo**: God of light, music, and prophecy
- **Artemis**: Goddess of the hunt and wilderness
- **Ares**: God of war and violence
- **Hephaestus**: God of fire and craftsmanship
- **Hermes**: Messenger of the gods
- **Dionysus**: God of wine and fertility

## Technical Details

- **Frontend**: Pure HTML, CSS, and JavaScript (no frameworks required)
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern CSS**: Uses CSS Grid, Flexbox, and modern styling techniques
- **Smooth Animations**: CSS transitions and keyframe animations for a polished experience
- **Accessibility**: Keyboard navigation and screen reader friendly

## File Structure

```
greek-gods-family-tree/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript functionality and data
└── README.md           # This file
```

## Browser Compatibility

This application works in all modern browsers including:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Getting Started

1. Download or clone this repository
2. Open `index.html` in your web browser
3. Start exploring the Greek pantheon!

## Customization

You can easily add more deities by editing the `greekGodsData` object in `script.js`. Each deity should follow this structure:

```javascript
"DeityName": {
    name: "Deity Name",
    title: "Title or Epithet",
    description: "Brief description",
    avatar: "Emoji or symbol",
    generation: 0-3, // 0=Primordial, 1=Titan, 2-3=Olympian/Minor
    children: ["Child1", "Child2"],
    attributes: {
        "Domain": "What they rule over",
        "Symbol": "Their symbols",
        // ... other attributes
    },
    mythology: "Detailed mythological background"
}
```

## License

This project is open source and available under the MIT License.

---

Enjoy exploring the fascinating world of Greek mythology through this interactive family tree! 