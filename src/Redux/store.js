import { configureStore } from '@reduxjs/toolkit';
import { contanctsReducer, filtersReducer } from './reducers';

export const store = configureStore({
  reducer: { contacts: contanctsReducer, filter: filtersReducer },
});
