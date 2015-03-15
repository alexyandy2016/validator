$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'text',
        required: true,
        maxlength: 1
      }).validator({
        filter: function (value) {
          return $.trim(value);
        }
      });

  QUnit.test('options.filter', function (assert) {
    assert.ok($element.val('    ').validator('isInvalid'), '"    " is invalid');
    assert.ok($element.val(' a  ').validator('isValid'), '" a  " is valid');
    assert.ok($element.val(' ab ').validator('isInvalid'), '" ab " is invalid');
  });

});
