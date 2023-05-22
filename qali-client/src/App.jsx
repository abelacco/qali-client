//router
import { Routes, Route } from "react-router-dom";
//Components
import Home from "./components/Home/Home";

import Navbar from './components/Navbar/Navbar.jsx'
import {Footer}  from './components/Footer/Footer.jsx'
import { FormDoctor } from './components/FormDoctor/FormDoctor.jsx';

function App() {

  return (
    <>
    <Navbar/>
    <FormDoctor/>
      <h1 className="text-center text-3xl font-medium mt-2 py-4"> Bienvenidos a QALI 🩺</h1>
      <Footer/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App;
