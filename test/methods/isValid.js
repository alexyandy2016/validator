$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'number'
      }).validator();

  QUnit.test('methods.isValid', function (assert) {
    assert.ok(!$element.validator('isValid'), 'empty is not valid. (isValid)');
    assert.ok(!$element.validator('v'), 'empty is not valid (v)');

    $element.val(1);
    assert.ok($element.validator('isValid'), '1 is valid. (isValid)');
    assert.ok($element.validator('v'), '1 is valid. (v)');
  });

});
