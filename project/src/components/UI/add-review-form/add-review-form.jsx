import React, {useState} from 'react';

const MAX_RATING = 10;

function AddReviewForm() {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(null);

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {Array(MAX_RATING).fill().map((star, i, arr) => {
            return (
              <React.Fragment key={"star-" + (arr.length - i)}>
                <input className="rating__input" id={"star-" + (arr.length - i)} type="radio" name="rating" value={(arr.length - i)} onChange={() => {setRating(arr.length - i)}} />
                <label className="rating__label" htmlFor={"star-" + (arr.length - i)}>Rating {(arr.length - i)}</label>
              </React.Fragment>
            )
          })}
        </div>
      </div>
      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onInput={(evt) => {setComment(evt.target.value)}} value={comment} />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;
