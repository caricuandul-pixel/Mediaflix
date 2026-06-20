import {
  MapPosition,
  MapView,
} from "../types/globalPresence.types";

export const WORLD_WIDTH = 2040;
export const WORLD_HEIGHT = 897;

export const WORLD_CENTER: MapPosition = {
  x: WORLD_WIDTH / 2,
  y: WORLD_HEIGHT / 2,
};

export const WORLD_VIEW: MapView = {
  x: WORLD_CENTER.x,
  y: WORLD_CENTER.y,
  scale: 1,
};

export const regionMapPoints = {
  "southeast-asia": {
    x: 1400,
    y: 520,
    scale: 3.5,
  },

  gcc: {
    x: 1120,
    y: 350,
    scale: 4,
  },

  "western-europe": {
    x: 900,
    y: 240,
    scale: 4,
  },
};

export const countryMapPoints = {
  indonesia: {
    x: 1450,
    y: 560,
    scale: 8,
  },

  singapore: {
    x: 1360,
    y: 505,
    scale: 10,
  },

  malaysia: {
    x: 1330,
    y: 470,
    scale: 8,
  },

  uae: {
    x: 1125,
    y: 360,
    scale: 8,
  },

  "saudi-arabia": {
    x: 1070,
    y: 390,
    scale: 7,
  },

  germany: {
    x: 930,
    y: 220,
    scale: 8,
  },
};