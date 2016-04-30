$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'number',
        max: 2
      }).validator();

  QUnit.test('validators#max', function (assert) {
    assert.ok($element.validator('isInvalid'), 'empty is invalid');
    assert.ok($element.val(1).validator('isValid'), '1 is valid');
    assert.ok($element.val(2).validator('isValid'), '2 is valid');
    assert.ok($element.val(3).validator('isInvalid'), '3 is invalid');
  });

});
