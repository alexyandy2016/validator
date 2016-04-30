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

    // This is necessary for IE8
    if (isNumber(offset)) {
      args.push(offset);
    }

    return args.slice.apply(obj, args);
  }
