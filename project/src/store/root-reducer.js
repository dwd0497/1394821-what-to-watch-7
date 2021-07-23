import {combineReducers} from '@reduxjs/toolkit';
import {appProcess} from './app-process/app-process';
import {appData} from './app-data/app-data';
import {user} from './user/user';

export const NameSpace = {
  APP: 'APP',
  DATA: 'DATA',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.APP]: appProcess,
  [NameSpace.DATA]: appData,
  [NameSpace.USER]: user,
});
