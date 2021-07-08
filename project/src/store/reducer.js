import {ActionType} from './actions';
import films from '../mocks/films.js';
import {ALL_GENRES, TYPE_GENRE} from '../const';

const initialState = {
  activeFilter: {
    type: TYPE_GENRE,
    value: ALL_GENRES,
  },
  films: films,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_FILTER:
      return {
        ...state,
        activeFilter: action.payload,
      };
    default:
      return state;
  }
};
