import { put, call, takeEvery } from "redux-saga/effects";
import * as actions from "./actions/index";
import { GET_DATA_USERS } from "./actions/types";
import { api } from "../../api/api-user";

function* getDataSaga() {
  try {
    yield put(actions.startGetData(true));
    const data = yield call(api.getDataUser);
    if (data) {
      yield put(actions.getDataUserSuccess(data));
    } else {
      yield put(
        actions.getDataUserFailure({
          code: 404,
          message: "not found data",
        })
      );
    }
    yield put(actions.stopGetData(false));
  } catch (err) {
    yield put(actions.getDataUserFailure(err));
  }
}

export function* watchUserSaga() {
  yield takeEvery(GET_DATA_USERS, getDataSaga);
}
