import {
  loadComments,
  loadFavoriteFilms,
  loadFilm,
  loadFilms,
  loadPromo,
  loadSimilarFilms,
  redirectToRoure,
  requireAuthorization,
  logout as closeSession
} from './actions';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS).then(({data}) => dispatch(loadFilms(adaptFilmsToClient(data))))
);

export const fetchFilm = (filmId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${filmId}`)
    .then(({data}) => dispatch(loadFilm(adaptFilmToClient(data))))
    .catch(() => dispatch(redirectToRoure(AppRoute.NOT_FOUND)))
);

export const fetchSimilarFilmsList = (filmId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${filmId}/similar`).then(({data}) => dispatch(loadSimilarFilms(adaptFilmsToClient(data))))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO).then(({data}) => dispatch(loadPromo(adaptFilmToClient(data))))
);

export const fetchFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE).then(({data}) => dispatch(loadFavoriteFilms(adaptFilmsToClient(data))))
);

export const toggleFilmStatus = ({filmId, status, isPromo}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${filmId}/${status}`)
    .then(({data}) => {
      isPromo
        ? dispatch(loadPromo(adaptFilmToClient(data)))
        : dispatch(loadFilm(adaptFilmToClient(data)));
    })
);

export const fetchComments = (filmId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${filmId}`).then(({data}) => dispatch(loadComments(data)))
);

export const addComment = ({filmId, comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${filmId}`, {comment, rating}).then(() => dispatch(redirectToRoure(`${AppRoute.FILMS}/${filmId}`)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('email', data.email);
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoure(AppRoute.MAIN)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('email');
    })
    .then(() => dispatch(closeSession()))
);

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
