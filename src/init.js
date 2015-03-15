  $.extend(prototype, {
    init: function () {
      this.sync();
      this.bind();
    },

    bind: function () {
      var $this = this.$element,
          options = this.options;

      $this.on(EVENT_SUCCESS, options.success).on(EVENT_ERROR, options.error);

      if (options.trigger) {
        $this.on(options.trigger, $.proxy(this.validate, this));
      }
    },

    unbind: function () {
      var $this = this.$element,
          options = this.options;

      $this.off(EVENT_SUCCESS, options.success).off(EVENT_ERROR, options.error);

      if (options.trigger) {
        $this.off(options.trigger, this.validate);
      }
    }
  });
