$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'text',
        required: true
      });

  $element.validator({
    success: function () {

      QUnit.test('options.success', function (assert) {
        assert.ok(true, 'The success function had been called');
      });

    }
  }).val('abc').validator('isValid');

});
