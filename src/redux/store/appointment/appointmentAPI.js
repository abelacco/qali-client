import axios from 'axios';
import { URL } from '../../../utils/constantes';

export const createAppointment = (doctor) => {
  return axios.post(URL.DOCTOR, doctor);
};

