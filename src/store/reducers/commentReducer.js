import { SAVE_COMMENT } from "../actions/types";

const commentReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default commentReducer;
