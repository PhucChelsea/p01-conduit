import { createSelector } from "reselect";

const ArticleByTitleSelector = (state) =>
  state.articleByTitleReducer.dataArticles.article;

export const getBodyArticleByTitleReselect = createSelector(
  ArticleByTitleSelector,
  (item) => item.title
);
