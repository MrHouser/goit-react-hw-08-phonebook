import { NavLink } from 'react-router-dom';
import { useRouteMatch } from 'react-router';
import s from './AuthNav.module.css';

export default function AuthNav() {
  const { url } = useRouteMatch();
  const nonActive = url === '/register';

  return (
    <div className={s.wrapper}>
      <NavLink
        to="/login"
        className={`${s.login} ${nonActive ? 'non-active' : ''}`}
        activeClassName={s.loginActive}
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={s.register}
        activeClassName={s.registerActive}
      >
        Register
      </NavLink>
    </div>
  );
}
