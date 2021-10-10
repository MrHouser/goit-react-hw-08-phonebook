import { createSelector } from 'reselect';

export const getContacts = state => state.contacts.items;

export const getFilter = state => state.filter;

export const getLoading = state => state.contacts.loading;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const lowerCasedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCasedFilter),
    );
  },
);
