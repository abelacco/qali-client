import { configureStore } from '@reduxjs/toolkit'
import patientReducer from './patient/patientSlice'
import doctorReducer from './doctor/doctorSlice'
import appointmentReducer from './appointment/appointmentSlice'
import schedulesReducer from './schedules/schedulesSlice'

export const store = configureStore({
  reducer: {
    patient: patientReducer,
    doctor: doctorReducer,
    appointment: appointmentReducer,
    schedules: schedulesReducer,
  },
})
