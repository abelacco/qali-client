import React, { useState } from 'react'
//Components and Dependencies
import { Button } from 'primereact/button';
//Constants
import { PRECENCIAL, ONLINE } from '../../../utils/constantes';

function ModalityButtons({ filtersValue }) {

    const [selected, setSelected] = useState(null);

    const [values, setValues] = filtersValue;

    const handlePrecencial = () => {
        setSelected(PRECENCIAL)
        setValues({ ...values, modalidad: PRECENCIAL })
    }

    const handleOnline = () => {
        setSelected(ONLINE)
        setValues({ ...values, modalidad: ONLINE })
    }

    return (
        <>
            <div className='flex gap-2'>
                <Button label='Precencial' onClick={handlePrecencial}  raised
                    className={`bg-white text-qali-blue `
                    }/>
                <Button label='Online' onClick={handleOnline}
                    className={`bg-white text-qali-blue `
                    } />
            </div>
        </>
    )
}

export default ModalityButtons