import React from 'react'
import { Button } from 'primereact/button'
import { Calendar } from 'primereact/calendar';

function Date({ information }) {

  const [info, setInfo] = information;

  return (
    <>
      <div>
        <h2>Escoge tu turno</h2>
        <div>
          <Button />
          <Button />
        </div>
      </div>
      <div>
        <Calendar value={info.turno} onChange={(e) => setInfo({ ...info, turno:{...info.turno, fecha:e.value} })} inline showWeek />
        <div>
          {/* aca se deberian mostrar los horarios y modificar el objeto info.turno.horario */}
          Horarios disponibles en el dia elegido.
        </div>
      </div>
    </>
  )
}

export default Date