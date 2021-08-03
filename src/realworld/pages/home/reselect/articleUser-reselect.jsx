import { createSelector } from "reselect";

const articleUserSelector = (state) => state.ArticlesUserReducer;

export const listArticleReselect = createSelector(
  articleUserSelector,
  (item) => item.dataArticles.articles
);

export const countArticleReselect = createSelector(
  articleUserSelector,
  (item) => item.dataArticles.articlesCount
);
export const currentPageReselect = createSelector(
  articleUserSelector,
  (item) => item.page
);
