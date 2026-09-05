# CLAUDE.md — Instructions projet site entreprise

## 🎬 Présentation de l'entreprise

Je suis une **société de production audiovisuelle indépendante** proposant une gamme complète de prestations créatives et techniques. Mon activité principale et en fort développement est la **réalisation live multicam avec régie**.

### Services proposés

| Service | Détail |
|---|---|
| 🎥 Vidéo corporate | Films d'entreprise, présentation de marque |
| 🎉 Aftermovie | Captation et montage événementiel pour réseaux sociaux |
| 🌐 Sites web | Création de sites (Astro) |
| 🎬 Films | Courts-métrages, films institutionnels |
| 🎤 Interviews | Tournage et montage d'interviews |
| 🚁 Drone | Prises de vue aériennes — télépilote diplômé (DGAC) |
| 🎵 Clips musicaux | Réalisation de clips pour artistes |
| 📡 **Live multicam** ⭐ | **Branche principale en développement** — réalisation live avec régie multicaméra (événements, concerts, conférences, mariages...) |

---

## 🏗️ Stack technique

- **Framework** : [Astro](https://astro.build/) (site statique rapide, SEO-friendly)
- **Styling** : Tailwind CSS
- **Animations** : GSAP ou Framer Motion (selon les composants)
- **Déploiement** : Vercel ou Netlify
- **Médias** : Vimeo embed pour les vidéos (pas d'auto-play lourd)
- **Formulaire de contact** : Netlify Forms ou Resend

---

## 🎨 Charte graphique

Charte extraite du logo officiel **Klip-Klap**.

### Palette de couleurs

```css
/* === COULEURS PRINCIPALES === */
--color-bg:           #000000;   /* Noir pur — fond général */
--color-primary:      #F5C800;   /* Jaune doré — couleur signature Klip-Klap */
--color-primary-glow: #FFD700;   /* Jaune vif — hover, accents, highlights */
--color-primary-dark: #C9A200;   /* Jaune foncé — états actifs, borders */

/* === TEXTES === */
--color-text:         #FFFFFF;   /* Blanc — texte principal sur fond noir */
--color-text-muted:   #AAAAAA;   /* Gris clair — textes secondaires */
--color-text-subtle:  #666666;   /* Gris moyen — placeholders, métadonnées */

/* === SURFACES === */
--color-surface:      #0D0D0D;   /* Noir légèrement relevé — cartes, sections */
--color-surface-2:    #1A1A1A;   /* Gris très sombre — hover states, inputs */
--color-border:       #2A2A2A;   /* Bordures subtiles */
--color-border-accent:#F5C800;   /* Bordure accentuée (jaune) */
```

### Esprit visuel

- **Ambiance** : Sombre, cinématographique, percutant — contraste fort noir/jaune
- **Énergie** : Raw, créatif, artisanal — le logo brush lettering transmet un côté fait main, authentique
- **Contraste** : Toujours utiliser du blanc ou du jaune sur fond noir — jamais de gris moyen comme texte principal
- **Accents** : Le jaune `#F5C800` est réservé aux éléments importants (CTA, titres clés, hover, icônes actives)

### Typographies

```css
/* ═══════════════════════════════════════
   SYSTÈME TYPOGRAPHIQUE KLIP KLAP
   ═══════════════════════════════════════ */

/* H1 / Logo / Accroches hero — identité Klip Klap */
--font-display: 'Road Rage', Impact, sans-serif;

/* H2 / H3 / Navigation / Sous-titres / Corps — Helvetica Now */
--font-body: 'Helvetica Now Display', 'Helvetica Now', 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

#### Road Rage
- **Source** : Google Fonts — `https://fonts.google.com/specimen/Road+Rage`
- **Import** : `@import url('https://fonts.googleapis.com/css2?family=Road+Rage&display=swap');`
- **Usage** : Logo dans le header · H1 hero uniquement · Accroches très grandes (48px+)
- **Ne pas utiliser** en dessous de 32px — illisible · Jamais pour du texte courant

#### Helvetica Now Display
- **Source** : Adobe Fonts (inclus dans Creative Cloud) — **NE PAS utiliser Google Fonts**
- **Intégration dans Astro** :
  1. Aller sur [fonts.adobe.com](https://fonts.adobe.com) → rechercher "Helvetica Now Display"
  2. Créer un Web Project Adobe Fonts → copier le `<link>` ou le code CSS fourni
  3. Ajouter le lien dans `src/layouts/BaseLayout.astro` dans le `<head>`
  4. Utiliser `font-family: 'Helvetica Now Display', 'Helvetica Neue', Helvetica, sans-serif;`
- **Variantes à activer** : Light (300) · Regular (400) · Medium (500) · Bold (700)
- **Usage** :
  - H2, H3 : weight 300–400, letter-spacing -0.5px
  - Navigation : weight 400, letter-spacing 2–3px, uppercase, font-size 12px
  - Sous-titres eyebrow : weight 400, letter-spacing 4–5px, uppercase, couleur `#F5C800`
  - Corps de texte : weight 300, line-height 1.7, couleur `#999`
  - Boutons : weight 500, letter-spacing 3px, uppercase
  - Labels / tags : weight 400, letter-spacing 3px, uppercase, font-size 10–11px

#### Hiérarchie typographique complète

| Élément | Police | Taille | Weight | Couleur |
|---|---|---|---|---|
| Logo header | Road Rage | 32px | — | #F5C800 |
| H1 hero | Road Rage | 64–80px | — | #fff / #F5C800 |
| Eyebrow (au-dessus H1) | Helvetica Now | 11px | 400 | #F5C800 |
| H2 section | Helvetica Now | 36–42px | 300 | #fff |
| H3 sous-section | Helvetica Now | 22–28px | 400 | #fff |
| Navigation | Helvetica Now | 12px | 400 | #888 → #fff hover |
| Corps de texte | Helvetica Now | 14–15px | 300 | #999 |
| Bouton primaire | Helvetica Now | 11px | 500 | #000 sur #F5C800 |
| Bouton secondaire | Helvetica Now | 11px | 400 | #fff sur transparent |
| Labels / tags | Helvetica Now | 10px | 400 | #F5C800 |

### Effets et styles

```css
/* Lueur jaune pour éléments mis en avant */
--glow-primary: 0 0 20px rgba(245, 200, 0, 0.3);

/* Overlay sombre pour hero vidéo */
--overlay-hero: rgba(0, 0, 0, 0.55);

/* Transitions */
--transition-fast: 150ms ease;
--transition-base: 250ms ease;
```

### Logo

- **Fichier SVG** : `public/logo/logo_klip_klap.svg` ✓ (reçu)
- **Fichier PNG** : `public/logo/logo_klip_klap.png` (fallback)
- **Usage** : Placer en blanc ou jaune selon le contexte. Sur fond clair hypothétique : version jaune uniquement.
- **Espace minimal** : 16px de marge autour du logo
- **Ne jamais** déformer, recolorer ou ajouter d'ombre au logo
- Prévoir un emplacement `<Logo />` dans le header (height: 48px desktop, 36px mobile)
- SVG reçu — utiliser le SVG en priorité, PNG en fallback

---

## 📄 Structure des pages

### Pages à créer

```
/                  → Accueil (hero vidéo background, services en aperçu, CTA)
/services          → Tous les services détaillés avec sous-catégories
/projets           → Galerie de projets (liens YouTube uniquement, pas de player intégré)
/contact           → Formulaire de contact
/mentions-legales  → Mentions légales (footer uniquement)
```

### Détail des pages

#### `/` — Accueil
- **Hero** : bande vidéo Vimeo en background plein écran, sans aucun bord noir visible
  - Vimeo ID hero : `1188800457`
  - Embed URL : `https://player.vimeo.com/video/1188800457?background=1&autoplay=1&loop=1&muted=1`
  - Le paramètre `background=1` de Vimeo masque tout nativement (boutons, titre, barre)
  - **Technique plein écran sans bords noirs** :
    ```css
    .hero-video-wrapper {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }
    .hero-video-wrapper iframe {
      position: absolute;
      top: 50%;
      left: 50%;
      /* Ratio 16/9 — toujours plus grand que le viewport */
      width: max(100vw, 177.78vh);
      height: max(56.25vw, 100vh);
      transform: translate(-50%, -50%);
      pointer-events: none; /* visiteur ne peut pas interagir */
    }
    ```
  - Overlay sombre `rgba(0,0,0,0.5)` obligatoire par-dessus
  - Contenu texte en `position: relative; z-index: 10`
  - **Le visiteur ne doit jamais voir que c'est un lecteur vidéo**
- Titre hero en **Road Rage** — "KLIP KLAP" sans tiret
- Aperçu des services avec CTA
- Stats clés (DGAC, 360°, Live)

#### `/services` — Services

5 prestations dans cet ordre (Live Multicam en premier car priorité business) :

**01 — Diffusion en direct & Multi-caméra** — Vimeo ID : `1188799456`
Dispositifs multicam complets jusqu'à 8 caméras. Concerts, festivals, événements sportifs, corporate et institutionnels. Diffusion en direct (YouTube, Twitch, Facebook, Instagram, TikTok, Zoom, Teams…). Livraison rapide des replays.

**02 — Réseaux sociaux** — Vimeo ID : `1188799527`
Contenu vertical pour Instagram, TikTok, Facebook, etc. Commerce, événements, créations, musiques.

**03 — Drone** — Vimeo ID : `1188799370`
Télépilote diplômé A1, A2, A3, CATS, STS-01 & STS-02. Prises de vue aériennes sécurisées, conformes à la réglementation européenne. Événementiels, corporate, institutionnels.

**04 — Film corporate** — Vimeo ID : `1188799371`
Films d'entreprise à style cinématographique. Réalisation, cadrage, montage, colorimétrie. Créé avec le client, à son image.

**05 — Clips** — Vimeo ID : `1188799372`
Clips musicaux et projets visuels. Direction artistique sur mesure. Travail de lumière, cadrage, rythme, montage.

Toutes les vidéos Vimeo utilisent le paramètre `background=1` — embed invisible, autoplay, loop, muted.
Le fichier `src/data/services.ts` contient tous les IDs et URLs d'embed prêts à l'emploi.

#### `/projets` — Projets
- Grille de 11 projets, **pas de filtre par catégorie** — grille simple et clean
- Chaque projet = miniature cliquable → sous-page `/projets/slug` → bouton vers YouTube
- Miniatures auto depuis YouTube : `https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg`
- Sous-page projet : titre + description + bouton "Voir sur YouTube" (nouvel onglet)
- Pas de player intégré — YouTube uniquement
- Le fichier `src/data/projets.ts` contient les 11 projets prêts à l'emploi

**Liste des 11 projets (src/data/projets.ts) :**
1. Halléatoires 2 — Aftermovie → `dWNUEOTkceA`
2. Résidence Plaisance → `nZ51AqIhkZg`
3. Theyko — Enfer → `VAuCqxW8vys`
4. François Lassere — Interview → `PTEL_szxOg0`
5. Riom Forme — Pub verticale → `FLecyI3-ots`
6. Stjepan — Scarabé → `EjVWHof0bkA`
7. Manoire Belladoone — Aftermovie → `IIdAWQMSoWA`
8. Domatisme — Header site → `XYQWMIa7wRg`
9. Raw&Real #6 — Cléon → `BtvS1ThUIns`
10. Malaka — Tino → `4aogq-pYKEY`
11. Blue Katrice — Natural High → `Gg7PFToiL2I`

#### `/contact` — Contact
- Formulaire : Nom, Email, Téléphone, Type de prestation, Message
- Informations de contact directes

---

## 🧭 Navigation

```
Logo (Road Rage, jaune) | ACCUEIL | SERVICES | PROJETS | CONTACT
```

- **4 liens uniquement** — épuré, pas de sous-menus
- SERVICES peut avoir un dropdown discret listant les sous-catégories
- Logo = "KLIP KLAP" en Road Rage (sans tiret) couleur `#F5C800`
- Lien actif = couleur `#F5C800`, autres = `#666` avec hover `#fff`

---

## 🎯 Tone & style

- **Ton** : Professionnel, créatif, dynamique — pas corporate froid
- **Style visuel** : Cinématographique, sombre élégant ou selon charte fournie
- **Public cible** : Organisateurs d'événements, labels musicaux, entreprises, associations, collectivités
- **Différenciation** : Télépilote diplômé DGAC + régie live multicam = double expertise rare

---

## ⚙️ Règles de développement

### Curseur custom
- Point jaune `#F5C800` de 6px + traînée canvas qui s'efface progressivement
- Traînée : trait continu, épaisseur 2px, 18 points max, fondu vitesse 4
- Sur hover d'éléments cliquables : point passe à 10px blanc
- Composant `<CustomCursor />` à injecter dans le layout global
- `cursor: none` sur tout le `<body>`
- Désactivé sur mobile/touch (media query `pointer: coarse`)

### Hero vidéo background
- Balise `<video autoplay loop muted playsinline>` en HTML5 natif si fichier MP4 disponible
- Sinon : iframe YouTube avec `?controls=0&autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&rel=0&showinfo=0&modestbranding=1`
- L'iframe est redimensionnée pour déborder du conteneur (scale 1.2) → jamais de bords noirs visibles
- `pointer-events: none` sur l'iframe → le visiteur ne peut pas interagir avec le player
- Overlay `rgba(0,0,0,0.55)` obligatoire au-dessus de la vidéo
- Le contenu texte hero est positionné au-dessus de l'overlay en `position: relative; z-index: 10`
- **"KLIP KLAP"** — sans tiret, toujours en majuscules dans le logo et le hero
- Logo header = `font-family: 'Road Rage'` couleur `#F5C800` — texte CSS, pas une image
- **Zéro emoji** dans le code, les contenus, les icônes — jamais, nulle part
- Les éléments graphiques sont assurés uniquement par la typographie : numéros (01, 02…), tirets, barres, points, lettres
- Les icônes si nécessaires = SVG custom minimalistes, jamais de bibliothèques d'icônes colorées
- Aucun arrondi excessif — `border-radius` max 4px sauf exception justifiée
- Pas d'ombres portées décoratives — le contraste noir/jaune fait le travail
- Pas de dégradés sauf usage technique (overlay hero vidéo)

### Général
- Toujours coder en **TypeScript** dans les fichiers `.astro`
- Utiliser des **composants réutilisables** (header, footer, card, section...)
- Respecter la structure de dossiers Astro standard :
  ```
  src/
    components/
    layouts/
    pages/
    assets/
    styles/
  public/
    logo/
    images/
  ```

### Performance
- Images optimisées via le composant `<Image />` d'Astro
- Vidéos en embed Vimeo/YouTube (pas de fichiers lourds en local)
- Lazy loading sur toutes les images hors hero
- Score Lighthouse > 90 obligatoire

### SEO
- Balises `<title>` et `<meta description>` uniques par page
- Open Graph pour chaque page
- Sitemap automatique via `@astrojs/sitemap`
- Schema.org pour l'entreprise (LocalBusiness / VideoProductionService)
- URL propres et descriptives (pas de `/page1`)

### Accessibilité
- Attributs `alt` sur toutes les images
- Contraste WCAG AA minimum
- Navigation clavier fonctionnelle

### Formulaire de contact
- Champs : Nom, Email, Téléphone, Type de prestation (liste déroulante), Message
- Validation côté client
- Message de succès/erreur visible

---

## 📁 Fichiers reçus / à recevoir du client

- [x] Logo (PNG fourni — `logo_klip_klap_autocollant.png`)
- [x] Charte graphique (couleurs extraites du logo : noir `#000000` / jaune `#F5C800`)
- [x] Logo en SVG (`logo_klip_klap.svg` — placer dans `public/logo/`)
- [x] Photo profil pour section À propos (`photo_profil.jpg` — placer à la racine de `public/`, chemin : `/photo_profil.jpg`)
- [x] Textes de présentation (PDF prestations reçu)
- [x] Liens Vimeo services + hero (voir services.ts)
- [x] Liens YouTube projets (voir projets.ts)
- [x] Adresse : 39 rue Jean Groslier, Châtel-Guyon
- [ ] SIRET (optionnel, à ajouter plus tard)

---


---

## 👤 Section À propos (page d'accueil)

Texte à afficher tel quel, avec la photo profil à côté :

> KLIP KLAP conçoit vos images cinématographiques où le regard, le temps et le contraste occupent une place centrale. Mon travail consiste à transformer une intention en récit visuel, en croisant ma vision créative avec celle du client. À travers des projets pour des artistes, des événements, des entreprises, le sport ou l'automobile, je cherche à créer des images qui racontent, qui respirent, et qui laissent une trace.

**Mise en page de la section :**
- Layout deux colonnes : texte à gauche, photo à droite (ou inverse selon le rendu)
- Photo : `/photo_profil.jpg` (racine de `public/`) — format portrait, légèrement rognée en cercle ou rectangle avec `object-fit: cover`
- Pas de titre "À propos" — le texte parle de lui-même
- Eyebrow au-dessus : `KLIP KLAP` en petites caps Helvetica Now + letter-spacing
- Ambiance sobre, pas de card, pas de bordure — juste texte + photo sur fond noir

---

## 📍 Informations entreprise

- **Adresse** : 39 rue Jean Groslier, Châtel-Guyon
- **SIRET** : à compléter (optionnel)
- **Mentions légales** : page footer uniquement, contenu minimal

## 🚀 Ordre de développement recommandé

1. Setup Astro + Tailwind + structure de dossiers
2. Layout global (header, footer, nav)
3. Page d'accueil (hero, aperçu services, CTA)
4. Page Live Multicam (priorité business)
5. Page Services
6. Page Portfolio / Showreel
7. Page Drone
8. Page Clips musicaux
9. Page Contact + formulaire
10. SEO, sitemap, mentions légales
11. Optimisation performances
12. Déploiement

---

## 💬 Notes importantes pour Claude Code

- Ne jamais inventer de contenu textuel — utiliser des placeholders clairs `[TEXTE À REMPLIR]`
- Ne jamais utiliser d'images de stock génériques — utiliser des placeholders visuels
- Attendre la charte graphique avant de finaliser les couleurs
- La page **Live Multicam** est la plus importante — y mettre le plus de soin
- Mentionner le statut **télépilote diplômé DGAC** sur la page drone (élément de confiance et légal)
- Le site doit être **mobile-first** (beaucoup de clients viennent via Instagram)
