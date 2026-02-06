# VCV Volleybal Tracker

Een professionele volleybal wedstrijd tracker speciaal ontwikkeld voor VCV (Volleybal Club Veenendaal). Deze applicatie helpt coaches en teams om real-time wedstrijd statistieken bij te houden, analyse te maken en prestaties te verbeteren.

![VCV Volleybal Tracker](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🏐 Features

### Wedstrijd Management
- ✅ **Real-time Score Tracking** - Houd de stand bij met automatische rotatie en service tracking
- ✅ **Best of 5 Systeem** - Altijd 4 sets, 5e set bij 2-2 (correcte NeVoBo regels)
- ✅ **Service Fouten Analyse** - Track verschillende types: net, uit, voetfout
- ✅ **Timeout Tracking** - Maximum 2 per set met automatische validatie
- ✅ **Wissel Systeem** - Maximum 6 wissels per set met volledige NeVoBo validatie

### Speler Management
- ✅ **6 Posities** - Volledige rotatie ondersteuning
- ✅ **Libero Systeem** - Automatische libero wissels voor middens op pos 5/6
- ✅ **Speler Rollen** - Spelverdeler, Diagonaal, Midden, Passer/Loper, Libero
- ✅ **5-1 Speelsysteem** - Met automatische spelverdeler penetratie visualisatie

### Analyse & Statistieken
- 📊 **Heatmap Analyse** - Visualiseer waar punten worden gescoord
- 📊 **Punt Types** - Track Ace, Sideout, Blok, Aanval, Fouten
- 📊 **Service Fout Statistieken** - Per speler breakdown met fout types
- 📊 **Score Verloop** - Volledig overzicht met punt types per rally
- 📊 **Performance Metrics** - Win %, Sideout %, Aanval %, Service %

### Wedstrijd Opslag
- 💾 **Opslaan & Laden** - Bewaar wedstrijden in localStorage
- 💾 **Heatmap History** - Bekijk heatmaps van eerdere sets
- 💾 **Review Mode** - Analyseer opgeslagen wedstrijden

### Responsive Design
- 📱 **Mobiel Geoptimaliseerd** - Volledige touch support
- 📱 **Versleepbare Sidebars** - Pas de interface aan naar jouw voorkeur
- 📱 **10% Sidebar op Mobiel** - Maximale ruimte voor het veld
- 📱 **Responsive Scaling** - Alle elementen passen zich aan

## 🚀 Quick Start

### Optie 1: Direct Gebruiken (zonder installatie)

Download `App.jsx` en open het in een React project, of gebruik een online React editor zoals [CodeSandbox](https://codesandbox.io).

### Optie 2: Lokaal Ontwikkelen

```bash
# Clone de repository
git clone https://github.com/[jouw-username]/vcv-volleyball-tracker.git
cd vcv-volleyball-tracker

# Installeer dependencies
npm install

# Start development server
npm start
```

De app opent automatisch op `http://localhost:3000`

### Optie 3: Build voor Productie

```bash
# Maak een production build
npm run build

# De build staat in de /build folder
# Deploy naar je favorite hosting platform
```

## 📋 Vereisten

- Node.js 14 of hoger
- React 18
- Tailwind CSS (voor styling)
- Lucide React (voor iconen)

## 🎮 Hoe Te Gebruiken

### Een Nieuwe Wedstrijd Starten

1. Klik op het **hamburger menu** (☰) rechtsboven
2. Ga naar **Wedstrijden** tab
3. Klik op **+ Nieuwe Wedstrijd**
4. Vul **tegenstandernaam** in
5. Kies wie er **serveert** (Ons/Tegenstander)
6. **Start!**

### Spelers Instellen

1. Open het **Menu** → **Spelers**
2. Voeg spelers toe met **+ Speler**
3. Stel **namen**, **nummers** en **rollen** in
4. Wijs een **Libero** toe (optioneel)
5. Ga naar **Opstelling** tab om het speelsysteem in te stellen

### Punten Scoren

- **Klik op het veld** waar het punt valt → kies punttype
- **Service Fout knop** → kies type fout (Net/Uit/Voetfout)
- **Timeout knop** → registreer timeout (max 2 per set)

### Spelers Wisselen

1. Klik op **Wissels** tab in menu
2. Selecteer een **bankspeler**
3. Klik op de **veldspeler** die gewisseld wordt
4. Validatie gebeurt automatisch volgens NeVoBo regels

### Analyse Bekijken

- **Stats** tab → Bekijk statistieken
- **Heatmap** tab → Visualiseer scoringspatronen
- **Analyse** tab → Performance metrics

## 📱 Mobiel Gebruik

### Touch Gestures
- **Swipe van rechts** → Open menu
- **Tap op veld** → Score punt
- **Drag linkerrand sidebar** → Pas breedte aan
- **Tap op bankspeler** → Start wissel

### Tips voor Mobiel
- Gebruik **landschap modus** voor beste overzicht
- **Sidebar op 10%** voor maximale veld ruimte
- **Hamburger menu** voor alle functies

## 🏗️ Project Structuur

```
vcv-volleyball-tracker/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.jsx              # Hoofd component
│   └── index.js             # Entry point
├── package.json
├── tailwind.config.js
├── README.md
└── LICENSE
```

## ⚙️ Configuratie

### Aanpassen Team Naam

In `App.jsx`, regel ~983:
```jsx
<div className="text-lg sm:text-xl font-bold">VCV Volleybal Tracker</div>
```

### Aanpassen Watermerk

In `App.jsx`, zoek naar:
```jsx
VCV  // Ons veld watermerk
{opponentName || 'Tegenstander'}  // Tegenstander veld
```

## 🎨 Styling

De app gebruikt Tailwind CSS voor styling. Kleuren en layout kunnen aangepast worden in `tailwind.config.js`.

### Primaire Kleuren
- **Ons Team**: Rood (#dc2626)
- **Tegenstander**: Blauw (#2563eb)
- **Libero**: Grijs (#475569)
- **Heatmap**: Geel (#fbbf24)

## 🐛 Known Issues

- [ ] Statistieken per set zijn nog niet volledig geïmplementeerd (alleen current/overall)
- [ ] Heatmap overlay kan soms buiten veld verschijnen op zeer kleine schermen

## 🗺️ Roadmap

- [ ] Export naar PDF
- [ ] Cloud opslag (Firebase/Supabase)
- [ ] Multi-team support
- [ ] Video annotatie integratie
- [ ] Uitgebreide speler statistieken
- [ ] Tegenstander scouting mode

## 🤝 Contributing

Contributions zijn welkom! 

1. Fork het project
2. Maak een feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit je changes (`git commit -m 'Add some AmazingFeature'`)
4. Push naar de branch (`git push origin feature/AmazingFeature`)
5. Open een Pull Request

## 📄 License

Dit project is gelicenseerd onder de MIT License - zie het [LICENSE](LICENSE) bestand voor details.

## 👥 Authors

- **Ontwikkeld voor VCV** - Volleybal Club Veenendaal

## 🙏 Acknowledgments

- **NeVoBo** - Nederlandse Volleybal Bond voor de officiële regels
- **React Team** - Voor het geweldige framework
- **Tailwind CSS** - Voor de utility-first CSS
- **Lucide** - Voor de mooie iconen

## 📞 Support

Heb je vragen of problemen? Open een issue op GitHub of neem contact op via [jouw-email@example.com]

---

**Made with ❤️ for VCV Volleybal**
