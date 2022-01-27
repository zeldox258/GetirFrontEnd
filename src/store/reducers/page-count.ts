import { createReducer } from '@reduxjs/toolkit';
import { updatePageCount } from '../actions/page-count';

export const initialPageCountState = 1;

const pageCountReducer = createReducer(initialPageCountState, (builder) =>
  builder.addCase(updatePageCount, (state, { payload }) => payload)
);

export default pageCountReducer;
 
