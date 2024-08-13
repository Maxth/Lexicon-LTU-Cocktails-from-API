import '../css/Nav.css';
import {Link, useLocation, useNavigate} from 'react-router-dom';

export function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className='nav'>
      {location.pathname === '/' ? (
        <Link to={'/search'}>
          <p>search cocktails</p>
        </Link>
      ) : (
        <p onClick={() => navigate(-1)}>go back</p>
      )}
    </nav>
  );
}
