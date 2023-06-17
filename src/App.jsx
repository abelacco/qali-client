//router
import { Routes, Route } from "react-router-dom";
//Components
import Home from "./components/Home/Home";
import Especialistas from "./components/Especialistas/Especialistas";
import PerfilDoctores from "./components/PerfilDoctores/PerfilDoctores";
import Horarios from "./components/controlPanelDoctor/Horarios/Horarios";
import Resumen from "./components/controlPanelDoctor/Resumen/Resumen";
import Patient from "./components/controlPanelDoctor/Patient/Patient";
import axios from "axios";
import { PrivateRoute } from "./components/Routes/PrivateRoute";
import { ProgressSpinner } from "primereact/progressspinner";

import usePatientData from "./hooks/Auth";
axios.defaults.withCredentials = true;

function App() {
  const { patient, isLoading } = usePatientData();

  if (isLoading) {
    return <ProgressSpinner mode="indeterminate" />;
  }
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Especialistas" element={<Especialistas />} />
          <Route
            exact
            path="/dashboard/doctor/perfildoc"
            element={<PerfilDoctores />}
          />
          <Route
            exact
            path="/dashboard/doctor/horarios"
            element={<Horarios />}
          />
          <Route exact path="/dashboard/doctor/resumen" element={<Resumen />} />
          <Route
            exact
            path="/dashboard/doctor/pacientes"
            element={<Patient />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
