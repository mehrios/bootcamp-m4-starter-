import { combineReducers } from "redux";
import movieReducer from "./Movies/reducer";
import favoritesReducer from "./Favorites/reducer";
import listPageReducer from "./ListPage/reducer";

const rootReducer = combineReducers({
  movieReducer,
  favoritesReducer,
  listPageReducer,
});

export default rootReducer;
