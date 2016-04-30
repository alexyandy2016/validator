$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'password',
        equalto: '<input type="password" value="123456">'
      }).validator();

  QUnit.test('validators#equalto', function (assert) {
    assert.ok($element.validator('isInvalid'), 'empty is invalid');
    assert.ok($element.val('12345').validator('isInvalid'), '12345 is invalid');
    assert.ok($element.val('123456').validator('isValid'), '123456 is valid');
    assert.ok($element.val('1234567').validator('isInvalid'), '1234567 is invalid');
  });

});
