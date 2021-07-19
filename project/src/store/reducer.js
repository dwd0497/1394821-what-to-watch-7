import {ActionType} from './actions';
import {ALL_GENRES, TYPE_GENRE, FILMS_COUNT, AuthorizationStatus} from '../const';

const initialState = {
  activeFilter: {
    type: TYPE_GENRE,
    value: ALL_GENRES,
  },
  films: [],
  promoFilm: {},
  film: {},
  comments: [],
  isFilmsLoaded: false,
  isPromoLoaded: false,
  isFilmLoaded: false,
  isCommentsLoaded: false,
  similarFilms: [],
  isSimilarFilmsLoaded: false,
  favoriteFilms: [],
  isFavoriteFilmsLoaded: false,
  filteredFilmsCount: 0,
  displayedFilmsCount: FILMS_COUNT,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_FILTER:
      return {
        ...state,
        activeFilter: action.payload,
        displayedFilmsCount: FILMS_COUNT,
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
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        isFilmsLoaded: true,
      };
    case ActionType.LOAD_SIMILAR_FILMS:
      return {
        ...state,
        similarFilms: action.payload,
        isSimilarFilmsLoaded: true,
      };
    case ActionType.LOAD_FAVORITE_FILMS:
      return {
        ...state,
        favoriteFilms: action.payload,
        isFavoriteFilmsLoaded: true,
      };

    case ActionType.LOAD_PROMO:
      return {
        ...state,
        promoFilm: action.payload,
        isPromoLoaded: true,
      };
    case ActionType.LOAD_FILM:
      return {
        ...state,
        film: action.payload,
        isFilmLoaded: true,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};
