import {NameSpace} from '../root-reducer';

export const getActiveFilter = (state) => state[NameSpace.APP].activeFilter;
export const getFilteredFilmsCount = (state) => state[NameSpace.APP].filteredFilmsCount;
export const getDisplayedFilmsCount = (state) => state[NameSpace.APP].displayedFilmsCount;
export const getIsFormDisabled = (state) => state[NameSpace.APP].isFormDisabled;
export const getIsFormError = (state) => state[NameSpace.APP].isFormError;

