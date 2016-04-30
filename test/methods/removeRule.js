$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'text',
        minlength: 1,
        maxlength: 10
      }).validator();

  QUnit.test('methods#removeRule', function (assert) {
    var rules = $element.data('validator').options.rules;

    assert.equal(rules.minlength, 1, 'minlength is 1.');
    assert.equal(rules.maxlength, 10, 'maxlength is 10.');

    $element.validator('removeRule', 'minlength');
    assert.ok(typeof rules.minlength === 'undefined', 'minlength is removed.');

    $element.validator('removeRule', {
      maxlength: 10
    });
    assert.ok(typeof rules.maxlength === 'undefined', 'maxlength is removed.');
  });

});
