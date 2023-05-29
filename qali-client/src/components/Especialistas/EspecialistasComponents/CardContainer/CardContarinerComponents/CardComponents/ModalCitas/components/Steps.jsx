import React from 'react';
import { Steps } from 'primereact/steps';
import { Button } from 'primereact/button';

const StepsInfo = ({information}) => {
    const [info, setInfo] = information;
    const {page} = info;

    const items = [
        {
            label: 'Fecha'
        },
        {
            label: 'Datos'
        },
        {
            label: 'Bancario'
        },
        {
            label: 'Confirmacion'
        }
    ];

    return (
        <div className="card flex justify-between flex-grow items-center">
            <Button />
            <div className='flex-grow px-4'>
                <Steps model={items} activeIndex={page} onSelect={(e) => setInfo({...info, page:e.index})} readOnly={false} p-steps-title className='border-none'/>
            </div>
            <Button />
        </div>
    )
}

export default StepsInfo;