import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './actions';
import { Notify } from 'notiflix';

const contactsInitialState = JSON.parse(localStorage.getItem('contacts')) || [];
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
