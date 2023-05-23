//router
import { Routes, Route } from "react-router-dom";
//Components
import Home from "./components/Home/Home";
import { FormDoctor } from "./components/FormDoctor/FormDoctor.jsx";
import Especialistas from "./components/Especialistas/Especialistas";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Especialistas" element={<Especialistas/>}/>
        <Route exact path="/register" element={<FormDoctor/>}/>
      </Routes>
    </>
  )
}

export default App;
