import { correctGuess, actionTypes } from "./index";

describe("Correct Gues", () => {
  test("returns an action with 'CORRECT_GUESS'", () => {
      const action = correctGuess();
      expect(action).toEqual({type: actionTypes.CORRECT_GUESS});
  });
});
