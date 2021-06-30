import dayjs from 'dayjs';

export const convertMinutesToHours = (min) => {
  const hours = Math.floor(min / 60);
  const minutes = Math.floor(min % 60);

  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
};

export const formatDate = (date) => dayjs(date).format('MMMM DD, YYYY');
