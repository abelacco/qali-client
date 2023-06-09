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
    const handlePrecencial = () => {
        if (selected === PRESENCIAL) {
            //verificamos si se toco nuevamente el mismo boton
            //para asi limpiar el filtro.
            setSelected('');
            setFValues({ ...fValues, modalidad: '' })
        } else {
            setSelected(PRESENCIAL)
            setFValues({ ...fValues, modalidad: PRESENCIAL })
        }
    }

    const handleOnline = () => {
        if (selected === ONLINE) {
            setSelected('');
            setFValues({ ...fValues, modalidad: '' })
        } else {
            setSelected(ONLINE)
            setFValues({ ...fValues, modalidad: ONLINE })
        }
    }
    
    return (
        <div className='flex gap-2'>

            <Button label='Presencial' onClick={handlePrecencial} size='small'
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