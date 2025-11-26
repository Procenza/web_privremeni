/**
 * Site-wide configuration
 */

export const siteConfig = {
  name: "Procenza",
  description: "Osnaživamo poslove da ostvare svoj puni potencijal kroz strateško savjetovanje.",

  contact: {
    email: "contact@procenza.com",
    phone: "+385 (1) 234-5678",
    address: {
      street: "Ilica 123",
      floor: "Kat 5",
      city: "Zagreb",
      country: "Hrvatska",
      zip: "10000",
    },
  },

  social: {
    linkedin: "https://linkedin.com/company/procenza",
    facebook: "https://facebook.com/procenza",
    instagram: "https://instagram.com/procenza",
    twitter: "https://twitter.com/procenza",
  },

  external: {
    blog: "/blog",
  },

  links: {
    services: [
      { label: "Strateško Planiranje", id: "services" },
      { label: "Operativna Izvrsnost", id: "services" },
      { label: "Upravljanje Rastom", id: "services" },
      { label: "Transformacija Poslovanja", id: "services" },
    ],
    company: [
      { label: "O Nama", id: "about" },
      { label: "Kontakt", id: "contact" },
    ],
    legal: [
      { label: "Politika Privatnosti", href: "/privacy-policy" },
      { label: "Uvjeti Korištenja", href: "/terms-of-service" },
    ],
  },
} as const;
