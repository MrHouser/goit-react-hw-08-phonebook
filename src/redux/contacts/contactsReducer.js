import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  addContactSuccess,
  addContactRequest,
  addContactError,
  deleteContactSuccess,
  deleteContactError,
  deleteContactRequest,
  fetchContactsSuccess,
  fetchContactsError,
  fetchContactsRequest,
} from './contacts-actions';

const items = createReducer([], {
  [addContactSuccess]: (state, { payload }) => [
    ...state,
    {
      ...payload,
    },
  ],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [fetchContactsSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});

const contactsReducer = combineReducers({ items, loading });

export default contactsReducer;
