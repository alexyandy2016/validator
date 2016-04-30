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

  Validator.setMessages = function (options) {
    $.extend(Validator.MESSAGES, options);
  };
