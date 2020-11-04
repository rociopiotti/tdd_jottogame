import { combineReducers } from "redux";
import success from "./successReducer";
import guessedWords from "./guessedWordsReducer";
import secretWord from "./secretWordsReducer";

const rootReducer = combineReducers({
  success,
  guessedWords,
  secretWord,
});

export default rootReducer;
