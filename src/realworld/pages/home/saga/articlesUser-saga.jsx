import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../../api/api-user";
import { helper } from "../../../helpers/common";
import * as actions from "../actions/actionGetArticleUser";
import { GET_ARTICLE_USER } from "../actions/types";

function* articlesUserSaga({ filters, page, nameTag }) {
  try {
    yield put(actions.startGetArticlesUser(true));
    const results = yield call(api.getArticlesUser, filters, page, nameTag);
    if (!helper.isEmptyObject(results)) {
      yield put(actions.getArticlesUserSuccess(results));
    } else {
      yield put(
        actions.getArticlesUserFail({
          code: 404,
          message: "not found data",
        })
      );
    }
    yield put(actions.stopGetArticlesUser(true));
  } catch (e) {
    yield put(actions.getArticlesUserFail(e));
  }
}

export default function* watchArticleUserSaga() {
  yield takeLatest(GET_ARTICLE_USER, articlesUserSaga);
}
