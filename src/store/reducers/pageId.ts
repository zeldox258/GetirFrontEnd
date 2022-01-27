import { createReducer } from '@reduxjs/toolkit';
import { setPageId } from '../actions/pageId';

export const initialPageIdState = 1;

const pageIdReducer = createReducer(initialPageIdState, (builder) =>
  builder.addCase(setPageId, (state, action) => (state = action.payload))
);

export default pageIdReducer;
