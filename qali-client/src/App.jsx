//router
import { Routes, Route } from "react-router-dom";
//Components
import Home from "./components/Home/Home";
import { FormDoctor } from "./components/FormDoctor/FormDoctor.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/register" element={<FormDoctor/>}/>
      </Routes>
    </>
  )
}

export default App;
