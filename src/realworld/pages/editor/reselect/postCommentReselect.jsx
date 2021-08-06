import { createSelector } from "reselect";

const PostCommentSelector = (state) => state.postCommentReducer;

export const postCommentReselect = createSelector(
  PostCommentSelector,
  (item) => item.infoComment
);

export const listCommentsReselect = createSelector(
  PostCommentSelector,
  (item) => item.listComments
);
