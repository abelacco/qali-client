import React, { useState } from 'react'
import { Checkbox } from 'primereact/checkbox';

function Calificacion({ filterValues }) {

    const [fValues, setFValues] = filterValues;
    const [checked, setChecked] = useState(false);

    const handleClick = () => {
        setChecked(!checked);
        setFValues({
            ...fValues,
            rating: checked
        })
    }

    return (
        <div className='flex gap-4 p-4'>
            <Checkbox onChange={handleClick} checked={checked} />
            <label>Calificacion</label>
        </div>
    )
}

export default Calificacion;