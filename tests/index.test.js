const converter = require('../index');

describe('ISO Country Converter', () => {
  test('should convert alpha-2 to alpha-3', () => {
    expect(converter.toAlpha3('US')).toBe('USA');
    expect(converter.toAlpha3('CA')).toBe('CAN');
    expect(converter.toAlpha3('GB')).toBe('GBR');
  });

  test('should return null for invalid alpha-2 code', () => {
    expect(converter.toAlpha3('XX')).toBeNull();
    expect(converter.toAlpha3('USA')).toBeNull(); // Should not convert alpha-3 to alpha-3
  });

  test('should convert alpha-3 to alpha-2', () => {
    expect(converter.toAlpha2('USA')).toBe('US');
    expect(converter.toAlpha2('CAN')).toBe('CA');
    expect(converter.toAlpha2('GBR')).toBe('GB');
  });

  test('should return null for invalid alpha-3 code', () => {
    expect(converter.toAlpha2('XXX')).toBeNull();
    expect(converter.toAlpha2('US')).toBeNull(); // Should not convert alpha-2 to alpha-2
  });
});
