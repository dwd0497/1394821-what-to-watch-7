import {NameSpace} from '../root-reducer';

export const getActiveFilter = (state) => state[NameSpace.APP].activeFilter;
export const getFilteredFilmsCount = (state) => state[NameSpace.APP].filteredFilmsCount;
export const getDisplayedFilmsCount = (state) => state[NameSpace.APP].displayedFilmsCount;
