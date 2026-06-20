export type MapLevel =
  | "world"
  | "region"
  | "country";

export interface MapPosition {
  x: number;
  y: number;
}

export interface MapView
  extends MapPosition {
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

  svgId: string;

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

export interface CameraState {
  x: number;
  y: number;
  scale: number;
}

export interface MapEngineState {
  level: MapLevel;

  region: Region | null;

  country: Country | null;

  camera: CameraState;
}

export interface MapCameraHook {
  level: MapLevel;

  camera: CameraState;

  activeRegion: Region | null;

  activeCountry: Country | null;

  activeProject: Project | null;

  goToWorld: () => void;

  goToRegion: (
    region: Region
  ) => void;

  goToCountry: (
    country: Country
  ) => void;

  hoverProject: (
    project: Project | null
  ) => void;

  selectProject: (
    project: Project
  ) => void;
}