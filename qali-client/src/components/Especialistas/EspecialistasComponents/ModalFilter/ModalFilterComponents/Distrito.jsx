import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';

function Distrito() {

    return (
        <div>
            <label>Distrito</label>
            <Dropdown placeholder='Ingrese un distrito'/>
        </div>
    )
}

export default Distrito