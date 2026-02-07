# VCV Volleybal Tracker 🏐

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/yourusername/vcv-volleyball-tracker)
[![React](https://img.shields.io/badge/React-18.2-61dafb.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**Professionele volleybal wedstrijd tracker met real-time statistieken, analyse en NeVoBo regelvalidatie.**

Ontwikkeld voor VCV (Volleybal Club Veenendaal) - Een complete oplossing voor coaches, analisten en scorers om wedstrijden te volgen, prestaties te analyseren en teams te verbeteren.

---

## 📸 Screenshots

*[Voeg hier screenshots toe van de app in actie]*

---

## ✨ Key Features

### 🎯 Real-Time Wedstrijd Tracking
- **Live Score Bijhouden** - Automatische rotatie en service tracking
- **Best of 5 Systeem** - Correct NeVoBo format: altijd minimaal 4 sets, 5e set bij 2-2
- **Service Posities** - Visuele bal indicator toont wie er serveert
- **Rally vs Service Mode** - Onderscheid tussen service posities en rally formatie

### 📊 Geavanceerde Analyse
- **Heatmap Visualisatie** - Zie waar punten worden gescoord op het veld
- **Punt Type Tracking** - Ace, Sideout, Blok, Aanval, Fout
- **Service Fout Analyse** - Gedetailleerd per type: In het Net, Bal Uit, Voetfout
- **Score Verloop** - Volledig overzicht met punt types per rally
- **Performance Metrics** - Win %, Sideout %, Aanval %, Service %
- **Per Speler Statistieken** - Service fouten breakdown per speler

### 👥 Compleet Speler Management
- **6 Posities** - Volledige rotatie ondersteuning (1-6)
- **Speler Rollen** - Spelverdeler (SPE), Diagonaal (DIA), Midden (MID), Passer/Loper (PL), Libero (L)
- **Libero Systeem** - Automatische libero wissels voor middens op achterlijn (pos 5/6)
- **Libero MAG NIET SERVEREN** - Positie 1 geblokkeerd voor libero (NeVoBo regel)
- **Visuele Rol Indicatie** - Elke speler toont zijn rol op het veld

### 🔄 Wissel Systeem (NeVoBo Compliant)
- **Maximum 6 Wissels** - Per set met automatische validatie
- **Terug met Zelfde Partner** - Alleen terugwisselen met originele wissel partner
- **Libero Wissels Tellen Niet Mee** - Onbeperkte libero rotaties
- **Real-time Validatie** - Direct feedback bij ongeldige wissels
- **Wissel Historie** - Overzicht van alle wissels per set

### 🎮 Speelsystemen
- **5-1 Systeem** - Met automatische spelverdeler penetratie visualisatie
- **Spelverdeler Penetratie** - Visuele pijl toont beweging naar positie 2.5
- **Front Row / Back Row** - Automatische detectie voor penetratie

### ⏱️ Timeout Management
- **Maximum 2 Timeouts** - Per set met automatische validatie
- **Timing Tracking** - Registreer exact wanneer timeouts genomen worden
- **Visuele Indicatie** - Zie hoeveel timeouts nog beschikbaar zijn

### 💾 Data Persistentie
- **Wedstrijden Opslaan** - Bewaar in browser localStorage
- **Review Mode** - Analyseer opgeslagen wedstrijden achteraf
- **Heatmap Historie** - Bekijk heatmaps van eerdere sets
- **Match Export** - Data beschikbaar voor verdere analyse

### 📱 Volledig Responsive
- **Mobile First Design** - Geoptimaliseerd voor Android en iOS
- **Touch Support** - Volledige touch gesture ondersteuning
- **Versleepbare Sidebars** - Pas de interface aan naar jouw voorkeur
- **10% Sidebar op Mobiel** - Maximale ruimte voor het veld (90%)
- **Responsive Scaling** - Alle elementen passen zich aan aan schermgrootte
- **Landscape Mode** - Optimaal voor tablets in landschap

### 🎨 Aanpasbaar
- **VCV Branding** - Watermerk met clubnaam op eigen veld
- **Tegenstander Naam** - Dynamisch watermerk met tegenstandernaam
- **Kleuren Schema** - Rood voor eigen team, blauw voor tegenstander
- **Resizable Interface** - Sleep sidebars naar gewenste breedte

---

## 🚀 Quick Start

### Installatie

```bash
# Clone de repository
git clone https://github.com/yourusername/vcv-volleyball-tracker.git
cd vcv-volleyball-tracker

# Installeer dependencies
npm install

# Start development server
npm start
```

De app opent automatisch op `http://localhost:3000` 🎉

### Build voor Productie

```bash
# Maak production build
npm run build

# De build staat in /build folder
# Deploy naar je favorite hosting platform
```

---

## 📖 Gebruikshandleiding

### 1️⃣ Eerste Keer Setup

#### Spelers Toevoegen
1. Open **Menu** (☰ rechtsboven)
2. Ga naar **Spelers** tab
3. Klik **+ Speler**
4. Vul in:
   - Naam (bijv. "Jan de Vries")
   - Nummer (bijv. "5")
   - Rol (SPE/DIA/MID/PL/L)
5. Herhaal voor minimaal 7 spelers (6 veldspelers + 1 libero)

#### Opstelling Maken
1. Ga naar **Opstelling** tab
2. Kies **Speelsysteem**: 5-1 (aanbevolen)
3. Sleep spelers naar posities 1-6
4. Wijs **Libero** toe via checkbox (optioneel maar aanbevolen)
5. Klik **Bevestig Opstelling**

### 2️⃣ Wedstrijd Starten

1. Ga naar **Wedstrijden** tab
2. Klik **+ Nieuwe Wedstrijd**
3. Vul **Tegenstandernaam** in
4. Selecteer **Datum** (standaard vandaag)
5. Kies **Wie serveert**: Ons of Tegenstander
6. Klik **Start Wedstrijd**

### 3️⃣ Tijdens de Wedstrijd

#### Punten Scoren
- **Klik op het veld** waar het punt gescoord wordt
- Kies **Punttype**:
  - ⚡ **Ace** - Direct punt van service
  - 🔄 **Sideout** - Punt na service van tegenstander
  - 🛡️ **Blok** - Punt via blok
  - ⚔️ **Aanval** - Punt via aanval
  - ❌ **Fout** - Punt door fout tegenstander

#### Service Fouten Registreren
1. Klik **Service Fout** knop (alleen actief voor serverende team)
2. Kies type fout:
   - 🥅 **In het Net**
   - ↗️ **Bal Uit**
   - 👟 **Voetfout**
3. Punt gaat automatisch naar tegenstander
4. Service wisselt automatisch

#### Timeouts
- Klik **Timeout** knop in het veld
- Maximum 2 per set
- Timing wordt automatisch bijgehouden

#### Spelers Wisselen
1. Open **Menu** → **Wissels** tab
2. Klik op een **Bankspeler** om te selecteren
3. Klik op **Veldspeler** die gewisseld moet worden
4. Validatie gebeurt automatisch:
   - Max 6 wissels per set
   - Alleen terug met zelfde partner
   - Libero mag niet op positie 1

### 4️⃣ Analyse Bekijken

#### Tijdens de Wedstrijd
- **Stats** tab → Real-time statistieken
- **Heatmap** tab → Visualiseer scoringspatronen
- **Analyse** tab → Performance metrics
- **Score Verloop** → Zie punt-voor-punt geschiedenis

#### Na de Wedstrijd
1. Wedstrijd wordt automatisch opgeslagen
2. Ga naar **Wedstrijden** tab
3. Klik op een wedstrijd uit de lijst
4. **Review Mode** toont alle data
5. Vergelijk heatmaps tussen sets

---

## 📱 Mobiel Gebruik

### Installatie op Telefoon
1. Open de app in **Chrome** (Android) of **Safari** (iOS)
2. Voeg toe aan homescreen:
   - **Android**: Menu → "Toevoegen aan startscherm"
   - **iOS**: Share → "Zet op beginscherm"

### Touch Gestures
- **Tap op veld** → Score punt
- **Tap Service Fout knop** → Registreer fout
- **Drag linkerrand sidebar** → Pas breedte aan
- **Tap bankspeler** → Start wissel
- **Tap menu (☰)** → Open alle functies

### Optimale Instellingen
- **Landscape modus** voor beste overzicht
- **Sidebar op 10-15%** voor maximale veld ruimte
- **Brightness omhoog** voor zichtbaarheid in hal
- **Geluid uit** om niet te storen

---

## ⚙️ Technische Details

### Tech Stack
- **React 18.2** - UI framework
- **Tailwind CSS 3.3** - Styling
- **Lucide React** - Iconen
- **LocalStorage** - Data persistentie

### Browser Ondersteuning
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (Chrome, Safari)

### Vereisten
- Node.js 14+
- npm 6+ of yarn 1.22+

### Project Structuur
```
vcv-volleyball-tracker/
├── public/
│   ├── index.html           # HTML template
│   └── manifest.json        # PWA config
├── src/
│   ├── App.jsx              # Hoofd component (2300+ regels)
│   ├── index.js             # Entry point
│   └── index.css            # Global styles
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind config
├── postcss.config.js        # PostCSS config
├── README.md                # Dit bestand
├── QUICKSTART.md            # Snelstart gids
├── CONTRIBUTING.md          # Bijdrage richtlijnen
├── DEPLOYMENT.md            # Deploy instructies
├── CHANGELOG.md             # Versie geschiedenis
└── LICENSE                  # MIT License
```

---

## 🏐 NeVoBo Regels Compliance

De app volgt **strikt** de officiële NeVoBo regels:

### Wissels
- ✅ Maximum **6 wissels** per set
- ✅ Terugwisselen **alleen met zelfde partner**
- ✅ Libero wissels **tellen niet mee**
- ✅ Real-time **validatie** bij iedere wissel

### Libero
- ✅ **Mag NIET serveren** (positie 1 geblokkeerd)
- ✅ **Automatische wissels** voor middens op pos 5/6
- ✅ **Onbeperkt aantal** libero rotaties
- ✅ Libero **mag niet aanvallen** vanaf voorlijn (visuele indicatie)

### Timeouts
- ✅ Maximum **2 timeouts** per set
- ✅ Automatische **validatie**
- ✅ **Timing tracking**

### Scoring
- ✅ Sets **1-4**: 25 punten met 2 punten verschil
- ✅ Set **5**: 15 punten met 2 punten verschil
- ✅ **Best of 5**: Altijd minimaal 4 sets (tenzij 3-0 of 3-1)
- ✅ Bij **2-2** → Automatisch 5e set

---

## 🎯 Features Roadmap

### Versie 1.1 (Gepland)
- [ ] Statistieken per set breakdown
- [ ] PDF export functionaliteit
- [ ] Uitgebreide speler statistieken
- [ ] Coach notities feature

### Versie 1.2 (Toekomst)
- [ ] Cloud opslag (Firebase/Supabase)
- [ ] Multi-team support
- [ ] Tegenstander scouting mode
- [ ] Video annotatie integratie

### Versie 2.0 (Visie)
- [ ] Real-time samenwerking (meerdere scorers)
- [ ] Native mobile apps (iOS/Android)
- [ ] AI-powered analytics
- [ ] Toernooi management
- [ ] Live streaming integratie

---

## 🐛 Bekende Issues

- Statistieken per set zijn nog niet volledig geïmplementeerd (alleen current/overall)
- Heatmap overlay kan soms buiten veld verschijnen op zeer kleine schermen (<360px)

---

## 🤝 Contributing

We verwelkomen bijdragen! Zie [CONTRIBUTING.md](CONTRIBUTING.md) voor:
- Code style guidelines
- Pull request proces
- Issue templates
- Development setup

**Quick start voor contributors:**
```bash
# Fork en clone
git clone https://github.com/yourusername/vcv-volleyball-tracker.git

# Maak feature branch
git checkout -b feature/amazing-feature

# Commit en push
git commit -m 'Add amazing feature'
git push origin feature/amazing-feature

# Open Pull Request op GitHub
```

---

## 📄 License

Dit project is gelicenseerd onder de **MIT License** - zie [LICENSE](LICENSE) voor details.

Dit betekent:
- ✅ Commercieel gebruik toegestaan
- ✅ Modificatie toegestaan
- ✅ Distributie toegestaan
- ✅ Privé gebruik toegestaan
- ⚠️ Geen garantie
- ⚠️ Auteur niet aansprakelijk

---

## 👥 Credits

### Ontwikkeling
- **Ontwikkeld voor** VCV (Volleybal Club Veenendaal)
- **Gebouwd met** React, Tailwind CSS, en ❤️

### Dankbetuigingen
- **NeVoBo** - Nederlandse Volleybal Bond voor officiële regels
- **React Team** - Voor het geweldige framework
- **Tailwind Labs** - Voor Tailwind CSS
- **Lucide** - Voor de prachtige iconen

---

## 📞 Support & Contact

### Hulp Nodig?
1. 📖 Check de [QUICKSTART.md](QUICKSTART.md) voor snelle antwoorden
2. 🔍 Zoek in bestaande [GitHub Issues](https://github.com/yourusername/vcv-volleyball-tracker/issues)
3. 💬 Open een nieuwe issue met label `question`
4. 📧 Email: support@vcv.nl

### Bug Rapporteren
Open een issue met:
- Duidelijke titel
- Stappen om te reproduceren
- Verwacht vs werkelijk gedrag
- Screenshots
- Browser/device info

### Feature Requests
We horen graag je ideeën! Open een issue met label `enhancement`

---

## 🌟 Showcase

**Wordt jullie team al getrackt met VCV Tracker?**

Laat het ons weten! We delen graag succesverhalen.

---

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/vcv-volleyball-tracker?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/vcv-volleyball-tracker?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/yourusername/vcv-volleyball-tracker?style=social)

---

<div align="center">

**Made with ❤️ for VCV Volleybal**

[Website](https://vcv.nl) • [GitHub](https://github.com/yourusername/vcv-volleyball-tracker) • [Issues](https://github.com/yourusername/vcv-volleyball-tracker/issues)

⭐ **Like dit project? Geef een ster!** ⭐

</div>
