import {loadComments, loadFavoriteFilms, loadFilm, loadFilms, loadPromo, loadSimilarFilms} from '../actions';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  films: [],
  isFilmsLoaded: false,
  promoFilm: {},
  isPromoLoaded: false,
  film: {},
  isFilmLoaded: false,
  comments: [],
  isCommentsLoaded: false,
  similarFilms: [],
  isSimilarFilmsLoaded: false,
  favoriteFilms: [],
  isFavoriteFilmsLoaded: false,
};

export const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isFilmsLoaded = true;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
      state.isSimilarFilmsLoaded = true;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
      state.isFavoriteFilmsLoaded = true;
    })
    .addCase(loadPromo, (state, action) => {
      state.promoFilm = action.payload;
      state.isPromoLoaded = true;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
      state.isFilmLoaded = true;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
      state.isCommentsLoaded = true;
    });
});
