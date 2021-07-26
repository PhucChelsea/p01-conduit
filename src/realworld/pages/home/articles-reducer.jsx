import {
  START_GET_DATA_ARTICLES,
  STOP_GET_DATA_ARTICLES,
  GET_DATA_ARTICLES_SUCCESS,
  GET_DATA_ARTICLES_FAIL,
} from "./actions/types";

const initialState = {
  loading: false,
  dataArticles: [],
  error: null,
  filters: {
    limit: 10,
    offset: 0,
  },
  cPage: 1,
};

export const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GET_DATA_ARTICLES:
      return {
        ...state,
        loading: action.loading,
      };
    case STOP_GET_DATA_ARTICLES:
      return {
        ...state,
        loading: action.loading,
      };
    case GET_DATA_ARTICLES_SUCCESS:
      return {
        ...state,
        dataArticles: action.dataArticles,
        error: null,
        filters: action.filters,
        cPage: action.cPage,
      };
    case GET_DATA_ARTICLES_FAIL:
      return {
        ...state,
        dataArticles: [],
        filters: {},
        error: action.errorArticles,
      };
    default:
      return state;
  }
};
