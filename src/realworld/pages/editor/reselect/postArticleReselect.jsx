import { createSelector } from "reselect";

const postArticleSelector = (state) => state.postArticleReducer.dataArticles;

export const titleArticlePostReselect = createSelector(
  postArticleSelector,
  (item) => item.article
);
