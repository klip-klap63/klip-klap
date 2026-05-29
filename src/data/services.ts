// src/data/services.ts
// Vidéos Vimeo en mode background — autoplay, loop, muted, sans aucun contrôle visible
// Le paramètre background=1 de Vimeo masque tout : boutons, titre, avatar, barre de progression

export const services = [
  {
    id: "live-multicam",
    numero: "01",
    titre: "Diffusion en direct & Multi-caméra",
    description:
      "Dispositifs multicam complets jusqu'à 8 caméras, adaptés aux concerts, festivals, événements sportifs, corporate et institutionnels en Auvergne et sur Clermont-Ferrand. Diffusion en direct sur YouTube, Twitch, Facebook, Instagram, TikTok, Zoom, Teams. Livraison rapide des replays.",
    tags: ["Concerts", "Festivals", "Corporate", "Institutionnel", "Replay"],
    vimeo_id: "1188799456",
    vimeo_embed: "https://player.vimeo.com/video/1188799456?background=1&autoplay=1&loop=1&muted=1&playlist=1188799456",
  },
  {
    id: "reseaux-sociaux",
    numero: "02",
    titre: "Réseaux sociaux",
    description:
      "Contenu vertical pour Instagram, TikTok, Facebook — pour artistes, commerces et événements à Clermont-Ferrand et dans le Puy-de-Dôme. Commerce, créations, musiques.",
    tags: ["Instagram", "TikTok", "Facebook", "Vertical", "Short"],
    vimeo_id: "1188799527",
    vimeo_embed: "https://player.vimeo.com/video/1188799527?background=1&autoplay=1&loop=1&muted=1&playlist=1188799527",
  },
  {
    id: "drone",
    numero: "03",
    titre: "Drone",
    description:
      "Télépilote diplômé DGAC — A1, A2, A3, CATS, STS-01 & STS-02. Prises de vue aériennes sécurisées sur Clermont-Ferrand, le Puy-de-Dôme et toute l'Auvergne, conformes à la réglementation européenne. Événementiels, corporate, institutionnels.",
    tags: ["DGAC", "A1/A2/A3", "STS-01", "STS-02", "Aérien"],
    vimeo_id: "1188799370",
    vimeo_embed: "https://player.vimeo.com/video/1188799370?background=1&autoplay=1&loop=1&muted=1&playlist=1188799370",
  },
  {
    id: "corporate",
    numero: "04",
    titre: "Film corporate",
    description:
      "Films d'entreprise à style cinématographique pour sociétés en Auvergne et à Clermont-Ferrand. Réalisation, cadrage, montage, colorimétrie. Créé avec le client, à son image.",
    tags: ["Corporate", "Institutionnel", "Cinématographique", "Montage"],
    vimeo_id: "1188799371",
    vimeo_embed: "https://player.vimeo.com/video/1188799371?background=1&autoplay=1&loop=1&muted=1&playlist=1188799371",
  },
  {
    id: "clips",
    numero: "05",
    titre: "Clips",
    description:
      "Clips musicaux et projets visuels pour artistes à Clermont-Ferrand et en Auvergne. Direction artistique sur mesure. Travail de lumière, cadrage, rythme, montage au service de l'identité du projet.",
    tags: ["Clip", "Musique", "Direction artistique", "Lumière"],
    vimeo_id: "1188799372",
    vimeo_embed: "https://player.vimeo.com/video/1188799372?background=1&autoplay=1&loop=1&muted=1&playlist=1188799372",
  },
]

// Vidéo hero page d'accueil
export const heroVideo = {
  vimeo_id: "1188800457",
  vimeo_embed: "https://player.vimeo.com/video/1188800457?background=1&autoplay=1&loop=1&muted=1&playlist=1188800457",
}

export type Service = typeof services[0]
