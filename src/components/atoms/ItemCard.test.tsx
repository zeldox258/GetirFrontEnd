import { fireEvent } from '@testing-library/react'
import * as redux from 'react-redux'
import { addItem } from '../../store/actions/shopping-cart'
import { addPrice } from '../../store/actions/totalPrice'
import { fixtures, renderWithThemeAndStore } from '../../utils/testing'
import ItemCard from './ItemCard'

test('should render properly', () => { 
  const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
  const mockDispatchFn = jest.fn();
  useDispatchSpy.mockReturnValue(mockDispatchFn);
  const item = fixtures.getItem();
  const { getByTestId } = renderWithThemeAndStore(<ItemCard imageUrl='cat.png' item={item} />)
    expect(getByTestId('item-card-image').getAttribute('src')).toBe('cat.png');
    expect(getByTestId('item-card-price').textContent).toBe('₺'.concat(String(item.price)))
    expect(getByTestId('item-card-name').textContent).toBe(item.name);
    const addButton = getByTestId('item-card-button');
    fireEvent.click(addButton);
    expect(useDispatchSpy).toBeCalledTimes(1);
    expect(mockDispatchFn).toBeCalledTimes(2);
    expect(mockDispatchFn).toHaveBeenNthCalledWith(1, addItem(item))
    expect(mockDispatchFn).toHaveBeenNthCalledWith(2, addPrice(item.price));
    expect(addButton.textContent).toBe('Add');
    useDispatchSpy.mockRestore();
  }
)
