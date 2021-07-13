import * as types from "./typeActions";

const initialState = {
  dataUser: {},
  error: null,
};

export const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_USER_SIGN_UP_SUCCESS: {
      return {
        ...state,
        dataUser: action.data,
        error: null,
      };
    }
    case types.POST_USER_SIGN_UP_FAIL: {
      return {
        ...state,
        dataUser: {},
        error: action.errors,
      };
    }
    default:
      return state;
  }
};
