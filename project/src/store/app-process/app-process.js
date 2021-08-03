import {
  changeActiveFilter,
  changeFormState,
  setDisplayedFilmsCount,
  setFilteredFilmsCount, showError
} from '../actions';
import {ALL_GENRES, TYPE_GENRE, FILMS_COUNT} from '../../const';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  activeFilter: {
    type: TYPE_GENRE,
    value: ALL_GENRES,
  },
  filteredFilmsCount: 0,
  displayedFilmsCount: FILMS_COUNT,
  isFormDisabled: false,
  isFormError: false,
};

export const appProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveFilter, (state, action) => {
      state.activeFilter = action.payload;
      state.displayedFilmsCount = FILMS_COUNT;
    })
    .addCase(setFilteredFilmsCount, (state, action) => {
      state.filteredFilmsCount = action.payload;
    })
    .addCase(setDisplayedFilmsCount, (state, action) => {
      state.displayedFilmsCount = action.payload;
    })
    .addCase(changeFormState,  (state, action) => {
      state.isFormDisabled = action.payload;
    })
    .addCase(showError,  (state, action) => {
      state.isFormError = action.payload;
    });
});
