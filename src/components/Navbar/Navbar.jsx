import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import FormDoctorModal from "../FormDoctor/FormDoctorModal";
import FormPatientModal from "../FormPatient/FormPatientModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState({
    primaryModal : false,
    specialistModal : false,
    patientModal : false
  });
  const modalRef = useRef(null);

  const openModal = (modal) => {
    if(modal == "primary"){
      setIsModalOpen({
        primaryModal: true,
        specialistModal: false,
        patientModal : false
      })
    }
    else if(modal == "specialist"){
      setIsModalOpen({
        primaryModal: false,
        specialistModal: true,
        patientModal : false
      })
    }
    else if(modal == "patient"){
      setIsModalOpen({
        primaryModal: false,
        specialistModal: false,
        patientModal : true
      })
    }
  };

  const closeModal = () => {
      setIsModalOpen({
        primaryModal: false,
        specialistModal: false,
        patientModal : false
      })
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <nav className='bg-qaliBlue w-full flex justify-between'>
      <div className='flex items-center ml-2'>
        <Link to='/#'>
          <img
            src='https://media.discordapp.net/attachments/1107828744804122664/1109682491339591762/image.png'
            alt='Logo'
            className='h-12 w-16 mr-2'
          />
        </Link>
      </div>
      <div className='flex items-center justify-end mr-10'>
        <Link
          to='/'
          className='text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
        >
          HOME
        </Link>
        <a
          href='#'
          className='text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
        >
          LOGIN
        </a>
        <button
          onClick={()=>openModal("primary")}
          className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        >
          CREAR CUENTA
        </button>
      </div>

      {/* modal */}
      {(isModalOpen.primaryModal || isModalOpen.specialistModal || isModalOpen.patientModal) && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 text-center">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className='hidden sm:inline-block sm:align-middle sm:h-screen'></span>
            &#8203;
            {isModalOpen.primaryModal && (
              <div 
              ref={modalRef}
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Crear cuenta
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Seleccione qué cuenta desea crear
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  {/* <button
                    onClick={closeModal}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cerrar
                  </button> */}
                  <div className="flex justify-center w-full sm:flex-row">
                    <button
                      onClick={()=>openModal("patient")}
                      className="mt-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Paciente
                    </button>
                    <button
                      onClick={()=>openModal("specialist")}
                      className="mt-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Especialista
                    </button>
                  </div>
                </div>
              </div>
            )}
            {isModalOpen.specialistModal && (
              <div id="spModal" className="z-10">
                <FormDoctorModal closeModal={closeModal}/>
              </div>
            )}
            {isModalOpen.patientModal && (
              <div className="z-10" >
                <FormPatientModal closeModal={closeModal}/>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
