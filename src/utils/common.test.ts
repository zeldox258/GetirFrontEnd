import { ArrayUtils, assetUrl, getImageUrl, getSvgUrl, handleOnCondition, nullFn, pixelize } from './common';

describe('Common Utility Test Suite', () => {
  it('should sum array elements', () => {
    const arr = [1,2,3];
    const expected = 6;
    const actual = ArrayUtils.sum(arr);
    expect(actual).toBe(expected);
  });
 
  it('should check if array is empty', () => {
    const arr: number[] = [];
    const expected = true;
    expect(ArrayUtils.isEmpty(arr)).toBe(expected);
  });

  it('should convert and object to array', () => {
    const object = {
      id: 123,
      name: '@@native'
    };
    const expected = [['id', 123], ['name', '@@native']]
    expect(ArrayUtils.mapToArray(object)).toStrictEqual(expected);
  })

  it('should generate a range', () => {
    const expected = [1,2,3];
    expect(ArrayUtils.range(1,3)).toStrictEqual(expected);
  })

  it('should get the image and svg url', () => {
    const expected1 = assetUrl.concat('images/cat.png');
    const expected2 = assetUrl.concat('icons/cat.svg');
    expect(getImageUrl('cat')).toBe(expected1);
    expect(getSvgUrl('cat')).toBe(expected2);
  })

  it('should convert a number to pixels', () => {
    const val = 23;
    const expected = `${23}px`;
    expect(pixelize(val)).toBe(expected);
  })

  it('should return null', () => {
    expect(nullFn()).toBe(null);
  })

  it('should run a function on condition', () => {
    let shouldRun = true;
    const arr: number[] = [];
    const f = (v: number) => {arr.push(v)};
    handleOnCondition(shouldRun, f, [1])()
    expect(arr).toStrictEqual([1])
  })
});
