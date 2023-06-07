import { Calendar } from 'primereact/calendar'
import { Button } from 'primereact/button'
import React, { useCallback, useState } from 'react'

const CalendarHorarios = ({ day }) => {
  const [addHora, setAddHora] = useState(false)
  const [timeInicio, setTimeInicio] = useState(null)
  const [timefin, setTimeFin] = useState(null)
  const [horarios, setHorarios] = useState([])

  const handleAdd = () => {
    setAddHora(true)
    if (!horarios.length > 1)
      setHorarios(() => [
        {
          inicio: timeInicio,
          fin: timefin,
        },
      ])
  }

  const handleChange = (e) => {
    if (e.target.name === 'inicio') setTimeInicio(e.value)
    if (e.target.name === 'fin') setTimeFin(e.value)
  }

  const addHorario = () => {
    if (horarios.length) {
      setHorarios((old) => [
        ...old,
        {
          inicio: timeInicio,
          fin: timefin,
        },
      ])
    } else {
      setHorarios(() => [
        {
          inicio: timeInicio,
          fin: timefin,
        },
      ])
    }
    setAddHora(false)
    setTimeInicio('')
    setTimeFin('')
  }

  const deleteHorario = (inicio, fin) => {
    console.log(inicio, fin)
    const filterHorarios = horarios.filter(
      (horario) => horario.inicio !== inicio && horario.fin !== fin,
    )

    setHorarios(filterHorarios)
  }

  console.log({ horarios })

  return (
    <div className='w-full py-3 px-4 flex justify-between items-center'>
      <div className='w-1/3 justify-start flex gap-2 items-center'>
        <input type='radio' name='day' id={day} />
        <label htmlFor='dia' className='w-max text-qaliBlue uppercase font-bold'>
          {day}
        </label>
      </div>
      <div className='w-1/3 justify-center flex gap-2 items-center'>
        {!horarios.length && !addHora && (
          <div className='font-light text-gray-500'>No disponible</div>
        )}
        <div className='flex flex-col items-center gap-3'>
          {addHora && (
            <div className='flex items-center gap-3'>
              <Calendar
                placeholder='Inicia'
                id='calendar-timeonly'
                onChange={(e) => handleChange(e)}
                timeOnly
                value={timeInicio}
                name='inicio'
                className='w-36 m-0 p-0 max-w-max'
              />
              <Calendar
                placeholder='Finaliza'
                id='calendar-timeonly'
                onChange={(e) => handleChange(e)}
                timeOnly
                value={timefin}
                name='fin'
                className='w-36 m-0 p-0 max-w-max'
              />
              <div>
                <Button
                  text='Añadir'
                  type='button'
                  icon='pi pi-plus'
                  rounded
                  onClick={addHorario}
                />
              </div>
            </div>
          )}
          {horarios.map((hora, index) => (
            <div key={index} className='flex items-center gap-3'>
              <Calendar
                placeholder='Inicia'
                id='calendar-timeonly'
                onChange={(e) => handleChange(e)}
                name='inicio'
                value={hora.inicio}
                timeOnly
                className='w-36 m-0 p-0 max-w-max'
              />
              <Calendar
                placeholder='Finaliza'
                id='calendar-timeonly'
                onChange={(e) => handleChange(e)}
                name='fin'
                value={hora.fin}
                timeOnly
                className='w-36 m-0 p-0 max-w-max'
              />

              <div>
                <button onClick={() => deleteHorario(hora.inicio, hora.fin)}>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='w-1/3 justify-end flex gap-2 items-center'>
        <Button
          type='button'
          className='bg-[#0FFFA9]'
          icon='pi pi-plus'
          severity='success'
          rounded
          onClick={handleAdd}
        ></Button>
        <Button type='button' className='bg-[#172554]' icon='pi pi-copy' rounded></Button>
      </div>
    </div>
  )
}

export default CalendarHorarios
