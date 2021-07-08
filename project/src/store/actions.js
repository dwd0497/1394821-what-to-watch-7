export const ActionType = {
  CHANGE_ACTIVE_FILTER: 'changeActiveFilter',
};

export const ActionCreator = {
  changeActiveFilter: (filter) => ({
    type: ActionType.CHANGE_ACTIVE_FILTER,
    payload: filter,
  }),
};
