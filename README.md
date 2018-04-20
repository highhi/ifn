# ifn

ifn is a library that is an alternative to the switch syntax.

# Usage

```javascript
const f = ifn([
  ['foo', 'value is string'],
  [0, 'value is number'],
  [{}, 'value is object']
], 'default value'); // default value is optional

console.log(f('foo')) // value is string
console.log(f(0))     // value is number
console.log(f({}))    // value is object
console.log(f([]))    // default value
```

It using [lodash.isequal](https://www.npmjs.com/package/lodash.isequal) for comparison of values.

# License
MIT © highhi