export const siteConfig = {
  name: "Merhaba Tech GmbH",
  shortName: "Merhaba Tech",
  description:
    "Merhaba Tech GmbH entwickelt digitale Produkte für die türkisch-deutsche Community in Deutschland.",
  url: "https://merhaba.tech",
  email: "kontakt@merhabamap.com",
  founders: [
    {
      name: "Erdem Oflu",
      linkedin: "https://www.linkedin.com/in/erdem-oflu/",
    },
    {
      name: "Samet Akyazi",
      linkedin: "https://www.linkedin.com/in/samet-akyazi-7128a613a/",
    },
  ],
  product: {
    name: "MerhabaMap",
    url: "https://merhabamap.com",
    logo: "/merhabamap-logo.png",
    tagline:
      "Orte, Events und Communities mit türkischem Bezug — lokal und relevant.",
  },
} as const;

export const navLinks = [
  { href: "/produkte", label: "Produkte" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
] as const;
