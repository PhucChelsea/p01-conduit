import {
  POST_ARTICLE_USER_SUCCESS,
  POST_ARTICLE_USER_FAILURE,
} from "../actions/constant";

const initState = {
  dataArticles: {},
  error: null,
};

export const postArticleReducer = (state = initState, action) => {
  switch (action.type) {
    case POST_ARTICLE_USER_SUCCESS:
      return {
        ...state,
        dataArticles: action.articles,
      };
    case POST_ARTICLE_USER_FAILURE:
      return {
        ...state,
        dataArticles: {},
        error: action.err,
      };
    default:
      return state;
  }
};
