import { Continent } from "../types/globalPresence.types";

export const continents: Continent[] = [
  {
    id: "asia",

    name: "Asia",

    location: {
      x: 1500,
      y: 450,
      scale: 2,
    },

    regions: [
      {
        id: "southeast-asia",

        name: "Southeast Asia",

        location: {
          x: 1500,
          y: 450,
          scale: 4,
        },

        countries: [
          {
            id: "indonesia",

            code: "ID",

            name: "Indonesia",

            svgId: "ID",

            projects: [],
          },

          {
            id: "singapore",

            code: "SG",

            name: "Singapore",

            svgId: "SG",

            projects: [],
          },

          {
            id: "malaysia",

            code: "MY",

            name: "Malaysia",

            svgId: "MY",

            projects: [],
          },
        ],
      },
    ],
  },
];