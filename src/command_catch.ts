import type { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]): Promise<void> {
  const name = args[0];
  if (!name) {
    console.log("Please specify a Pokemon name. Usage: catch <pokemon_name>");
    return;
  }

  const normalizedName = name.toLowerCase().trim();
  if (state.pokedex[normalizedName]) {
    console.log(`You already have ${normalizedName}!`);
    return;
  }

  let pokemon;
  try {
    pokemon = await state.pokeapi.fetchPokemon(normalizedName);
  } catch (error) {
    console.error("Failed to find that Pokemon:", error);
    return;
  }

  console.log(`Throwing a Pokeball at ${pokemon.name}...`);

  const baseExp = pokemon.base_experience ?? 0;
  const catchChance = Math.max(0.1, Math.min(0.9, 150 / (150 + baseExp)));
  const caught = Math.random() < catchChance;

  if (caught) {
    state.pokedex[normalizedName] = pokemon;
    console.log(`${pokemon.name} was caught!`);
    console.log("You may now inspect it with the inspect command.");
  } else {
    console.log(`${pokemon.name} escaped!`);
  }
}
