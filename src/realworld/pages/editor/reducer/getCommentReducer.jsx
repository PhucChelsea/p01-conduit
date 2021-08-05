import {
  GET_COMMENT_USER_SUCCESS,
  GET_COMMENT_USER_FAIL,
} from "../actions/constant";

const initialState = {
  comments: {},
  errorComment: null,
};
export const getCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENT_USER_SUCCESS:
      return {
        ...state,
        comments: action.comments,
      };
    case GET_COMMENT_USER_FAIL:
      return {
        ...state,
        errorComment: action.errorComment,
      };
    default:
      return state;
  }
};
