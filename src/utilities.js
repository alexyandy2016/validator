  function isNumber(n) {
    return typeof n === 'number';
  }

  function isString(n) {
    return typeof n === 'string';
  }

  function isUndefined(n) {
    return typeof n === 'undefined';
  }

  function toArray(obj, offset) {
    var args = [];

    if (isNumber(offset)) { // It's necessary for IE8
      args.push(offset);
    }

    return args.slice.apply(obj, args);
  }
