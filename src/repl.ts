import { getCommands } from "./commands.js";
import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";

export function cleanInput(input: string): string[] {
  return input.trim().toLowerCase().split(/\s+/);
}

export function startREPL() {
  rl.prompt();
    rl.on("line", (line) => {
    const words = cleanInput(line);

    if (words.length === 0) {
      rl.prompt();
      return;
    }

    const commandName = words[0];
    const command = commands[commandName];

    if (!command) {
      console.log("Unknown command");
      rl.prompt();
      return;
    }

    try {
      command.callback(commands);
    } catch (err) {
      console.error("Command failed:", err);
    }

    rl.prompt();
  });
}