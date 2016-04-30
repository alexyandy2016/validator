  function Validator(element, options) {
    this.element = element;
    this.$element = $(element);
    this.options = $.extend(true, {}, Validator.DEFAULTS, $.isPlainObject(options) && options);
    this.isCheckboxOrRadio = /checkbox|radio/.test(element.type);
    this.value = null;
    this.valid = true;
    this.init();
  }
