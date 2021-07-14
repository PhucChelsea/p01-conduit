import * as types from "./actions/types";

const initialState = {
  loading: false,
  error: null,
  dataUser: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_GET_DATA:
      return {
        ...state,
        loading: action.loading,
      };
    case types.STOP_GET_DATA:
      return {
        ...state,
        loading: action.loading,
      };
    case types.GET_DATA_USERS_SUCCESS:
      return {
        ...state,
        error: null,
        dataUser: action.data,
      };
    case types.GET_DATA_USERS_FAIL:
      return { ...state, error: action.error, dataUser: {}};
    default:
      return state;
  }
};
