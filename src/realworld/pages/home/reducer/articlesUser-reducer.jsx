import {
  START_GET_ARTICLE_USER,
  STOP_GET_ARTICLE_USER,
  GET_ARTICLE_USER_SUCCESS,
  GET_ARTICLE_USER_FAIL,
} from "../actions/types";

const initialState = {
  loading: false,
  dataArticles: {},
  error: null,
  filters: {},
  page: 1,
};

export const ArticlesUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GET_ARTICLE_USER:
      return {
        ...state,
        loading: action.loading,
      };
    case STOP_GET_ARTICLE_USER:
      return {
        ...state,
        loading: action.loading,
      };
    case GET_ARTICLE_USER_SUCCESS:
      return {
        ...state,
        dataArticles: action.data,
        filters: action.filters,
        page: action.page,
      };
    case GET_ARTICLE_USER_FAIL:
      return {
        ...state,
        dataArticles: [],
        error: action.errors,
      };
    default:
      return state;
  }
};
