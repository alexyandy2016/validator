$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'text',
        required: true
      });

  $element.on('error.validator', function (e) {

    QUnit.test('events.error', function (assert) {
      assert.ok(e.type === 'error', 'e.type is "error"');
      assert.ok(e.namespace === 'validator', 'e.namespace is "validator"');
      assert.ok(e.message.length > 0, 'e.message is not empty');
      assert.ok(e.value === '', 'e.value is empty');
      assert.ok(e.rule.type === 'required', 'e.rule.type is "required"');
      assert.ok(e.rule.data === 'required', 'e.rule.data is "required"');
    });

  }).validator('isValid');

});
