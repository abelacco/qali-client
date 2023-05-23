import { Button } from 'primereact/button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function GoBackButton() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }

    return (
        <Button className='goBackButton' onClick={handleClick} size='small'>
            <i className='pi pi-angle-left' style={{fontSize:"1.7rem"}}/>
            Cambiar especialidad
        </Button>
    )
}

export default GoBackButton;