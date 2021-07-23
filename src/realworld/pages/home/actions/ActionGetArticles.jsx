import {
  GET_DATA_ARTICLES,
  START_GET_DATA_ARTICLES,
  STOP_GET_DATA_ARTICLES,
  GET_DATA_ARTICLES_SUCCESS,
  GET_DATA_ARTICLES_FAIL,
} from "./types";

export const getDataArticles = (filters, cPage = 1) => ({
  type: GET_DATA_ARTICLES,
  filters,
  cPage,
});
export const startGetDataArticles = (loading) => ({
  type: START_GET_DATA_ARTICLES,
  loading,
});
export const stopGetDataArticles = (loading) => ({
  type: STOP_GET_DATA_ARTICLES,
  loading,
});
export const getDataArticlesSuccess = (dataArticles) => ({
  type: GET_DATA_ARTICLES_SUCCESS,
  dataArticles,
});
export const getDataArticlesFail = (errorArticles) => ({
  type: GET_DATA_ARTICLES_FAIL,
  errorArticles,
});
