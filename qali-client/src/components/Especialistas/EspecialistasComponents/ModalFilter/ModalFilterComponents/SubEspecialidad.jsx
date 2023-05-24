import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';

function SubEspecialidad() {
    return (
        <div className='flex items-center border-b border-qaliLightGrey p-4 justify-between'>
            <label>Sub-Especialidad</label>
            <Dropdown placeholder='Ingrese un distrito'/>
        </div>
    )
}

export default SubEspecialidad;