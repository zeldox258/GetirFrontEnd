import { createReducer } from '@reduxjs/toolkit';
import { EntityMap, ShoppingCartPayload } from '../../utils/common';
import { addItem, removeItem } from '../actions/shopping-cart';

export const initialShoppingCartState: EntityMap<ShoppingCartPayload> = {};

const shoppingCartReducer = createReducer(initialShoppingCartState, (builder) =>
  builder
    .addCase(addItem, (state, action) => {
      const item = action.payload;
      if (state[item.slug]) {
        state[item.slug].count += 1;
      } else {
        state[item.slug] = {
          count: 1,
          item,
        };
      }
    })
    .addCase(removeItem, (state, action) => {
      const slug = action.payload;
      if (state[slug].count === 1) {
        delete state[slug];
      } else {
        --state[slug].count;
      }
    }) 
);

export default shoppingCartReducer;
