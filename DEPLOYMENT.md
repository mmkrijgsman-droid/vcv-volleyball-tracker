# Deployment Guide

Deze guide helpt je om VCV Volleybal Tracker te deployen naar verschillende platforms.

## 📦 Build Voorbereiding

```bash
# Installeer dependencies
npm install

# Maak production build
npm run build
```

De production build staat in de `/build` folder.

## 🚀 Deployment Opties

### Optie 1: Netlify (Aanbevolen - Gratis)

1. **Push naar GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/[username]/vcv-volleyball-tracker.git
   git push -u origin main
   ```

2. **Deploy via Netlify**
   - Ga naar [netlify.com](https://netlify.com)
   - Klik "Add new site" → "Import from Git"
   - Selecteer je repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `build`
   - Klik "Deploy site"

3. **Custom Domain (optioneel)**
   - Ga naar Site settings → Domain management
   - Add custom domain (bijv. tracker.vcv.nl)

### Optie 2: Vercel (Gratis)

1. **Push naar GitHub** (zie boven)

2. **Deploy via Vercel**
   - Ga naar [vercel.com](https://vercel.com)
   - Klik "New Project"
   - Import je GitHub repository
   - Vercel detecteert automatisch React
   - Klik "Deploy"

### Optie 3: GitHub Pages (Gratis)

1. **Update package.json**
   ```json
   {
     "homepage": "https://[username].github.io/vcv-volleyball-tracker"
   }
   ```

2. **Installeer gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy scripts**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

### Optie 4: Firebase Hosting (Gratis)

1. **Installeer Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login en init**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configuratie**
   - Public directory: `build`
   - Single-page app: `Yes`
   - GitHub auto-deploys: `No`

4. **Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

### Optie 5: Eigen Server

1. **Build de app**
   ```bash
   npm run build
   ```

2. **Upload /build folder** naar je server

3. **Nginx configuratie**
   ```nginx
   server {
       listen 80;
       server_name tracker.vcv.nl;
       root /var/www/vcv-tracker/build;
       index index.html;

       location / {
           try_files $uri /index.html;
       }
   }
   ```

4. **Apache .htaccess**
   ```apache
   <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
   </IfModule>
   ```

## 🔒 Environment Variables

Voor productie kun je environment variables toevoegen:

Create `.env.production`:
```
REACT_APP_VERSION=1.0.0
REACT_APP_API_URL=https://api.vcv.nl
```

Gebruik in code:
```javascript
const version = process.env.REACT_APP_VERSION;
```

## 📱 PWA (Progressive Web App)

De app is PWA-ready. Om offline functionaliteit toe te voegen:

1. Uncomment service worker in `src/index.js`:
   ```javascript
   import * as serviceWorker from './serviceWorker';
   serviceWorker.register();
   ```

2. Build en deploy

## 🔄 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install and Build
        run: |
          npm ci
          npm run build
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        with:
          args: deploy --dir=build --prod
```

## 🐛 Troubleshooting

### Build fails
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routing niet werkend op server
- Check dat SPA fallback geconfigureerd is
- Alle routes moeten naar index.html wijzen

### LocalStorage werkt niet
- Check HTTPS (vereist voor sommige features)
- Check browser privacy settings

## 📊 Analytics (optioneel)

### Google Analytics

1. **Add tracking ID** in `public/index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```

## 🔐 Security Checklist

- [ ] HTTPS enabled
- [ ] CSP headers configured
- [ ] CORS properly set up
- [ ] No sensitive data in localStorage
- [ ] Error logging configured
- [ ] Rate limiting (indien API gebruikt)

## 📞 Support

Voor deployment problemen, open een issue op GitHub of neem contact op via [support@vcv.nl]

---

**Happy Deploying! 🚀**
