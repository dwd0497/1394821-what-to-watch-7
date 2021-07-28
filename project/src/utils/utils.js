import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
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
