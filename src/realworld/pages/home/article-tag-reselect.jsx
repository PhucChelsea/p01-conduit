import { createSelector } from "reselect";

export const articleTagSelector = (state) => state.articleWithTagReducer;

export const ArticleTagReselect = createSelector(
  articleTagSelector,
  (item) => item.dataWithTag.articles
);
