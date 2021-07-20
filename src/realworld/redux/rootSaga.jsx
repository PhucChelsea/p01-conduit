import { all, call } from "redux-saga/effects";
import { watchProfileUserSaga } from "../pages/profile/profileSaga";
import { watchUserSaga } from "../pages/home/user-saga";
import { watchPopularTagSaga } from "../pages/home/tags-saga";
import { watchArticlesSaga } from "../pages/home/articles-saga";

export default function* rootSaga() {
  yield all([
    call(watchUserSaga),
    call(watchProfileUserSaga),
    call(watchPopularTagSaga),
    call(watchArticlesSaga),
  ]);
}
