import {
  GET_COMMENT_USER,
  GET_COMMENT_USER_SUCCESS,
  GET_COMMENT_USER_FAIL,
} from "./constant";

export const getCommentUser = (title) => ({
  type: GET_COMMENT_USER,
  title,
});

export const getCommentUserSuccess = (comments) => ({
  type: GET_COMMENT_USER_SUCCESS,
  comments,
});
export const getCommentUserFail = (errorComment) => ({
  type: GET_COMMENT_USER_FAIL,
  errorComment,
});
