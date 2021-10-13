import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export default function PrivateRoute({
  redirectTo = '/',
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
