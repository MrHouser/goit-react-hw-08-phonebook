import Form from '../../components/Form/Form';
import Search from '../../components/Search/Search';
import Contacts from '../../components/Contacts/Contacts';
import UserMenu from '../../components/UserMenu/UserMenu';

function ContactsView() {
  return (
    <>
      <UserMenu />
      <h1 className="main-title">Phonebook</h1>
      <Form />
      <h2 className="title">Contacts</h2>
      <Search />
      <Contacts />
    </>
  );
}

export default ContactsView;
