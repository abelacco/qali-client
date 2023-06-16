import { configureStore } from '@reduxjs/toolkit';
import patientReducer from './patient/patientSlice';
import doctorReducer from './doctor/doctorSlice';
import appointmentReducer from './appointment/appointmentSlice';
import hoursAvailableReducer from './appointment/hoursAvailableSlice';


export const store = configureStore({
  reducer: {
    patient: patientReducer,
    doctor: doctorReducer,
    appointment: appointmentReducer,
    hoursAvailable: hoursAvailableReducer,
  },
});
