import { createSelector } from "reselect";

const PostCommentSelector = (state) => state.postCommentReducer.infoComments;

export const postCommentReselect = createSelector(
  PostCommentSelector,
  (item) => item.comments
);
