import { takeEvery, put, call, select } from "redux-saga/effects";
import { SAVE_IN_FAVORITS } from "../constants";
import { saveFavoritListIdAction } from "./action";
import { sendFavoritFilms } from "../REST";
import { setFilmsInList } from "./selector";

function* workerSendFilms(action) {
  try {
    const filmsImdbID = [];
    const movies = yield select(setFilmsInList);

    movies.forEach((el) => {
      filmsImdbID.push(el.imdbID);
    });

    const favoritListId = yield call(
      sendFavoritFilms,
      action.payload,
      filmsImdbID
    );

    yield put(saveFavoritListIdAction(favoritListId.id));
  } catch (err) {
    console.error("ERROR", err);
  }
}

export default function* watcherCart() {
  yield takeEvery(SAVE_IN_FAVORITS, workerSendFilms);
}
