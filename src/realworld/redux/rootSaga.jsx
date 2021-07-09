import { all, call } from "redux-saga/effects";
import { watchUserSaga } from "../pages/home/user-saga";

export default function* rootSaga() {
  yield all([call(watchUserSaga)]);
}
