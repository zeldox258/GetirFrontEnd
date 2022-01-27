import { fireEvent } from '@testing-library/react';
import { renderWithThemeAndStore } from '../../utils/testing';
import Checkbox from './Checkbox';

test('Renders checkbox', () => {
  let isClicked = false; 
  const { getByTestId } = renderWithThemeAndStore(<Checkbox active={false} text='Test' count={12} handleClick={() => {
    isClicked = true;
  }} />)
  const checkboxIcon = getByTestId('checkbox-icon');
  fireEvent.click(checkboxIcon);
  const countTextElm = getByTestId('checkbox-text');
  expect(isClicked).toBe(true);
  expect(countTextElm).toBeDefined()
  expect(countTextElm.textContent).toBe('Test (12)')
})
