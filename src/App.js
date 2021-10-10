import { useSelector, useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { fetchContacts } from './redux/contacts/contactsOperations';
import {
  getContacts,
  getFilter,
  getFilteredContacts,
  getLoading,
} from './redux/contacts/contacts-selectors';
import ContactsView from './views/ContactsView/ContactsView';
import LoginView from './views/LoginView/LoginView';
import RegisterView from './views/RegisterView/RegisterView';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, []);

  // const isLoading = useSelector(state => getLoading(state));

  // const setLoader = () => {
  //   if (isLoading) {
  //     document.body.style.cursor = 'wait';
  //   } else document.body.style.cursor = 'default';
  // };

  // setLoader();

  return (
    <div className="wrapper">
      <Switch>
        <Route path="/contacts" component={ContactsView} />
        <Route path="/login" component={LoginView} />
        <Route path="/register" component={RegisterView} />
      </Switch>
    </div>
  );
}

export default App;
