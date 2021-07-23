import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Logo from '../../UI/logo/logo';
import User from '../../UI/user/user';
import Footer from '../../UI/footer/footer';
import FilmsList from '../../UI/films-list/films-list';

import {changeActiveFilter} from '../../../store/actions';
import {fetchFavoriteFilms} from '../../../store/api-actions';
import Loading from '../loading/loading';
import {getFavoriteFilms, getIsFavoriteFilmsLoaded} from '../../../store/app-data/selectors';

function MyList() {
  const favoriteFilms = useSelector(getFavoriteFilms);
  const isFavoriteFilmsLoaded = useSelector(getIsFavoriteFilmsLoaded);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeActiveFilter({type: 'isFavorite', value: true}));
    dispatch(fetchFavoriteFilms());
  }, []);

  if (!isFavoriteFilmsLoaded) {
    return <Loading />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <User />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={favoriteFilms} />
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
