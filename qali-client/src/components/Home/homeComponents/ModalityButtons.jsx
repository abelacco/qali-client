import React, { useState } from 'react'
//Components and Dependencies
import { Button } from 'primereact/button';
//Constants
import { PRESENCIAL, ONLINE } from '../../../utils/constantes';

function ModalityButtons({ filtersValue }) {

    const [selected, setSelected] = useState(null);

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
                className={`bg-white text-qali-blue `
                } />
            <Button label='Online' onClick={handleOnline} size='small'
                className={`bg-white text-qali-blue `
                } />
        </div>
    )
}

export default ModalityButtons