  var NAMESPACE = '.validator',
      EVENT_SUCCESS = 'success' + NAMESPACE,
      EVENT_ERROR = 'error' + NAMESPACE,

      Validator = function (element, options) {
        this.element = element;
        this.$element = $(element);
        this.options = $.extend(true, {}, Validator.DEFAULTS, $.isPlainObject(options) && options);
        this.isCheckboxOrRadio = /checkbox|radio/.test(element.type);
        this.value = null;
        this.valid = true;
        this.init();
      },

      prototype = Validator.prototype;
