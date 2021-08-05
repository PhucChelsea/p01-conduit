import {
  GET_USER_ARTICLE_SUCCESS,
  GET_USER_ARTICLE_FAILURE,
} from "../actions/constant";

const initialState = {
  dataArticles: {},
  errors: null,
};

export const ArticleByTitleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_ARTICLE_SUCCESS:
      return {
        ...state,
        dataArticles: action.data,
      };
    case GET_USER_ARTICLE_FAILURE:
      return {
        ...state,
        dataArticles: {},
        errors: action.er,
      };
    default:
      return state;
  }
};
