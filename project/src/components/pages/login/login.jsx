import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Logo from '../../UI/logo/logo';
import Footer from '../../UI/footer/footer';
import {login} from '../../../store/api-actions';
import {getAuthorizationStatus} from '../../../store/user/selectors';
import {AppRoute, AuthorizationStatus} from '../../../const';
import {Redirect} from 'react-router-dom';

function Login() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const [isFormValid, setIsFormValid] = useState(true);
  const loginRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const onSubmitHandler = (evt) => {
    evt.preventDefault();

    if (loginRef.current.value && loginRef.current.value.trim().length > 0 && passwordRef.current.value && passwordRef.current.value.trim().length > 0) {
      dispatch(login({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    } else {
      setIsFormValid(false);
    }
  };

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return  (
      <Redirect to={AppRoute.MAIN} />
    );
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={onSubmitHandler}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={loginRef} data-testid="login" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={passwordRef} data-testid="password" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
        {!isFormValid && <span>Проверьте корректность введнных данных</span>}
      </div>

      <Footer />
    </div>
  );
}

export default Login;
