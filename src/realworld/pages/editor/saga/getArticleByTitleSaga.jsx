import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/getArticleByTitle";
import { api } from "../../../api/api-user";
import { GET_USER_ARTICLE } from "../actions/constant";
import { helper } from "../../../helpers/common";

function* ArticleByTitleSaga({ title }) {
  try {
    const result = yield call(api.getUserArticle, title);
    if (!helper.isEmptyObject(result)) {
      yield put(actions.getArticleByTitleSuccess(result));
    } else {
      yield put(
        actions.getArticleByTitleFail({
          cod: 405,
          message: "not data",
        })
      );
    }
  } catch (e) {
    yield put(actions.getArticleByTitleFail(e));
  }
}

export default function* watchGetArticleByTitleSaga() {
  yield takeLatest(GET_USER_ARTICLE, ArticleByTitleSaga);
}
