import actionTypes from "../types/types";
const guessedWords = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default guessedWords;
