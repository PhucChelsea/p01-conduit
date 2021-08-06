import {
  POST_COMMENT_USER_SUCCESS,
  POST_COMMENT_USER_FAIL,
} from "../actions/constant";

const initialState = {
  infoComment: {},
  listComments: [],
  errors: null,
};
export const postCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_COMMENT_USER_SUCCESS:
      const newComment = action.comments;
      return {
        ...state,
        infoComment: action.comments,
        listComments: [...state.listComments, newComment],
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
