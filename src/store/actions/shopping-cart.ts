import { createAction } from '@reduxjs/toolkit';
import Item from '../../api/modals/Item';

export const addItem = createAction<Item>('shopping-cart/add-item');
export const removeItem = createAction<string>('shopping-cart/remove-item');
 
