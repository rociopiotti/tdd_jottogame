import  actionTypes  from "../types/types";

const success = (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return false;
  }
};
export default success;
