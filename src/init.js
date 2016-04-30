  Validator.prototype = {
    constructor: Validator,

    init: function () {
      this.update();
      this.bind();
    },

    bind: function () {
      var $this = this.$element;
      var options = this.options;

      if ($.isFunction(options.success)) {
        $this.on(EVENT_SUCCESS, options.success);
      }

      if ($.isFunction(options.error)) {
        $this.on(EVENT_ERROR, options.error);
      }

      if (isString(options.trigger)) {
        $this.on(options.trigger, $.proxy(this.validate, this));
      }
    },

    unbind: function () {
      var $this = this.$element;
      var options = this.options;

      if ($.isFunction(options.success)) {
        $this.off(EVENT_SUCCESS, options.success);
      }

      if ($.isFunction(options.error)) {
        $this.off(EVENT_ERROR, options.error);
      }

      if (isString(options.trigger)) {
        $this.off(options.trigger, this.validate, this);
      }
    },
