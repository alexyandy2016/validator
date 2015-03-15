$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'number',
        range: '[1,3]'
      }).validator();

  QUnit.test('validators.range', function (assert) {
    assert.ok($element.validator('isInvalid'), 'empty is invalid');
    assert.ok($element.val(1).validator('isValid'), '1 is valid');
    assert.ok($element.val(2).validator('isValid'), '2 is valid');
    assert.ok($element.val(3).validator('isValid'), '3 is valid');
    assert.ok($element.val(4).validator('isInvalid'), '4 is invalid');
  });

});
