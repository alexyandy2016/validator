$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'text',
        maxlength: 2
      }).validator();

  QUnit.test('validators#maxlength', function (assert) {
    assert.ok($element.validator('isValid'), 'empty is valid');
    assert.ok($element.val('a').validator('isValid'), 'a is valid');
    assert.ok($element.val('ab').validator('isValid'), 'ab is valid');
    assert.ok($element.val('abc').validator('isInvalid'), 'abc is invalid');
  });

});
