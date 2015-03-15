$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'text',
        rangelength: '[1,3]'
      }).validator();

  QUnit.test('validators.rangelength', function (assert) {
    assert.ok($element.validator('isInvalid'), 'empty is invalid');
    assert.ok($element.val('a').validator('isValid'), 'a is valid');
    assert.ok($element.val('ab').validator('isValid'), 'ab is valid');
    assert.ok($element.val('abc').validator('isValid'), 'abc is valid');
    assert.ok($element.val('abcd').validator('isInvalid'), 'abc is invalid');
  });

});
