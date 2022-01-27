import * as hook from '../../hooks/useMobile'
import { renderWithThemeAndStore } from '../../utils/testing'
import Header from './Header'

test('should render properly', () => {
  jest.spyOn(hook, 'useMobile').mockImplementation(() => false)
  const { getByTestId } = renderWithThemeAndStore(<Header />)
  expect(getByTestId('price-banner-text')).toHaveTextContent('₺ 0')
})