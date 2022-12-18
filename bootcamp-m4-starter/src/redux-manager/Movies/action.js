import { SEND_MOVIE } from "../constants";
import { SEARCH_MOVIE } from "../constants";


export const searchMovieAction = (filmName) => ({
  type: SEARCH_MOVIE,
  payload: filmName,
});

export const getMovieAction = (obj) => ({ type: SEND_MOVIE, payload: obj });