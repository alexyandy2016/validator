$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'text'
      });

  $element.validator({
    rules: {
      required: true,
      rangelength: [0, 10],
      underscore: {
        message: 'Please enter at least one underscore.',
        validator: function (value) {
          return /_+/.test(value);
        }
      }
    },

    success: function (e) {
      QUnit.test('validators.rules.success', function (assert) {
        assert.ok(true, e.value + ' is valid.' + ' (' + e.rule.type + ')');
      });
    },

    error: function (e) {
      QUnit.test('validators.rules.error', function (assert) {
        assert.ok(true, e.message + ' (' + e.rule.type + ')');
      });
    }
  });

  $element.validator('isInvalid');
  $element.val('example').validator('isInvalid');
  $element.val('another_example').validator('isInvalid');

  QUnit.test('validators#rules', function (assert) {
    assert.ok($element.val('_example').validator('isValid'), '_example is valid.');
    assert.ok($element.val('example_').validator('isValid'), 'example_ is valid.');
    assert.ok($element.val('_example_').validator('isValid'), '_example_ is valid.');
  });

});
