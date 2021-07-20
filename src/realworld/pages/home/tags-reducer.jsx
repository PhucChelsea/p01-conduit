import {
  START_GET_POPULAR_TAGS,
  STOP_GET_POPULAR_TAGS,
  GET_POPULAR_TAGS_SUCCESS,
  GET_POPULAR_TAGS_FAIL,
} from "./actions/types";

const initialState = {
  loading: false,
  dataTags: {},
  error: null,
};

export const popularTagReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GET_POPULAR_TAGS:
      return {
        ...state,
        loading: action.loading,
      };
    case STOP_GET_POPULAR_TAGS:
      return {
        ...state,
        loading: action.loading,
      };
    case GET_POPULAR_TAGS_SUCCESS:
      return {
        ...state,
        dataTags: action.dataTags,
        error: null,
      };
    case GET_POPULAR_TAGS_FAIL:
      return {
        ...state,
        dataTags: {},
        error: action.errorTags,
      };
    default:
      return state;
  }
};
