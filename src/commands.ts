import { commandCatch } from "./command_catch.js";
import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandInspect } from "./command_inspect.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    catch: {
      name: "catch",
      description: "Attempt to catch a Pokemon by name.",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "Inspect a caught Pokemon's details.",
      callback: commandInspect,
    },
    explore: {
      name: "explore",
      description: "Explore a location area and list Pokemon found there.",
      callback: commandExplore,
    },
    map: {
      name: "map",
      description: "Display the names of 20 location areas in the Pokemon world.",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Display the names of the previous 20 location areas in the Pokemon world.",
      callback: commandMapb,
    },
    exit: {
      name: "exit",
      description: "Exits the pokedex.",
      callback: commandExit,
    },
  };
}