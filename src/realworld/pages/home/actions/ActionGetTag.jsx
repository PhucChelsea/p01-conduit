import {
  GET_DATA_POPULAR_TAGS,
  START_GET_POPULAR_TAGS,
  STOP_GET_POPULAR_TAGS,
  GET_POPULAR_TAGS_SUCCESS,
  GET_POPULAR_TAGS_FAIL,
} from "./types";

export const getDataPopularTags = () => ({
  type: GET_DATA_POPULAR_TAGS,
});

export const startGetPopularTag = (loading) => ({
  type: START_GET_POPULAR_TAGS,
  loading,
});
export const stopGetPopularTag = (loading) => ({
  type: STOP_GET_POPULAR_TAGS,
  loading,
});
export const getPopularTagSuccess = (dataTags) => ({
  type: GET_POPULAR_TAGS_SUCCESS,
  dataTags,
});
export const getPopularTagFail = (errorTags) => ({
  type: GET_POPULAR_TAGS_FAIL,
  errorTags,
});
