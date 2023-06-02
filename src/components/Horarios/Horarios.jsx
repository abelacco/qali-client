import Layout from '../Layouts/LayoutCliente'
import { Button } from 'primereact/button'
import SideNav from './SideNav/SideNav'
import Agenda from './components/Agenda'
import PersonalizarHorario from './components/PersonalizarHorario'
import { useCallback, useState } from 'react'

const Horarios = () => {
  const [showAgenda, setShowAgenda] = useState(false)
  const [showHorarios, setShowHorarios] = useState(true)

  const handleClickHorarios = useCallback(() => {
    setShowAgenda(false)
    setShowHorarios(!showHorarios)
  }, [showHorarios])

  const handleClickAgenda = useCallback(() => {
    setShowHorarios(false)
    setShowAgenda(!showAgenda)
  }, [showAgenda])

  return (
    <Layout main={'flex'}>
      <SideNav />
      <section className='w-full flex flex-col gap-10 py-5 px-5'>
        {/* buttons */}
        <div className='flex gap-4 items-center justify-between w-full'>
          <div className='w-full'>
            <Button
              disabled={showHorarios}
              onClick={handleClickHorarios}
              label='Personalizar horario'
              className='w-full bg-[#172554] disabled:bg-qaliBlue/95 text-white'
            />
          </div>
          <div className='w-full'>
            <Button
              disabled={showAgenda}
              onClick={handleClickAgenda}
              label='Ver mi agenda'
              className='w-full bg-[#172554] disabled:bg-qaliBlue/95 text-white'
            />
          </div>
        </div>

        {showAgenda && !showHorarios && <Agenda />}

        {showHorarios && !showAgenda && <PersonalizarHorario />}
      </section>
    </Layout>
  )
}

export default Horarios
