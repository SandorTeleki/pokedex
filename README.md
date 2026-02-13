# Pokedex Project from boot.dev

A Pokedex written in TypeScript. Project is based on the course from [Boot.dev](https://www.boot.dev/courses/build-pokedex-cli-typescript).

## Set-up:
1. Clone the repo with `git clone https://github.com/SandorTeleki/pokedex.git`.
2. Open the folder of the repo and run `npm ci` to install the required dependencies.

## Repo Commands:
- `npm run build`: Builds the project. In case you expand the project.
- `npm run start`: Starts the project. You can use all the pokedex commands.
- `npm run start`: Start the project in dev mode. You can use all the pokedex commands.
- `npm run test`: Runs the tests for the project.

## Pokedex Commands:
| Command name | Command description |
| "help" | "Displays a help message" |
| "catch" | "Attempt to catch a Pokemon by name." |
| "inspect" | "Inspect a caught Pokemon's details." |
| "explore" | "Explore a location area and list Pokemon found there." |
| "pokedex" | "List all Pokemon you have caught." |
| "map" | "Display the names of 20 location areas in the Pokemon world." |
| "mapb" | "Display the names of the previous 20 location areas in the Pokemon world." |
| "exit" | "Exits the pokedex." |

## Possible future improvements:
- Simulate battles between pokemon
- Add more unit tests
- Refactor your code to organize it better and make it more testable
- Keep pokemon in a "party" and allow them to level up
- Allow for pokemon that are caught to evolve after a set amount of time
- Persist a user's Pokedex to disk so they can save progress between sessions
- Use the PokeAPI to make exploration more interesting. For example, rather than typing the names of areas, maybe you are given choices of areas and just type "left" or "right"
- Random encounters with wild pokemon
- Adding support for different types of balls (Pokeballs, Great Balls, Ultra Balls, etc), which have different chances of catching pokemon






