import Navbar from './components/Navbar/Navbar.jsx'
import {Footer}  from './components/Footer/Footer.jsx'
import { FormDoctor } from './components/FormDoctor/FormDoctor.jsx';

function App() {

  return (
    <>
    <Navbar/>
      <h1 className="text-center text-3xl font-medium mt-2 py-4"> Bienvenidos a QALI 🩺</h1>
      <FormDoctor/>
      <Footer/>
    </>
  )
}

export default App;
