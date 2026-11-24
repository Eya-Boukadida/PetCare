# 🐾 PetCare — Plateforme Moderne d'Éducation & de Soins pour Chiens et Chats

<div align="center">

![PetCare Banner](public/favicon.svg)

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TanStack Router](https://img.shields.io/badge/TanStack-Router%20%26%20Start-FF4154?logo=tanstack&logoColor=white)](https://tanstack.com/)
[![Vitest](https://img.shields.io/badge/Vitest-4.1-729B1B?logo=vitest&logoColor=white)](https://vitest.dev/)
[![Languages](https://img.shields.io/badge/Languages-FR%20%7C%20EN%20%7C%20AR%20(RTL)-orange)](#-support-multilingue--i18n)

**Une application web complète, interactive et bienveillante dédiée à l'apprentissage, au suivi quotidien et au bien-être de vos animaux de compagnie.**

[Fonctionnalités](#-fonctionnalités-clés) • [Technologies](#-stack-technique) • [Installation](#-installation-rapide) • [Architecture](#-architecture-du-projet) • [Tests](#-tests-qualité)

</div>

---

## 🌟 Présentation

**PetCare** est une solution tout-en-un pour accompagner les propriétaires de chiens et de chats à chaque étape de leur vie. Conçue avec une approche d'éducation positive et bienveillante, l'application fonctionne de manière **100% autonome et locale**, sans compte utilisateur obligatoire ni base de données externe.

---

## ✨ Fonctionnalités Clés

### 🎓 1. Modules d'Entraînement Complets (64 Étapes Illustrées)
- **13 Parcours d'éducation progressive** :
  - 🐕 **7 programmes pour chiens** : Assis, Couché, Pas bouger, Rappel, Marche en laisse sans tirer, Laisse/Donne, etc.
  - 🐈 **6 programmes pour chats** : Utilisation de la litière, Apprivoisement du griffoir, Caisse de transport sans stress, Répondre au prénom, High-five, Désensibilisation au brossage.
- **Détails pas-à-pas** : chaque étape intègre une illustration originale, la posture humaine recommandée, le geste clé, les erreurs fréquentes à éviter et les conseils d'experts.
- **Suivi de progression** : validation des étapes et navigation fluide avec reprise automatique là où vous vous êtes arrêté.

### 📅 2. Suivi Quotidien & Checklist Interactive
- Todo-list dynamique pour les repas, promenades, brossage, prise de médicaments et moments de jeu.
- Enregistrement immédiat dans le `localStorage` du navigateur pour retrouver ses coches chaque jour.

### 🧮 3. Calculateur d'Âge Réel pour Animaux
- Outil précis d'équivalence d'âge humain/animal prenant en compte l'espèce (chien/chat), la taille et la morphologie.

### 📋 4. Profil de l'Animal Personnalisé
- Fiche d'identité complète : prénom, race, date de naissance, poids, avatar/photo et notes de santé.

### 📚 5. Guides de Soins & Conseils Pratiques
- Fiches éducatives sur la nutrition, l'hygiène, la santé préventive et le décodage du langage corporel animal.

---

## 🌐 Support Multilingue & i18n

L'application est entièrement internationalisée en **3 langues**, accessible en un clic via le sélecteur d'en-tête :
- 🇫🇷 **Français** (par défaut)
- 🇬🇧 **English**
- 🇸🇦 **العربية** (avec prise en charge native du sens d'écriture **RTL** - droite à gauche)

Le choix de langue est mémorisé sur l'appareil de l'utilisateur.

---

## 🔒 100% Local & Respect de la Vie Privée

- **Zéro fuite de données** : Toutes les données de progression, checklist et profils sont stockées exclusivement dans le navigateur (`localStorage`).
- **Ressources embarquées** : Les 64 illustrations originales au format WebP haute performance et les polices typographiques sont servies localement depuis `public/`.
- **Aucune dépendance à un CDN externe** en production.

---

## 🛠️ Stack Technique

| Domaine | Technologies |
|---|---|
| **Frontend Framework** | [React 19](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/) |
| **Routing & SSR** | [TanStack Router](https://tanstack.com/router) & [TanStack Start](https://tanstack.com/start) |
| **Build & Tooling** | [Vite 8](https://vitejs.dev/) & [Bun](https://bun.sh/) |
| **Styles & UI** | [Tailwind CSS v4](https://tailwindcss.com/) + [Radix UI](https://www.radix-ui.com/) + [Lucide Icons](https://lucide.dev/) |
| **Formulaires & Validation** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| **Tests** | [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) |

---

## 🚀 Installation Rapide

### Prérequis
- [Node.js](https://nodejs.org/) version **22.12 ou supérieure** (ou [Bun](https://bun.sh/))

### 1. Cloner le dépôt
```bash
git clone https://github.com/Eya-Boukadida/PetCare.git
cd PetCare
```

### 2. Installer les dépendances
Avec **npm** :
```bash
npm install
```
*Ou avec **Bun** :*
```bash
bun install
```

### 3. Lancer le serveur de développement
```bash
npm run dev
# ou: bun run dev
```
Ouvrez l'URL affichée (généralement `http://localhost:5173`) dans votre navigateur.

---

## 🧪 Tests Qualité

Lancer la suite de tests automatisés (vérification des étapes d'entraînement, intégrité des 64 images, calculateur et composants de routage) :
```bash
npm run test
```

Pour lancer les tests en mode interactif watch :
```bash
npm run test:watch
```

---

## 📦 Build & Production

Pour compiler le projet pour la production :
```bash
npm run build
```
Pour prévisualiser le build localement :
```bash
npm run preview
```

---

## 📂 Architecture du Projet

```text
PetCare/
├── public/
│   ├── __l5e/assets-v1/      # 64 illustrations originales WebP locales
│   ├── fonts/                # Polices typographiques locales
│   ├── favicon.svg           # Favicon PetCare
│   └── favicon.ico
├── src/
│   ├── components/           # Composants UI & fonctionnels
│   │   ├── training.tsx      # Parcours d'entraînement interactif
│   │   ├── other-pages.tsx   # Guides, checklist, profil & calculateur
│   │   ├── petcare-shell.tsx # Shell d'application, navbar & i18n
│   │   └── ui/               # Composants Radix UI / Shadcn
│   ├── hooks/                # Hooks React personnalisés
│   ├── lib/                  # Logique métier, données & traductions
│   │   ├── training.ts       # Les 13 programmes & 64 étapes
│   │   └── i18n-dict.json    # Dictionnaire trilingue (FR/EN/AR)
│   ├── routes/               # Routes TanStack
│   ├── test/                 # Tests unitaires Vitest
│   └── styles.css            # Feuille de styles globale Tailwind
├── components.json           # Configuration Shadcn
├── vite.config.ts            # Configuration Vite
├── vitest.config.ts          # Configuration Vitest
├── tsconfig.json             # Configuration TypeScript
└── package.json
```

---

## 👩‍💻 Auteur

Développé avec passion par **[Eya Boukadida](https://github.com/Eya-Boukadida)**.

---

## ⚠️ Avertissement Légal & Santé

*PetCare est un projet éducatif d'accompagnement quotidien. Il ne remplace en aucun cas le diagnostic, les conseils ou les prescriptions d'un vétérinaire diplômé.*
