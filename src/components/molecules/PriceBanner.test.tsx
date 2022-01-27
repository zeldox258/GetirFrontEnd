import * as react from 'react-redux'
import { selectTotalPrice } from '../../store/selectors';
import { renderWithThemeAndStore } from '../../utils/testing';
import PriceBanner from './PriceBanner';

test('should render properly', () => {
  const useSelectorSpy = jest.spyOn(react, 'useSelector').mockReturnValue(12);
  const { getByTestId } = renderWithThemeAndStore(<PriceBanner />)
  expect(useSelectorSpy).toBeCalledTimes(1);
  expect(useSelectorSpy).toBeCalledWith(selectTotalPrice); 
  expect(getByTestId('price-banner-text')).toHaveTextContent('₺ 12');
  useSelectorSpy.mockRestore();
});
