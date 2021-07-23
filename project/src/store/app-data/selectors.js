import {NameSpace} from '../root-reducer';

export const getFilms = (state) => state[NameSpace.DATA].films;
export const getIsFilmsLoaded = (state) => state[NameSpace.DATA].isFilmsLoaded;
export const getPromoFilm = (state) => state[NameSpace.DATA].promoFilm;
export const getIsPromoLoaded = (state) => state[NameSpace.DATA].isPromoLoaded;
export const getFilm = (state) => state[NameSpace.DATA].film;
export const getIsFilmLoaded = (state) => state[NameSpace.DATA].isFilmLoaded;
export const getComments = (state) => state[NameSpace.DATA].comments;
export const getIsCommentsLoaded = (state) => state[NameSpace.DATA].isCommentsLoaded;
export const getSimilarFilms = (state) => state[NameSpace.DATA].similarFilms;
export const getIsSimilarFilmsLoaded = (state) => state[NameSpace.DATA].isSimilarFilmsLoaded;
export const getFavoriteFilms = (state) => state[NameSpace.DATA].favoriteFilms;
export const getIsFavoriteFilmsLoaded = (state) => state[NameSpace.DATA].isFavoriteFilmsLoaded;
