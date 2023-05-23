import React from 'react'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router';

function SubmitButton({filtersValue}) {

    const [fValue, setFValue] = filtersValue;
    const navigate = useNavigate();

    const handleSubmit = ()=> {
        if (fValue.especialidad) {
            navigate("/especialistas")
            //dispatch de filtros de especialistas
        }else{
          //dispara una alerta que indique que necesita al menos
          //elegir una especialidad
        }
    };

  return (
    <>
        <Button label='Buscar' type='submit' onClick={handleSubmit} className='submitButtonHome'/>
    </>
  )
}

export default SubmitButton