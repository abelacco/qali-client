import axios from 'axios';

export const createDoctor = (doctor) => {
  return axios.post('https://qali-api-production.up.railway.app/doctor', doctor);
};

export const getDoctor = (paginator , body = null) => {
    let limit = paginator.limit;
    let page = paginator.page;
    return axios.get(`https://qali-api-production.up.railway.app/doctor?quantity=${limit}&page=${page}`, body);
  };


