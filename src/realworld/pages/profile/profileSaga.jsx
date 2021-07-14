import { put, call, takeEvery } from "redux-saga/effects";
import * as actions from "./actions";
import { api } from "../../api/api-user";
import { GET_PROFILE_USER } from "./types";
import { helper } from "../../helpers/common";

function* getProfileUserSaga({ userName }) {
  try {
    yield put(actions.startGetProfileUser(true));
    const dataInfo = yield call(api.getProfileUser, userName);
    if (!helper.isEmptyObject(dataInfo)) {
      yield put(actions.getProfileUserSuccess(dataInfo));
    } else {
      yield put(
        actions.getProfileUserFail({
          code: 404,
          message: "not data",
        })
      );
    }
    yield put(actions.stopGetProfileUser(false));
  } catch (e) {
    yield put(actions.getProfileUserFail(e));
  } finally {
    yield put(actions.stopGetProfileUser(false));
  }
}

export function* watchProfileUserSaga() {
  yield takeEvery(GET_PROFILE_USER, getProfileUserSaga);
}
