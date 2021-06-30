import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import {AppRoute} from '../../const';

import Main from '../pages/main/main';
import Login from '../pages/login/login';
import Mylist from '../pages/my-list/my-list';
import Film from '../pages/film/film';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import NotFound from '../pages/not-found/not-found';

import filmCardProp from '../UI/film-card/film-card.prop';

function App({promoFilm, filmsCount, films, comments}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main promoFilm={promoFilm} filmsCount={filmsCount} films={films} />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <Mylist filmsCount={filmsCount} films={films} />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <Film filmsCount={filmsCount} film={films[1]} films={films} comments={comments} />
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReview film={films[1]} />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player film={films[1]} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  filmsCount: PropTypes.number.isRequired,
  promoFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  films: PropTypes.arrayOf(filmCardProp).isRequired,
  comments: PropTypes.array.isRequired,
};

export default App;
