import axios from "axios";

export const createPatient = (patient) => {
  return axios.post(
    "http://localhost:3000/patient" ||
      "https://qali-api-production.up.railway.app/patient",
    patient
  );
};

export const getPatient = () => {
  return axios.get(
    "http://localhost:3000/patient" ||
      "https://qali-api-production.up.railway.app/patient"
  );
};
