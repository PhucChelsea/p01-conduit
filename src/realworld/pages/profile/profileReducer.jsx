import * as types from "./types";

const initState = {
  loading: false,
  dataUser: {},
  error: null,
};

export const profileUserReducer = (state = initState, action) => {
  switch (action.type) {
    case types.START_GET_PROFILE_USER:
      return {
        ...state,
        loading: action.loading,
      };
    case types.STOP_GET_PROFILE_USER:
      return {
        ...state,
        loading: action.loading,
      };
    case types.GET_PROFILE_USER_SUCCESS:
      return {
        ...state,
        dataUser: action.infoUser,
        error: null,
      };
    case types.GET_PROFILE_USER_FAIL:
      return {
        ...state,
        dataUser: {},
        error: action.errorInfo,
      };
    default:
      return state;
  }
};
