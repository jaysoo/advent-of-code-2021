import * as fs from "fs";
const content = fs.readFileSync("./input.txt").toString();

interface State {
  depth: number;
  horizontal: number;
}

type Direction = "up" | "down" | "forward";

interface Action {
  direction: Direction;
  amount: number;
}

const initialState: State = {
  depth: 0,
  horizontal: 0,
};

function reduce(state: State, action: Action) {
  switch (action.direction) {
    case "up":
      return {
        ...state,
        depth: state.depth - action.amount,
      };
    case "down":
      return {
        ...state,
        depth: state.depth + action.amount,
      };
    case "forward":
      return {
        ...state,
        horizontal: state.horizontal + action.amount,
      };
    default:
      return state;
  }
}

let state = { ...initialState };
content.split("\n").forEach((line: string) => {
  line = line.trim();
  if (!line) return;
  const [direction, amount] = line.split(/\s+/);
  state = reduce(state, {
    direction: direction as Direction,
    amount: Number(amount),
  });
});

console.log("Answer: ", state.depth * state.horizontal);
