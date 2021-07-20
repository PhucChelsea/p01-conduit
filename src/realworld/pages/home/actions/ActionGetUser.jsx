import * as types from "./types";

//
export const getDataUser = () => ({
  type: types.GET_DATA_USERS,
});
// action duoc saga dispatch vao trong store

export const loadingGetData = (loading) => ({
  type: types.START_GET_DATA,
  loading,
});

export const endLoadingGetData = (loading) => ({
  type: types.STOP_GET_DATA,
  loading,
});

export const getDataUserSuccess = (data) => ({
  type: types.GET_DATA_USERS_SUCCESS,
  data,
});

export const getDataUserFail = (error) => ({
  type: types.GET_DATA_USERS_FAIL,
  error,
});


