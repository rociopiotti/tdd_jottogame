import { combineReducers } from "redux";
import success from "./successReducer";
import guessedWords from "./guessedWordsReducer";
import secretWord from "./secretWordReducer";

const rootReducer = combineReducers({
  success,
  guessedWords,
  secretWord,
});

export default rootReducer;
