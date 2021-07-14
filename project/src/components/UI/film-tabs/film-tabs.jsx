import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import filmCardProp from '../film-card/film-card.prop';
import filmCommentProp from './film-comment.prop';

import {Tabs} from '../../../const';

import {convertMinutesToHours, formatDate} from '../../../utils/utils';
import {fetchComments} from '../../../store/api-actions';
import {connect} from 'react-redux';

const getEvenElements = (elements) => elements.filter((element, id) => id % 2 === 0);

const getOddElements = (elements) => elements.filter((element, id) => id % 2 !== 0);

const getReviewTemplate = ({comment, user, date, rating, id}) => (
  <div className="review" key={id}>
    <blockquote className="review__quote">
      <p className="review__text">{comment}</p>

      <footer className="review__details">
        <cite className="review__author">{user.name}</cite>
        <time className="review__date" dateTime={date}>{formatDate(date)}</time>
      </footer>
    </blockquote>

    <div className="review__rating">{rating}</div>
  </div>
);

function FilmTabs({film, comments, loadComments}) {
  const {rating, scoresCount, description, director, starring, runTime, genre, released} = film;

  const [activTab, setActivTab] = useState(Tabs.OVERVIEW);

  useEffect(() => {
    loadComments(film.id);
  }, []);

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.values(Tabs).map((tab) => (
            <li key={tab} onClick={() => setActivTab(tab)} className={activTab === tab ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
              <span className="film-nav__link">{tab}</span>
            </li>
          ))}
        </ul>
      </nav>

      {activTab === Tabs.OVERVIEW &&
        <>
          <div className="film-rating">
            <div className="film-rating__score">{rating}</div>
            <p className="film-rating__meta">
              <span className="film-rating__level">Very good</span>
              <span className="film-rating__count">{scoresCount} ratings</span>
            </p>
          </div>

          <div className="film-card__text">
            {description}

            <p className="film-card__director"><strong>Director: {director}</strong></p>


            <p className="film-card__starring"><strong>Starring: {starring.join(', ')} and other</strong></p>
          </div>
        </>}

      {activTab === Tabs.DETAILS &&
        <div className="film-card__text film-card__row">
          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Director</strong>
              <span className="film-card__details-value">{director}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Starring</strong>
              <span className="film-card__details-value">
                {starring.map((actor) => (
                  <span key={actor}>{actor}, <br /></span>
                ))}
              </span>
            </p>
          </div>

          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Run Time</strong>
              <span className="film-card__details-value">{convertMinutesToHours(runTime)}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Genre</strong>
              <span className="film-card__details-value">{genre}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Released</strong>
              <span className="film-card__details-value">{released}</span>
            </p>
          </div>
        </div>}

      {activTab === Tabs.REVIEWS &&
        <div className="film-card__reviews film-card__row">
          {comments.length &&
            <>
              <div className="film-card__reviews-col">
                {getEvenElements(comments).map((comment) => (
                  getReviewTemplate(comment)
                ))}
              </div>

              <div className="film-card__reviews-col">
                {getOddElements(comments).map((comment) => (
                  getReviewTemplate(comment)
                ))}
              </div>
            </>}
        </div>}
    </>
  );
}

FilmTabs.propTypes = {
  film: filmCardProp.isRequired,
  comments: PropTypes.arrayOf(filmCommentProp).isRequired,
  loadComments: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  comments: state.comments,
});

const mapDispatchToState = (dispatch) => ({
  loadComments(filmId) {
    dispatch(fetchComments(filmId));
  },
});

export {FilmTabs};
export default connect(mapStateToProps, mapDispatchToState)(FilmTabs);
