import {appProcess} from './app-process';
import {changeActiveFilter, setDisplayedFilmsCount, setFilteredFilmsCount} from '../actions';

describe('Reducer: appProcess', () => {
  it('without additional parameters should return initial state', () => {
    const initialState = {
      activeFilter: {
        type: 'genre',
        value: 'All genres',
      },
      filteredFilmsCount: 0,
      displayedFilmsCount: 8,
    };
    expect(appProcess(undefined, {})).toEqual(initialState);
  });

  it('should set displayed films count to 8 and change active filter to given value', () => {
    const state = {
      activeFilter: {
        type: 'genre',
        value: 'comedy',
      },
      filteredFilmsCount: 0,
      displayedFilmsCount: 6,
    };

    const payload = {
      type: 'isFavorite',
      value: true,
    };

    const expectedState = {
      activeFilter: payload,
      filteredFilmsCount: 0,
      displayedFilmsCount: 8,
    };

    expect(appProcess(state, changeActiveFilter(payload))).toEqual(expectedState);
  });

  it('should set filtered films count to given value', () => {
    const state = {
      activeFilter: {
        type: 'genre',
        value: 'comedy',
      },
      filteredFilmsCount: 0,
      displayedFilmsCount: 8,
    };

    const expectedState = {
      activeFilter: {
        type: 'genre',
        value: 'comedy',
      },
      filteredFilmsCount: 16,
      displayedFilmsCount: 8,
    };

    expect(appProcess(state, setFilteredFilmsCount(16))).toEqual(expectedState);
  });

  it('should set displayed films count to given value', () => {
    const state = {
      activeFilter: {
        type: 'genre',
        value: 'comedy',
      },
      filteredFilmsCount: 0,
      displayedFilmsCount: 8,
    };

    const expectedState = {
      activeFilter: {
        type: 'genre',
        value: 'comedy',
      },
      filteredFilmsCount: 0,
      displayedFilmsCount: 12,
    };

    expect(appProcess(state, setDisplayedFilmsCount(12))).toEqual(expectedState);
  });
});


