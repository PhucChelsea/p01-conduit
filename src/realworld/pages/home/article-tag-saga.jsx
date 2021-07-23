import { put, call, takeLatest } from "redux-saga/effects";
import { GET_DATA_ARTICLE_WITH_TAG } from "./actions/types";
import {
  getArticleWithTagSuccess,
  getArticleWithTagFail,
} from "./actions/ActionGetArticle.Tag";
import { api } from "../../api/api-user";
import { helper } from "../../helpers/common";

function* articleWithTagSaga({ nameTag }) {
  try {
    const result = yield call(api.getDataArticlesByTag, nameTag);
    if (!helper.isEmptyObject(result)) {
      yield put(getArticleWithTagSuccess(result));
    } else {
      yield put(
        getArticleWithTagFail({
          cod: 404,
          message: "not found data",
        })
      );
    }
  } catch (e) {
    yield put(getArticleWithTagFail(e));
  }
}

export function* watchArticleWithTagSaga() {
  yield takeLatest(GET_DATA_ARTICLE_WITH_TAG, articleWithTagSaga);
}
