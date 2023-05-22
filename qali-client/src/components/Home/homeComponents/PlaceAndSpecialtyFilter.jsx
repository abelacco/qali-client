import React, { useState } from 'react'
//components and dependencies
import { Dropdown } from 'primereact/dropdown';
//constants
import { CITIES, SPECIALTIES } from '../../../utils/constantes';

function PlaceAndSpecialtyFilter({ filtersValue }) {

  const [fValue, setFValue] = filtersValue;
  const [specialty, setSpecialty] = useState('');
  const [place, setPlace] = useState('');

  const handleSpecialty = (event) => {
    const value = event.target.value;
    setSpecialty(value);
    setFValue({ ...fValue, especialidad: value });
    console.log(value);
  };

  const handlePlace = (event) => {
    const value = event.target.value;
    setPlace(value);
    setFValue({ ...fValue, ciudad: value });
  };

  return (
    <div className='flex gap-2'>
      <Dropdown options={SPECIALTIES} onChange={handleSpecialty} value={specialty} placeholder='Ingrese una especialidad.'
        className='w-80' showClear 
      />
      <Dropdown options={CITIES} onChange={handlePlace} value={place} placeholder='Ingrese una ciudad.'
        className='w-64' showClear 
      />
    </div>
  )
}

export default PlaceAndSpecialtyFilter;