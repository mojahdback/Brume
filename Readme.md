# ☕ Coffee Shop Configurator

## 📌 Présentation du projet

Coffee Shop Configurator est un site web qui permet aux clients de personnaliser leur café en ligne.

Le client peut choisir la taille du café, le type de lait et les suppléments. Le prix change automatiquement selon ses choix.

Le client peut aussi valider sa sélection et voir le résumé de sa commande.

## 🎯 Objectifs

- Créer une interface simple et agréable.
- Permettre au client de personnaliser son café.
- Afficher le prix en temps réel.
- Créer une page de résumé de la commande.
- Utiliser Git et GitHub pour organiser le travail.

## ✨ Fonctionnalités

- Choisir la taille du café : Small, Medium ou Large.
- Choisir le type de lait.
- Ajouter des suppléments : caramel, vanille ou espresso.
- Voir le prix total en temps réel.
- Voir les choix du client.
- Valider la sélection.
- Enregistrer la commande avec `localStorage`.
- Afficher le résumé de la commande sur une deuxième page.
- Utiliser le site sur ordinateur et téléphone.

## 🛠️ Technologies utilisées

- **HTML5** : pour créer la structure des pages.
- **CSS3** : pour le design et le responsive.
- **JavaScript (Vanilla JS)** : pour les interactions et le calcul du prix.
- **Git** : pour suivre les changements du code.
- **GitHub** : pour héberger le code et gérer les Pull Requests.
- **Jira** : pour organiser les tâches du projet.

## 📄 Pages du site

### 1. Page Configurateur

Cette page permet au client de :
- Choisir son café.
- Sélectionner les options.
- Voir le prix changer automatiquement.
- Valider sa sélection.

### 2. Page Résumé

Cette page permet au client de :
- Voir son café personnalisé.
- Voir les options choisies.
- Voir le prix final de la commande.

## 📁 Structure du projet

```text
coffee-shop-configurator/
│
├── index.html
├── summary.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── script.js
│   └── summary.js
│
├── assets/
│   └── images/
│
└── README.md
```

## 🌿 Organisation GitFlow

Le projet utilise GitFlow pour organiser le code.

- `main` : version finale du projet.
- `develop` : version de développement.
- `feature/layout-html` : création de la structure HTML.
- `feature/layout-css` : création du design CSS.
- `feature/responsive-design` : adaptation aux écrans.
- `feature/js-configurator` : création du configurateur JavaScript.
- `feature/price-calculation` : calcul du prix.
- `feature/summary-page` : création du résumé de la commande.

**Règle importante :** aucun commit direct sur `main` ou `develop`. Chaque modification passe par une Pull Request.

## 📋 Gestion du projet

Les tâches sont organisées dans Jira avec un tableau Kanban.

Les statuts sont :

- **To Do** : tâches à faire.
- **In Progress** : tâches en cours.
- **Review** : tâches à vérifier.
- **Done** : tâches terminées.

## 🚀 Installation et lancement

1. Cloner le repository :

```bash
git clone URL_DU_REPOSITORY
```

2. Ouvrir le dossier du projet :

```bash
cd coffee-shop-configurator
```

3. Ouvrir le fichier `index.html` dans un navigateur.

Tu peux aussi utiliser l'extension Live Server dans Visual Studio Code.

## 🧪 Tests

Le site doit être testé pour vérifier que :

- Les options fonctionnent correctement.
- Le prix change après chaque sélection.
- Les suppléments sont bien affichés.
- Le bouton de validation fonctionne.
- Les données sont enregistrées.
- Le résumé affiche les bonnes informations.
- Le site fonctionne sur ordinateur et téléphone.

## 📱 Responsive Design

Le site s'adapte aux différentes tailles d'écran.

Sur ordinateur, le produit et les options sont affichés côte à côte.

Sur téléphone, les éléments sont affichés les uns sous les autres.

## 👨‍💻 Auteur

Nom : À compléter

Formation : À compléter

Année : 2026

## 📜 Licence

Ce projet est réalisé dans un cadre pédagogique.