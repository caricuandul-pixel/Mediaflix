export interface ServiceHeroStat {
  label: string;
  value: string;
}

export interface ServiceHeroData {
  eyebrow: string;
  titlePrefix: string;
  title: string;
  description: string;
  image: string;
  stats: ServiceHeroStat[];
}