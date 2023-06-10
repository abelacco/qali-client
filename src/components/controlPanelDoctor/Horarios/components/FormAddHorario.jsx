import { useEffect, useRef, useCallback, useState } from 'react'
import { Calendar } from 'primereact/calendar'
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast'

const FormAddHorario = ({ startTime, endTime, interval }) => {
  const [addHora, setAddHora] = useState(false)
  const [timeInicio, setTimeInicio] = useState(null)
  const [timeFin, setTimeFin] = useState(null)
  const [horarios, setHorarios] = useState([])
  const [horarioEdit, setHorarioEdit] = useState(null)
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
    if (!horarios.length > 1) {
      setHorarios([
        {
          inicio: timeInicio,
          fin: timeFin,
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
    console.log(name)
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
          horario.inicio === timeInicio &&
          horario.fin === timeFin &&
          !(
            horarioEdit &&
            horario.inicio === horarioEdit.inicio &&
            horario.fin === horarioEdit.fin
          ),
      )
    ) {
      showWarningToast('Los horarios ya están ocupados. Por favor, selecciona otros tiempos.')
      return
    }

    if (horarioEdit) {
      const updatedHorarios = horarios.map((horario) => {
        if (horario.inicio === horarioEdit.inicio && horario.fin === horarioEdit.fin) {
          return {
            inicio: timeInicio,
            fin: timeFin,
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
          inicio: timeInicio,
          fin: timeFin,
        },
      ])
      setAddHora(false)
      setTimeInicio(null)
      setTimeFin(null)
    }
  }

  const handleEdit = (inicio, fin) => {
    setHorarioEdit({
      inicio,
      fin,
    })
    setAddHora(true)
    setTimeInicio(inicio)
    setTimeFin(fin)
  }

  const deleteHorario = (inicio, fin) => {
    const filterHorarios = horarios.filter(
      (horario) => horario.inicio !== inicio || horario.fin !== fin,
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
            <div className='flex items-center gap-3 flex-col'>
              {horarioEdit && (
                <h2 className='font-light text-gray-400'>
                  Editar este horario y haz click en el icono de guardar
                </h2>
              )}
              <div className='flex items-center gap-3'>
                <Calendar
                  placeholder='Inicia'
                  id='calendar-timeonly'
                  onChange={(e) => handleChange(e, 'inicio')}
                  timeOnly
                  stepMinute={30}
                  hourFormat='24'
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
                  hourFormat='24'
                  value={convertToTime(timeFin)}
                  name='fin'
                  className='w-36 m-0 p-0 max-w-max'
                />
                {!horarioEdit && (
                  <div>
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
                  </div>
                )}
              </div>
            </div>
          )}
          {horarios.map((hora, index) => {
            const isEditing =
              horarioEdit && horarioEdit.inicio === hora.inicio && horarioEdit.fin === hora.fin

            return (
              <div key={hora._id || index} className='flex items-center gap-3'>
                <Calendar
                  placeholder='Inicia'
                  id={`calendar-timeonly-${index}`}
                  onChange={(e) => handleChange(e, 'inicio')}
                  name='inicio'
                  value={convertToTime(hora.inicio)}
                  timeOnly
                  stepMinute={30}
                  hourFormat='24'
                  dateFormat='dd/mm/yy'
                  className='w-36 m-0 p-0 max-w-max'
                  disabled={isEditing}
                />

                <Calendar
                  placeholder='fin'
                  id={`calendar-timeonly-${index}`}
                  onChange={(e) => handleChange(e, 'fin')}
                  name='fin'
                  value={convertToTime(hora.fin)}
                  timeOnly
                  stepMinute={30}
                  hourFormat='24'
                  dateFormat='dd/mm/yy'
                  className='w-36 m-0 p-0 max-w-max'
                  disabled={isEditing}
                />

                <div>
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
                      onClick={() => handleEdit(hora.inicio, hora.fin)}
                    />
                  )}
                  <Button
                    text='Eliminar'
                    type='button'
                    icon='pi pi-trash'
                    rounded
                    onClick={() => deleteHorario(hora.inicio, hora.fin)}
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
