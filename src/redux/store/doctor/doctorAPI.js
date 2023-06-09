import axios from 'axios';
import { URL } from '../../../utils/constantes';

export const createDoctor = (doctor) => {
  return axios.post(URL.DOCTOR, doctor);
};

export const getDoctor = (paginator , body = null) => {
    const {limit, page} = paginator;
    return axios.get(`${URL.DOCTOR}/get?quantity=${limit}&page=${page}`, body);
};


