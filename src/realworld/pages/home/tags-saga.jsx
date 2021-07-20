import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "./actions/ActionGetTag";
import { GET_DATA_POPULAR_TAGS } from "./actions/types";
import { api } from "../../api/api-user";
import { helper } from "../../helpers/common";

function* getDataTags() {
  try {
    yield put(actions.startGetPopularTag(true));
    const dataTag = yield call(api.getDataTags);
    if (!helper.isEmptyObject(dataTag)) {
      yield put(actions.getPopularTagSuccess(dataTag));
    } else {
      yield put(
        actions.getPopularTagFail({
          code: 404,
          message: "not found data",
        })
      );
    }
    yield put(actions.stopGetPopularTag(false));
  } catch (e) {
    yield put(actions.getPopularTagFail(e));
  } finally {
    yield put(actions.stopGetPopularTag(false));
  }
}

export function* watchPopularTagSaga() {
  yield takeLatest(GET_DATA_POPULAR_TAGS, getDataTags);
}
