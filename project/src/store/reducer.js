import {ActionType} from './actions';
import films from '../mocks/films.js';
import {ALL_GENRES, TYPE_GENRE, FILMS_COUNT} from '../const';

const initialState = {
  activeFilter: {
    type: TYPE_GENRE,
    value: ALL_GENRES,
  },
  films: films,
  filteredFilmsCount: 0,
  displayedFilmsCount: FILMS_COUNT,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_FILTER:
      return {
        ...state,
        activeFilter: action.payload,
      };
    case ActionType.SET_FILTERED_FILMS_COUNT:
      return {
        ...state,
        filteredFilmsCount: action.payload,
      };
    case ActionType.SET_DISPLAYED_FILMS_COUNT:
      return {
        ...state,
        displayedFilmsCount: action.payload,
      };
    default:
      return state;
  }
};
