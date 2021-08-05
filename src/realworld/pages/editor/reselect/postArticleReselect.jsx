import { createSelector } from "reselect";

const postArticleSelector = (state) =>
  state.postArticleReducer.dataArticles.article;

export const titleArticlePostReselect = createSelector(
  postArticleSelector,
  (item) => item.title
);
