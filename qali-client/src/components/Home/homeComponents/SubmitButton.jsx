import React, { useEffect } from 'react'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { getDoctorAsync } from '../../../redux/store/doctor/doctorSlice';

function SubmitButton({ filtersValue }) {

  const [fValue, setFValue] = filtersValue;
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleSubmit = () => {
    if (fValue.speciality) {
      dispatch(getDoctorAsync({
        page: 1,
        limit: 10,
      }, fValue))
      navigate("/especialistas")
    } else {
      //dispara una alerta que indique que necesita al menos
      //elegir una especialidad
    }

  };

  return (
    <>
      <Button label='Buscar' type='submit' onClick={handleSubmit} className='submitButtonHome' />
    </>
  )
}

export default SubmitButton