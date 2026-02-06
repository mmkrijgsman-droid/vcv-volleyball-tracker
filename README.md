# 🏐 Volleybal Tracker - Deployment Instructies

## Bestanden die je nodig hebt

Je hebt **2 bestanden** nodig om deze app te deployen:

1. **index.html** - Het hoofdbestand dat alles laadt
2. **app.jsx** - Je volleybal tracker component

## Deployment Opties

### Optie 1: GitHub Pages (Aanbevolen)

1. Upload beide bestanden naar je GitHub repository:
   ```
   je-repo/
   ├── index.html
   └── app.jsx
   ```

2. Ga naar je repository settings op GitHub
3. Scroll naar "Pages" in het menu links
4. Bij "Source" selecteer: **main branch** en **/ (root)**
5. Klik op "Save"
6. Je app is nu beschikbaar op: `https://jouw-username.github.io/jouw-repo/`

### Optie 2: Netlify

1. Ga naar [netlify.com](https://netlify.com)
2. Sleep beide bestanden naar de Netlify drop zone
3. Je app is direct live!

### Optie 3: Vercel

1. Ga naar [vercel.com](https://vercel.com)
2. Import je GitHub repository
3. Deploy automatisch

### Optie 4: Lokaal testen

1. Plaats beide bestanden in dezelfde map
2. Open `index.html` direct in je browser
   - **Let op**: Sommige browsers blokkeren lokale file loading vanwege CORS
   - Als het niet werkt, gebruik dan een lokale server:

   **Met Python:**
   ```bash
   python -m http.server 8000
   ```
   Ga dan naar: `http://localhost:8000`

   **Met Node.js:**
   ```bash
   npx serve
   ```

## Belangrijke Notities

- ✅ Beide bestanden moeten in **dezelfde map** staan
- ✅ De app gebruikt **CDN links** voor React, Tailwind en Lucide Icons
- ✅ **Geen build stap nodig** - het werkt direct in de browser
- ✅ Data wordt opgeslagen in **localStorage** van je browser

## Troubleshooting

### Ik zie niks / witte pagina
- Check of beide bestanden in dezelfde map staan
- Open de browser console (F12) en kijk naar errors
- Controleer je internet verbinding (voor CDN links)

### Icons laden niet
- Wacht een paar seconden, icons laden via CDN
- Check je internet verbinding
- Open de console en kijk of er CORS errors zijn

### App werkt niet lokaal
- Gebruik een lokale server (zie hierboven)
- Browser beveiligingsinstellingen kunnen lokale file loading blokkeren

## Support

Als je problemen hebt, check:
1. Browser console voor error messages (F12)
2. Of beide bestanden in dezelfde directory staan
3. Of je internet verbinding werkt (voor CDN resources)

Veel succes met je volleybal tracking! 🏐
