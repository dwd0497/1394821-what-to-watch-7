import {
  loadComments,
  loadFavoriteFilms, loadFilm,
  loadFilms, loadPromo, loadSimilarFilms
} from '../actions';
import {appData} from './app-data';

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

const film = {
  title: 'Avatar',
  genre: 'action',
  releaseDate: 2021,
};

const comment = {
  author: 'Alex',
  text: 'Top movie',
};

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(appData(undefined, {})).toEqual(initialState);
  });

  it('should set films', () => {
    const expectedState = {
      films: [film, film],
      isFilmsLoaded: true,
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
    expect(appData(initialState, loadFilms([film, film]))).toEqual(expectedState);
  });

  it('should set similar films', () => {
    const expectedState = {
      films: [],
      isFilmsLoaded: false,
      promoFilm: {},
      isPromoLoaded: false,
      film: {},
      isFilmLoaded: false,
      comments: [],
      isCommentsLoaded: false,
      similarFilms: [film, film],
      isSimilarFilmsLoaded: true,
      favoriteFilms: [],
      isFavoriteFilmsLoaded: false,
    };
    expect(appData(initialState, loadSimilarFilms([film, film]))).toEqual(expectedState);
  });

  it('should set favorite films', () => {
    const expectedState = {
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
      favoriteFilms: [film, film],
      isFavoriteFilmsLoaded: true,
    };
    expect(appData(initialState, loadFavoriteFilms([film, film]))).toEqual(expectedState);
  });

  it('should set promo film', () => {
    const expectedState = {
      films: [],
      isFilmsLoaded: false,
      promoFilm: film,
      isPromoLoaded: true,
      film: {},
      isFilmLoaded: false,
      comments: [],
      isCommentsLoaded: false,
      similarFilms: [],
      isSimilarFilmsLoaded: false,
      favoriteFilms: [],
      isFavoriteFilmsLoaded: false,
    };
    expect(appData(initialState, loadPromo(film))).toEqual(expectedState);
  });

  it('should set film', () => {
    const expectedState = {
      films: [],
      isFilmsLoaded: false,
      promoFilm: {},
      isPromoLoaded: false,
      film: film,
      isFilmLoaded: true,
      comments: [],
      isCommentsLoaded: false,
      similarFilms: [],
      isSimilarFilmsLoaded: false,
      favoriteFilms: [],
      isFavoriteFilmsLoaded: false,
    };
    expect(appData(initialState, loadFilm(film))).toEqual(expectedState);
  });

  it('should set comments', () => {
    const expectedState = {
      films: [],
      isFilmsLoaded: false,
      promoFilm: {},
      isPromoLoaded: false,
      film: {},
      isFilmLoaded: false,
      comments: [comment, comment, comment],
      isCommentsLoaded: true,
      similarFilms: [],
      isSimilarFilmsLoaded: false,
      favoriteFilms: [],
      isFavoriteFilmsLoaded: false,
    };
    expect(appData(initialState, loadComments([comment, comment, comment]))).toEqual(expectedState);
  });
});
