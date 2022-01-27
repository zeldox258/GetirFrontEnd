import { createReducer } from '@reduxjs/toolkit';
import { Filter, Sorting, updateFilter } from '../actions/filter';

export const initialFilterState: Filter = {
  sorting: Sorting.PRICE_LOW_TO_HIGH,
  itemType: 'mug',
  tag: '',
  brand: '',
};

const filterReducer = createReducer(initialFilterState, (builder) => {
  builder.addCase(updateFilter, (state, action) => {
    return {
      ...state,
      ...action.payload,
    }; 
  });
});

export default filterReducer;
