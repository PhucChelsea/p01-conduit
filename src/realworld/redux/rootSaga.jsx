import { all, call } from "redux-saga/effects";
import { watchProfileUserSaga } from "../pages/profile/profileSaga";
import { watchUserSaga } from "../pages/home/user-saga";

export default function* rootSaga() {
  yield all([call(watchUserSaga), call(watchProfileUserSaga)]);
}
