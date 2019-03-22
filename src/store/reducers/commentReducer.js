import { SAVE_COMMENT, FETCH_COMMENTS } from "../actions/types";

const commentReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [action.payload, ...state];
    case FETCH_COMMENTS:
        const comments = action.payload.data.map(comment => `${comment.body} #${comment.id}`);
        return [...comments, ...state];
    default:
      return state;
  }
};

export default commentReducer;
