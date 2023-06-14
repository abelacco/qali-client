import React from 'react'
import { Link } from 'react-router-dom'

const NavBarDashboard = () => {
  return (
    <nav className='bg-qaliBlue w-full flex items-center py-4 px-8'>
      <div className='flex items-center'>
        <Link to='/#'>
          <img
            src='https://media.discordapp.net/attachments/1107828744804122664/1109682491339591762/image.png'
            alt='Logo'
            className='h-12 w-16 mr-2'
          />
        </Link>
      </div>
      <div className='flex items-center justify-evenly flex-grow'>
        <button className='bg-[#0FFFA926] hover:bg-qaliGrey transition-all duration-200 rounded-lg px-8 py-3'>
          <Link to='/controlPanelDoctor' className='text-white uppercase font-bold'>
            IR A <span className='text-qaliGreen'>Q</span>AL
            <span className='text-qaliGreen'>I</span>
          </Link>
        </button>
        <button className='bg-[#0FFFA926] hover:bg-qaliGrey transition-all duration-200 rounded-lg px-8 py-3'>
          <span className='text-white uppercase font-bold'>Crear Cita</span>
        </button>

        <button className='flex items-center  gap-5 text-white bg-transparent border-transparent transition-all duration-200 uppercase font-bold hover:bg-qaliGrey py-3 px-8 rounded-lg border border-white'>
          Soporte
          <div className='pi pi-phone text-qaliGreen text-xl'></div>
        </button>

        <button className='flex items-center  gap-5 text-white bg-transparent border-transparent transition-all duration-200 uppercase font-bold hover:bg-qaliGrey py-3 px-8 rounded-lg border border-white'>
          <span className='text-white uppercase font-bold'>DR. PEPE PEREZ</span>
        </button>
      </div>
    </nav>
  )
}

export default NavBarDashboard
