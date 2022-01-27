import { fireEvent } from '@testing-library/react';
import * as redux from 'react-redux'
import { updateFilter } from '../../store/actions/filter';
import { setPageId } from '../../store/actions/pageId';
import { renderWithThemeAndStore } from '../../utils/testing';
import ItemType from './ItemType'; 

test('should render properly', () => {
  const clickTuple: [boolean, boolean] = [false, false]
  const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
  const mockDispatchFn = jest.fn();
  useDispatchSpy.mockReturnValue(mockDispatchFn);
  const { getAllByTestId } = renderWithThemeAndStore(<ItemType selectedIndex={1} clickHandlers={[() => clickTuple[0] = true, () => clickTuple[1] = true]} />)
  const itemSelectors = getAllByTestId('item-selector');
  fireEvent.click(itemSelectors[0]);
  expect(mockDispatchFn).toBeCalledTimes(2);
  expect(mockDispatchFn).toHaveBeenNthCalledWith(1, setPageId(1));
  expect(mockDispatchFn).toHaveBeenNthCalledWith(2, updateFilter({
    itemType: 'mug'
  }))
})
