import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  contacts: contanctsReducer,
  filter: filtersReducer,
});
