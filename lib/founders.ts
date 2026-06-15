export type Founder = {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin: string;
  bio: string;
  highlights: string[];
};

export const founders: Founder[] = [
  {
    id: "erdem-oflu",
    name: "Erdem Oflu",
    role: "Gründer & Geschäftsführung",
    image: "/team/erdem-oflu.jpg",
    linkedin: "https://www.linkedin.com/in/erdem-oflu/",
    bio: "Erdem ist zertifizierter IT-Test- und Qualitätsmanager (ISTQB® Advanced) mit über acht Jahren Erfahrung in Softwarequalität und Enterprise-Projekten. Er verbindet technisches Verständnis mit dem Anspruch, Produkte zu bauen, denen Menschen vertrauen können.",
    highlights: [
      "Softwarequalität & Teststrategie",
      "B.Sc. Wirtschaftsingenieurwesen",
      "ISTQB® Advanced Level",
    ],
  },
  {
    id: "samet-akyazi",
    name: "Samet Akyazi",
    role: "Gründer & Geschäftsführung",
    image: "/team/samet-akyazi.jpg",
    linkedin: "https://www.linkedin.com/in/samet-akyazi-7128a613a/",
    bio: "Samet ist IT-Projektleiter mit langjähriger Erfahrung in der Automobil- und IT-Branche. Er bringt Klarheit in komplexe Vorhaben und stellt die Menschen — ob Nutzer:innen oder Partner:innen — in den Mittelpunkt jeder Entscheidung.",
    highlights: [
      "Projektleitung & Agile Führung",
      "Automotive IT & Data Solutions",
      "Paderborn",
    ],
  },
];
