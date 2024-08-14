import '../../css/Nav.css';
import {useLocation} from 'react-router-dom';
import {NavLink} from '.';

export function Nav() {
  const location = useLocation();
  return (
    <nav className='nav'>
      <NavLink to={'/'} isActive={location.pathname === '/'} text='home' />
      <NavLink
        to={'/search'}
        isActive={location.pathname === '/search'}
        text='search'
      />
    </nav>
  );
}
