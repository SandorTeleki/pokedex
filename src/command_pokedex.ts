import type { State } from "./state.js";

export async function commandPokedex(state: State): Promise<void> {
  const names = Object.keys(state.pokedex).sort();
  console.log("Your Pokedex:");
  for (const name of names) {
    console.log(` - ${name}`);
  }
}
