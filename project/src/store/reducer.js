import {ActionType} from './actions';
import films from '../mocks/films.js';
import {ALL_GENRES} from '../const';

const initialState = {
  activeGenreFilter: ALL_GENRES,
  films: films,
  filtredFilms: films,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE_FILTER:
      return {
        ...state,
        activeGenreFilter: action.payload,
        filtredFilms: action.payload === ALL_GENRES ? initialState.films : initialState.films.filter((film) => film.genre === action.payload),
      };
    default:
      return state;
  }
};
