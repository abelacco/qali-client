import { createSlice } from '@reduxjs/toolkit';
import { createDoctor } from './doctorAPI';
import { getDoctor } from './doctorAPI';
import { STATUS_API } from '../../../utils/constantes';

export const doctorSlice = createSlice({
  name: 'doctor',
  initialState: { doctors: [], status: STATUS_API.IDLE, error: null },
  reducers: {
      createDoctorStart: (state) => {
        state.status = STATUS_API.LOADING;
      },
      createDoctorSuccess: (state, action) => {
        state.status = STATUS_API.SUCCEEDED;
        state.doctors.push(action.payload);
      },
      createDoctorFailure: (state, action) => {
        state.status = STATUS_API.FAILED;
        state.error = action.payload;
      },
    getDoctorStart: (state) => {
      state.status =  STATUS_API.LOADING;
    },
    getDoctorSuccess: (state, action) => {
      state.status = STATUS_API.SUCCEEDED;
      state.doctors.push(action.payload);
    },
    getDoctorFailure: (state, action) => {
      state.status = STATUS_API.FAILED;
      state.error = action.payload;
    },
  },
});

export const { createDoctorStart, createDoctorSuccess, createDoctorFailure, getDoctorStart, getDoctorSuccess, getDoctorFailure } = doctorSlice.actions;

 export const createDoctorAsync = (doctor) => async (dispatch) => {
   try {
     dispatch(createDoctorStart());
     const response = await createDoctor(doctor); //data de api
     dispatch(createDoctorSuccess(response.data));
   } catch (err) {
     dispatch(createDoctorFailure(err.toString()));
   }
 };

export const getPatientAsync = (paginator , body) => async (dispatch) => {
  try {
    dispatch(getDoctorStart());
    const response = await getDoctor(paginator , body);
    console.log("aaaaaaaaa",response);
    dispatch(getDoctorFailure(response.data));
  } catch (err) {
    dispatch(getDoctorFailure(err.toString()));
  }
};

export default doctorSlice.reducer;
