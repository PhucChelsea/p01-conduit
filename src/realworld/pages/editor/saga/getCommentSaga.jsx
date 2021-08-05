import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/getComment";
import { api } from "../../../api/api-user";
import { GET_COMMENT_USER } from "../actions/constant";
import { helper } from "../../../helpers/common";

function* getCommentSaga({ title }) {
  try {
    const result = yield call(api.getCommentUser, title);
    if (!helper.isEmptyObject(result)) {
      yield put(actions.getCommentUserSuccess(result));
    } else {
      yield put(
        actions.getCommentUserFail({
          cod: 405,
          message: "not data",
        })
      );
    }
  } catch (e) {
    yield put(actions.getCommentUserFail(e));
  }
}

export default function* watchGetCommentSaga() {
  yield takeLatest(GET_COMMENT_USER, getCommentSaga);
}
