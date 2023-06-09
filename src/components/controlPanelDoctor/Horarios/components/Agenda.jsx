import { Button } from 'primereact/button'
import { Calendar } from 'primereact/calendar'
import { useState } from 'react'
import { addLocale } from 'primereact/api'
import CitasElement from './CitasElement'

const Agenda = () => {
  const [date, setDate] = useState(null)
  addLocale('es', {
    firstDayOfWeek: 1,
    dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    monthNames: [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ],
    monthNamesShort: [
      'ene',
      'feb',
      'mar',
      'abr',
      'may',
      'jun',
      'jul',
      'ago',
      'sep',
      'oct',
      'nov',
      'dic',
    ],
    today: 'Hoy',
    clear: 'Limpiar',
  })

  const citas = [
    {
      turno: 1,
      hora: '11 AM',
      dia: 'Lunes',
      name: 'Talledo Sergio',
    },
    {
      turno: 2,
      hora: '12 PM',
      dia: 'Lunes',
      name: 'Otero Aguila',
    },
    {
      turno: 3,
      hora: '4 PM',
      dia: 'Lunes',
      name: 'Acuña Coronado',
    },
    {
      turno: 4,
      hora: '5 PM',
      dia: 'Lunes',
      name: 'Colchado Beatris',
    },
    {
      turno: 5,
      hora: '6 PM',
      dia: 'Lunes',
      name: 'Gomez Francisco',
    },
    {
      turno: 6,
      hora: '7 PM',
      dia: 'Lunes',
      name: 'Neyra Patricia',
    },
  ]

  return (
    <section className='flex items-start justify-between gap-28'>
      {/* calendario */}
      <section className='w-3/4'>
        <h2 className='border-b-4 uppercase max-w-max border-qaliBlue font-bold text-2xl'>
          Calendario
        </h2>
        <div className='card w-full py-5 flex justify-content-center'>
          <Calendar
            className='w-full max-w-2xl'
            value={date}
            onChange={(e) => setDate(e.value)}
            inline
            locale='es'
          />
        </div>
      </section>

      {/* citas */}

      <section className='w-2/4'>
        <h2 className='border-b-4 font-bold text-2xl uppercase max-w-max border-qaliBlue'>
          Citas 12 de junio
        </h2>
        <section className='flex py-5 flex-col items-start gap-3'>
          {citas.map((cita) => {
            return <CitasElement cita={cita} key={cita.turno} />
          })}
        </section>
      </section>
    </section>
  )
}

export default Agenda
