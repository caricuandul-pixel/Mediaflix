// FILE PATH: components/sections/global-presence/globalPresence.data.ts

import { Continent } from "./globalPresence.types";
import { countryMapPoints, regionMapPoints } from "./globalPresence.mapPoints";

const createProjects = (country: string, x: number, y: number) => [
  {
    id: `${country.toLowerCase()}-broadcast`,
    title: `${country} Broadcast Center`,
    description: "Enterprise broadcast and television production operation.",
    thumbnail: "/images/projects/broadcast.jpg",
    location: { x, y },
  },
  {
    id: `${country.toLowerCase()}-streaming`,
    title: `${country} Streaming Hub`,
    description: "Premium live streaming and multicamera infrastructure.",
    thumbnail: "/images/projects/streaming.jpg",
    location: { x: x + 12, y: y - 12 }, // Diberi offset sedikit agar pin project tidak bertumpuk di satu titik
  },
  {
    id: `${country.toLowerCase()}-enterprise`,
    title: `${country} Enterprise Media Solution`,
    description: "Corporate media, hybrid event and digital production services.",
    thumbnail: "/images/projects/enterprise.jpg",
    location: { x: x - 12, y: y + 12 }, // Diberi offset sedikit agar pin project tidak bertumpuk di satu titik
  },
];

export const continents: Continent[] = [
  {
    id: "asia",
    name: "Asia",
    location: {
      x: 1450,
      y: 400,
      scale: 2,
    },
    regions: [
      // ==================================================
      // SOUTHEAST ASIA
      // ==================================================
      {
        id: "southeast-asia",
        name: "Southeast Asia",
        location: regionMapPoints["southeast-asia"],
        countries: [
          {
            id: "indonesia",
            code: "ID",
            name: "Indonesia",
            location: countryMapPoints.ID,
            projects: createProjects("Indonesia", countryMapPoints.ID.x, countryMapPoints.ID.y),
          },
          {
            id: "singapore",
            code: "SG",
            name: "Singapore",
            location: countryMapPoints.SG,
            projects: createProjects("Singapore", countryMapPoints.SG.x, countryMapPoints.SG.y),
          },
          {
            id: "malaysia",
            code: "MY",
            name: "Malaysia",
            location: countryMapPoints.MY,
            projects: createProjects("Malaysia", countryMapPoints.MY.x, countryMapPoints.MY.y),
          },
          {
            id: "thailand",
            code: "TH",
            name: "Thailand",
            location: countryMapPoints.TH,
            projects: createProjects("Thailand", countryMapPoints.TH.x, countryMapPoints.TH.y),
          },
          {
            id: "vietnam",
            code: "VN",
            name: "Vietnam",
            location: countryMapPoints.VN,
            projects: createProjects("Vietnam", countryMapPoints.VN.x, countryMapPoints.VN.y),
          },
          {
            id: "philippines",
            code: "PH",
            name: "Philippines",
            location: countryMapPoints.PH,
            projects: createProjects("Philippines", countryMapPoints.PH.x, countryMapPoints.PH.y),
          },
          {
            id: "cambodia",
            code: "KH",
            name: "Cambodia",
            location: countryMapPoints.KH,
            projects: createProjects("Cambodia", countryMapPoints.KH.x, countryMapPoints.KH.y),
          },
          {
            id: "laos",
            code: "LA",
            name: "Laos",
            location: countryMapPoints.LA,
            projects: createProjects("Laos", countryMapPoints.LA.x, countryMapPoints.LA.y),
          },
          {
            id: "myanmar",
            code: "MM",
            name: "Myanmar",
            location: countryMapPoints.MM,
            projects: createProjects("Myanmar", countryMapPoints.MM.x, countryMapPoints.MM.y),
          },
          {
            id: "brunei",
            code: "BN",
            name: "Brunei",
            location: countryMapPoints.BN,
            projects: createProjects("Brunei", countryMapPoints.BN.x, countryMapPoints.BN.y),
          },
          {
            id: "timor-leste",
            code: "TL",
            name: "Timor-Leste",
            location: countryMapPoints.TL,
            projects: createProjects("Timor-Leste", countryMapPoints.TL.x, countryMapPoints.TL.y),
          },
        ],
      },

      // ==================================================
      // EAST ASIA
      // ==================================================
      {
        id: "east-asia",
        name: "East Asia",
        location: regionMapPoints["east-asia"],
        countries: [
          {
            id: "china",
            code: "CN",
            name: "China",
            location: countryMapPoints.CN,
            projects: createProjects("China", countryMapPoints.CN.x, countryMapPoints.CN.y),
          },
          {
            id: "japan",
            code: "JP",
            name: "Japan",
            location: countryMapPoints.JP,
            projects: createProjects("Japan", countryMapPoints.JP.x, countryMapPoints.JP.y),
          },
          {
            id: "south-korea",
            code: "KR",
            name: "South Korea",
            location: countryMapPoints.KR,
            projects: createProjects("South Korea", countryMapPoints.KR.x, countryMapPoints.KR.y),
          },
          {
            id: "north-korea",
            code: "KP",
            name: "North Korea",
            location: countryMapPoints.KP,
            projects: createProjects("North Korea", countryMapPoints.KP.x, countryMapPoints.KP.y),
          },
          {
            id: "taiwan",
            code: "TW",
            name: "Taiwan",
            location: countryMapPoints.TW,
            projects: createProjects("Taiwan", countryMapPoints.TW.x, countryMapPoints.TW.y),
          },
          {
            id: "mongolia",
            code: "MN",
            name: "Mongolia",
            location: countryMapPoints.MN,
            projects: createProjects("Mongolia", countryMapPoints.MN.x, countryMapPoints.MN.y),
          },
        ],
      },

      // ==================================================
      // SOUTH ASIA
      // ==================================================
      {
        id: "south-asia",
        name: "South Asia",
        location: regionMapPoints["south-asia"],
        countries: [
          {
            id: "india",
            code: "IN",
            name: "India",
            location: countryMapPoints.IN,
            projects: createProjects("India", countryMapPoints.IN.x, countryMapPoints.IN.y),
          },
          {
            id: "pakistan",
            code: "PK",
            name: "Pakistan",
            location: countryMapPoints.PK,
            projects: createProjects("Pakistan", countryMapPoints.PK.x, countryMapPoints.PK.y),
          },
          {
            id: "bangladesh",
            code: "BD",
            name: "Bangladesh",
            location: countryMapPoints.BD,
            projects: createProjects("Bangladesh", countryMapPoints.BD.x, countryMapPoints.BD.y),
          },
          {
            id: "sri-lanka",
            code: "LK",
            name: "Sri Lanka",
            location: countryMapPoints.LK,
            projects: createProjects("Sri Lanka", countryMapPoints.LK.x, countryMapPoints.LK.y),
          },
          {
            id: "nepal",
            code: "NP",
            name: "Nepal",
            location: countryMapPoints.NP,
            projects: createProjects("Nepal", countryMapPoints.NP.x, countryMapPoints.NP.y),
          },
        ],
      },
    ],
  },
];
