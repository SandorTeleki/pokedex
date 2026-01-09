import { createInterface, type Interface } from "node:readline";
import { stdin, stdout } from "node:process";

import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";


export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export type State = {
  interface: Interface;
  commands: Record<string, CLICommand>;
  pokeapi: PokeAPI;
  nextLocationsURL: string | null;
  prevLocationsURL: string | null;
}

export function initState(){
  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "> ",
  });

  const commands = getCommands();
  const pokeapi = new PokeAPI();

  return {
    interface: rl,
    commands,
    pokeapi,
    nextLocationsURL: null,
    prevLocationsURL: null,
  }
}