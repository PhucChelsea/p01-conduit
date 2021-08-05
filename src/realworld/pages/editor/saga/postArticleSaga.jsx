import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/postArticle";
import { api } from "../../../api/api-user";
import { POST_ARTICLE_USER } from "../actions/constant";
import { helper } from "../../../helpers/common";

function* postArticleSaga({ title, description, body, tagList }) {
  try {
    const result = yield call(api.postArticleUser, {
      title: title,
      description: description,
      body: body,
      tagList: tagList,
    });
    console.log("result postArticle:", result);
    if (!helper.isEmptyObject(result)) {
      yield put(actions.postArticleUserSuccess(result));
    } else {
      yield put(
        actions.postArticleUserFail({
          code: 404,
          message: "not found data",
        })
      );
    }
  } catch (e) {
    yield put(actions.postArticleUserFail(e));
  }
}

export default function* watchPostArticleSaga() {
  yield takeLatest(POST_ARTICLE_USER, postArticleSaga);
}
