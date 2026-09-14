# Cockpit Joueur V0.2

Nouvelle maquette fonctionnelle de la console joueur, conçue comme application sœur de Cockpit MJ et optimisée pour iPad paysage.

## Écrans

- **Fiche** : caractéristiques, sauvegardes, compétences, PV, combat et ressources.
- **Aptitudes** : aptitudes regroupées par origine/classe/sous-classe/don/historique, avec référence rapide.
- **Sorts** : emplacements interactifs, filtres, recherche et fiche détaillée.
- **Inventaire** : écran séparé en deux, **Équipement à gauche / Possessions à droite**. Le PNG du personnage est placé sur le socle du fond d’écran, les trois objets liés à ses pieds, les autres équipements dessous. Les objets se déplacent par glisser-déposer.
- **Journal** : notes éditables et export TXT.
- **Illustrations** : bibliothèque locale avec catégories personnalisables, sélection, déplacement, suppression et partage iPad.

## Fonds d’écran

Sept fonds sont intégrés : Accueil, Fiche, Aptitudes, Sorts, Inventaire, Journal et Illustrations. Depuis le menu principal, chaque fond peut être remplacé par un PNG/JPEG externe ou réinitialisé au visuel d’origine. Les personnalisations sont enregistrées localement dans IndexedDB et ne sont pas incluses dans les exports JSON de personnage.

## Personnages

- Démo intégrée : **Wonq — Gardien des Absents**.
- Jusqu’à 20 sauvegardes de personnages.
- Import/export JSON.
- Le portrait/PNG du personnage reste un média local indépendant des sauvegardes JSON.

## Déploiement

Tous les fichiers sont root-safe : placer directement le contenu de l’archive à la racine d’un dépôt GitHub Pages.
