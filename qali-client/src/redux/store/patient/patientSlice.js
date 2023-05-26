import { createSlice } from '@reduxjs/toolkit';
import { createPatient } from './patientAPI';
import { STATUS_API } from '../../../utils/constantes';

export const patientSlice = createSlice({
  name: 'patient',
  initialState: { patients: [], status: STATUS_API.IDLE, error: null },
  reducers: {
    createPatientStart: (state) => {
      state.status = STATUS_API.LOADING;
    },
    createPatientSuccess: (state, action) => {
      state.status = STATUS_API.SUCCEEDED;
      state.patients.push(action.payload);
    },
    createPatientFailure: (state, action) => {
      state.status = STATUS_API.FAILED;
      state.error = action.payload;
    },
    // getPatientStart: (state) => {
    //   state.status = 'loading';
    // },
    // getPatientSuccess: (state, action) => {
    //   state.status = 'succeeded';
    //   state.patients.push(action.payload);
    // },
    // getPatientFailure: (state, action) => {
    //   state.status = 'failed';
    //   state.error = action.payload;
    // },
  },
});

export const { createPatientStart, createPatientSuccess, createPatientFailure } = patientSlice.actions;

export const createPatientAsync = (patient) => async (dispatch) => {
  try {
    dispatch(createPatientStart());
    const response = await createPatient(patient);
    dispatch(createPatientSuccess(response.data));
  } catch (err) {
    dispatch(createPatientFailure(err.toString()));
  }
};

// export const getPatientAsync = (patient) => async (dispatch) => {
//   try {
//     dispatch(createPatientStart());
//     const response = await createPatient(patient);
//     dispatch(createPatientSuccess(response.data));
//   } catch (err) {
//     dispatch(createPatientFailure(err.toString()));
//   }
// };

export default patientSlice.reducer;
