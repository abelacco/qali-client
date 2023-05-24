import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';

function Distrito() {

    return (
        <div className='flex items-center border-b border-qaliLightGrey p-4 justify-between'>
            <label>Distrito</label>
            <Dropdown placeholder='Ingrese un distrito'/>
        </div>
    )
}

export default Distrito