import { createSelector } from "reselect";

const ArticleByTitleSelector = (state) =>
  state.articleByTitleReducer.dataArticles;

export const getBodyArticleByTitleReselect = createSelector(
  ArticleByTitleSelector,
  (item) => item.body
);
