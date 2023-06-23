import { useSelector } from "react-redux";
import cookies from "js-cookie";
import { getPatientAsync } from "../../redux/store/patient/patientSlice";
import { Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  /*traemos el token y patient */
  const { tokenPatient, tokenDoctor } = cookies.get();
  const patient = useSelector((state) => state.patient);
  console.log("private route", cookies.get());
  // const doctor = useSelector((state) => state.doctor);
  if (tokenPatient && patient.patient) {
    console.log("hay token y patient, esta logeado");
    return <Outlet />;
  } else {
    console.log("No hay token o patient, deslogeado");
    return <Outlet />;
  }
};
