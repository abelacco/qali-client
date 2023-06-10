import { useEffect, useRef, useState } from 'react'
import { Calendar } from 'primereact/calendar'
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast'

const FormAddHorario = ({ startTime, endTime, interval }) => {
  const [addHora, setAddHora] = useState(false)
  const [timeInicio, setTimeInicio] = useState(null)
  const [timeFin, setTimeFin] = useState(null)
  const [horarios, setHorarios] = useState([])
  const toast = useRef(null)

  useEffect(() => {
    setHorarios([
      {
        inicio: startTime,
        fin: endTime,
        interval,
      },
    ])
  }, [startTime, endTime, interval])

  const handleAdd = () => {
    setAddHora(true)
    if (!horarios.length > 1)
      setHorarios(() => [
        {
          inicio: timeInicio,
          fin: timeFin,
        },
      ])
  }

  const handleChange = (e, name) => {
    const value = e.value
    const time = new Date(value)
    time.setMinutes(Math.ceil(time.getMinutes() / 30) * 30) // Redondear a la hora más cercana
    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    if (name === 'inicio') setTimeInicio(formattedTime)
    if (name === 'fin') setTimeFin(formattedTime)
  }

  const addHorario = () => {
    if (!timeInicio || !timeFin) {
      showWarningToast('Por favor, ingresa tanto el tiempo de inicio como el tiempo de fin.')
      return
    }

    if (horarios.some((horario) => horario.inicio === timeInicio && horario.fin === timeFin)) {
      showWarningToast('Los horarios ya están ocupados. Por favor, selecciona otros tiempos.')
      return
    }

    setHorarios((old) => [
      ...old,
      {
        inicio: timeInicio,
        fin: timeFin,
      },
    ])

    setAddHora(false)
    setTimeInicio(null)
    setTimeFin(null)
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

  const showWarningToast = (message) => {
    toast.current.show({ severity: 'warn', summary: 'Advertencia', detail: message, life: 3000 })
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
                hourFormat='24'
                stepMinute={30}
                placeholder='Inicia'
                id='calendar-timeonly'
                onChange={(e) => handleChange(e, 'inicio')}
                timeOnly
                value={convertToTime(timeInicio)}
                name='inicio'
                className='w-36 m-0 p-0 max-w-max'
              />
              <Calendar
                hourFormat='24'
                stepMinute={30}
                placeholder='Finaliza'
                id='calendar-timeonly'
                onChange={(e) => handleChange(e, 'fin')}
                timeOnly
                value={convertToTime(timeFin)}
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
            return (
              <div key={hora._id || index} className='flex items-center gap-3'>
                <Calendar
                  hourFormat='24'
                  stepMinute={30}
                  placeholder='Inicia'
                  id='calendar-timeonly'
                  onChange={(e) => handleChange(e, 'inicio')}
                  name='inicio'
                  value={convertToTime(hora.inicio)}
                  timeOnly
                  dateFormat='dd/mm/yy'
                  className='w-36 m-0 p-0 max-w-max'
                />

                <Calendar
                  hourFormat='24'
                  stepMinute={30}
                  placeholder='fin'
                  id='calendar-timeonly'
                  onChange={(e) => handleChange(e, 'fin')}
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
      <Toast ref={toast} />
    </>
  )
}

export default FormAddHorario
