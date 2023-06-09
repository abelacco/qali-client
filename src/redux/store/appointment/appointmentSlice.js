import { createSlice } from '@reduxjs/toolkit';
import { STATUS_API } from '../../../utils/constantes';
import { createAppointment } from './appointmentAPI';

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState: { appointment: {} , status: STATUS_API.IDLE, error: null },
  reducers: {
    startCreateDataAppointment: (state) => {
      state.status = STATUS_API.LOADING;
    },
    createDataAppointmentSucces: (state, action) => {
        state.status = STATUS_API.SUCCEEDED;
        state.appointment = {...state.appointment , ...action.payload}
    },
    upDateDataAppointment: (state, action) => {
        state.appointment = {...state.appointment , ...action.payload}
    },
    createDataAppointmentFail: (state, action) => {
        state.status = STATUS_API.FAILED;
        state.error = action.payload;
    },

  },
});

export const { startCreateDataAppointment, createDataAppointmentSucces, createDataAppointmentFail , upDateDataAppointment} = appointmentSlice.actions;

export const createAppointmentAsync = (doctor) => async (dispatch) => {
  try {
    dispatch(startCreateDataAppointment());
    const response = await createAppointment(doctor); //data de api
    dispatch(createDataAppointmentSucces(response.data));
  } catch (err) {
    dispatch(createDataAppointmentFail(err.toString()));
  }
};

export const upDateDataAppointmentAsync = (data) => async (dispatch) => {
    dispatch(upDateDataAppointment(data));
};



export default appointmentSlice.reducer;
