import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';

function SubEspecialidad() {
    return (
        <div>
            <label>Sub-Especialidad</label>
            <Dropdown placeholder='Ingrese un distrito'/>
        </div>
    )
}

export default SubEspecialidad;