import React from 'react';
import {useSelector} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';

import {AppRoute, AuthorizationStatus} from '../../const';

import Main from '../pages/main/main';
import Login from '../pages/login/login';
import MyList from '../pages/my-list/my-list';
import Film from '../pages/film/film';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import NotFound from '../pages/not-found/not-found';
import Loading from '../pages/loading/loading';
import PrivateRoute from '../UI/private-route/private-route';
import browserHistory from '../../browser-history';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {getIsFilmsLoaded, getIsPromoLoaded} from '../../store/app-data/selectors';

function App() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isFilmsLoaded = useSelector(getIsFilmsLoaded);
  const isPromoLoaded = useSelector(getIsPromoLoaded);

  if (authorizationStatus === AuthorizationStatus.UNKNOWN || !isFilmsLoaded || !isPromoLoaded) {
    return <Loading />;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN} component={Main} />
        <Route exact path={AppRoute.LOGIN} component={Login} />
        <PrivateRoute exact path={AppRoute.MY_LIST} render={() => <MyList />} />
        <Route exact path={`${AppRoute.FILMS}/:id`} component={Film} />
        <PrivateRoute exact path={`${AppRoute.FILMS}/:id/review`} render={() => <AddReview />}/>
        <Route exact path={AppRoute.PLAYER} component={Player} />
        <Route>
          <NotFound path={AppRoute.NOT_FOUND} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
