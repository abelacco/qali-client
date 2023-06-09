//router
import { Routes, Route } from 'react-router-dom'
//Components
import Home from "./components/Home/Home";
import Especialistas from "./components/Especialistas/Especialistas";
import  FormDoctor  from "./components/FormDoctor/FormDoctor.jsx";
import FormPatient from "./components/FormPatient/FormPatient";
import PerfilDoctores from "./components/PerfilDoctores/PerfilDoctores";
import Horarios from './components/controlPanelDoctor/Horarios/Horarios'
import Resumen from './components/controlPanelDoctor/Resumen/Resumen'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Especialistas" element={<Especialistas/>}/>
        <Route exact path="/register" element={<FormDoctor/>}/>
        <Route exact path="/register/patient" element={<FormPatient/>}/>
         <Route exact path="/perfildoc" element={<PerfilDoctores/>}/>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/horarios' element={<Horarios />} />
        <Route exact path='/resumen' element={<Resumen />} />
      </Routes>
    </>
  )
}

export default App
