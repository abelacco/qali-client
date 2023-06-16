import axios from 'axios';
import { URL } from '../../../utils/constantes';

export const getHoursAvailable = async (doctorId, date) =>{  
    try {
        const response = await axios({
            method: "post",
            url: `${URL.APPOINTMENT}/availableByDay`,
            data: {doctorId, date},
        });
        const data = response.data;
        return(data);
    } catch (error) {
        console.log(error);
    }
}