import { takeEvery, put, call, select } from "redux-saga/effects";
import { GET_FAVORIT_FILMS_ID } from "../constants";
import { saveAllFavoritFilmsAction } from "./action";
import { getFavoritFilmsId, getFavoritFilmInfo } from "../REST";
import { getFavoritListId } from "./selector";

function* workerFavoritFilmsId() {
  try {
    const favoritListId = yield select(getFavoritListId);
    const filmsId = yield call(getFavoritFilmsId, favoritListId);
    const allFilmsInfo = [];

    for (let i = 0; i < filmsId.movies.length; i++) {
      const filmInfo = yield call(getFavoritFilmInfo, filmsId.movies[i]);
      allFilmsInfo.push(filmInfo);
    }

    yield put(saveAllFavoritFilmsAction(allFilmsInfo));
  } catch (err) {
    console.error("ERROR", err);
  }
}

export default function* watcherCart() {
  yield takeEvery(GET_FAVORIT_FILMS_ID, workerFavoritFilmsId);
}
