import {
  Country,
  Region,
} from "../types/globalPresence.types";

export function isActiveCountry(
  country: Country,
  activeCountry:
    | Country
    | null
) {
  return (
    activeCountry?.id ===
    country.id
  );
}

export function isCountryInRegion(
  country: Country,
  activeRegion:
    | Region
    | null
) {
  if (!activeRegion) {
    return false;
  }

  return activeRegion.countries.some(
    (item) =>
      item.id === country.id
  );
}

export function isRegionCountry(
  countryId: string,
  activeRegion:
    | Region
    | null
) {
  if (!activeRegion) {
    return false;
  }

  return activeRegion.countries.some(
    (country) =>
      country.id === countryId
  );
}