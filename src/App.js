import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
// import { Redirect } from 'react-router';
import { Switch } from 'react-router-dom';
import { getLoading } from './redux/contacts/contacts-selectors';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';
import { getIsRefreshingUser } from './redux/auth/auth-selectors';

const ContactsView = lazy(() =>
  import(
    './views/ContactsView/ContactsView' /* webpackChunkName: "contacts-view" */
  ),
);
const LoginView = lazy(() =>
  import('./views/LoginView/LoginView' /* webpackChunkName: "login-view" */),
);
const RegisterView = lazy(() =>
  import(
    './views/RegisterView/RegisterView' /* webpackChunkName: "register-view" */
  ),
);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const isRefreshingUser = useSelector(getIsRefreshingUser);

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  const setLoader = () => {
    if (isLoading) {
      document.body.style.cursor = 'wait';
    } else document.body.style.cursor = 'default';
  };

  setLoader();

  return (
    <div className="wrapper">
      {!isRefreshingUser && (
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <PublicRoute path="/login" redirectTo="contacts" restricted>
              <LoginView />
            </PublicRoute>

            <PublicRoute path="/register" redirectTo="contacts" restricted>
              <RegisterView />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
            {/* <Redirect to="login" /> */}
          </Suspense>
        </Switch>
      )}
    </div>
  );
}

export default App;
