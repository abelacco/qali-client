import React from 'react';
import { Steps } from 'primereact/steps';
import { Button } from 'primereact/button';

const StepsInfo = ({ information, setVisible }) => {
    const [info, setInfo] = information;
    const { page } = info;
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

    const handlePageUp = () => {
        if (page < 3) {setInfo({ ...info, page: page + 1 })}

    }

    const handlePageDown = () => {
        if (page > 0) { setInfo({ ...info, page: page - 1 })}
    }

    const handleInfo = () => {
        setVisible(false)
        //hacer el dispatch de la info del modal
    }

    return (
        <div className="card flex justify-between flex-grow items-center">
            <Button disabled={page === 0} onClick={handlePageDown} ><i className='pi pi-angle-left'></i></Button>
            <div className='flex-grow px-4'>
                <Steps model={items} activeIndex={page} readOnly={false} p-steps-title className='border-none' />
            </div>
            {
                page < 3 
                ? <Button onClick={handlePageUp}><i className='pi pi-angle-right'></i></Button>
                : <Button onClick={handleInfo}><i className='pi pi-check'></i></Button>
            }
        </div>
    )
}

export default StepsInfo;