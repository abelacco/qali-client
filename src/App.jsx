//router
import { Routes, Route } from 'react-router-dom'
//Components
import Home from "./components/Home/Home";
import Especialistas from "./components/Especialistas/Especialistas";
import PerfilDoctores from "./components/PerfilDoctores/PerfilDoctores";
import Horarios from './components/controlPanelDoctor/Horarios/Horarios'
import Resumen from './components/controlPanelDoctor/Resumen/Resumen'
import Patient from './components/controlPanelDoctor/Patient/Patient'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Especialistas" element={<Especialistas/>}/>
        <Route exact path="/dashboard/doctor/perfildoc" element={<PerfilDoctores/>}/>
        <Route exact path='/dashboard/doctor/horarios' element={<Horarios />} />
        <Route exact path='/dashboard/doctor/resumen' element={<Resumen />} />
        <Route exact path='/dashboard/doctor/pacientes' element={<Patient />} />
      </Routes>
    </>
  )
}

export default App
