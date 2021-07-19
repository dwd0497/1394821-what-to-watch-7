import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addComment} from '../../../store/api-actions';

const MAX_RATING = 10;
const MIN_MESSAGE_LENGTH = 40;
const MAX_MESSAGE_LENGTH = 400;


function AddReviewForm({filmId, addNewComment}) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(null);
  const [isFormValid, setIsFormValid] = useState(null);

  useEffect(() => {
    setIsFormValid(rating && comment.length >= MIN_MESSAGE_LENGTH && comment.length <= MAX_MESSAGE_LENGTH);
  }, [rating, comment]);

  const onSubmitHandler = (evt) => {
    evt.preventDefault();

    if (isFormValid) {
      addNewComment({filmId, comment, rating});
    }
  };

  return (
    <form action="#" className="add-review__form" onSubmit={onSubmitHandler}>
      <div className="rating">
        <div className="rating__stars">
          {Array(MAX_RATING).fill().map((star, i, arr) => (
            <React.Fragment key={`star-${(arr.length - i)}`}>
              <input className="rating__input" id={`star-${(arr.length - i)}`} required type="radio" name="rating" value={(arr.length - i)} onChange={() => {setRating(arr.length - i);}} />
              <label className="rating__label" htmlFor={`star-${(arr.length - i)}`}>Rating {(arr.length - i)}</label>
            </React.Fragment>
          ),
          )}
        </div>
      </div>
      <div className="add-review__text">
        <textarea className="add-review__textarea" minLength='50' maxLength='400' required name="review-text" id="review-text" placeholder="Review text" onInput={(evt) => {setComment(evt.target.value);}} value={comment} />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={!isFormValid}>Post</button>
        </div>

      </div>
    </form>
  );
}

AddReviewForm.propTypes = {
  filmId: PropTypes.number.isRequired,
  addNewComment: PropTypes.func.isRequired,
};

const mapDispatchToState = (dispatch) => ({
  addNewComment(commentData) {
    dispatch(addComment(commentData));
  },
});

export {AddReviewForm};
export default connect(null, mapDispatchToState)(AddReviewForm);
