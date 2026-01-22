# 🍼 EZBB - Tracker de Biberons pour Bébé

Application React moderne et professionnelle pour suivre les biberons de votre bébé avec statistiques détaillées et historique complet.

## ✨ Fonctionnalités

- ✅ **Ajout de biberons** avec quantité, type (lait/eau/préparation) et notes
- ✅ **Historique complet** avec tri chronologique et suppression
- ✅ **Statistiques détaillées** (aujourd'hui, cette semaine, ce mois)
- ✅ **Persistance des données** via localStorage
- ✅ **Interface responsive** et moderne
- ✅ **Navigation fluide** entre les pages
- ✅ **TypeScript** pour la sécurité de type
- ✅ **Design system** avec composants UI réutilisables

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+ et npm/yarn/pnpm

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

### Scripts disponibles

```bash
npm run dev          # Démarre le serveur de développement
npm run build        # Build de production
npm run preview      # Prévisualise le build de production
npm run lint         # Vérifie le code avec ESLint
npm run format       # Formate le code avec Prettier
npm run format:check # Vérifie le formatage
npm run type-check   # Vérifie les types TypeScript
```

## 📁 Structure du projet

```
EZBB/
├── public/                 # Assets statiques
│   └── vite.svg
│
├── src/
│   ├── assets/            # Images, icônes, etc.
│   ├── components/        # Composants React
│   │   ├── UI/           # Composants UI de base (Button, Input, Card)
│   │   ├── BottleForm/   # Formulaire d'ajout
│   │   ├── BottleList/   # Liste des biberons
│   │   ├── Layout/       # Layout et navigation
│   │   ├── RecentBottles/# Biberons récents
│   │   └── StatsCard/    # Carte de statistiques
│   │
│   ├── pages/            # Pages de l'application
│   │   ├── HomePage.tsx
│   │   ├── HistoryPage.tsx
│   │   └── StatsPage.tsx
│   │
│   ├── store/            # Gestion d'état (Zustand)
│   │   └── bottleStore.ts
│   │
│   ├── services/         # Logique métier
│   │   └── statsService.ts
│   │
│   ├── hooks/            # Hooks personnalisés
│   │   └── useBottles.ts
│   │
│   ├── lib/              # Utilitaires généraux
│   │   └── utils.ts
│   │
│   ├── config/           # Configuration et constantes
│   │   └── constants.ts
│   │
│   ├── types/            # Types TypeScript
│   │   └── index.ts
│   │
│   ├── styles/           # Styles globaux
│   │   ├── reset.css
│   │   ├── variables.css
│   │   └── utilities.css
│   │
│   ├── utils/            # Utilitaires spécifiques
│   │   └── dateUtils.ts
│   │
│   ├── App.tsx           # Composant racine
│   ├── main.tsx          # Point d'entrée
│   └── index.css         # Styles principaux
│
├── .vscode/              # Configuration VS Code
├── .editorconfig         # Configuration éditeur
├── .prettierrc.json      # Configuration Prettier
├── .eslintrc.cjs         # Configuration ESLint
├── tsconfig.json         # Configuration TypeScript
├── vite.config.ts        # Configuration Vite
└── package.json          # Dépendances
```

## 🛠️ Technologies utilisées

- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool moderne
- **React Router** - Navigation
- **Zustand** - Gestion d'état légère
- **date-fns** - Manipulation de dates
- **ESLint** - Linting
- **Prettier** - Formatage de code

## 🎨 Design System

Le projet utilise un système de design cohérent avec :

- **Variables CSS** pour les couleurs, espacements, typographie
- **Composants UI de base** réutilisables (Button, Input, Card)
- **Classes utilitaires** pour le layout et le styling
- **Support du mode sombre/clair** automatique

## 📝 Conventions de code

- **TypeScript strict** activé
- **ESLint** pour la qualité du code
- **Prettier** pour le formatage
- **Composants fonctionnels** avec hooks
- **Nommage** : PascalCase pour les composants, camelCase pour les fonctions

## 🔮 Prochaines fonctionnalités

- [ ] Profil bébé (nom, date de naissance, objectif quotidien)
- [ ] Graphiques de consommation (Chart.js ou Recharts)
- [ ] Rappels/notifications
- [ ] Export des données (CSV, JSON)
- [ ] Mode sombre/clair manuel
- [ ] Support multi-bébés
- [ ] Synchronisation cloud
- [ ] Application mobile (PWA)

## 📄 Licence

Ce projet est privé.

## 👨‍💻 Développement

Pour contribuer au projet :

1. Créer une branche depuis `main`
2. Faire vos modifications
3. Vérifier avec `npm run lint` et `npm run type-check`
4. Formater avec `npm run format`
5. Créer une pull request

---

Développé avec ❤️ pour faciliter le suivi des biberons de bébé
