# 📦 Setup Instructions - VCV Volleybal Tracker v1.0.0

Complete instructies voor het opzetten van de VCV Volleybal Tracker vanaf deze repository.

---

## 📋 Inhoud Repository

```
vcv-volleyball-tracker/
├── 📄 README.md              # Volledige documentatie
├── 📄 QUICKSTART.md          # 5-minuten start gids
├── 📄 CHANGELOG.md           # Versie geschiedenis
├── 📄 LICENSE                # MIT License
├── 📄 .gitignore             # Git ignore regels
├── 📄 package.json           # NPM dependencies
├── 📄 tailwind.config.js     # Tailwind configuratie
├── 📄 postcss.config.js      # PostCSS configuratie
├── 📁 public/
│   ├── index.html           # HTML template
│   └── manifest.json        # PWA configuratie
└── 📁 src/
    ├── App.jsx              # Hoofdapplicatie (2337 regels)
    ├── index.js             # React entry point
    └── index.css            # Global styles
```

**Totaal:** 13 bestanden | ~30KB compressed

---

## 🚀 Installatie Opties

### Optie 1: GitHub Clone (Aanbevolen)

```bash
# Clone vanaf GitHub
git clone https://github.com/yourusername/vcv-volleyball-tracker.git
cd vcv-volleyball-tracker

# Installeer dependencies
npm install

# Start development server
npm start
```

### Optie 2: Download & Extract

```bash
# Extract tar.gz
tar -xzf vcv-volleyball-tracker-v1.0.0.tar.gz
cd vcv-volleyball-tracker

# Installeer dependencies
npm install

# Start
npm start
```

### Optie 3: Fork & Customize

```bash
# Fork op GitHub, dan clone je fork
git clone https://github.com/JOUW-USERNAME/vcv-volleyball-tracker.git
cd vcv-volleyball-tracker

# Maak je eigen branch
git checkout -b custom-vcv

# Pas aan naar wens
# ... edit files ...

# Commit en push
git add .
git commit -m "Customize for my team"
git push origin custom-vcv
```

---

## ✅ Verificatie

Na `npm start` zou je moeten zien:

```
Compiled successfully!

You can now view vcv-volleyball-tracker in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000
```

Open `http://localhost:3000` en je zou de app moeten zien! ✨

---

## 🔧 Aanpassingen Maken

### Team Naam Wijzigen

**Bestand:** `src/App.jsx` regel ~983
```jsx
// Verander "VCV" naar je team naam
<div className="text-lg sm:text-xl font-bold">VCV Volleybal Tracker</div>
```

**Bestand:** `src/App.jsx` regel ~1721 (watermerk op veld)
```jsx
// Verander "VCV" watermerk
VCV
```

### Kleuren Aanpassen

**Bestand:** `tailwind.config.js`
```javascript
colors: {
  'vcv-red': '#dc2626',      // Wijzig naar je team kleur
  'vcv-blue': '#2563eb',     // Wijzig tegenstander kleur
  'vcv-orange': '#fb923c',   // Veld kleur
  'vcv-yellow': '#fbbf24',   // Heatmap kleur
}
```

### App Naam in Browser Tab

**Bestand:** `public/index.html`
```html
<title>VCV Volleybal Tracker</title>  <!-- Wijzig hier -->
```

### PWA Naam (Home Screen)

**Bestand:** `public/manifest.json`
```json
{
  "short_name": "VCV Tracker",           // Wijzig
  "name": "VCV Volleybal Tracker",       // Wijzig
}
```

---

## 🌐 Deployen naar Online

### Netlify (Gratis & Makkelijk)

1. Push naar GitHub
2. Ga naar [netlify.com](https://netlify.com)
3. "New site from Git"
4. Selecteer repository
5. Build command: `npm run build`
6. Publish directory: `build`
7. Deploy!

### Vercel (Gratis & Snel)

1. Push naar GitHub
2. Ga naar [vercel.com](https://vercel.com)
3. "New Project"
4. Import repository
5. Vercel detecteert React automatisch
6. Deploy!

### Eigen Domain

Na deployment bij Netlify/Vercel:
- Settings → Domain
- Add custom domain
- Bijv: `tracker.jouwvereniging.nl`

---

## 📱 Mobiele App Maken

### PWA (Progressive Web App)

De app is **PWA-ready**! Gebruikers kunnen:

**iOS (Safari):**
1. Open app in Safari
2. Tap Share button
3. "Zet op beginscherm"

**Android (Chrome):**
1. Open app in Chrome  
2. Menu → "Toevoegen aan startscherm"

### Native Apps (Toekomst)

Voor échte native apps (v2.0):
- React Native versie
- Capacitor wrapper
- Play Store / App Store releases

---

## 🔐 Security Best Practices

### Voor Productie

1. **HTTPS**: Altijd HTTPS gebruiken
2. **Environment Variables**: Gevoelige data in `.env`
3. **Updates**: Houd dependencies up-to-date
   ```bash
   npm audit
   npm update
   ```

### Privacy

- Data wordt **lokaal** opgeslagen (localStorage)
- **Geen** externe tracking
- **Geen** data naar servers
- Volledig **offline** capable

---

## 🐛 Troubleshooting

### "npm install" faalt

```bash
# Clear npm cache
npm cache clean --force

# Verwijder node_modules
rm -rf node_modules package-lock.json

# Opnieuw installeren
npm install
```

### "Module not found" errors

```bash
# Controleer Node versie
node --version  # Moet 14+ zijn

# Reinstall dependencies
rm -rf node_modules
npm install
```

### Build faalt

```bash
# Clear build cache
rm -rf build

# Clean install
npm ci
npm run build
```

### App laadt niet in browser

1. Check console voor errors (F12)
2. Clear browser cache
3. Probeer incognito mode
4. Check firewall/antivirus

---

## 📊 Development Tips

### Hot Reload

Development server heeft **hot reload**:
- Edit `src/App.jsx`
- Sla op
- Browser refresht automatisch! ✨

### VS Code Extensions (Aanbevolen)

- **ES7+ React snippets** - Snelle React code
- **Tailwind CSS IntelliSense** - Autocomplete voor classes
- **Prettier** - Code formatting
- **ESLint** - Code linting

### React DevTools

Install [React DevTools](https://react.dev/learn/react-developer-tools):
- Chrome: Chrome Web Store
- Firefox: Firefox Add-ons
- Debug component state real-time!

---

## 🤝 Bijdragen

Wil je bijdragen? Geweldig!

1. Fork het project
2. Create feature branch: `git checkout -b feature/amazing`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push: `git push origin feature/amazing`
5. Open Pull Request

Zie [CONTRIBUTING.md](CONTRIBUTING.md) voor details.

---

## 📞 Support

### Hulp Nodig?

1. **Check documentatie:**
   - [README.md](README.md) - Volledige docs
   - [QUICKSTART.md](QUICKSTART.md) - Snelstart
   
2. **GitHub Issues:**
   - Zoek bestaande issues
   - Open nieuwe met label `question`

3. **Contact:**
   - Email: support@vcv.nl
   - Website: https://vcv.nl

---

## 🎉 Klaar voor je Eerste Wedstrijd!

Alles geïnstalleerd? **Start je eerste wedstrijd:**

1. `npm start`
2. Open browser op `http://localhost:3000`
3. Menu → Spelers → Voeg team toe
4. Menu → Wedstrijden → + Nieuwe Wedstrijd
5. **Enjoy!** 🏐

---

**Made with ❤️ for VCV Volleybal**

Versie 1.0.0 | 7 Februari 2026
