import { AppState } from './store';

export const selectTotalPrice = (state: AppState) => state.totalPrice; 
export const selectFilter = (state: AppState) => state.filter;
export const selectPageId = (state: AppState) => state.pageId;
export const selectShoppingCart = (state: AppState) => state.shoppingCart;
export const selectPageCount = (state: AppState) => state.pageCount;
