import MockAdapter from 'axios-mock-adapter';
import {createApi} from '../services/api';
import {ActionType} from './actions';
import {
  addComment,
  checkAuth, fetchComments, fetchFavoriteFilms,
  fetchFilm,
  fetchFilmsList,
  fetchPromoFilm,
  fetchSimilarFilmsList,
  login,
  toggleFilmStatus
} from './api-actions';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createApi(() => {});
  });

  it('should make a correct API call to GET /films', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilmsList();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct API call to GET /films/:film_id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmLoader = fetchFilm(1);


    apiMock
      .onGet(`${APIRoute.FILMS}/1`)
      .reply(200, {fake: true});

    return filmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILM,
          payload: {fake: true},
        });
      });
  });

  it('should make a incorrect API call to GET /films/:film_id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmLoader = fetchFilm(999);


    apiMock
      .onGet(`${APIRoute.FILMS}/999`)
      .reply(404, {fake: true});

    return filmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.NOT_FOUND,
        });
      });
  });

  it('should make a correct API call to GET /films/:film_id/similar', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const similarFilmsLoader = fetchSimilarFilmsList(1);

    apiMock
      .onGet(`${APIRoute.FILMS}/1/similar`)
      .reply(200, [{fake: true}]);

    return similarFilmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_SIMILAR_FILMS,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct API call to GET /promo', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoFilmLoader = fetchPromoFilm();

    apiMock
      .onGet(APIRoute.PROMO)
      .reply(200, {fake: true});

    return promoFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: {fake: true},
        });
      });
  });

  it('should make a correct API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteFilmsLoader = fetchFavoriteFilms();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, [{fake: true}]);

    return favoriteFilmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_FILMS,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct API call to POST /favorite/:film_id/:status', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const toggleFilmStatusLoader = toggleFilmStatus({filmId:1 , status: 1, isPromo: true});

    apiMock
      .onPost(`${APIRoute.FAVORITE}/1/1`)
      .reply(200, {fake: true});

    return toggleFilmStatusLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: {fake: true},
        });
      });
  });

  it('should make a correct API call to GET /comments/:film_id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = fetchComments(1);

    apiMock
      .onGet(`${APIRoute.COMMENTS}/1`)
      .reply(200, [{fake: true}]);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct API call to POST /comments/:film_id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const addCommentLoader = addComment({filmId: 1, comment: 'message', rating: 1});

    apiMock
      .onPost(`${APIRoute.COMMENTS}/1`)
      .reply(200, [{fake: true}]);

    return addCommentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `${AppRoute.FILMS}/1`,
        });
      });
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: 'test@test.ru', password: '123456'};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.MAIN,
        });
      });
  });
});
