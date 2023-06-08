import React from 'react'
import { Button } from 'primereact/button'

const CitasElement = ({ cita }) => {
  return (
    <div
      key={cita.turno}
      className='w-full flex justify-between items-center gap-2 bg-[#0FFFA9]/20 rounded-md'
    >
      <div className=' px-5 flex justify-start w-full items-center gap-5'>
        <span className='font-bold text-xl'>{cita.turno}</span>
        <p className='uppercase font-bold text-lg text-qaliBlue'>
          {cita.name} - {cita.hora}
        </p>
      </div>
      <Button label={'>'} size='small' severity='success' />
    </div>
  )
}

export default CitasElement
