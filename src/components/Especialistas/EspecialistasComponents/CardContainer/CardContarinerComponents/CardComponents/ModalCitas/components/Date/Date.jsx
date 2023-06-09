import React from 'react'
import { Button } from 'primereact/button'
import { Calendar } from 'primereact/calendar';

function Date({ information }) {

  const [info, setInfo] = information;
  console.log(info.turno);

  const handleDate = (event) => {
    const value = event.value;
    setInfo({
      ...info,
      turno: {
        ...info.turno,
        fecha: value
      }
    })
  }

  return (
    <>
      <div className='flex flex-col gap-3'>
        <div className='flex gap-4 flex-grow my-2'>
          <Button label='Online' />
          <Button label='Presencial' />
        </div>
        <div className='flex gap-3 flex-grow'>
          <div className='overflow-hidden'>
             <Calendar className='overflow-hidden' value={info.turno.fecha} onChange={(e) => handleDate(e)} placeholder='Seleccione una fecha' inline/>
          </div>
          <div className='flex flex-col gap-2 w-1/2'>
             <div>
              Horarios disponibles en el dia elegido.
             </div>
             <div className='flex flex-row  flex-wrap gap-1'>
                <div className='bg-red-400 h-15 w-20 text-center text-base'>
                    <span>08:00 a.m</span>
                </div>
                <div className='bg-red-400 h-15 w-20 text-center text-base'>
                    <span>08:00 a.m</span>
                </div>
                <div className='bg-red-400 h-15 w-20 text-center text-base'>
                    <span>08:00 a.m</span>
                </div>
                <div className='bg-red-400 h-15 w-20 text-center text-base'>
                    <span>08:00 a.m</span>
                </div>
                <div className='bg-red-400 h-15 w-20 text-center text-base'>
                    <span>08:00 a.m</span>
                </div>
                <div className='bg-red-400 h-15 w-20 text-center text-base'>
                    <span>08:00 a.m</span>
                </div>
                <div className='bg-red-400 h-15 w-20 text-center text-base'>
                    <span>08:00 a.m</span>
                </div>                <div className='bg-red-400 h-15 w-20 text-center text-base'>
                    <span>08:00 a.m</span>
                </div>
             </div>
           
          </div>

        </div>
      </div>
    </>
  )
}

export default Date;
