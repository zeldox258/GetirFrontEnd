import obtainFilter from './search-engine'

describe('Test Engine Test Suite', () => {
  it('should produce a search filter', () => {
    const filter = obtainFilter('ap');
    expect(filter('apple')).toBe(true);
  })
}) 
