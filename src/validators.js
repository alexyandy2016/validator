  $.extend(prototype, {
    number: function (value) {
      return Validator.PATTERNS.number.test(value);
    },

    email: function (value) {
      return Validator.PATTERNS.email.test(value);
    },

    url: function (value) {
      return Validator.PATTERNS.url.test(value);
    },

    date: function (value) {
      return !isNaN(new Date(value).valueOf());
    },

    pattern: function (value, regexp) {
      return $.type(regexp) === 'regexp' && regexp.test(value);
    },

    required: function (value) {
      return this.isCheckboxOrRadio ? this.element.checked : Validator.PATTERNS.required.test(value);
    },

    min: function (value, min) {
      return parseInt(value, 10) >= min;
    },

    max: function (value, max) {
      return parseInt(value, 10) <= max;
    },

    range: function (value, range) {
      value = parseInt(value, 10);

      return $.isArray(range) && range.length === 2 && range[0] <= value && value <= range[1];
    },

    minlength: function (value, min) {
      return String(value).length >= min;
    },

    maxlength: function (value, max) {
      return String(value).length <= max;
    },

    rangelength: function (value, range) {
      var length = String(value).length;

      return $.isArray(range) && range.length === 2 && range[0] <= length && length <= range[1];
    },

    equalto: function (value, target) {
      return value === $(target).val();
    }
  });
