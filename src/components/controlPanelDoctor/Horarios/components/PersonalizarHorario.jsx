import { useCallback, useState } from 'react'
import { RadioButton } from 'primereact/radiobutton'
import { CascadeSelect } from 'primereact/cascadeselect'
import { Button } from 'primereact/button'
import CalendarHorarios from './CalendarHorarios'
import { useDispatch } from 'react-redux'
import { updateSchedulesAsync } from '../../../../redux/store/schedules/schedulesSlice'

import { SelectButton } from 'primereact/selectbutton'

const PersonalizarHorario = ({ horarios }) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const options = [30, 60]
  const [value, setValue] = useState(options[0])
  const [allHorarios, setAllHorarios] = useState([])
  const days = [
    {
      day: 'Monday',
    },
    {
      day: 'Tuesday',
    },
    {
      day: 'Wednesday',
    },
    {
      day: 'Thursday',
    },
    {
      day: 'Friday',
    },
  ]

  const updateAllHorarios = useCallback((newHorarios) => {
    setAllHorarios((prevHorarios) => [...prevHorarios, ...newHorarios])
  }, [])

  const newAvailableTimes = (id, newAvailableTimes) => {
    setLoading(true)
    if (newAvailableTimes.length) {
      dispatch(updateSchedulesAsync(newAvailableTimes, id))
    }
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  const idDoctor = '648295e4f6134122d18ff2bd'

  return (
    <section className=' h-full mx-auto  flex flex-col items-start w-full gap-10'>
      <section className='flex justify-between w-full items-center'>
        <div className='flex flex-col gap-3 items-start'>
          <h2 className='text-lg font-bold text-qaliBlue'>Elegir tiempo de cita</h2>
          <SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} />
        </div>
        <div className='card flex flex-wrap justify-content-center gap-3'>
          <Button
            disabled={!allHorarios.length}
            label='Submit'
            icon={`pi ${loading ? 'pi-spin pi-spinner' : 'pi-check'}`}
            loading={loading}
            onClick={() => newAvailableTimes(idDoctor, allHorarios)}
          />
        </div>
      </section>

      <section className='flex  flex-col w-full gap-3  divide-y divide-gray-300'>
        {horarios.map((horario) => (
          <CalendarHorarios
            updateAllHorarios={updateAllHorarios} // Agregar esta línea
            intervalo={value}
            key={horario._id}
            startTime={horario.startTime}
            endTime={horario.endTime}
            interval={horario.interval}
            day={horario.day}
            dias={days}
          />
        ))}
      </section>

      {/*  <section className='flex flex-col items-start gap-5 w-full'>
        <h2 className='max-w-max font-normal text-base tex-[#132B5B]'>
          Break antes o despues del evento
        </h2>

        <section className='flex flex-col items-start justify-center gap-5'>
          <div className='flex align-items-center'>
            <RadioButton
              inputId='antes'
              name='antes'
              value='antes'
              onChange={(e) => setIngredient(e.value)}
              checked={ingredient === 'antes'}
            />
            <label htmlFor='antes' className='ml-2'>
              Antes del Evento
            </label>
          </div>
          <div className='flex items-center gap-10'>
            <div className='flex align-items-center'>
              <RadioButton
                inputId='despues'
                name='despues'
                value='despues'
                onChange={(e) => setIngredient(e.value)}
                checked={ingredient === 'despues'}
              />
              <label htmlFor='despues' className='ml-2'>
                Despues del Evento
              </label>
            </div>
            <div>
              <div className='card flex justify-content-center'>
                <CascadeSelect
                  optionLabel='horarios'
                  optionGroupLabel='name'
                  className='w-full md:w-14rem'
                  breakpoint='767px'
                  placeholder='15 min'
                />
              </div>
            </div>
          </div>
        </section>
      </section> */}
    </section>
  )
}

export default PersonalizarHorario
