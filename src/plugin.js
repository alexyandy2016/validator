  // Save the other validator
  Validator.other = $.fn.validator;

  // Register as jQuery plugin
  $.fn.validator = function (options) {
    var args = toArray(arguments, 1),
        result;

    this.each(function () {
      var $this = $(this),
          data = $this.data(NAMESPACE),
          fn;

      if (!data) {
        if (/destroy/.test(options)) {
          return;
        }

        $this.data(NAMESPACE, (data = new Validator(this, options)));
      }

      if (isString(options) && $.isFunction(fn = data[options])) {
        result = fn.apply(data, args);
      }
    });

    return isUndefined(result) ? this : result;
  };

  $.fn.validator.Constructor = Validator;
  $.fn.validator.setDefaults = Validator.setDefaults;
  $.fn.validator.setMessages = Validator.setMessages;
  $.fn.validator.setValidators = function (options) {
    $.extend(Validator.prototype, options);
  };

  // No conflict
  $.fn.validator.noConflict = function () {
    $.fn.validator = Validator.other;
    return this;
  };
