//router
import { Routes, Route } from "react-router-dom";
//Components
import Home from "./components/Home/Home";


function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App;
