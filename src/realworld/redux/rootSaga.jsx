import { all, call } from "redux-saga/effects";
// import { watchUserSaga } from "../pages/home/user-saga";
import { watchUserSignUpSaga } from "../pages/signUp/signUpSaga";

export default function* rootSaga() {
  yield all([call(watchUserSignUpSaga)]);
}
