import { createInterface, type Interface } from "readline";
import { stdin, stdout } from "node:process";

import { getCommands } from "./commands.js";


export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export type State = {
    interface: Interface;
    commands: string;
}

export function initState(){
  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "> ",
  });

  const commands = getCommands();
}