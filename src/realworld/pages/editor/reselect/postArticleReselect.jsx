import { createSelector } from "reselect";

const postArticleSelector = (state) => state.PostArticleReducer.dataArticles;

export const titleArticlePost = createSelector(
  postArticleSelector,
  (item) => item.article.title
);
