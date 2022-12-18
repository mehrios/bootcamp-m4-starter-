import {
  SAVE_IN_LIST,
  DELET_FILM,
  SAVE_IN_FAVORITS,
  SAVE_FAVORIT_LIST_ID,
} from "../constants";

export const saveInListAction = (obj) => ({ type: SAVE_IN_LIST, payload: obj });
export const deletFilmAction = (id) => ({ type: DELET_FILM, payload: id });

export const saveInFavoritsAction = (listName) => ({
  type: SAVE_IN_FAVORITS,
  payload: listName,
});

export const saveFavoritListIdAction = (id) => ({
  type: SAVE_FAVORIT_LIST_ID,
  payload: id,
});
