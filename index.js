const isEqual = require('lodash.isequal');

function isFunc(value) {
  return typeof value === 'function';
}

function ifn(conditions = [], defaultValue) {
  return value => {
    let result;

    for (const condition of conditions) {
      if (isEqual(value, condition[0])) {
        result = condition[1];
        break;
      }
    }

    if (isFunc(result)) return result();
    if (result) return result;
    return isFunc(defaultValue) ? defaultValue() : defaultValue;
  };
}

module.exports = ifn;
