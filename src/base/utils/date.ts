import moment from 'moment';

function getRandomDate (startDate: Date, endDate: Date) {
  const start = moment(startDate).valueOf();
  const end = moment(endDate).valueOf();
  const randomTime = start + Math.random() * (end - start);
  return new Date(randomTime);
}

export { getRandomDate };