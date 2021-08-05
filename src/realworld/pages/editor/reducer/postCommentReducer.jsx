import {
  POST_COMMENT_USER_SUCCESS,
  POST_COMMENT_USER_FAIL,
} from "../actions/constant";

const initialState = {
  listComments: {},
  errors: null,
};
export const postCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_COMMENT_USER_SUCCESS:
      return {
        ...state,
        listComments: action.comments,
      };
    case POST_COMMENT_USER_FAIL:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
};
