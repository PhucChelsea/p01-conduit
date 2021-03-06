import { all, call } from "redux-saga/effects";
import { watchProfileUserSaga } from "../pages/profile/profileSaga";
import { watchUserSaga } from "../pages/home/user-saga";
import { watchPopularTagSaga } from "../pages/home/tags-saga";
import { watchArticlesSaga } from "../pages/home/articles-saga";
import { watchArticleWithTagSaga } from "../pages/home/article-tag-saga";
import watchArticleUserSaga from "../pages/home/saga/articlesUser-saga";
import watchPostArticleSaga from "../pages/editor/saga/postArticleSaga";
import watchGetArticleByTitleSaga from "../pages/editor/saga/getArticleByTitleSaga";
import watchGetCommentSaga from "../pages/editor/saga/getCommentSaga";
import watchPostCommentSaga from "../pages/editor/saga/postCommentSaga";

export default function* rootSaga() {
  yield all([
    call(watchUserSaga),
    call(watchProfileUserSaga),
    call(watchPopularTagSaga),
    call(watchArticlesSaga),
    call(watchArticleWithTagSaga),
    call(watchArticleUserSaga),
    call(watchPostArticleSaga),
    call(watchGetArticleByTitleSaga),
    call(watchGetCommentSaga),
    call(watchPostCommentSaga),
  ]);
}
