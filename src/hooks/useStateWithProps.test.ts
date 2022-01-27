import { renderHook, act } from '@testing-library/react-hooks'
import useStateWithProp from './useStateWithProp'

describe('useStateWithProps Test Suite', () => {
  it('should work properly', () => {
    const {result, rerender} = renderHook(({ propValue }) => useStateWithProp(propValue), {
      initialProps: {
        propValue: 1
      }
    });
    rerender({
      propValue: 10
    });
    expect(result.current[0]).toBe(10)
    act(() => {
      result.current[1](2)
    }) 
    expect(result.current[0]).toBe(2);
  })
})
