import { createSelector } from "reselect";

const PostCommentSelector = (state) => state.postCommentReducer.listComments;

export const postCommentReselect = createSelector(
  PostCommentSelector,
  (item) => item
);
