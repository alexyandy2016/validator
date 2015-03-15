$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'number'
      }).validator({
        trigger: 'keyup',
        success: function () {
          QUnit.test('methods.destroy', function (assert) {
            assert.ok(false, 'success must be off');
          });
        },
        error: function () {
          QUnit.test('methods.destroy', function (assert) {
            assert.ok(false, 'error must be off');
          });
        }
      });

  QUnit.test('methods.destroy', function (assert) {
    var validator = $element.data('validator');

    $element.validator('destroy').trigger('keyup');
    assert.ok(validator.valid === true, 'keyup event must be off.');
    assert.ok(validator.isInvalid(), 'empty is invalid.');
    assert.ok(typeof $element.data('validator') === 'undefined', 'validator is undefined.');
  });

});
