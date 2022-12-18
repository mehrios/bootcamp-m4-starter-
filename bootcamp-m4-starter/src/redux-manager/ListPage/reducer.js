import { SAVE_FAVORIT_LIST_ID, SAVE_ALL_FAVORIT_FILMS } from "../constants";

const initialValues = {
  filmsInfo: [],
  favoritListId: null,
};

const listPageReducer = (state = initialValues, action) => {
  switch (action.type) {
    case SAVE_FAVORIT_LIST_ID:
      return {
        ...state,
        favoritListId: action.payload,
      };

    case SAVE_ALL_FAVORIT_FILMS:
      return {
        ...state,
        filmsInfo: action.payload,
      };

    default:
      return state;
  }
};

export default listPageReducer;
