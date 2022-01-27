import { fireEvent } from '@testing-library/react';
import { renderWithThemeAndStore } from '../../utils/testing'
import ItemSelector from './ItemSelector'

test('should render properly', () => { 
  let isClicked = false;
  const { getByTestId} = renderWithThemeAndStore(<ItemSelector text='Test' active={true} handleClick={() => {
    isClicked = true;
  }} />)
  const itemSelector = getByTestId('item-selector');
  fireEvent.click(itemSelector);
  expect(isClicked).toBe(true);
  expect(itemSelector.textContent).toBe('Test')
})
