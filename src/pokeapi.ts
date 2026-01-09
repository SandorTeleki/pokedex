export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area/`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/${locationName}/`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedAPIResource[];
};

export type NamedAPIResource = {
    name: string;
    url: string;
}

export type Location = {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: EncounterMethodRate[];
  location: NamedAPIResource;
  names: Name[];
  pokemon_encounters: PokemonEncounter[];
};

export type EncounterMethodRate = {
    encounter_method: NamedAPIResource;
    version_details: EncounterVersionDetails[];
}

export type EncounterVersionDetails = {
    rate: number;
    version: NamedAPIResource;
}

export type Name = {
    name: string;
    language: NamedAPIResource;
}

export type PokemonEncounter = {
    pokemon: NamedAPIResource;
    version_details: VersionEncounterDetail[];
}

export type VersionEncounterDetail = {
    version: NamedAPIResource;
    max_chance: number;
    encounter_details: Encounter[];
}

export type Encounter = {
    min_level: number;
    max_level: number;
    condition_values: NamedAPIResource[];
    chance: number;
    method: NamedAPIResource;
}