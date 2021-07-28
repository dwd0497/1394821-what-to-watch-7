import {
  logout,
  requireAuthorization
} from '../actions';
import {user} from './user';

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    const initialState = {
      authorizationStatus: 'UNKNOWN',
    };
    expect(user(undefined, {})).toEqual(initialState);
  });

  it('should change authorizationStatus to given value', () => {
    expect(user({authorizationStatus: 'UNKNOWN'}, requireAuthorization('AUTH'))).toEqual({authorizationStatus: 'AUTH'});
    expect(user({authorizationStatus: 'AUTH'}, requireAuthorization('NO_AUTH'))).toEqual({authorizationStatus: 'NO_AUTH'});
  });

  it('should set authorizationStatus to NO_AUTH', () => {
    expect(user({authorizationStatus: 'UNKNOWN'}, logout())).toEqual({authorizationStatus: 'NO_AUTH'});
    expect(user({authorizationStatus: 'AUTH'}, logout())).toEqual({authorizationStatus: 'NO_AUTH'});
    expect(user({authorizationStatus: 'NO_AUTH'}, logout())).toEqual({authorizationStatus: 'NO_AUTH'});
  });
});
