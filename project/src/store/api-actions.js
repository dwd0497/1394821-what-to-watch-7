import {ActionCreator} from './actions';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const';

export const fetchFilmsList = () => (dispatch, _getState, api) => {
  api.get(APIRoute.FILMS).then(({data}) => dispatch(ActionCreator.loadFilms(adaptFilmsToClient(data))));
};

export const fetchSimilarFilmsList = (filmId) => (dispatch, _getState, api) => {
  api.get(`${APIRoute.FILMS}/${filmId}/similar`).then(({data}) => dispatch(ActionCreator.loadSimilarFilms(adaptFilmsToClient(data))));
};

export const toggleFilmStatus = ({filmId, status}) => (dispatch, _getState, api) => {
  api.post(`${APIRoute.FAVORITE}/${filmId}/${status}`).then(({data}) => dispatch(ActionCreator.loadFilm(adaptFilmToClient(data))));
};

export const fetchFavoriteFilms = () => (dispatch, _getState, api) => {
  api.get(APIRoute.FAVORITE).then(({data}) => dispatch(ActionCreator.loadFavoriteFilms(adaptFilmsToClient(data))));
};

export const fetchPromoFilm = () => (dispatch, _getState, api) => {
  api.get(APIRoute.PROMO).then(({data}) => dispatch(ActionCreator.loadPromo(adaptFilmToClient(data))));
};

export const fetchFilm = (filmId) => (dispatch, _getState, api) => {
  api.get(`${APIRoute.FILMS}/${filmId}`)
    .then(({data}) => dispatch(ActionCreator.loadFilm(adaptFilmToClient(data))))
    .catch(() => dispatch(ActionCreator.redirectToRoure(AppRoute.NOT_FOUND)));
};

export const fetchComments = (filmId) => (dispatch, _getState, api) => {
  api.get(`${APIRoute.COMMENTS}/${filmId}`).then(({data}) => dispatch(ActionCreator.loadComments(data)));
};

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {});
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => {
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('email', data.email);
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoure(AppRoute.MAIN)));
};

export const logout = () => (dispatch, _getState, api) => {
  api.delete(APIRoute.LOGOUT)
    .then(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('email');
    })
    .then(() => dispatch(ActionCreator.logout()));
};

export const addComment = ({filmId, comment, rating}) => (dispatch, _getState, api) => {
  api.post(`${APIRoute.COMMENTS}/${filmId}`, {comment, rating})
    .then(() => dispatch(ActionCreator.redirectToRoure(`${AppRoute.FILMS}/${filmId}`)));
};

const adaptFilmToClient = (film) => {
  film = Object.assign(
    {},
    film,
    {
      posterImage: film.poster_image,
      previewImage: film.preview_image,
      backgroundImage: film.background_image,
      backgroundColor: film.background_color,
      scoresCount: film.scores_count,
      runTime: film.run_time,
      isFavorite: film.is_favorite,
      videoLink: film.video_link,
      previewVideoLink: film.preview_video_link,
    },
  );

  delete film.poster_image;
  delete film.preview_image;
  delete film.background_image;
  delete film.background_color;
  delete film.scores_count;
  delete film.run_time;
  delete film.is_favorite;
  delete film.video_link;
  delete film.preview_video_link;

  return film;
};

const adaptFilmsToClient = (films) => films.map((film) => adaptFilmToClient(film));
