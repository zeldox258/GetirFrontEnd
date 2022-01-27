import { renderWithThemeAndStore } from '../../utils/testing';
import FilterFrame from './FilterFrame';

test('should render properly', () => { 
  const { getByTestId, getByText } = renderWithThemeAndStore(<FilterFrame title='Test'><div>Hello World!</div></FilterFrame>);
  const title = getByTestId('filter-frame-title').textContent;
  expect(title).toBe('Test')
  expect(getByText('Hello World!')).toBeDefined();
});
