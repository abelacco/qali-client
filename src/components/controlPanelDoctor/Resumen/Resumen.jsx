import React from 'react'
import LayoutDashboard from '../../Layouts/LayoutDashboard'
import { Button } from 'primereact/button'
import CitaElement from './components/CitaElementAndStatus'

const Resumen = () => {
  const citas = [
    {
      turno: 1,
      hora: '11 AM',
      dia: 'Lunes',
      name: 'Talledo Sergio',
      status: 'fin',
    },
    {
      turno: 2,
      hora: '12 PM',
      dia: 'Lunes',
      name: 'Otero Aguila',
      status: 'en proceso',
    },
    {
      turno: 3,
      hora: '4 PM',
      dia: 'Lunes',
      name: 'Acuña Coronado',
      status: 'pending',
    },
    {
      turno: 4,
      hora: '5 PM',
      dia: 'Lunes',
      name: 'Colchado Beatris',
      status: 'pending',
    },
    {
      turno: 5,
      hora: '6 PM',
      dia: 'Lunes',
      name: 'Gomez Francisco',
      status: 'pending',
    },
    {
      turno: 6,
      hora: '7 PM',
      dia: 'Lunes',
      name: 'Neyra Patricia',
      status: 'pending',
    },
  ]

  const progress = [1, 2, 3, 4, 5, 6, 7]

  return (
    <LayoutDashboard>
      <main className='flex flex-col gap-5'>
        <section className='flex items-start gap-10'>
          <section className='flex flex-col gap-5 items-start w-1/2'>
            <div className='flex flex-col items-start max-w-max gap-4'>
              <h2 className='border-b-4 font-bold text-2xl uppercase max-w-max border-qaliBlue'>
                Control de sitas
              </h2>
              <div className='w-full flex justify-between items-center gap-2 bg-[#0FFFA9]/20 rounded-md'>
                <div className=' px-5 flex justify-start w-full items-center gap-5'>
                  <span className='font-bold text-xl'>2</span>
                  <p className='uppercase font-bold text-lg text-qaliBlue'>Otero Aguila - 12 PM</p>
                </div>
                <Button label={'>'} size='small' severity='success' />
              </div>
            </div>
            <div className='flex gap-2 items-center justify-start'>
              {progress.map((item) => (
                <div className='py-4 px-6 bg-green-300 text-white rounded-md flex justify-center items-center'>
                  {'>'}
                </div>
              ))}
            </div>
          </section>
          <section className='flex flex-col items-center gap-7  w-1/2 bg-gray-300 rounded-lg px-8 py-5'>
            <h2 className=' font-bold text-xl uppercase max-w-max '>Restan 20 minutos</h2>
            <div className='flex gap-5'>
              <div className='flex flex-col items-center gap-3'>
                <button className='bg-green-300 border-white text-white rounded-full border max-w-max text-center px-3 py-1 text-lg'>
                  +
                </button>
                <div className='py-4 w-max px-6 bg-green-300 text-[#132B5B] rounded-md flex font-bold text-xl justify-center items-center'>
                  10 min
                </div>
              </div>
              <div className='flex flex-col items-center gap-3'>
                <button className='bg-yellow-300 border-white text-white rounded-full border max-w-max text-center px-3 py-1 text-lg'>
                  +
                </button>
                <div className='py-4 w-max px-6 bg-yellow-300 text-[#132B5B] rounded-md flex font-bold text-xl justify-center items-center'>
                  20 min
                </div>
              </div>
              <div className='flex flex-col items-center gap-3'>
                <button className='bg-orange-300 border-white text-white rounded-full border max-w-max text-center px-3 py-1 text-lg'>
                  +
                </button>
                <div className='py-4 w-max px-6 bg-orange-300 text-white rounded-md flex font-bold text-xl justify-center items-center'>
                  40 min
                </div>
              </div>
              <div className='flex flex-col items-center gap-3'>
                <button className='bg-red-400 border-white text-white rounded-full border max-w-max text-center px-3 py-1 text-lg'>
                  +
                </button>
                <div className='py-4 w-max px-6 bg-red-400 text-white rounded-md flex font-bold text-xl justify-center items-center'>
                  60 min
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className='w-full flex flex-col items-start gap-3'>
          <article className='flex w-full items-center gap-72 justify-start'>
            <h2 className='border-b-4 font-bold text-xl uppercase max-w-max border-qaliBlue'>
              Citas de hoy
            </h2>
            <h2 className='border-b-4 font-bold text-xl uppercase max-w-max border-qaliBlue'>
              Status
            </h2>
          </article>
          {/* citas, pacientes y stado */}
          <article className='flex w-full py-5 flex-col items-start gap-3'>
            {citas?.map((cita) => {
              return <CitaElement key={cita.turno} cita={cita} />
            })}
          </article>
        </section>
      </main>
    </LayoutDashboard>
  )
}

export default Resumen
