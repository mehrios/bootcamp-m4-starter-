import { all, call } from "redux-saga/effects";
import movieSaga from "./Movies/saga";
import favoritesSaga from "./Favorites/saga";
import listPageSaga from "./ListPage/saga";

function* rootSaga() {
  yield all([call(movieSaga), call(favoritesSaga), call(listPageSaga)]);
}

export default rootSaga;
