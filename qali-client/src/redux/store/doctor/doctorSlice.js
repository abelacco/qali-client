import { createSlice } from '@reduxjs/toolkit';
import { getDoctor } from './doctorAPI';
import { STATUS_API } from '../../../utils/constantes';

export const doctorSlice = createSlice({
  name: 'doctor',
  initialState: { doctors: [], status: STATUS_API.IDLE, error: null },
  reducers: {
    // createPatientStart: (state) => {
    //   state.status = STATUS_API.LOADING;
    // },
    // createPatientSuccess: (state, action) => {
    //   state.status = STATUS_API.SUCCEEDED;
    //   state.patients.push(action.payload);
    // },
    // createPatientFailure: (state, action) => {
    //   state.status = STATUS_API.FAILED;
    //   state.error = action.payload;
    // },
    getDoctorStart: (state) => {
      state.status =  STATUS_API.LOADING;
    },
    getDoctorSuccess: (state, action) => {
      state.status = STATUS_API.SUCCEEDED;
      state.doctors = action.payload;
    },
    getDoctorFailure: (state, action) => {
      state.status = STATUS_API.FAILED;
      state.error = action.payload;
    },
  },
});

export const { getDoctorStart, getDoctorSuccess, getDoctorFailure } = doctorSlice.actions;

// export const createPatientAsync = (patient) => async (dispatch) => {
//   try {
//     dispatch(createPatientStart());
//     const response = await createPatient(patient);
//     dispatch(createPatientSuccess(response.data));
//   } catch (err) {
//     dispatch(createPatientFailure(err.toString()));
//   }
// };

export const getDoctorAsync = (paginator , body) => async (dispatch) => {
  try {
    dispatch(getDoctorStart());
    const response = await getDoctor(paginator , body);
    console.log("aaaaaaaaa",response.data);
    dispatch(getDoctorSuccess(response.data));
  } catch (err) {
    dispatch(getDoctorFailure(err.toString()));
  }
};

export default doctorSlice.reducer;
