import axios from 'axios';

export const createPatient = (patient) => {
  return axios.post('https://qali-api-production.up.railway.app/patient', patient);
};

export const getPatient = (id) => {
  return axios.post('https://qali-api-production.up.railway.app/patient', id);
};
