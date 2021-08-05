import {
  POST_COMMENT_USER_SUCCESS,
  POST_COMMENT_USER_FAIL,
} from "../actions/constant";

const initialState = {
  infoComments: {},

  errors: null,
};
export const postCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_COMMENT_USER_SUCCESS:
      return {
        ...state,
        infoComments: action.comments,
      };
    // const newComment = action.comments;
    // console.log("newComment", newComment);
    // return {
    //   ...state,
    //   listComments: [...state.listComments, newComment],
    //   // countComment: state.countComment + 1,
    // };

    case POST_COMMENT_USER_FAIL:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
};
