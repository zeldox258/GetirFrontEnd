import { createReducer } from '@reduxjs/toolkit';
import { addPrice, subtractPrice } from '../actions/totalPrice';

export const initialTotalPriceState = 0;

const totalPriceReducer = createReducer(initialTotalPriceState, (builder) =>
  builder
    .addCase(addPrice, (state, action) => +(state += action.payload).toFixed(2))
    .addCase(
      subtractPrice,
      (state, action) => +(state -= action.payload).toFixed(2)
    ) 
);

export default totalPriceReducer;
