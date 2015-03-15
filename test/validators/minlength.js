$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'text',
        minlength: 2
      }).validator();

  QUnit.test('validators.minlength', function (assert) {
    assert.ok($element.validator('isInvalid'), 'empty is invalid');
    assert.ok($element.val('a').validator('isInvalid'), 'a is invalid');
    assert.ok($element.val('ab').validator('isValid'), 'ab is valid');
    assert.ok($element.val('abc').validator('isValid'), 'abc is valid');
  });

});
