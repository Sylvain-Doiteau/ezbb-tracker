# Guide de contribution

Merci de votre intérêt pour contribuer à EZBB Tracker !

## Standards de code

- Utilisez TypeScript pour tous les nouveaux fichiers
- Suivez les conventions ESLint configurées
- Formatez votre code avec Prettier (`npm run format`)
- Écrivez des composants fonctionnels avec hooks
- Utilisez les composants UI de base quand c'est possible

## Processus de développement

1. Créer une branche depuis `main`
2. Faire vos modifications
3. Vérifier le code :
   ```bash
   npm run lint
   npm run type-check
   npm run format:check
   ```
4. Tester manuellement l'application
5. Créer une pull request avec une description claire

## Structure des commits

Utilisez des messages de commit clairs :
- `feat: ajout de la fonctionnalité X`
- `fix: correction du bug Y`
- `refactor: refactorisation du composant Z`
- `style: amélioration du style`
- `docs: mise à jour de la documentation`

## Tests

Pour l'instant, les tests sont manuels. Assurez-vous de tester :
- L'ajout de biberons
- La suppression de biberons
- La navigation entre les pages
- La persistance des données
