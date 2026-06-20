// FILE PATH: components/sections/global-presence/globalPresence.types.ts

export interface MapPosition {
  x: number;
  y: number;
  scale?: number; // Menambahkan properti scale opsional untuk mendukung fallback zoom level negara
}

export interface MapView {
  x: number;
  y: number;
  scale: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  location: MapPosition;
}

export interface Country {
  id: string;
  code: string;
  name: string;
  location: MapPosition;
  projects: Project[];
}

export interface Region {
  id: string;
  name: string;
  location: MapView;
  countries: Country[];
}

export interface Continent {
  id: string;
  name: string;
  location: MapView;
  regions: Region[];
}

export type MapLevel = "region" | "country" | "world";
