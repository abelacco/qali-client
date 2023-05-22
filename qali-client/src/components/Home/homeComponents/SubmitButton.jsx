import React from 'react'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router';

function SubmitButton({filtersValue}) {

    const [fValue, setFValue] = filtersValue;
    const navigate = useNavigate();

    const handleSubmit = ()=> {
        if (fValue.especialidad) {
            navigate("/especialistas")
        };
    };

  return (
    <>
        <Button label='Buscar' type='submit' onClick={handleSubmit}/>
    </>
  )
}

export default SubmitButton