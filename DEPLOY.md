# 🚀 Instructions pour déployer sur GitHub

## Créer le dépôt sur GitHub

1. **Créer un nouveau dépôt sur GitHub** :
   - Allez sur https://github.com/new
   - Nom du dépôt : `ezbb-tracker` (ou un autre nom de votre choix)
   - Choisissez Public ou Private
   - **NE PAS** initialiser avec README, .gitignore ou licence (déjà présents)
   - Cliquez sur "Create repository"

2. **Connecter votre dépôt local au dépôt GitHub** :
   ```bash
   git remote add origin https://github.com/VOTRE_USERNAME/ezbb-tracker.git
   ```

3. **Pousser le code** :
   ```bash
   git branch -M main
   git push -u origin main
   ```

## Vérification

Une fois le code poussé, vous pouvez :
- Voir votre dépôt sur : `https://github.com/VOTRE_USERNAME/ezbb-tracker`
- Cloner ailleurs avec : `git clone https://github.com/VOTRE_USERNAME/ezbb-tracker.git`

## Déploiement en production

Pour déployer l'application :

### Vercel (recommandé)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Puis glisser-déposer le dossier dist/ sur netlify.com
```

### GitHub Pages
Ajoutez dans `package.json` :
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

Puis :
```bash
npm install --save-dev gh-pages
npm run deploy
```
