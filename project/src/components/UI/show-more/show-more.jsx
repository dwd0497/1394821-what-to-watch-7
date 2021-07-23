import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {setDisplayedFilmsCount} from '../../../store/actions';
import {FILMS_COUNT_STEP} from '../../../const';
import {getDisplayedFilmsCount, getFilteredFilmsCount} from '../../../store/app-process/selectors';

function ShowMore() {
  const displayedFilmsCount = useSelector(getDisplayedFilmsCount);
  const filteredFilmsCount = useSelector(getFilteredFilmsCount);

  const dispatch = useDispatch();

  const [isShowMoreRender, setIsShowMoreRender] = useState(true);

  useEffect(() => {
    displayedFilmsCount >= filteredFilmsCount ? setIsShowMoreRender(false) : setIsShowMoreRender(true);
  }, [displayedFilmsCount, filteredFilmsCount]);

  const onShowMoreClick = () => {
    dispatch(setDisplayedFilmsCount(displayedFilmsCount + FILMS_COUNT_STEP));
  };

  return (
    <div className="catalog__more-wrapper">
      {isShowMoreRender && (
        <div className="catalog__more">
          <button className="catalog__button" type="button" onClick={onShowMoreClick}>Show more</button>
        </div>
      )}
    </div>
  );
}

export default ShowMore;
