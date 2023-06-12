import React from 'react'
import { Button } from 'primereact/button'
import { Calendar } from 'primereact/calendar';
import "./date.css"

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
    <div className='h-full'>
      <div className='flex mb-5'>
        <div className='flex-col items-center justify-center w-3/5'>
          <div className='w-full flex justify-center mb-5'>
            <div className='w-3/4 flex justify-around'>
              <button
                  className="w-1/3 mt-1.5 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                  >
                  Online
              </button>
              <button
                  className="w-1/3 mt-1.5 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                  >
                  Presencial
              </button>
              {/* <Button size="small" label='Online' />
              <Button size="small" label='Presencial' /> */}
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <Calendar value={info.turno.fecha} onChange={(e) => handleDate(e)} placeholder='Seleccione una fecha' inline/>
          </div>
        </div>
        <div className='w-2/5'>
          <div className='flex flex-col gap-2'>
            <div className='w-full'>
              Horarios disponibles en el dia elegido:
            </div>
            <div className='flex flex-wrap'>
              <div className='m-1 bg-red-400 h-15 w-18 text-center text-base'>
                  <span>08:00 a.m</span>
              </div>
              <div className='m-1 bg-red-400 h-15 w-18 text-center text-base'>
                  <span>08:00 a.m</span>
              </div>
              <div className='m-1 bg-red-400 h-15 w-18 text-center text-base'>
                  <span>08:00 a.m</span>
              </div>
              <div className='m-1 bg-red-400 h-15 w-18 text-center text-base'>
                  <span>08:00 a.m</span>
              </div>
              <div className='m-1 bg-red-400 h-15 w-18 text-center text-base'>
                  <span>08:00 a.m</span>
              </div>
              <div className='m-1 bg-red-400 h-15 w-18 text-center text-base'>
                  <span>08:00 a.m</span>
              </div>
              <div className='m-1 bg-red-400 h-15 w-18 text-center text-base'>
                  <span>08:00 a.m</span>
              </div>                <div className='m-1 bg-red-400 h-15 w-18 text-center text-base'>
                  <span>08:00 a.m</span>
              </div>
            </div>          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Date;
