import { combineReducers  } from "redux";
import success from "./successReducer";
import guessedWords from "./guessedWordsReducer";

const rootReducer = combineReducers({
  success,
  guessedWords
});


export default rootReducer;