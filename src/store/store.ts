import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import filterReducer, { initialFilterState } from './reducers/filter';
import pageCountReducer, { initialPageCountState } from './reducers/page-count';
import pageIdReducer, { initialPageIdState } from './reducers/pageId';
import shoppingCartReducer, {
  initialShoppingCartState,
} from './reducers/shopping-cart';
import totalPriceReducer, {
  initialTotalPriceState, 
} from './reducers/totalPrice';

const preloadedState = {
  filter: initialFilterState,
  shoppingCart: initialShoppingCartState,
  totalPrice: initialTotalPriceState,
  pageId: initialPageIdState,
  pageCount: initialPageCountState,
};

const appReducer = {
  filter: filterReducer,
  shoppingCart: shoppingCartReducer,
  totalPrice: totalPriceReducer,
  pageId: pageIdReducer,
  pageCount: pageCountReducer,
};

export type AppState = typeof preloadedState;

const store = configureStore({
  reducer: appReducer,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
  middleware: (getDefaultMiddleware) => process.env.NODE_ENV !== 'production' ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware(),
});

export default store;
