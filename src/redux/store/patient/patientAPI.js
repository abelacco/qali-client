import axios from "axios";

export const createPatient = (patient) => {
  return axios.post(
    "https://qali-api-production.up.railway.app/patient",
    patient
  );
};

export const getPatient = () => {
  return axios.get("https://qali-api-production.up.railway.app/patient");
};
