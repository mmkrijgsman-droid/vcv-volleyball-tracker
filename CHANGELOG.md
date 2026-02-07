# Changelog

All notable changes to VCV Volleybal Tracker will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-02-07

### 🎉 Initial Release

De eerste volledige release van VCV Volleybal Tracker - een complete oplossing voor volleybal wedstrijd tracking en analyse.

### Added - Core Features

#### Wedstrijd Management
- ✅ Real-time score tracking met automatische rotatie
- ✅ Best of 5 match systeem (altijd minimaal 4 sets, 5e set bij 2-2)
- ✅ Service team tracking met visuele bal indicator
- ✅ Rally vs Service positie onderscheid
- ✅ Correcte set scoring (25 punten, set 5: 15 punten)
- ✅ Automatische set/match beëindiging

#### Speler Management
- ✅ 6 posities volledig ondersteuning
- ✅ Speler rollen: Spelverdeler, Diagonaal, Midden, Passer/Loper, Libero
- ✅ Libero systeem met automatische wissels voor middens op pos 5/6
- ✅ Libero MAG NIET serveren (positie 1 geblokkeerd - NeVoBo regel)
- ✅ Visuele rol indicatie op elk shirt

#### Wissels (NeVoBo Compliant)
- ✅ Maximum 6 wissels per set met real-time validatie
- ✅ Terugwisselen alleen met zelfde partner
- ✅ Libero wissels tellen niet mee
- ✅ Wissel historie per set
- ✅ Direct feedback bij ongeldige wissels

#### Analyse & Statistieken
- ✅ Heatmap visualisatie voor scoringspatronen
- ✅ Punt type tracking: Ace, Sideout, Blok, Aanval, Fout
- ✅ Service fout analyse met drie types:
  - 🥅 In het Net
  - ↗️ Bal Uit
  - 👟 Voetfout
- ✅ Service fout statistieken per speler
- ✅ Score verloop met punt types per rally
- ✅ Performance metrics: Win %, Sideout %, Aanval %, Service %
- ✅ Heatmap overlay voor set vergelijking

#### Speelsystemen
- ✅ 5-1 systeem met spelverdeler penetratie
- ✅ Automatische penetratie visualisatie met pijlen
- ✅ Front row / Back row detectie

#### Data Persistentie
- ✅ Wedstrijden opslaan in localStorage
- ✅ Review mode voor opgeslagen wedstrijden
- ✅ Heatmap historie per set
- ✅ Geen wedstrijd popup bij laden (verbeterde UX)

#### Timeout Management
- ✅ Maximum 2 timeouts per set
- ✅ Automatische validatie
- ✅ Timing tracking

### Added - UI/UX Features

#### Responsive Design
- ✅ Mobile-first design voor Android/iOS
- ✅ Volledige touch support met touch gestures
- ✅ Versleepbare sidebars (main en compact)
- ✅ 10% compact sidebar op mobiel voor maximale veld ruimte
- ✅ Responsive scaling van alle elementen:
  - Speler shirts passen zich aan
  - Knoppen kleiner op mobiel
  - Font sizes schalen mee
- ✅ Geen transition delays tijdens resize
- ✅ Smooth touch drag zonder scroll interference

#### Interface
- ✅ Hamburger menu groter op mobiel (32px)
- ✅ VCV branding met watermerk op eigen veld
- ✅ Dynamisch tegenstander watermerk
- ✅ Horizontale score weergave in compact sidebar
- ✅ Bank weergave met rol labels (SPE/DIA/MID/PL/L)
- ✅ Verbeterde wisselspelers lijst met type info
- ✅ Score verloop tabel met iconen per punttype

#### Accessibility
- ✅ Resize handles zichtbaarder (breder op mobiel)
- ✅ Touch-vriendelijke knoppen
- ✅ Landscape mode optimalisatie
- ✅ Duidelijke visuele feedback

### Fixed

#### Bugs
- ✅ Z-index volgorde: menu sidebar boven compact sidebar
- ✅ Heatmap stippen blijven binnen veld grenzen
- ✅ Touch resize werkt correct op Android
- ✅ Sidebar breedte past zich aan bij scherm resize
- ✅ Service fault popup toont correcte speler info
- ✅ Winlogica correct: altijd minimaal 4 sets

#### Improvements
- ✅ Verwijderd: transition delay tijdens sidebar resize
- ✅ Prevent default op touch events tijdens resize
- ✅ localStorage save alleen bij resize end (performance)
- ✅ Window width detectie via useEffect (React best practice)

### Technical

#### Dependencies
- React 18.2.0
- Tailwind CSS 3.3.0  
- Lucide React 0.263.1
- LocalStorage voor persistentie

#### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (Chrome, Safari)

#### Performance
- Geen externe API calls
- Offline capable
- LocalStorage voor instant data access
- Optimized re-renders met React best practices

### Known Limitations

- Statistieken per set breakdown nog niet geïmplementeerd (alleen current/overall selector aanwezig)
- Heatmap overlay kan op zeer kleine schermen (<360px) soms buiten veld vallen

---

## [Unreleased]

### Planned for 1.1.0
- [ ] Volledige statistieken per set implementatie
- [ ] PDF export functionaliteit
- [ ] Uitgebreide speler statistieken dashboard
- [ ] Coach notities per set/wedstrijd
- [ ] Export naar CSV

### Planned for 1.2.0
- [ ] Cloud storage integratie (Firebase/Supabase)
- [ ] Multi-team support (meerdere teams beheren)
- [ ] Tegenstander scouting mode
- [ ] Video annotatie integratie
- [ ] Replay mode voor wedstrijden

### Planned for 2.0.0
- [ ] Real-time collaboration (meerdere scorers)
- [ ] Native mobile apps (iOS/Android)
- [ ] Advanced AI analytics
- [ ] Toernooi management systeem
- [ ] Live streaming integratie

---

## Version History

- **1.0.0** - 2026-02-07 - Initial Release
