import { fireEvent } from '@testing-library/react';
import { renderWithThemeAndStore } from '../../utils/testing'
import RadioButton from './RadioButton'

test('should render properly', () => {
  let isClicked = false;
  const {getByTestId} = renderWithThemeAndStore(<RadioButton active={false} text='Test' handleClick={() => {
    isClicked = true;
  }} />)
  const radioButtonIcon = getByTestId('radio-button-icon')
  fireEvent.click(radioButtonIcon);
  expect(isClicked).toBe(true)
  expect(radioButtonIcon.childElementCount).toBe(0)
  expect(getByTestId('radio-button-text').textContent).toBe('Test') 
})
