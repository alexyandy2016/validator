  $.extend(prototype, {
    // Collects attribute rules
    sync: function () {
      var $this = this.$element,
          options = this.options,
          type = $this.attr('type'),
          validators = Validator.VALIDATORS,
          rules = {};

      if ($.inArray(type, validators) > -1) {
        rules[type] = true;
      }

      $.each(validators, function (i, name) {
        var value = $this.attr(name);

        if (!isUndefined(value)) {
          switch (name) {
            case 'min':
            case 'max':
            case 'minlength':
            case 'maxlength':
              value = Number(value);
              break;

            case 'pattern':
              value = new RegExp(value);
              break;

            case 'range':
            case 'rangelength':
              value = value.match(/\d+/g);

              if ($.isArray(value)) {
                $.map(value, function (n) {
                  return Number(n);
                });
              } else {
                value = [];
              }

              break;
          }

          rules[name] = value;
        }

      });

      options.rules = $.extend({}, options.rules, rules);
    },

    addRule: function (name, value) {
      if (isString(name)) {
        this.options.rules[name] = value;
      } else if ($.isPlainObject(name)) {
        $.each(name, $.proxy(this.addRule, this));
      }
    },

    removeRule: function (name) {
      if (isString(name)) {
        delete this.options.rules[name];
      } else if ($.isPlainObject(name)) {
        $.each(name, $.proxy(this.removeRule, this));
      }
    },

    addValidator: function (name, validator) {
      if (isString(name)) {
        if (!this.hasOwnProperty(name) && $.isFunction(validator)) {
          this[name] = validator;
          Validator.VALIDATORS.push(name);
        }
      } else if ($.isPlainObject(name)) {
        $.each(name, $.proxy(this.addValidator, this));
      }
    },

    removeValidator: function (name) {
      if (isString(name)) {
        if (this.hasOwnProperty(name) && $.isFunction(this[name])) {
          delete this[name]; // this[name] = undefined;
          $.grep(Validator.VALIDATORS, function (n) {
            return n !== name;
          });
        }
      } else if ($.isPlainObject(name)) {
        $.each(name, $.proxy(this.removeValidator, this));
      }
    },

    validate: function () {
      var $this = this.$element,
          options = this.options,
          value = $this.val(),
          valid = true,
          rule = {},
          message;

      if (!this.isCheckboxOrRadio && value === this.value) { // Not changed
        return this.valid;
      }

      this.value = value;

      if (options.filter) {
        value = options.filter.call($this[0], value);
      }

      $.each(options.rules, $.proxy(function (type, data) {
        var validator;

        if ($.isPlainObject(data)) {
          validator = data.validator;
          message = data.message;
        } else {
          validator = this[type];
          message = Validator.MESSAGES[type];
        }

        if ($.isFunction(validator)) {
          valid = validator.call(this, value, data);
        }

        rule.type = type;
        rule.data = data;

        return valid; // Breaks loop when invalid

      }, this));

      if (valid) {
        message = '';
        $this.trigger($.Event(EVENT_SUCCESS, {
          message: message,
          value: value,
          rule: rule
        }), message);
      } else {
        if (isString(message)) {
          message = message.replace(/\[\s*(\d+)\s*\]/g, function () {
            var data = rule.data;
            return $.isArray(data) ? data[arguments[1]] : data;
          });
        }

        $this.trigger($.Event(EVENT_ERROR, {
          message: message,
          value: value,
          rule: rule
        }), message);
      }

      this.valid = valid;

      return valid;
    },

    // Alias of valid, as "√"
    v: function () {
      return this.validate();
    },

    // Alias of invalid, as "×"
    x: function () {
      return !this.validate();
    },

    isValid: function () {
      return this.validate();
    },

    isInvalid: function () {
      return !this.validate();
    },

    destroy: function () {
      this.unbind();
      this.$element.removeData('validator');
    }
  });
