import { Link } from 'react-router-dom';

const SideNav = () => {
  const links = ['resumen', 'perfildoc', 'pacientes', 'horarios', 'ingresos', 'ajustes'];

  return (
    <nav className='w-40 bg-qaliBlue'>
      <ul className='flex flex-col items-center justify-between px-2 py-3 min-h-screen'>
        {links.map((link) => (
          <li className='uppercase text-white hover:text-qaliHover' key={link}>
            {link === 'ingresos' || link === 'ajustes' ? (
              <span className="disabled-link">{link}</span>
            ) : (
              <Link to={`/dashboard/doctor/${link}`}>{link}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
