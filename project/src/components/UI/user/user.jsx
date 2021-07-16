import React from 'react';
import {Link} from 'react-router-dom';

import {AppRoute, AuthorizationStatus} from '../../../const';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../../store/api-actions';
import browserHistory from '../../../browser-history';

function User({authorizationStatus, logoutUser}) {
  const isUserAuthorized = authorizationStatus === AuthorizationStatus.AUTH;
  const userEmail = localStorage.getItem('email');

  const onSignClick = (evt) => {
    evt.preventDefault();
    isUserAuthorized ? logoutUser() : browserHistory.push(AppRoute.LOGIN);
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

User.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToState = (dispatch) => ({
  logoutUser() {
    dispatch(logout());
  },
});

export {User};
export default connect(mapStateToProps, mapDispatchToState)(User);
