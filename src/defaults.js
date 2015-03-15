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

  Validator.MESSAGES = {
    // Types
    number: 'Please enter a valid number (only digits).',
    email: 'Please enter a valid email address.',
    url: 'Please enter a valid URL.',
    date: 'Please enter a valid date.',

    // Attributes
    required: 'This field is required.',
    max: 'Please enter a value less than or equal to [0].',
    min: 'Please enter a value greater than or equal to [0].',
    maxlength: 'Please enter no more than [0] characters.',
    minlength: 'Please enter at least [0] characters.',
    pattern: 'Please enter a matched value.',

    // Customs
    range: 'Please enter a value between [0] and [1].',
    rangelength: 'Please enter a value between [0] and [1] characters long.',
    equalto: 'Please enter the same value again.'
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
