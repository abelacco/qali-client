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

    const stateInfoPage = useState({
            currentPage: 0,
            previousPage: false,
            nextPage: false
        })
    const [infoPage, setInfoPage] = stateInfoPage;
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
            bankData: {
                cardNumber: '',
                expiration: '',
                cvv: '',
                holderName: ''
            }
        },
        validate: (data) => {
            let errors = {};

            if (!data.data.name) {
                errors.name = 'Name is required.';
            }
            if (!data.data.lastName) {
                errors.lastName = 'Last Name is required.';
            }
            if (!data.data.dni) {
                errors.dni = 'dni is required';
            }
            if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.data.email)
            ) {
                errors.email = 'Email is required'
            }

            if (!data.data.phone) {
                errors.phone = 'phone is required';
            }
            return errors;
        },
        onSubmit: () => {
            formik.resetForm();
        }
    })



    const SECTION = {
        0: <Date stateInfoPage={stateInfoPage} formik={formik} />,
        1: <PersonalData stateInfoPage={stateInfoPage} formik={formik} />,
        2: <BankData stateInfoPage={stateInfoPage} formik={formik} />,
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
                <Dialog header={HEADER[infoPage.currentPage]} visible={visible} onHide={() => setVisible(false)}
                    style={{ width: '660px' , height:'600px' , padding: "0px"}}>
                    <div className="flex flex-col h-full">
                        {SECTION[infoPage.currentPage]}
                        <StepsInfo stateInfoPage={stateInfoPage} setVisible={setVisible} />
                    </div>
                </Dialog>
            </div>
        </>
    )
}
export default ModalCitas;