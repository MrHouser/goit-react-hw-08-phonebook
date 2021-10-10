import {
  addContactRequest,
  addContactError,
  addContactSuccess,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
} from './contacts-actions';

const BASE_URL = '//localhost:3000';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  fetch(`${BASE_URL}/contacts`)
    .then(data => data.json())
    .then(data => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

export const addContact = newContactData => dispatch => {
  dispatch(addContactRequest());

  fetch(`${BASE_URL}/contacts`, {
    method: 'POST',
    body: JSON.stringify(newContactData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(data => data.json())
    .then(data => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  fetch(`${BASE_URL}/contacts/${id}`, {
    method: 'DELETE',
  })
    .then(dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};
