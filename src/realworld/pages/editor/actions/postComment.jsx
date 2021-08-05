import {
  POST_COMMENT_USER,
  POST_COMMENT_USER_SUCCESS,
  POST_COMMENT_USER_FAIL,
} from "./constant";

export const postCommentUser = ( body , title) => ({
  type: POST_COMMENT_USER,
  body,
  title,
});
export const postCommentUserSuccess = (comments) => ({
  type: POST_COMMENT_USER_SUCCESS,
  comments,
});
export const postCommentUserFail = (errors) => ({
  type: POST_COMMENT_USER_FAIL,
  errors,
});
