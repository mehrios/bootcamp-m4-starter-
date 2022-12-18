import { takeEvery, put, call, select } from "redux-saga/effects";
import { SEARCH_MOVIE } from "../constants";
import { getMovieAction } from "./action";
import { fetchFilmName } from "../REST";

export default function* watcherCart() {
  yield takeEvery(SEARCH_MOVIE, workerCart);
}

function* workerCart(action) {
  try {
    const data = yield call(fetchFilmName, action.payload);
    yield put(getMovieAction(data?.Search));
  } catch (err) {
    console.error("ERROR", err);
  }
}
