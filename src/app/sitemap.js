const baseUrl = "https://living-space-decor.vercel.app";

export default function sitemap() {
  return [
    { url: `${baseUrl}` },

    { url: `${baseUrl}/about` },
    { url: `${baseUrl}/contact` },
    { url: `${baseUrl}/portfolio` },

    { url: `${baseUrl}/cost-calculator` },
    { url: `${baseUrl}/kitchen-calculator` },
    { url: `${baseUrl}/kitchen-design` },

    { url: `${baseUrl}/services/design-ideas` },
    { url: `${baseUrl}/services/modular-kitchen` },
    { url: `${baseUrl}/services/wardrobes` },
    { url: `${baseUrl}/services/turnkey-projects` },
    { url: `${baseUrl}/services/lights` },
    { url: `${baseUrl}/services/architecture` },
    { url: `${baseUrl}/services/furnitures` },

    { url: `${baseUrl}/services/design-ideas/living-room-design` },
    { url: `${baseUrl}/services/design-ideas/kids-room-design` },
    { url: `${baseUrl}/services/design-ideas/bedroom-design` },
    { url: `${baseUrl}/services/design-ideas/dining-room-design` },
    { url: `${baseUrl}/services/design-ideas/bathroom-design` },
    { url: `${baseUrl}/services/design-ideas/home-office-design` },
    { url: `${baseUrl}/services/design-ideas/balcony-terrace-design` },
    { url: `${baseUrl}/services/design-ideas/mandir-design` },
  ];
}