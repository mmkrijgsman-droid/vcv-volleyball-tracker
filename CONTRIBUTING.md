# Contributing to VCV Volleybal Tracker

Bedankt voor je interesse in het bijdragen aan VCV Volleybal Tracker! 🏐

## Code of Conduct

Dit project volgt een code of conduct. Door deel te nemen verwachten we dat je deze respecteert.

## Hoe bij te dragen

### Bugs Rapporteren

Als je een bug vindt:

1. **Check eerst** of de bug al gerapporteerd is in de Issues
2. Als het nieuw is, **open een issue** met:
   - Duidelijke titel
   - Gedetailleerde beschrijving
   - Stappen om te reproduceren
   - Verwacht gedrag vs werkelijk gedrag
   - Screenshots (indien relevant)
   - Browser/device informatie

### Feature Requests

Voor nieuwe features:

1. **Open een issue** met label `enhancement`
2. Beschrijf de feature duidelijk
3. Leg uit waarom het nuttig zou zijn
4. Geef voorbeelden van gebruik

### Pull Requests

1. **Fork** de repository
2. **Clone** je fork lokaal
3. **Maak een branch** voor je feature:
   ```bash
   git checkout -b feature/amazing-feature
   ```
4. **Commit je changes**:
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push** naar je fork:
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open een Pull Request**

### Code Style

- Gebruik **functionele componenten** met hooks
- Gebruik **const** voor functies en variabelen
- **Meaningful names** voor variabelen en functies
- **Comments** voor complexe logica
- **Tailwind CSS** voor styling

### Testing

Voor het indienen van een PR:

- [ ] Test op verschillende schermgroottes
- [ ] Test op mobiel (touch events)
- [ ] Test alle nieuwe features
- [ ] Check voor console errors

### Commit Messages

Gebruik duidelijke commit messages:

```
feat: Add player statistics export
fix: Resolve sidebar resize issue on mobile
docs: Update installation instructions
style: Format code according to guidelines
refactor: Simplify rotation logic
test: Add tests for substitution validation
```

## Development Setup

```bash
# Clone je fork
git clone https://github.com/[jouw-username]/vcv-volleyball-tracker.git

# Installeer dependencies
npm install

# Start development server
npm start
```

## Project Structuur

```
src/
├── App.jsx              # Main component (bevat alle logica)
├── index.js             # Entry point
└── index.css            # Global styles
```

## Belangrijke Componenten

### State Management
- Alle state in App.jsx
- Gebruik useState voor lokale state
- Gebruik useEffect voor side effects

### Key Functions
- `scorePoint()` - Score een punt
- `serviceFault()` - Registreer servicefout
- `makeSubstitution()` - Wissel spelers
- `endSet()` - Beëindig een set
- `validateSubstitution()` - Valideer wissels volgens NeVoBo

## NeVoBo Regels

Houd rekening met officiële NeVoBo regels:

- Maximum 6 wissels per set
- Alleen terugwisselen met dezelfde partner
- Libero mag niet serveren (positie 1)
- Libero wissels tellen niet mee
- Maximum 2 timeouts per set
- Best of 5 systeem (altijd 4 sets minimum)

## Vragen?

Open een issue met label `question` of neem contact op via de maintainers.

## License

Door bij te dragen ga je akkoord dat je bijdrage gelicenseerd wordt onder de MIT License.

---

Nogmaals bedankt voor je bijdrage! 🙏
