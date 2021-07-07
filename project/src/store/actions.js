export const ActionType = {
  CHANGE_ACTIVE_GENRE_FILTER: 'changeActiveGenreFilter',
};

export const ActionCreator = {
  changeActiveGenreFilter: (genre) => ({
    type: ActionType.CHANGE_ACTIVE_GENRE_FILTER,
    payload: genre,
  }),
};
