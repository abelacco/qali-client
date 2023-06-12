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
            <button
                className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                disabled={page === 0} 
                onClick={handlePageDown}
                >
                <i className='pi pi-angle-left'/>
            </button>
            {/* <Button size='small' disabled={page === 0} onClick={handlePageDown} ><i className='pi pi-angle-left'></i></Button> */}
            <div className='flex-grow px-4 mt-8'>
                <Steps model={items} activeIndex={page} readOnly={false} p-steps-title className='border-none' />
            </div>
            {
                page < 3
                ? <button
                    className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                    onClick={handlePageUp}
                    >
                    <i className='pi pi-angle-right'></i>
                </button>
                : <button
                    className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                    onClick={handleInfo}
                    >
                    <i className='pi pi-check'></i>
                </button>
                // page < 3 
                // ? <Button size='small' onClick={handlePageUp}><i className='pi pi-angle-right'></i></Button>
                // : <Button size='small' onClick={handleInfo}><i className='pi pi-check'></i></Button>
            }
        </div>
    )
}

export default StepsInfo;