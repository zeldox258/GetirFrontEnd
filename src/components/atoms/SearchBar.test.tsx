import { fireEvent } from '@testing-library/react';
import { renderWithThemeAndStore } from '../../utils/testing'
import SearchBar from './SearchBar'

test('should render properly', () => {
  let currentText = '';
  const { getByPlaceholderText } = renderWithThemeAndStore(<SearchBar placeholder='Here' updateSearchWord={(searchWord) => {
    currentText = searchWord;
  }} />)
  const searchBar = getByPlaceholderText('Here');
  fireEvent.change(searchBar, {
    target: {
      value: 'Find me!'
    }
  }) 
  setTimeout(() => {
    expect(currentText).toBe('Find me!')
  }, 250)
})
