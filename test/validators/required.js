$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'text',
        required: true
      }).validator();

  QUnit.test('validators#required', function (assert) {
    assert.ok($element.val('text').validator('isValid'), 'text is valid');
    assert.ok($element.val('').validator('isInvalid'), 'empty is invalid');
  });

});
