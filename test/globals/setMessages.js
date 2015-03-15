$(function () {

  'use strict';

  var required = 'This field must be not empty.';

  QUnit.test('globals.setMessages', function (assert) {
    $.fn.validator.setMessages({
      required: required
    });

    assert.ok($.fn.validator.Constructor.MESSAGES.required === required);
  });

});
