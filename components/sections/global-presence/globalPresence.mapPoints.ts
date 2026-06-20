// FILE PATH: components/sections/global-presence/globalPresence.mapPoints.ts

import { MapPosition, MapView } from "./globalPresence.types";

export const WORLD_CENTER = {
  x: 1000,
  y: 450,
};

export const regionMapPoints: Record<string, MapView> = {
  // TIDAK DIUBAH SAMA SEKALI - TETAP SESUAI PERMINTAAN ANDA
  "southeast-asia": {
    x: 1850, 
    y: 450,  
    scale: 3.8, 
  },

  "east-asia": {
    x: 1635,
    y: 300,
    scale: 4.2,
  },

  "south-asia": {
    x: 1390,
    y: 420,
    scale: 4.5,
  },

  "central-asia": {
    x: 1280,
    y: 300,
    scale: 4.8,
  },

  "western-asia": {
    x: 1180,
    y: 350,
    scale: 5,
  },

  caucasus: {
    x: 1110,
    y: 250,
    scale: 6,
  },
};

export const countryMapPoints: Record<string, MapPosition> = {
  // ========================================================================
  // KOREKSI FINAL KEDUA NEGARA PALING BAWAH (INDONESIA & TIMOR-LESTE)
  // ========================================================================
  
  // Indonesia: Nilai x dikurangi dari 1685 menjadi 1638 agar bergeser ke kiri (pas di Pulau Jawa)
  ID: { x: 1638, y: 560, scale: 5 },   

  // Timor-Leste: Nilai x dikurangi dari 1725 menjadi 1695 agar bergeser ke kiri (pas di Pulau Timor)
  TL: { x: 1695, y: 565, scale: 8 },   

  // ------------------------------------------------------------------------
  // POSISI DI BAWAH INI SUDAH BENAR & DIKUNCI (SESUAI GAMBAR TERAKHIR ANDA)
  // ------------------------------------------------------------------------
  SG: { x: 1635, y: 493, scale: 7 },   // Singapore (Sudah Pas)
  MY: { x: 1630, y: 463, scale: 6 },   // Malaysia (Sudah Pas)
  TH: { x: 1625, y: 425, scale: 6 },   // Thailand (Sudah Pas)
  VN: { x: 1665, y: 418, scale: 6 },   // Vietnam (Sudah Pas)
  PH: { x: 1710, y: 445, scale: 6 },   // Philippines (Sudah Pas)
  KH: { x: 1640, y: 438, scale: 7 },   // Cambodia (Sudah Pas)
  LA: { x: 1635, y: 408, scale: 7 },   // Laos (Sudah Pas)
  MM: { x: 1595, y: 398, scale: 6 },   // Myanmar (Sudah Pas)
  BN: { x: 1650, y: 505, scale: 8 },   // Brunei (Sudah Pas)

  // ==========================================
  // WILAYAH LAIN (Sesuai kode awal Anda)
  // ==========================================
  CN: { x: 1570, y: 300 },
  JP: { x: 1715, y: 290 },
  KR: { x: 1670, y: 275 },
  KP: { x: 1660, y: 255 },
  TW: { x: 1625, y: 350 },
  MN: { x: 1510, y: 220 },

  IN: { x: 1390, y: 430 },
  PK: { x: 1320, y: 390 },
  BD: { x: 1450, y: 410 },
  LK: { x: 1400, y: 520 },
  NP: { x: 1415, y: 360 },
};
