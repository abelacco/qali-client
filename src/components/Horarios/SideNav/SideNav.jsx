import { Link } from 'react-router-dom'

const SideNav = () => {
  const links = ['RESUMEN', 'MI PERFIL', 'Pacientes', 'Horario', 'ingresos', 'ajustes']

  return (
    <nav className='w-40 bg-[#172554]'>
      <ul className='flex flex-col items-center justify-between px-2 py-3 min-h-screen'>
        {links.map((link) => (
          <li className='uppercase text-white hover:text-qaliHover' key={link}>
            <Link to={'/' + link}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SideNav
