import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contact/ADD', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});

export const setContacts = createAction('contacts/SET');
export const deleteContact = createAction('contacts/DELETE');
export const filterContact = createAction('contacts/FILTER');
