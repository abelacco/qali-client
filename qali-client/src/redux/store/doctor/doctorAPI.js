import axios from 'axios';

export const createDoctor = (doctor) => {
  return axios.post('https://qali-api-production.up.railway.app/doctor', doctor);
};


