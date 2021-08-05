import {
  GET_USER_ARTICLE,
  GET_USER_ARTICLE_SUCCESS,
  GET_USER_ARTICLE_FAILURE,
} from "./constant";

export const getArticleByTitle = (title) => ({
  type: GET_USER_ARTICLE,
  title,
});

export const getArticleByTitleSuccess = (data) => ({
  type: GET_USER_ARTICLE_SUCCESS,
  data,
});
export const getArticleByTitleFail = (er) => ({
  type: GET_USER_ARTICLE_FAILURE,
  er,
});
