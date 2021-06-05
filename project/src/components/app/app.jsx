import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main';

function App({promoFilm, filmsCount}) {
  return (
    <Main promoFilm={promoFilm} filmsCount={filmsCount} />
  );
}

App.propTypes = {
  filmsCount: PropTypes.number.isRequired,
  promoFilm: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      date: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default App;
