import {
  GET_DATA_ARTICLE_WITH_TAG,
  START_GET_ARTICLE_WITH_TAG,
  GET_ARTICLE_WITH_TAG_SUCCESS,
  GET_ARTICLE_WITH_TAG_FAIL,
  STOP_GET_ARTICLE_WITH_TAG,
} from "./actions/types";

const initSate = {
  dataWithTag: [],
  errWithTag: null,
};

export const articleWithTagReducer = (state = initSate, action) => {
  switch (action.type) {
    case GET_ARTICLE_WITH_TAG_SUCCESS:
      return {
        ...state,
        dataWithTag: action.tag,
      };
    case GET_ARTICLE_WITH_TAG_FAIL:
      return {
        ...state,
        dataWithTag: [],
        errWithTag: action.errorTag,
      };
    default:
      return state;
  }
};
