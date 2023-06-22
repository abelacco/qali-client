import { createSlice } from '@reduxjs/toolkit';
import { getHoursAvailable } from './hoursAvailableAPI';

export const hoursAvailableSlice = createSlice({
    name: 'hoursAvailable',
    initialState: {hoursAvailable: []},
    reducers: {
        hoursAvailable: (state, action)=>{
        state.hoursAvailable = action.payload;
      }
    }
  })

export const { hoursAvailable } = hoursAvailableSlice.actions;

export const getHoursAvailableAsync = (doctorId, date) => async (dispatch) => {
    try {
        const response = await getHoursAvailable(doctorId, date);
        dispatch(hoursAvailable(response.data));
        
    } catch (error) {
        console.log(error)
    }
}

export default hoursAvailableSlice.reducer;