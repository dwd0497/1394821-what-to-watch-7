export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  MY_LIST: '/mylist',
  FILMS: '/films',
  PLAYER: '/player',
  NOT_FOUND: '/not_found',
};

export const Tabs = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  FILMS: '/films',
  PROMO: '/promo',
  COMMENTS: '/comments',
  LOGIN: './login',
  LOGOUT: './logout',
};

// Временно уменьшил кол-во фильмов, чтоб тестить кнопку ShowMore, потом вернуть 20
export const FILMS_COUNT = 8;
export const FILMS_COUNT_STEP = 8;
export const ALL_GENRES = 'All genres';
export const TYPE_GENRE = 'genre';
