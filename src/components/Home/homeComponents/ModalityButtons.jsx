import React, { useState } from 'react';
//Components and Dependencies
import { Button } from 'primereact/button';
//Constants
import { PRESENCIAL, ONLINE } from '../../../utils/constantes';

function ModalityButtons({ filtersValue }) {

    const [selected, setSelected] = useState('');
    const [fValues, setFValues] = filtersValue;


    //los handlers son para manejar la informacion
    //del tipo de consulta
    const handlePresencial = () => {
        if (selected === PRESENCIAL) {
            //verificamos si se toco nuevamente el mismo boton
            //para asi limpiar el filtro.
            setSelected('');
            setFValues({ ...fValues, appointmentModality: '' })
        } else {
            setSelected(PRESENCIAL)
            setFValues({ ...fValues, appointmentModality: PRESENCIAL })
        }
    }

    const handleOnline = () => {
        if (selected === ONLINE) {
            setSelected('');
            setFValues({ ...fValues, appointmentModality: '' })
        } else {
            setSelected(ONLINE)
            setFValues({ ...fValues, appointmentModality: ONLINE })
        }
    }
    
    return (
        <div className='flex gap-2'>

            <Button label='Presencial' onClick={handlePresencial} size='small'
                className={`bg-white text-qaliBlue modalityButtonsCustom
                ${selected === PRESENCIAL && 'selectedButton'}`}
            />

            <Button label='Online' onClick={handleOnline} size='small'
                className={`bg-white text-qaliBlue modalityButtonsCustom 
                ${selected === ONLINE && "selectedButton"}`}
            />
        </div>
    )
}

export default ModalityButtons