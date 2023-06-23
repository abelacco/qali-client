import { createSlice } from "@reduxjs/toolkit";
import { createPatient, getPatient } from "./patientAPI";
import { STATUS_API } from "../../../utils/constantes";
import cookies from "js-cookie";

export const patientSlice = createSlice({
  name: "patient",
  initialState: { patient: null, status: STATUS_API.IDLE, error: null },
  reducers: {
    createPatientStart: (state) => {
      state.status = STATUS_API.LOADING;
    },
    createPatientSuccess: (state, action) => {
      state.status = STATUS_API.SUCCEEDED;
      state.patient = action.payload;
    },
    createPatientFailure: (state, action) => {
      state.status = STATUS_API.FAILED;
      state.error = action.payload;
    },
    getPatientStart: (state) => {
      state.status = "loading";
    },
    getPatientSuccess: (state, action) => {
      state.status = "succeeded";
      state.patient = action.payload;
    },
    getPatientFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  createPatientStart,
  createPatientSuccess,
  createPatientFailure,
  getPatientStart,
  getPatientSuccess,
  getPatientFailure,
} = patientSlice.actions;

export const createPatientAsync = (patient) => async (dispatch) => {
  try {
    dispatch(createPatientStart());
    const response = await createPatient(patient);
    dispatch(createPatientSuccess(response.data));
    console.log(cookies.get());
  } catch (err) {
    dispatch(createPatientFailure(err.response.data.message));
  }
};

export const getPatientAsync = () => {
  return async (dispatch) => {
    try {
      console.log("getPatientAsync");
      dispatch(getPatientStart());
      const response = await getPatient();
      dispatch(getPatientSuccess(response.data));
    } catch (err) {
      dispatch(getPatientFailure(err.toString()));
    }
    return true;
  };
};

export default patientSlice.reducer;
