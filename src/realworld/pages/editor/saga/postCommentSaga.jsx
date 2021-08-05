import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/postComment";
import { api } from "../../../api/api-user";
import { POST_COMMENT_USER } from "../actions/constant";
import { helper } from "../../../helpers/common";

function* postCommentSaga(body, title) {
  try {
    const result = yield call(
      api.postCommentUser,
      {
        body: body,
      },
      title
    );
    console.log(" post comment:", result);
    if (!helper.isEmptyObject(result)) {
      yield put(actions.postCommentUserSuccess(result));
    } else {
      yield put(
        actions.postCommentUserFail({
          code: 404,
          message: "not found data",
        })
      );
    }
  } catch (e) {
    yield put(actions.postCommentUserFail(e));
  }
}

export default function* watchPostCommentSaga() {
  yield takeLatest(POST_COMMENT_USER, postCommentSaga);
}
