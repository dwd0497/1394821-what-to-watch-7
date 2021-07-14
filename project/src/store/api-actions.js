import {ActionCreator} from './actions';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const';

export const fetchFilmsList = () => (dispatch, _getState, api) => {
  api.get(APIRoute.FILMS).then(({data}) => dispatch(ActionCreator.loadFilms(adaptFilmsToClient(data))));
};

export const fetchPromoFilm = () => (dispatch, _getState, api) => {
  api.get(APIRoute.PROMO).then(({data}) => dispatch(ActionCreator.loadPromo(adaptFilmToClient(data))));
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
