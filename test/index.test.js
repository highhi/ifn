const ifn = require('../index');

describe('ifn', () => {
  it('should return correct value', () => {
    const arrayBuffer = new ArrayBuffer(8);
    const f = ifn([
      ['foo', 'foo'],
      [0, 'number'],
      [[], 'array'],
      [{}, 'object'],
      [true, 'boolean is true'],
      [false, 'boolean is false'],
      [new ArrayBuffer(0), 'value is array buffer'],
    ], 'default');

    expect(f('foo')).toBe('foo');
    expect(f(0)).toBe('number');
    expect(f([])).toBe('array');
    expect(f({})).toBe('object');
    expect(f(true)).toBe('boolean is true');
    expect(f(false)).toBe('boolean is false');
    expect(f(new ArrayBuffer(0))).toBe('value is array buffer');
    expect(f(null)).toBe('default');
  });

  it('should return function return value if value is function', () => {
    const f = ifn([
      ['function', () => 'value is function']
    ]);
    expect(f('function')).toBe('value is function');
  });

  it('should return function return value if default value is function', () => {
    const f = ifn([], () => 'default value is function');
    expect(f()).toBe('default value is function');
  });
});