import axios from 'axios';

export const httpURL = 'https://sea-lion-app-869d5.ondigitalocean.app';
export const wsURL = 'wss://sea-lion-app-869d5.ondigitalocean.app/';

export const getReadings = async (startDate, endDate) => {
  const res = await axios.get(`${httpURL}/getReadings`, {
    params: { s: startDate, e: endDate },
  });

  return res.data;
};

export const getWarnings = async () => {
  const res = await axios.get(`${httpURL}/getWarnings`);

  return res.data;
};

export const dismissWarning = async (id) => {
  const res = await axios.get(`${httpURL}/dismissWarning`, {
    params: { id },
  });

  return res.data;
};
