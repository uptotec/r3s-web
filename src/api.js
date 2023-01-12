import axios from 'axios';

export const httpURL = 'https://sea-lion-app-869d5.ondigitalocean.app';
export const wsURL = 'wss://sea-lion-app-869d5.ondigitalocean.app/';

const getReadings = async (startDate, endDate) => {
  const res = await axios.get(`${httpURL}/getReadings`, {
    params: { s: startDate, e: endDate },
  });

  return res.data;
};

export default getReadings;
