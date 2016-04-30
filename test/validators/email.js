$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'email'
      }).validator();

  QUnit.test('validators#email', function (assert) {
    assert.ok($element.val('example@email').validator('isValid'), 'example@email is valid');
    assert.ok($element.val('example@email.com').validator('isValid'), 'example@email.com is valid');
    assert.ok($element.val('example@e.mail.com').validator('isValid'), 'example@e.mail.com is valid');
    assert.ok($element.val('fengyuan.chen@email.com').validator('isValid'), 'fengyuan.chen@email.com is valid');

    assert.ok($element.val('example@').validator('isInvalid'), 'example@ is invalid');
    assert.ok($element.val('@email.com').validator('isInvalid'), '@email.com is invalid');
    assert.ok($element.val('example#email.com').validator('isInvalid'), 'example#email.com is invalid');
    assert.ok($element.val('example.email.com').validator('isInvalid'), 'example.email.com is invalid');
  });

});
