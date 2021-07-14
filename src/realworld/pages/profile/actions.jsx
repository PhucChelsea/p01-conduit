import * as types from "./types";

export const getProfileUser = (userName) => ({
  type: types.GET_PROFILE_USER,
  userName,
});
export const startGetProfileUser = (loading) => ({
  type: types.START_GET_PROFILE_USER,
  loading,
});
export const stopGetProfileUser = (loading) => ({
  type: types.STOP_GET_PROFILE_USER,
  loading,
});
export const getProfileUserSuccess = (infoUser) => ({
  type: types.GET_PROFILE_USER_SUCCESS,
  infoUser,
});
export const getProfileUserFail = (errorInfo) => ({
  type: types.GET_PROFILE_USER_FAIL,
  errorInfo,
});
