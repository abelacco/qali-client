import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatientAsync } from "../redux/store/patient/patientSlice";
import cookies from "js-cookie";

const usePatientData = () => {
  const dispatch = useDispatch();
  const { tokenPatient } = cookies.get();
  const patient = useSelector((state) => state.patient);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPatientData = async () => {
      if (!patient.patient && tokenPatient) {
        try {
          await dispatch(getPatientAsync());
        } catch (error) {
          // Manejar el error de obtención de datos si es necesario
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    fetchPatientData();
  }, []);

  return { patient, isLoading };
};

export default usePatientData;
