$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'text',
        required: true
      });

  $element.validator({
    error: function () {

      QUnit.test('options#error', function (assert) {
        assert.ok(true, 'The error function had been called');
      });

    }
  }).validator('isValid');

});
