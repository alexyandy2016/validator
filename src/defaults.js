  Validator.DEFAULTS = {
    // Type: Object
    /* e.g.: {
      minlength: 8,
      maxlength: 16
    } or {
      rangelength: [8, 16]
    } or {
      rangelength: {
        message: 'Please enter a value between 8 and 16 characters long.',
        validator: function (value) {
          return /^.{8,16}$/.test(value);
        }
      }
    } */
    rules: null,

    // The event(s) which triggers validating
    // Type: String
    trigger: '',

    // Filter the value before validate
    // Type: Function
    filter: null,

    // A shortcut of "success.validator" event
    // Type: Function
    success: null,

    // A shortcut of "error.validator" event
    // Type: Function
    error: null
  };

  Validator.PATTERNS = {
    number: /^-?\d+$/,
    email: /^[\w.!#$%&'*+\/=?^_`{|}~-]+@[\w](?:[\w-]{0,61}[\w])?(?:\.[\w](?:[\w-]{0,61}[\w])?)*$/,

    // By Scott Gonzalez: http://projects.scottsplayground.com/iri/
    url: /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,

    required: /\S+/
  };

  // validators list
  Validator.VALIDATORS = [
    // Types
    'number',
    'email',
    'url',
    'date',

    // Attributes
    'required',
    'min',
    'max',
    'minlength',
    'maxlength',
    'pattern',

    // Customs
    'range',
    'rangelength',
    'equalto'
  ];

  Validator.setDefaults = function (options) {
    $.extend(true, Validator.DEFAULTS, options);
  };
