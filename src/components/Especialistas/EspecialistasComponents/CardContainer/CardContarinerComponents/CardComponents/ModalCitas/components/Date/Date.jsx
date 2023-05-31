import React from 'react'
import { Button } from 'primereact/button'
import { Calendar } from 'primereact/calendar';

function Date({ information }) {

  const [info, setInfo] = information;
  console.log(info.turno);

  const handleDate = (event) => {
    const value = event.value;
    setInfo({
      ...info,
      turno: {
        ...info.turno,
        fecha: value
      }
    })
  }

  return (
    <>
      <div className='flex flex-col gap-3'>
        <div className='flex gap-4 flex-grow my-2'>
          <Button label='Online' />
          <Button label='Presencial' />
        </div>
        <div className='flex flex-col flex-grow'>
          <Calendar value={info.turno.fecha} onChange={(e) => handleDate(e)} placeholder='Seleccione una fecha' inline/>
          <div>
            {/* aca se deberian mostrar los horarios y modificar el objeto info.turno.horario */}
            Horarios disponibles en el dia elegido.
          </div>
        </div>
      </div>
    </>
  )
}

export default Date;
