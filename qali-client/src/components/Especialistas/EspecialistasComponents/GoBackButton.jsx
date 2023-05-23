import { Button } from 'primereact/button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function GoBackButton() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }

    return (
        <Button className='goBackButton' onClick={handleClick}>
            <i className='pi pi-angle-left'/>
            Cambiar especialidad
        </Button>
    )
}

export default GoBackButton;