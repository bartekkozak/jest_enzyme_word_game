import { correctGuess } from "./successActions";
import { CORRECT_GUESS } from "./actionTypes";

describe("correctGuess", () => {
  test("returns an anction with type `CORRECT_GUESS` ", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: CORRECT_GUESS });
  });
});
