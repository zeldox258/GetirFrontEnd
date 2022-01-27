import { fixtures, renderWithThemeAndStore } from '../../utils/testing';
import * as redux from 'react-redux'
import ShoppingCartItem from './ShoppingCartItem';
import { fireEvent } from '@testing-library/react';
import { addPrice, subtractPrice } from '../../store/actions/totalPrice';
import { addItem, removeItem } from '../../store/actions/shopping-cart';

test('should render properly', () => {
  const item = fixtures.getItem();
  const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
  const mockDispatchFn = jest.fn();
  useDispatchSpy.mockReturnValue(mockDispatchFn);
  const { getByTestId } = renderWithThemeAndStore(<ShoppingCartItem shoppingCartPayload={{
    item,
    count: 1 
  }} />)
  expect(getByTestId('shopping-cart-item-info').textContent).toBe(item.name + '₺' + item.price)
  expect(getByTestId('shopping-cart-item-count').textContent).toBe('1')
  const removeItemButton = getByTestId('shopping-cart-remove-item-button');
  fireEvent.click(removeItemButton);
  expect(mockDispatchFn).toHaveBeenNthCalledWith(1, subtractPrice(item.price))
  expect(mockDispatchFn).toHaveBeenNthCalledWith(2, removeItem(item.slug))
  mockDispatchFn.mockClear();
  const addItemButton = getByTestId('shopping-cart-add-item-button');
  fireEvent.click(addItemButton);
  expect(mockDispatchFn).toHaveBeenNthCalledWith(1, addPrice(item.price))
  expect(mockDispatchFn).toHaveBeenNthCalledWith(2, addItem(item))
  useDispatchSpy.mockRestore();
});
