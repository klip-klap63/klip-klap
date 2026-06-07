// src/data/projets.ts
// Miniatures auto YouTube : https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg
// Clic → YouTube dans un nouvel onglet (https://youtu.be/YOUTUBE_ID)

export const projets = [

  // LIVE MULTICAM
  {
    slug: "fc-chatel-rc-riorges-feminin",
    titre: "FC CHATEL — RC RIORGES FÉMININ",
    categorie: "live-multicam",
    youtube_id: "zPpQNie58MY",
    thumbnail: "https://img.youtube.com/vi/zPpQNie58MY/maxresdefault.jpg",
  },
  {
    slug: "raw-real-6-cleon",
    titre: "RAW&REAL #6 — CLÉON",
    categorie: "live-multicam",
    youtube_id: "BtvS1ThUIns",
    thumbnail: "https://img.youtube.com/vi/BtvS1ThUIns/maxresdefault.jpg",
  },
  {
    slug: "rediffusion-live-team-sr63",
    titre: "REDIFFUSION LIVE TEAM SR63",
    categorie: "live-multicam",
    youtube_id: "FC8GvcLru-k",
    thumbnail: "https://img.youtube.com/vi/FC8GvcLru-k/maxresdefault.jpg",
  },

  // RÉSEAUX SOCIAUX
  {
    slug: "formation-hypnotherapeute-laetitia",
    titre: "FORMATION HYPNOTHÉRAPEUTE — LAETITIA",
    categorie: "reseaux-sociaux",
    youtube_id: "LKWMit9rHJ8",
    thumbnail: "https://img.youtube.com/vi/LKWMit9rHJ8/maxresdefault.jpg",
  },
  {
    slug: "halleatoires-2-aftermovie",
    titre: "HALLÉATOIRES 2 — AFTERMOVIE",
    categorie: "reseaux-sociaux",
    youtube_id: "dWNUEOTkceA",
    thumbnail: "https://img.youtube.com/vi/dWNUEOTkceA/maxresdefault.jpg",
  },
  {
    slug: "riom-forme-pub-verticale",
    titre: "RIOM FORME — PUB VERTICALE",
    categorie: "reseaux-sociaux",
    youtube_id: "FLecyI3-ots",
    thumbnail: "https://img.youtube.com/vi/FLecyI3-ots/maxresdefault.jpg",
  },
  {
    slug: "manoire-belladone-aftermovie",
    titre: "MANOIRE BELLADONE — AFTERMOVIE",
    categorie: "reseaux-sociaux",
    youtube_id: "IIdAWQMSoWA",
    thumbnail: "https://img.youtube.com/vi/IIdAWQMSoWA/maxresdefault.jpg",
  },

  // CORPORATE
  {
    slug: "making-of-yavanti-episode-7",
    titre: "MAKING-OF Y'AVANTI EPISODE 7",
    categorie: "corporate",
    youtube_id: "sHLetqUg2T8",
    thumbnail: "https://img.youtube.com/vi/sHLetqUg2T8/maxresdefault.jpg",
  },
  {
    slug: "residence-plaisance",
    titre: "RÉSIDENCE PLAISANCE",
    categorie: "corporate",
    youtube_id: "nZ51AqIhkZg",
    thumbnail: "https://img.youtube.com/vi/nZ51AqIhkZg/maxresdefault.jpg",
  },
  {
    slug: "francois-lassere-interview",
    titre: "FRANÇOIS LASSERE — INTERVIEW",
    categorie: "corporate",
    youtube_id: "PTEL_szxOg0",
    thumbnail: "https://img.youtube.com/vi/PTEL_szxOg0/maxresdefault.jpg",
  },
  {
    slug: "domatisme-header-site",
    titre: "DOMATISME — HEADER SITE",
    categorie: "corporate",
    youtube_id: "XYQWMIa7wRg",
    thumbnail: "https://img.youtube.com/vi/XYQWMIa7wRg/maxresdefault.jpg",
  },

  // CLIPS
  {
    slug: "theyko-enfer",
    titre: "THEYKO — ENFER",
    categorie: "clips",
    youtube_id: "VAuCqxW8vys",
    thumbnail: "https://img.youtube.com/vi/VAuCqxW8vys/maxresdefault.jpg",
  },
  {
    slug: "stjepan-scarabe",
    titre: "STJEPAN — SCARABÉ",
    categorie: "clips",
    youtube_id: "EjVWHof0bkA",
    thumbnail: "https://img.youtube.com/vi/EjVWHof0bkA/maxresdefault.jpg",
  },
  {
    slug: "malaka-tino",
    titre: "MALAKA — TINO",
    categorie: "clips",
    youtube_id: "4aogq-pYKEY",
    thumbnail: "https://img.youtube.com/vi/4aogq-pYKEY/maxresdefault.jpg",
  },
  {
    slug: "blue-katrice-natural-high",
    titre: "BLUE KATRICE — NATURAL HIGH",
    categorie: "clips",
    youtube_id: "Gg7PFToiL2I",
    thumbnail: "https://img.youtube.com/vi/Gg7PFToiL2I/maxresdefault.jpg",
  },
]

export const categories = [
  { id: "tous",            label: "TOUT" },
  { id: "live-multicam",  label: "LIVE MULTICAM" },
  { id: "reseaux-sociaux", label: "RÉSEAUX SOCIAUX" },
  { id: "corporate",      label: "CORPORATE" },
  { id: "clips",          label: "CLIPS" },
]

export type Projet = typeof projets[0]
