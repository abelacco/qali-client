import React from 'react';
import { Steps } from 'primereact/steps';

const StepsInfo = ({ stateCurrentPage, stateButtonsPage, setVisible }) => {
    const [currentPage, setCurrentPage] = stateCurrentPage;
    const [buttonsPage, setButtonsPage] = stateButtonsPage;
    const {nextPage, previousPage} = buttonsPage;
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
        if (currentPage < 3) { setCurrentPage(currentPage + 1)}

    }

    const handlePageDown = () => {
        if (currentPage > 0) { setCurrentPage(currentPage - 1)}
    }

    const handleInfo = () => {
        setVisible(false)
        //hacer el dispatch de la info del modal
    }

    return (
        <div className="card flex justify-between flex-grow items-center">
            <button
                className={`inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white sm:text-sm ${(currentPage != 0) ? "hover:bg-gray-700":"bg-opacity-50"}`}                
                disabled={ currentPage == 0 } 
                onClick={handlePageDown}
                >
                <i className='pi pi-angle-left'/>
            </button>
            {/* <Button size='small' disabled={page === 0} onClick={handlePageDown} ><i className='pi pi-angle-left'></i></Button> */}
            <div className='flex-grow px-4 mt-8'>
                <Steps model={items} activeIndex={currentPage} readOnly={false} p-steps-title className='border-none' />
            </div>
            {
                currentPage < 3
                ? <button
                    className={`inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white sm:text-sm ${nextPage ? "hover:bg-gray-700":"bg-opacity-50"}`}
                    disabled={ !nextPage }
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
            }
        </div>
    )
}

export default StepsInfo;