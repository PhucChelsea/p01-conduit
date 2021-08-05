import { createSelector } from "reselect";

const ArticleByTitleSelector = (state) =>
  state.ArticleByTitleReducer.dataArticles.article;

export const getBodyArticleByTitleReselect = createSelector(
  ArticleByTitleSelector,
  (item) => item.body
);
