import { renderWithThemeAndStore } from '../../utils/testing'
import Footer from './Footer'
 
test('should render properly', () => {
  const { getByTestId } = renderWithThemeAndStore(<Footer />);
  const text = getByTestId('footer-text').textContent;
  expect(text).toBe('©2021 Omer Market • Privacy Policy')
})
