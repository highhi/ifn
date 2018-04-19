const isEqual = require('lodash.isequal');

function ifn(conditions = [], defaultValue) {
  return (value) => {
    let result;

    for (const condition of conditions) {
      if (isEqual(value, condition[0])) {
        result = condition[1];
        break;
      }
    }
    
    if (typeof result === 'function') {
      return result();
    } else if (result) {
      return result;
    } else if (typeof defaultValue === 'function') {
      return defaultValue();
    }
    
    return defaultValue;
  };
}

module.exports = ifn;
