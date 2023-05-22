import React, { useState } from 'react'
//Components and Dependencies
import { Button } from 'primereact/button';
//Constants
import { PRECENCIAL, ONLINE } from '../../../utils/constantes';

function FiltrosHome() {

    const [selected, setSelected] = useState(null);

    const handlePrecencial = () => {
        setSelected(PRECENCIAL)
    }

    const handleOnline = () => {
        setSelected(ONLINE)
    }

    return (
        <>
            <div>
                <Button label='Precencial' onClick={handlePrecencial} />
                <Button label='Online' onClick={handleOnline} />
            </div>
            <div></div>
        </>
    )
}

export default FiltrosHome