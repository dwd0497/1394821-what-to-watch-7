import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import {AppRoute, AuthorizationStatus} from '../../../const';
import {logout} from '../../../store/api-actions';
import browserHistory from '../../../browser-history';
import {getAuthorizationStatus} from '../../../store/user/selectors';

function User() {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const dispatch = useDispatch();

  const isUserAuthorized = authorizationStatus === AuthorizationStatus.AUTH;
  const userEmail = localStorage.getItem('email');

  const onSignClick = (evt) => {
    evt.preventDefault();
    isUserAuthorized ? dispatch(logout()) : browserHistory.push(AppRoute.LOGIN);
  };

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          {isUserAuthorized && (
            <Link to={AppRoute.MY_LIST} className="user-block__link">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </Link>)}
        </div>
      </li>
      {userEmail && (
        <li className="user-block__item">
          {userEmail}
        </li>)}
      <li className="user-block__item">
        <Link to='/' className="user-block__link" onClick={onSignClick}>Sign {isUserAuthorized ? 'out' : 'in'} </Link>
      </li>
    </ul>
  );
}

export default User;
