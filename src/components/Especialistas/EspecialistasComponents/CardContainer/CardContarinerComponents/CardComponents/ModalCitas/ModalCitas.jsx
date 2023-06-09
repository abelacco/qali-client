import { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import StepsInfo from "./components/Steps";
import Date from "./components/Date/Date";
import PersonalData from "./components/Date/PersonalData";
import BankData from "./components/Date/BankData";
import ConfirmInfo from "./components/Date/ConfirmInfo";

const ModalCitas = ({ id }) => {
    const [visible, setVisible] = useState(false);

    const info = useState({
        id: id,
        page: 0,
        turno: {
            fecha: '',
            horario: ''
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
    })

    const SECTION = {
        0: <Date information={info} />,
        1: <PersonalData information={info} />,
        2: <BankData information={info} />,
        3: <ConfirmInfo />
    }

    const HEADER = {
        0: "Escoge tu turno",
        1: "Ingresa tus datos",
        2: "Ingresa tus datos bancarios",
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
                <Dialog header={HEADER[info[0].page]} visible={visible} onHide={() => setVisible(false)}
                    style={{ width: '600px' , height:'600px'}}>
                    <div className="flex flex-col">
                        {SECTION[info[0].page]}
                        <StepsInfo information={info} setVisible={setVisible} />
                    </div>
                </Dialog>
            </div>
        </>
    )
}
export default ModalCitas;