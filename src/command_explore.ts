import type { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]): Promise<void> {
  const areaName = args[0];
  if (!areaName) {
    console.log("Please specify a location area name. Usage: explore <area_name>");
    return;
  }

  try {
    console.log(`Exploring ${areaName}...`);
    const location = await state.pokeapi.fetchLocation(areaName);
    const pokemonNames = [...new Set(location.pokemon_encounters.map((e) => e.pokemon.name))].sort();

    console.log("Found Pokemon:");
    for (const name of pokemonNames) {
      console.log(` - ${name}`);
    }
  } catch (error) {
    console.error("Failed to explore location area:", error);
  }
}
