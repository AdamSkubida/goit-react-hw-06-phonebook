import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './actions';
import { Notify } from 'notiflix';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const filterInitialState = '';

export const contanctsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    if (state.map(contact => contact.name).includes(action.payload.name)) {
      Notify.failure(`${action.payload.name} is already in contacts.`);
      return state;
    } else {
      Notify.success(`${action.payload.name} added to contacts`);
      return [...state, action.payload];
    }
  },

  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

export const filtersReducer = createReducer(filterInitialState, {
  [filterContact]: (state, action) => {
    return action.payload;
  },
});
