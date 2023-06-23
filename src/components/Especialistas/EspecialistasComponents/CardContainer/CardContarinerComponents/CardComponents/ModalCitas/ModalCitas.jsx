import { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import StepsInfo from "./components/Steps";
import Date from "./components/Date/Date";
import PersonalData from "./components/Date/PersonalData";
import BankData from "./components/Date/BankData";
import ConfirmInfo from "./components/Date/ConfirmInfo";
import { useFormik } from 'formik';

const ModalCitas = ({ id }) => {
    const [visible, setVisible] = useState(false);
    const stateCurrentPage = useState(0);
    const stateButtonsPage = useState({
        previousPage: false,
        nextPage: false
    });
    //Creo un estado independiente para guardar la fecha seleccionada en el calendar del componente Date
    //Porque necesitamos guardar la fecha en 2 formatos, uno para ReactPrime y otro para el backend.
    const stateDateCalendar = useState("");
    const [currentPage, setCurrentPage] = stateCurrentPage;
    const formik = useFormik({ 
        initialValues: {
            id: id,
            turn: {
                date: '',
                hour: '',
                duration: "60m",
                modality: ''
            },
            data: {
                name: '',
                lastName: '',
                dni: '',
                email: '',
                phone: ''
            },
            pay: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.data.name) {
                errors.name = 'El nombre es requerido';
            }
            if (!data.data.lastName) {
                errors.lastName = 'El apellido es requerido';
            }
            if (!data.data.dni) {
                errors.dni = 'El DNI es requerido';
            }
            if(!data.data.email){
                errors.email = 'El email es requerido'
            }else if(
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.data.email)
              ) {
                errors.email =
                  "E-mail no válido. P.ej. ejemplo@email.com";
            }
            if (!data.data.phone) {
                errors.phone = 'El Teléfono es requerido';
            }else if ((data.data.phone.length!=11)){
                errors.phone = 'El numero ingresado no es valido';
            }
            return errors;
        },
        onSubmit: () => {
            formik.resetForm();
        }
    })



    const SECTION = {
        0: <Date stateButtonsPage={stateButtonsPage} stateDateCalendar={stateDateCalendar} formik={formik} />,
        1: <PersonalData stateButtonsPage={stateButtonsPage} formik={formik} />,
        2: <BankData stateButtonsPage={stateButtonsPage} formik={formik} />,
        // 3: <ConfirmInfo />
    }

    const HEADER = {
        0: "Escoge tu turno",
        1: "Ingresa tus datos",
        2: "Realice el pago",
        3: "Tu cita esta agendada"
    }

    return (
        <>
            <Button size='small' className='sacarCitaButton' onClick={() => { setVisible(true) }}>
                <div className='flex justify-evenly items-center flex-grow '>
                    <p>Sacar cita</p>
                    <i className='pi pi-angle-double-right text-qaliGreen'></i>
                </div>
            </Button>
            <div >
                <Dialog header={HEADER[currentPage]} visible={visible} onHide={() => setVisible(false)}
                    style={{ width: '660px' , height:'600px' , padding: "0px"}}>
                    <div className="flex flex-col h-full">
                        {SECTION[currentPage]}
                        <StepsInfo stateCurrentPage={stateCurrentPage} stateButtonsPage={stateButtonsPage} setVisible={setVisible} />
                    </div>
                </Dialog>
            </div>
        </>
    )
}
export default ModalCitas;