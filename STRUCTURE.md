# 📁 Structure Complète du Projet EZBB

Structure professionnelle et organisée pour un tracker de biberons React/TypeScript.

```
EZBB/
│
├── 📄 Configuration du projet
│   ├── package.json              # Dépendances et scripts npm
│   ├── tsconfig.json             # Configuration TypeScript principale
│   ├── tsconfig.node.json        # Configuration TypeScript pour Node
│   ├── vite.config.ts            # Configuration Vite
│   ├── .eslintrc.cjs             # Configuration ESLint
│   ├── .eslintignore             # Fichiers ignorés par ESLint
│   ├── .prettierrc.json          # Configuration Prettier
│   ├── .prettierignore           # Fichiers ignorés par Prettier
│   ├── .editorconfig             # Configuration éditeur universelle
│   ├── .gitignore                # Fichiers ignorés par Git
│   └── .env.example              # Exemple de variables d'environnement
│
├── 📚 Documentation
│   ├── README.md                 # Documentation principale
│   ├── CONTRIBUTING.md           # Guide de contribution
│   ├── CHANGELOG.md              # Historique des versions
│   ├── LICENSE                   # Licence MIT
│   └── STRUCTURE.md              # Ce fichier
│
├── 🎨 Configuration VS Code
│   └── .vscode/
│       ├── settings.json         # Paramètres recommandés
│       └── extensions.json       # Extensions recommandées
│
├── 🌐 Public
│   └── public/
│       └── vite.svg              # Icône de l'application
│
└── 💻 Source Code
    └── src/
        │
        ├── 📦 Composants
        │   └── components/
        │       ├── UI/                    # Composants UI de base
        │       │   ├── Button/            # Bouton réutilisable
        │       │   │   ├── Button.tsx
        │       │   │   ├── Button.css
        │       │   │   └── index.ts
        │       │   ├── Input/             # Input réutilisable
        │       │   │   ├── Input.tsx
        │       │   │   ├── Input.css
        │       │   │   └── index.ts
        │       │   ├── Card/              # Carte réutilisable
        │       │   │   ├── Card.tsx
        │       │   │   ├── Card.css
        │       │   │   └── index.ts
        │       │   └── index.ts           # Export centralisé
        │       │
        │       ├── BottleForm/            # Formulaire d'ajout
        │       │   ├── BottleForm.tsx
        │       │   └── BottleForm.css
        │       │
        │       ├── BottleList/            # Liste complète
        │       │   ├── BottleList.tsx
        │       │   └── BottleList.css
        │       │
        │       ├── Layout/                # Layout principal
        │       │   ├── Layout.tsx
        │       │   ├── Navigation.tsx
        │       │   └── Navigation.css
        │       │
        │       ├── RecentBottles/         # Biberons récents
        │       │   ├── RecentBottles.tsx
        │       │   └── RecentBottles.css
        │       │
        │       └── StatsCard/             # Carte statistiques
        │           ├── StatsCard.tsx
        │           └── StatsCard.css
        │
        ├── 📄 Pages
        │   └── pages/
        │       ├── HomePage.tsx           # Page d'accueil
        │       ├── HomePage.css
        │       ├── HistoryPage.tsx        # Page historique
        │       ├── HistoryPage.css
        │       ├── StatsPage.tsx          # Page statistiques
        │       └── StatsPage.css
        │
        ├── 🗄️ Store (État global)
        │   └── store/
        │       └── bottleStore.ts         # Store Zustand avec persistance
        │
        ├── 🔧 Services (Logique métier)
        │   └── services/
        │       └── statsService.ts        # Calcul des statistiques
        │
        ├── 🎣 Hooks personnalisés
        │   └── hooks/
        │       └── useBottles.ts          # Hook pour gérer les biberons
        │
        ├── 📚 Bibliothèque d'utilitaires
        │   └── lib/
        │       └── utils.ts               # Utilitaires généraux (cn, formatNumber, etc.)
        │
        ├── ⚙️ Configuration
        │   └── config/
        │       └── constants.ts           # Constantes de l'application
        │
        ├── 🎨 Styles globaux
        │   └── styles/
        │       ├── reset.css              # Reset CSS
        │       ├── variables.css          # Variables CSS (couleurs, espacements)
        │       └── utilities.css          # Classes utilitaires
        │
        ├── 📦 Assets
        │   └── assets/
        │       └── index.ts               # Export des assets
        │
        ├── 📝 Types TypeScript
        │   └── types/
        │       └── index.ts               # Définitions de types (Bottle, BabyProfile, Stats)
        │
        ├── 🛠️ Utilitaires spécifiques
        │   └── utils/
        │       └── dateUtils.ts           # Formatage de dates
        │
        ├── 🚀 Point d'entrée
        │   ├── main.tsx                   # Point d'entrée React
        │   └── App.tsx                    # Composant racine avec routing
        │
        └── 🎨 Styles principaux
            └── index.css                   # Import des styles globaux
```

## 🎯 Organisation par responsabilité

### **Composants UI** (`components/UI/`)
Composants réutilisables de base pour construire l'interface :
- `Button` : Bouton avec variantes (primary, danger, secondary)
- `Input` : Champ de saisie avec label et gestion d'erreur
- `Card` : Conteneur avec titre optionnel

### **Composants métier** (`components/`)
Composants spécifiques à l'application :
- `BottleForm` : Formulaire d'ajout de biberon
- `BottleList` : Affichage de la liste complète
- `RecentBottles` : Affichage des biberons récents
- `StatsCard` : Carte de statistiques
- `Layout` : Structure de page avec navigation

### **Pages** (`pages/`)
Pages principales de l'application :
- `HomePage` : Page d'accueil avec formulaire et récents
- `HistoryPage` : Historique complet des biberons
- `StatsPage` : Statistiques détaillées

### **Gestion d'état** (`store/`)
Store Zustand avec persistance localStorage pour :
- Liste des biberons
- Profil bébé (futur)

### **Services** (`services/`)
Logique métier pure :
- Calcul des statistiques par période

### **Configuration** (`config/`)
Constantes centralisées :
- Types de biberons
- Routes
- Clés de stockage
- Labels

### **Styles** (`styles/`)
Système de design cohérent :
- Variables CSS pour thème
- Reset CSS
- Classes utilitaires

## 🔄 Flux de données

```
User Input → Component → Store (Zustand) → localStorage
                                      ↓
                              Component Update
```

## 📦 Imports recommandés

Utilisez les alias TypeScript configurés :
```typescript
import { Button } from '@/components/UI'
import { ROUTES } from '@/config/constants'
import { useBottleStore } from '@/store/bottleStore'
import { formatDate } from '@/utils/dateUtils'
import { cn } from '@/lib/utils'
```

## 🎨 Conventions

- **Composants** : PascalCase (`BottleForm.tsx`)
- **Fichiers utilitaires** : camelCase (`dateUtils.ts`)
- **Constantes** : UPPER_SNAKE_CASE (`BOTTLE_TYPES`)
- **CSS** : BEM-like avec kebab-case (`.bottle-form`)

## 🚀 Prochaines améliorations possibles

- [ ] Ajouter des tests unitaires (`__tests__/`)
- [ ] Ajouter Storybook pour les composants UI (`storybook/`)
- [ ] Ajouter des types pour les props (`types/props/`)
- [ ] Ajouter des contextes React si nécessaire (`contexts/`)
- [ ] Ajouter des validations (`validations/`)
