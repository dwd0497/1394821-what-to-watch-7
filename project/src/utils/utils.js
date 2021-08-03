import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {FilmRating} from '../const';
dayjs.extend(duration);

export const convertMinutesToHours = (min) => {
  const hours = Math.floor(min / 60);
  const minutes = Math.floor(min % 60);

  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
};

export const formatDate = (date) => dayjs(date).format('MMMM DD, YYYY');

export const formatTime = (sec) => {
  const milliseconds = sec*1000;
  return dayjs.duration(milliseconds).hours() > 0 ? dayjs.duration(milliseconds).format('HH:mm:ss') : dayjs.duration(milliseconds).format('mm:ss');
};

export const rateFilm = (rating) => {
  if (rating >= 0 && rating < 3) {
    return FilmRating.BAD;
  } else if (rating >= 3 && rating < 5 ) {
    return FilmRating.NORMAL;
  } else if (rating >= 5 && rating < 8 ) {
    return FilmRating.GOOD;
  } else if (rating >= 8 && rating < 10 ) {
    return FilmRating.VERY_GOOD;
  } else if (rating === 10 ) {
    return FilmRating.AWESOME;
  }

  return rating;
};

