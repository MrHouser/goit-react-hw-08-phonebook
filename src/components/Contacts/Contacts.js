import { useDispatch, useSelector } from 'react-redux';
import s from './Contacts.module.css';
import Contact from './Contact';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/contactsOperations';

function Contacts() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
}

export default Contacts;
