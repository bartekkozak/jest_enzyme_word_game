import { CORRECT_GUESS } from "../actions/actionTypes";

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};
