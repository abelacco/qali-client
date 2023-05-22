import React, { useState } from 'react';
//Components and Dependencies
import { Button } from 'primereact/button';
//Constants
import { PRESENCIAL, ONLINE } from '../../../utils/constantes';

function ModalityButtons({ filtersValue }) {

    const [selected, setSelected] = useState('');
    const [fValues, setFValues] = filtersValue;

    const handlePrecencial = () => {
        setSelected(PRESENCIAL)
        setFValues({ ...fValues, modalidad: PRESENCIAL })
    }

    const handleOnline = () => {
        setSelected(ONLINE)
        setFValues({ ...fValues, modalidad: ONLINE })
    }
    return (
        <div className='flex gap-2'>

            <Button label='Presencial' onClick={handlePrecencial} size='small'
                className={`bg-white text-qaliBlue modalityButtonsCustom
                ${selected === PRESENCIAL && 'bg-qaliGreen'}`}
            />

            <Button label='Online' onClick={handleOnline} size='small'
                className={`bg-white text-qaliBlue modalityButtonsCustom ${selected === ONLINE && 'bg-qaliGreen'}`}
            />
        </div>
    )
}

export default ModalityButtons