import { useEffect, useRef, useCallback, useState } from 'react'
import { Calendar } from 'primereact/calendar'
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast'

const FormAddHorario = ({ startTime, endTime, interval, intervalo, day, updateAllHorarios }) => {
  const [addHora, setAddHora] = useState(false)
  const [timeInicio, setTimeInicio] = useState(null)
  const [timeFin, setTimeFin] = useState(null)
  const [horarios, setHorarios] = useState([])
  const [horarioEdit, setHorarioEdit] = useState(null)
  const [openEdit, setOpenEdit] = useState(false)
  const toast = useRef(null)

  useEffect(() => {
    updateAllHorarios(horarios)
  }, [horarios, updateAllHorarios])

  useEffect(() => {
    setHorarios([
      {
        day: day,
        startTime: startTime,
        endTime: endTime,
        interval: interval,
      },
    ])
  }, [startTime, endTime, interval, day])

  /*   useEffect(() => {
    if (horarios.length) {
      updateAllHorarios(horarios)
    }
  }, [horarios]) */

  const handleAdd = () => {
    setAddHora(true)
    if (!horarios.length > 1) {
      setHorarios([
        {
          startTime: timeInicio,
          endTime: timeFin,
          interval: intervalo,
          day,
        },
      ])
    }
  }

  const handleChange = (e, name) => {
    const value = e.value

    const time = new Date(value)
    const hours = time.getHours().toString().padStart(2, '0')
    const minutes = time.getMinutes().toString().padStart(2, '0')
    const formattedTime = `${hours}:${minutes}`

    if (name === 'inicio') setTimeInicio(formattedTime)
    if (name === 'fin') setTimeFin(formattedTime)
  }

  const addHorario = (name) => {
    if (name == 'eliminar') {
      return setAddHora(false)
    } else {
      setAddHora(true)
    }

    if (!timeInicio || !timeFin) {
      showWarningToast('Por favor, ingresa tanto el tiempo de inicio como el tiempo de fin.')
      return
    }

    if (timeInicio === timeFin) {
      showWarningToast('El horario de inicio y fin no pueden ser el mismo.')
      return
    }

    if (
      horarios.some(
        (horario) =>
          horario.startTime === timeInicio &&
          horario.endTime === timeFin &&
          !(
            horarioEdit &&
            horario.startTime === horarioEdit.startTime &&
            horario.endTime === horarioEdit.endTime
          ),
      )
    ) {
      showWarningToast('Los horarios ya están ocupados. Por favor, selecciona otros tiempos.')
      return
    }

    if (horarioEdit) {
      const updatedHorarios = horarios.map((horario) => {
        console.log(horario)
        console.log(horarioEdit)
        if (
          horario.startTime === horarioEdit.startTime &&
          horario.endTime === horarioEdit.endTime
        ) {
          return {
            day: horario.day,
            startTime: timeInicio,
            endTime: timeFin,
            interval: horario.interval,
          }
        }
        return horario
      })

      setHorarios(updatedHorarios)
      setHorarioEdit(null)
      setAddHora(false)
      setTimeInicio(null)
      setTimeFin(null)
    } else {
      setHorarios((old) => [
        ...old,
        {
          day,
          startTime: timeInicio,
          endTime: timeFin,
          interval: intervalo,
        },
      ])
      setAddHora(false)
      setTimeInicio(null)
      setTimeFin(null)
    }

    updateAllHorarios(horarios)
  }

  const handleEdit = (inicio, fin) => {
    setOpenEdit(true)
    setHorarioEdit({
      startTime: inicio,
      endTime: fin,
    })
    setAddHora(true)
    setTimeInicio(inicio)
    setTimeFin(fin)
  }

  const deleteHorario = (inicio, fin) => {
    const filterHorarios = horarios.filter(
      (horario) => horario.startTime !== inicio || horario.endTime !== fin,
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

  const handleCancelEdit = () => {
    setOpenEdit(false)
    setAddHora(false)
    setHorarioEdit(null)
    setTimeInicio('')
    setTimeFin('')
  }

  return (
    <>
      <div className='w-2/3 justify-center flex gap-2 items-center'>
        {!horarios.length && !addHora && (
          <div className='font-light text-gray-500'>No disponible</div>
        )}
        <div className='flex flex-col items-center w-full gap-3'>
          {addHora && (
            <div className='flex items-center gap-3 flex-col w-full'>
              {openEdit && (
                <h2 className='font-light text-gray-400'>
                  Editar este horario y haz click en el icono de guardar
                </h2>
              )}
              <div className='flex w-full justify-between items-center gap-3'>
                <div className='w-2/3 flex'>
                  <Calendar
                    placeholder='Inicia'
                    id='calendar-timeonly'
                    onChange={(e) => handleChange(e, 'inicio')}
                    timeOnly
                    stepMinute={30}
                    value={convertToTime(timeInicio)}
                    name='inicio'
                    className='w-36 m-0 p-0 max-w-max'
                  />
                  <Calendar
                    placeholder='Finaliza'
                    id='calendar-timeonly'
                    onChange={(e) => handleChange(e, 'fin')}
                    timeOnly
                    stepMinute={30}
                    value={convertToTime(timeFin)}
                    name='fin'
                    className='w-36 m-0 p-0 max-w-max'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <p className='text-gray-600 text-sm font-light'>Cita de: {intervalo} minutos</p>
                </div>
                <div>
                  {!openEdit && (
                    <>
                      <Button
                        text='Añadir'
                        type='button'
                        icon='pi pi-check'
                        rounded
                        onClick={() => addHorario('add')}
                      />
                      <Button
                        text='Añadir'
                        type='button'
                        icon='pi pi-trash'
                        rounded
                        onClick={() => addHorario('eliminar')}
                      />
                    </>
                  )}
                  {openEdit && (
                    <>
                      <Button
                        text='Edit'
                        type='button'
                        icon='pi pi-check'
                        rounded
                        onClick={() => addHorario('add')}
                      />
                      <Button
                        text='Cancel Edit'
                        type='button'
                        icon='pi pi-times'
                        rounded
                        onClick={() => handleCancelEdit()}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
          {horarios.map((hora, index) => {
            const isEditing =
              openEdit &&
              horarioEdit &&
              horarioEdit.startTime === hora.startTime &&
              horarioEdit.endTime === hora.endTime

            return (
              <div
                key={hora._id || index}
                className='flex items-center gap-3  justify-between  w-full'
              >
                <div className='w-2/3 flex items-center gap-3'>
                  <Calendar
                    placeholder='Inicia'
                    id={`calendar-timeonly-${index}`}
                    onChange={(e) => handleChange(e, 'inicio')}
                    name='inicio'
                    value={convertToTime(hora.startTime)}
                    timeOnly
                    stepMinute={30}
                    className='w-36 m-0 p-0 max-w-max'
                    disabled={isEditing}
                  />

                  <Calendar
                    placeholder='fin'
                    id={`calendar-timeonly-${index}`}
                    onChange={(e) => handleChange(e, 'fin')}
                    name='fin'
                    value={convertToTime(hora.endTime)}
                    timeOnly
                    stepMinute={30}
                    className='w-36 m-0 p-0 max-w-max'
                    disabled={isEditing}
                  />
                </div>

                <div className='flex items-center justify-center'>
                  <p className='text-gray-600 text-sm font-light'>
                    Cita de: {hora.interval} minutos
                  </p>
                </div>
                <div className=''>
                  {isEditing ? (
                    <Button
                      text='Guardar'
                      type='button'
                      icon='pi pi-check'
                      rounded
                      onClick={addHorario}
                    />
                  ) : (
                    <Button
                      text='Editar'
                      type='button'
                      icon='pi pi-pencil'
                      rounded
                      onClick={() => handleEdit(hora.startTime, hora.endTime)}
                    />
                  )}
                  <Button
                    text='Eliminar'
                    type='button'
                    icon='pi pi-trash'
                    rounded
                    onClick={() => deleteHorario(hora.startTime, hora.endTime)}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className='w-1/3 justify-end flex gap-2 items-center'>
        <Button type='button' icon='pi pi-plus' text='Agregar' rounded onClick={handleAdd}></Button>
        <Button type='button' text='Copiar' icon='pi pi-copy' rounded></Button>
      </div>
      <Toast ref={toast} />
    </>
  )
}

export default FormAddHorario
