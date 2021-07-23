import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_ACTIVE_FILTER: 'app/changeActiveFilter',
  SET_FILTERED_FILMS_COUNT: 'app/setFilteredFilmsCount',
  SET_DISPLAYED_FILMS_COUNT: 'app/setDisplayedFilmsCount',
  LOAD_FILMS: 'data/loadFilms',
  LOAD_SIMILAR_FILMS: 'data/loadSimilarFilms',
  LOAD_FAVORITE_FILMS: 'data/loadFavoriteFilms',
  LOAD_PROMO: 'data/loadPromo',
  LOAD_FILM: 'data/loadFilm',
  LOAD_COMMENTS: 'data/loadComments',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'app/redirectToRoure',
};

export const changeActiveFilter = createAction(ActionType.CHANGE_ACTIVE_FILTER, (filter) => ({payload: filter}));
export const setFilteredFilmsCount = createAction(ActionType.SET_FILTERED_FILMS_COUNT, (count) => ({payload: count}));
export const setDisplayedFilmsCount = createAction(ActionType.SET_DISPLAYED_FILMS_COUNT, (count) => ({payload: count}));
export const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => ({payload: films}));
export const loadSimilarFilms = createAction(ActionType.LOAD_SIMILAR_FILMS, (films) => ({payload: films}));
export const loadFavoriteFilms = createAction(ActionType.LOAD_FAVORITE_FILMS, (films) => ({payload: films}));
export const loadPromo = createAction(ActionType.LOAD_PROMO, (film) => ({payload: film}));
export const loadFilm = createAction(ActionType.LOAD_FILM, (film) => ({payload: film}));
export const loadComments = createAction(ActionType.LOAD_COMMENTS, (filmId) => ({payload: filmId}));
export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({payload: status}));
export const logout = createAction(ActionType.LOGOUT);
export const redirectToRoure = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({payload: url}));


