import React from 'react';
import { Button } from 'primereact/button';

function CleanAndSubmit({ filterValues }) {

    const [fValues, setFValues] = filterValues;

    const handleClean = () => {
        setFValues({
            precio: 0,
            disponibilidad: null,
            distrito: "",
            subEspecialidad: "",
            calificacion: false
        })
    }

    const handleSubmit = () => {
        // aca se hace el dispatch del fValues
    }


    return (
        <div className='flex gap-2 justify-center mt-4'>
            <Button label='Limpiar' onClick={handleClean} className='buttonModalClean' />
            <Button label='Aplicar Filtros' onClick={handleSubmit} />
        </div>
    )
}

export default CleanAndSubmit