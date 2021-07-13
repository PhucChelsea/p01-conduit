import { put, call, takeEvery } from "redux-saga/effects";
import { api } from "../../api/api-user";
import * as actions from "./action";
import { SIGN_UP_USER } from "./typeActions";
import { helper } from "../../helpers/common";
function* postUserSignUpSaga() {
  try {
    const signUpUser = yield call(api.postDataUser());
    if (!helper.isEmptyObject(signUpUser)) {
      yield put(actions.postUserSignUpSuccess(signUpUser));
    } else {
      yield put(
        actions.postUserSignUpFailure({
          code: 404,
          message: " not data ",
        })
      );
    }
  } catch (e) {
    console.log(e);
  }
}
export function* watchUserSignUpSaga() {
  yield takeEvery(SIGN_UP_USER, postUserSignUpSaga);
}
