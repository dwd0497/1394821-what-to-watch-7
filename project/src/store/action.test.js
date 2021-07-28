import {
  changeActiveFilter,
  setFilteredFilmsCount,
  setDisplayedFilmsCount,
  loadFilms,
  loadSimilarFilms,
  loadFavoriteFilms,
  loadPromo,
  loadFilm,
  loadComments,
  requireAuthorization,
  logout,
  redirectToRoure,
  ActionType
} from './actions';

describe('Actions', () => {
  it('action creator for changing filter returns correct action', () => {
    const testFilter = {type: 'genre', value: 'fantasy'};

    const expectedAction = {
      type: ActionType.CHANGE_ACTIVE_FILTER,
      payload: testFilter,
    };

    expect(changeActiveFilter(testFilter)).toEqual(expectedAction);
  });

  it('action creator for setting filtered films count returns correct action', () => {
    const testCount = 8;

    const expectedAction = {
      type: ActionType.SET_FILTERED_FILMS_COUNT,
      payload: testCount,
    };

    expect(setFilteredFilmsCount(testCount)).toEqual(expectedAction);
  });

  it('action creator for setting displayed films count returns correct action', () => {
    const testCount = 4;

    const expectedAction = {
      type: ActionType.SET_DISPLAYED_FILMS_COUNT,
      payload: testCount,
    };

    expect(setDisplayedFilmsCount(testCount)).toEqual(expectedAction);
  });

  it('action creator for setting loading films returns correct action', () => {
    const films = [];

    const expectedAction = {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };

    expect(loadFilms(films)).toEqual(expectedAction);
  });

  it('action creator for setting loading similar films returns correct action', () => {
    const films = [];

    const expectedAction = {
      type: ActionType.LOAD_SIMILAR_FILMS,
      payload: films,
    };

    expect(loadSimilarFilms(films)).toEqual(expectedAction);
  });

  it('action creator for setting loading favorite films returns correct action', () => {
    const films = [];

    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: films,
    };

    expect(loadFavoriteFilms(films)).toEqual(expectedAction);
  });

  it('action creator for setting loading promo film returns correct action', () => {
    const film = {};

    const expectedAction = {
      type: ActionType.LOAD_PROMO,
      payload: film,
    };

    expect(loadPromo(film)).toEqual(expectedAction);
  });

  it('action creator for setting loading film returns correct action', () => {
    const film = {};

    const expectedAction = {
      type: ActionType.LOAD_FILM,
      payload: film,
    };

    expect(loadFilm(film)).toEqual(expectedAction);
  });

  it('action creator for setting loading comments returns correct action', () => {
    const comments = [];

    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    };

    expect(loadComments(comments)).toEqual(expectedAction);
  });

  it('action creator for require authorization returns correct action', () => {
    const status = 'auth';

    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };

    expect(requireAuthorization(status)).toEqual(expectedAction);
  });

  it('action creator for logout returns correct action', () => {

    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });

  it('action creator for redirecting to roure returns correct action', () => {
    const route = '/film';

    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: route,
    };

    expect(redirectToRoure(route)).toEqual(expectedAction);
  });
});
