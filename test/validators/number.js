$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'number'
      }).validator();

  QUnit.test('validators.number', function (assert) {
    assert.ok($element.val(0).validator('isValid'), 'zero is valid');
    assert.ok($element.val(1).validator('isValid'), 'positive integer is valid');
    assert.ok($element.val(-1).validator('isValid'), 'negative integer is valid');
    assert.ok($element.val(1.1).validator('isInvalid'), 'floating-point number is invalid');
    assert.ok($element.val('text').validator('isInvalid'), 'text is invalid');
  });

});
