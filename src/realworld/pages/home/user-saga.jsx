import { put, call, takeEvery } from "redux-saga/effects";
import * as actions from "./actions/ActionGetUser";
import { GET_DATA_USERS } from "./actions/types";
import { api } from "../../api/api-user";
import { helper } from "../../helpers/common";

function* getDataSaga() {
  try {
    yield put(actions.loadingGetData(true));
    const data = yield call(api.getDataUser);
    if (!helper.isEmptyObject(data)) {
      yield put(actions.getDataUserSuccess(data));
    } else {
      yield put(
        actions.getDataUserFail({
          code: 404,
          message: "not found data",
        })
      );
    }
    yield put(actions.loadingGetData(false));
  } catch (err) {
    yield put(actions.getDataUserFail(err));
  } finally {
    yield put(actions.endLoadingGetData(false));
  }
}

export function* watchUserSaga() {
  yield takeEvery(GET_DATA_USERS, getDataSaga);
}
