import type { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]): Promise<void> {
  const name = args[0];
  if (!name) {
    console.log("Please specify a Pokemon name. Usage: inspect <pokemon_name>");
    return;
  }

  const normalizedName = name.toLowerCase().trim();
  const pokemon = state.pokedex[normalizedName];

  if (!pokemon) {
    console.log("You have not caught that pokemon.");
    return;
  }

  console.log(`Name: ${pokemon.name}`);
  console.log(`Height: ${pokemon.height}`);
  console.log(`Weight: ${pokemon.weight}`);
  console.log("Stats:");
  for (const s of pokemon.stats) {
    console.log(`  -${s.stat.name}: ${s.base_stat}`);
  }
  console.log("Types:");
  for (const t of pokemon.types) {
    console.log(`  - ${t.type.name}`);
  }
}
