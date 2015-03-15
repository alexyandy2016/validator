$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'number'
      }).validator();

  QUnit.test('methods.isInvalid', function (assert) {
    assert.ok($element.validator('isInvalid'), 'empty is not valid. (isInvalid)');
    assert.ok($element.validator('x'), 'empty is not valid (x)');

    $element.val(1);
    assert.ok(!$element.validator('isInvalid'), '1 is not valid. (isInvalid)');
    assert.ok(!$element.validator('x'), '1 is not valid. (x)');
  });

});
