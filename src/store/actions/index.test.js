import { correctGuess } from "./index";
import  actionTypes  from "../types/types"

describe("Correct Gues", () => {
  test("returns an action with 'CORRECT_GUESS'", () => {
      const action = correctGuess();
      expect(action).toEqual({type: actionTypes.CORRECT_GUESS});
  });
});
