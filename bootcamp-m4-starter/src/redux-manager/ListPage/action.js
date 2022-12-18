import { GET_FAVORIT_FILMS_ID, SAVE_ALL_FAVORIT_FILMS } from "../constants";

export const getFavoritFilmsIdAction = () => ({
  type: GET_FAVORIT_FILMS_ID,
});

export const saveAllFavoritFilmsAction = (arr) => ({
  type: SAVE_ALL_FAVORIT_FILMS,
  payload: arr,
});
