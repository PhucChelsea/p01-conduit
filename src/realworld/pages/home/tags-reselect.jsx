import { createSelector } from "reselect";

const tagsSelector = (state) => state.popularTagReducer;

export const loadingReselect = createSelector(
  tagsSelector,
  (item) => item.loading
);

export const tagsReselect = createSelector(
  tagsSelector,
  (item) => item.dataTags.tags
);
