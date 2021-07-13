import * as types from "./typeActions";

export const signUpUser = (username, email, password) => ({
  type: types.SIGN_UP_USER,
  username,
  email,
  password,
});

export const postUserSignUpSuccess = (data) => ({
  type: types.POST_USER_SIGN_UP_SUCCESS,
  data,
});
export const postUserSignUpFailure = (errors) => ({
  type: types.POST_USER_SIGN_UP_FAIL,
  errors,
});
