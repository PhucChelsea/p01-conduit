import {
  GET_ARTICLE_USER,
  START_GET_ARTICLE_USER,
  STOP_GET_ARTICLE_USER,
  GET_ARTICLE_USER_SUCCESS,
  GET_ARTICLE_USER_FAIL,
} from "./types";

export const getArticlesUser = (filters, page = 1) => ({
  type: GET_ARTICLE_USER,
  filters,
  page,
});
export const startGetArticlesUser = (loading) => ({
  type: START_GET_ARTICLE_USER,
  loading,
});
export const stopGetArticlesUser = (loading) => ({
  type: STOP_GET_ARTICLE_USER,
  loading,
});
export const getArticlesUserSuccess = (data, filters, page) => ({
  type: GET_ARTICLE_USER_SUCCESS,
  data,
  filters,
  page,
});
export const getArticlesUserFail = (errors) => ({
  type: GET_ARTICLE_USER_FAIL,
  errors,
});
