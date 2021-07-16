export const ActionType = {
  CHANGE_ACTIVE_FILTER: 'app/changeActiveFilter',
  SET_FILTERED_FILMS_COUNT: 'app/setFilteredFilmsCount',
  SET_DISPLAYED_FILMS_COUNT: 'app/setDisplayedFilmsCount',
  LOAD_FILMS: 'data/loadFilms',
  LOAD_PROMO: 'data/loadPromo',
  LOAD_FILM: 'data/loadFilm',
  LOAD_COMMENTS: 'data/loadComments',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'app/redirectToRoure',
};

export const ActionCreator = {
  changeActiveFilter: (filter) => ({
    type: ActionType.CHANGE_ACTIVE_FILTER,
    payload: filter,
  }),
  setFilteredFilmsCount: (count) => ({
    type: ActionType.SET_FILTERED_FILMS_COUNT,
    payload: count,
  }),
  setDisplayedFilmsCount: (count) => ({
    type: ActionType.SET_DISPLAYED_FILMS_COUNT,
    payload: count,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadPromo: (film) => ({
    type: ActionType.LOAD_PROMO,
    payload: film,
  }),
  loadFilm: (film) => ({
    type: ActionType.LOAD_FILM,
    payload: film,
  }),
  loadComments: (filmId) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: filmId,
  }),
  requireAuthorization: (status) => ({
    type:ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoure: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};

