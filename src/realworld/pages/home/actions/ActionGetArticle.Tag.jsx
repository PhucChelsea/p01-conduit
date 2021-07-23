import {
  GET_DATA_ARTICLE_WITH_TAG,
  START_GET_ARTICLE_WITH_TAG,
  GET_ARTICLE_WITH_TAG_SUCCESS,
  GET_ARTICLE_WITH_TAG_FAIL,
  STOP_GET_ARTICLE_WITH_TAG,
} from "./types";

export const getArticleWithTag = (nameTag) => ({
  type: GET_DATA_ARTICLE_WITH_TAG,
  nameTag,
});

export const startGetArticleWithTag = (loading) => ({
  type: START_GET_ARTICLE_WITH_TAG,
  loading,
});
export const stopGetArticleWithTag = (loading) => ({
  type: STOP_GET_ARTICLE_WITH_TAG,
  loading,
});
export const getArticleWithTagSuccess = (tag) => ({
  type: GET_ARTICLE_WITH_TAG_SUCCESS,
  tag,
});
export const getArticleWithTagFail = (errorTag) => ({
  type: GET_ARTICLE_WITH_TAG_FAIL,
  errorTag,
});
