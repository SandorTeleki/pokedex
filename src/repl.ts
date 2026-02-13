import type { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input.trim().toLowerCase().split(/\s+/);
}

export function startREPL(state: State) {
  const rl = state.interface;
  const commands = state.commands;

  rl.prompt();
    rl.on("line", async (line) => {
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
      await command.callback(state, ...words.slice(1));
    } catch (err) {
      console.error("Command failed:", err);
    }

    rl.prompt();
  });
}