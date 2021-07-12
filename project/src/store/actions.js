export const ActionType = {
  CHANGE_ACTIVE_FILTER: 'changeActiveFilter',
  SET_FILTERED_FILMS_COUNT: 'setFilteredFilmsCount',
  SET_DISPLAYED_FILMS_COUNT: 'setDisplayedFilmsCount',
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
};

