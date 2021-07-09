import * as types from "./types";

export const getDataUser = () => ({
  type: types.GET_DATA_USERS,
});
export const startGetData = (loading) => ({
  type: types.START_GET_DATA,
  loading,
});

export const stopGetData = (loading) => ({
  type: types.STOP_GET_DATA,
  loading,
});

export const getDataUserSuccess = (users) => ({
  type: types.GET_DATA_USERS_SUCCESS,
  users,
});

export const getDataUserFailure = (error) => ({
  type: types.GET_DATA_USERS_FAIL,
  error,
});
