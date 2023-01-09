import axios from 'axios';

export const httpURL = 'http://localhost:4000';
export const wsURL = 'ws://localhost:4000';

const getReadings = async (startDate, endDate) => {
  const res = await axios.get('http://localhost:4000/getReadings', {
    params: { s: startDate, e: endDate },
  });

  return res.data;
};

export default getReadings;
