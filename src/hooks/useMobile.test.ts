import { renderHook } from '@testing-library/react-hooks';
import { useMobile } from './useMobile';

describe('useMobile Test Suite', () => {
  it('should work properly', () => {
    Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: 500})
    const { result } = renderHook(() => useMobile());
    expect(result.current).toBe(true);
  });
});
 
