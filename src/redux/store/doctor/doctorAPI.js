import axios from 'axios';
import { URL } from '../../../utils/constantes';

export const createDoctor = (doctor) => {
  return axios.post(URL.DOCTOR, doctor);
};

export const getDoctor = (paginator , body = null) => {
    const {limit, page} = paginator;
    console.log(body);
    return axios.post(`${URL.DOCTOR}?quantity=${limit}&page=${page}`, body);
  };


