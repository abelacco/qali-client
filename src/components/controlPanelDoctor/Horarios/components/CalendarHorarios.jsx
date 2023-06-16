import { useEffect, useState } from 'react'
import { Checkbox } from 'primereact/checkbox'
import FormAddHorario from './FormAddHorario'

const CalendarHorarios = ({
  dias,
  day,
  horarios,
  startTime,
  endTime,
  interval,
  intervalo,
  updateAllHorarios,
}) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(dias.some((d) => d.day === day))
  }, [dias, day])

  const onDaysChange = (e) => {
    setChecked(e.checked)
  }

  return (
    <div
      className={`w-full py-3 px-4 flex  ${
        checked ? 'justify-between ' : 'justify-start'
      } items-center`}
    >
      <div className='w-1/3 justify-start flex gap-2 items-center'>
        <Checkbox inputId={day} name='dia' value={day} onChange={onDaysChange} checked={checked} />
        <label className='select-none' htmlFor={day}>
          {day}
        </label>
      </div>

      {checked || horarios ? (
        <FormAddHorario
          day={day}
          updateAllHorarios={updateAllHorarios}
          intervalo={intervalo}
          startTime={startTime}
          endTime={endTime}
          interval={interval}
        />
      ) : (
        <div>
          <p>Cerrado</p>
        </div>
      )}
    </div>
  )
}

export default CalendarHorarios
