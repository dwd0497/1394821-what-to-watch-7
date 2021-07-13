import React, {useEffect, useState} from 'react';
import {ActionCreator} from '../../../store/actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

function ShowMore({displayedFilmsCount, setDisplayedFilmsCount, filteredFilmsCount}) {
  const [isShowMoreRender, setIsShowMoreRender] = useState(true);

  useEffect(() => {
    displayedFilmsCount >= filteredFilmsCount ? setIsShowMoreRender(false) : setIsShowMoreRender(true);
  }, [displayedFilmsCount, filteredFilmsCount]);

  const onShowMoreClick = () => {
    if (displayedFilmsCount < filteredFilmsCount) {
      setDisplayedFilmsCount(displayedFilmsCount + 4);
    }
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

ShowMore.propTypes = {
  displayedFilmsCount: PropTypes.number.isRequired,
  filteredFilmsCount: PropTypes.number.isRequired,
  setDisplayedFilmsCount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  displayedFilmsCount: state.displayedFilmsCount,
  filteredFilmsCount: state. filteredFilmsCount,
});

const mapDispatchToState = (dispatch) => ({
  setDisplayedFilmsCount(count) {
    dispatch(ActionCreator.setDisplayedFilmsCount(count));
  },
});

export {ShowMore};
export default connect(mapStateToProps, mapDispatchToState)(ShowMore);
