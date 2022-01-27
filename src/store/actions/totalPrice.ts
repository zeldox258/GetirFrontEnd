import { createAction } from '@reduxjs/toolkit';

export const addPrice = createAction<number>('total-price/add-price');
export const subtractPrice = createAction<number>('total-price/subtract-price');
 
