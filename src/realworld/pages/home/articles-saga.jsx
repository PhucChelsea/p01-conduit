import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../api/api-user";
import { helper } from "../../helpers/common";
import * as actions from "./actions/ActionGetArticles";
import { GET_DATA_ARTICLES } from "./actions/types";

function* articlesSaga({ filters, cPage }) {
  try {
    yield put(actions.startGetDataArticles(true));
    const result = yield call(api.getDataArticles, filters, cPage);
    if (!helper.isEmptyObject(result)) {
      yield put(actions.getDataArticlesSuccess(result));
    } else {
      yield put(
        actions.getDataArticlesFail({
          code: 404,
          message: "Not found data",
        })
      );
    }
    yield put(actions.stopGetDataArticles(false));
  } catch (e) {
    yield put(actions.getDataArticlesFail(e));
  }
}

export function* watchArticlesSaga() {
  yield takeLatest(GET_DATA_ARTICLES, articlesSaga);
}
