import { createSelector } from "reselect";

const articleSelector = (state) => state.articlesReducer;

export const loadingReselect = createSelector(
  articleSelector,
  (item) => item.loading
);
export const dataArticleReselect = createSelector(
  articleSelector,
  (item) => item.dataArticles.articles
);
export const articlesCountReselect = createSelector(
  articleSelector,
  (item) => item.dataArticles.articlesCount
);
