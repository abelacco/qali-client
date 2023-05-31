import React from 'react';
import { Button } from 'primereact/button';
import { useDispatch } from 'react-redux';
import { getDoctorAsync } from '../../../../../redux/store/doctor/doctorSlice';

function CleanAndSubmit({ filterValues, setVisible }) {

    const [fValues, setFValues] = filterValues;
    const dispatch = useDispatch();
    const filtrosHome = JSON.parse(localStorage.getItem('filtrosHome'));

    const handleClean = () => {
        setFValues({
            price: 0,
            disponibilidad: null,
            distrito: "",
            sub_speciality: "",
            rating: false
        })

        setVisible(false)
    }

    const handleSubmit = () => {
        // aca se hace el dispatch del fValues
        const filtros = { ...fValues, ...filtrosHome }
        dispatch(getDoctorAsync({
            page: 1,
            limit: 10,
        }, filtros))

        setVisible(false)
    }

    return (
        <div className='flex gap-2 justify-center mt-4'>
            <Button label='Limpiar' onClick={handleClean} className='buttonModalClean' />
            <Button label='Aplicar Filtros' onClick={handleSubmit} />
        </div>
    )
}

export default CleanAndSubmit