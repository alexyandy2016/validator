$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'number',
        min: 2
      }).validator();

  QUnit.test('validators#min', function (assert) {
    assert.ok($element.validator('isInvalid'), 'empty is invalid');
    assert.ok($element.val(1).validator('isInvalid'), '1 is invalid');
    assert.ok($element.val(2).validator('isValid'), '2 is valid');
    assert.ok($element.val(3).validator('isValid'), '3 is valid');
  });

});
