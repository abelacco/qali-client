import { useEffect, useCallback, useState } from 'react'
import { Calendar } from 'primereact/calendar'
import { Button } from 'primereact/button'

const FormAddHorario = ({ startTime, endTime, interval }) => {
  const [addHora, setAddHora] = useState(false)
  const [timeInicio, setTimeInicio] = useState(null)
  const [timefin, setTimeFin] = useState(null)
  const [horarios, setHorarios] = useState([])

  useEffect(() => {
    setHorarios([
      ...horarios,
      {
        inicio: startTime,
        fin: endTime,
        interval,
      },
    ])
  }, [startTime, endTime, interval])

  console.log({ horarios })

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
    const time = new Date(e.value)

    const hours = time.getHours().toString().padStart(2, '0')
    const minutes = time.getMinutes().toString().padStart(2, '0')

    const formattedTime = `${hours}:${minutes}`

    if (e.target.getAttribute('name') === 'inicio') setTimeInicio(formattedTime)
    if (e.target.getAttribute('name') === 'fin') setTimeFin(formattedTime)
  }

  const addHorario = () => {
    if (horarios.length >= 1) {
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
    const filterHorarios = horarios.filter(
      (horario) => horario.inicio !== inicio && horario.fin !== fin,
    )

    setHorarios(filterHorarios)
  }

  const convertToTime = (timeString) => {
    if (!timeString) return null

    const [hours, minutes] = timeString.split(':')
    const date = new Date()
    date.setHours(Number(hours))
    date.setMinutes(Number(minutes))

    return date
  }

  return (
    <>
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
          {horarios.map((hora, index) => {
            console.log(hora)
            return (
              <div key={hora._id || index} className='flex items-center gap-3'>
                <Calendar
                  placeholder='Inicia'
                  id='calendar-timeonly'
                  onChange={handleChange}
                  name='inicio'
                  value={convertToTime(hora.inicio)}
                  timeOnly
                  dateFormat='dd/mm/yy'
                  className='w-36 m-0 p-0 max-w-max'
                />

                <Calendar
                  placeholder='fin'
                  id='calendar-timeonly'
                  onChange={handleChange}
                  name='fin'
                  value={convertToTime(hora.fin)}
                  timeOnly
                  dateFormat='dd/mm/yy'
                  className='w-36 m-0 p-0 max-w-max'
                />

                <div>
                  <button onClick={() => deleteHorario(hora.inicio, hora.fin)}>Eliminar</button>
                </div>
              </div>
            )
          })}
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
    </>
  )
}

export default FormAddHorario
