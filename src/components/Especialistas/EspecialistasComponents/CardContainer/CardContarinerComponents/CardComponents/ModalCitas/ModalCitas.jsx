import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import StepsInfo from "./components/Steps";
import Date from "./components/Date/Date";
import PersonalData from "./components/Date/PersonalData";

const ModalCitas = () => {
    const [visible, setVisible] = useState(false);

    const info = useState({
        page: 0,
        turno: {
            fecha: '',
            horario: ''
        },
        datos: {
            name:'',
            lastName:'',
            dni:'',
            email:'',
            phone:''
        },
        datosBancarios: {}
    })

    const SECTION = {
        0: <Date information={info} />,
        1: <PersonalData information={info} />,

    }

    const HEADER = {
        0: "Escoge tu turno",
        1: "Ingresa tus datos",

    }

    return (
        <>
            <Button size='small' className='sacarCitaButton' onClick={() => { setVisible(true) }}>
                <div className='flex justify-evenly items-center flex-grow '>
                    <p>Sacar cita</p>
                    <i className='pi pi-angle-double-right text-qaliGreen'></i>
                </div>
            </Button>
            <div className="card flex justify-content-center ">
                <Dialog header={HEADER[info[0].page]} visible={visible} onHide={() => setVisible(false)}
                    style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                    <section className="flex flex-col">
                        {
                            SECTION[info[0].page]
                        }
                        <StepsInfo information={info} />
                    </section>
                </Dialog>
            </div>
        </>
    )
}
export default ModalCitas;