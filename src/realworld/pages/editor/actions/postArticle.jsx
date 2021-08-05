import {
  POST_ARTICLE_USER,
  POST_ARTICLE_USER_SUCCESS,
  POST_ARTICLE_USER_FAILURE,
} from "./constant";

export const postArticleUser = ({ title, description, body, tagList }) => ({
  type: POST_ARTICLE_USER,
  title,
  description,
  body,
  tagList,
});
export const postArticleUserSuccess = (articles) => ({
  type: POST_ARTICLE_USER_SUCCESS,
  articles,
});
export const postArticleUserFail = (err) => ({
  type: POST_ARTICLE_USER_FAILURE,
  err,
});
