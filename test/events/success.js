$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'text',
        required: true
      });

  $element.on('success.validator', function (e) {

    QUnit.test('events.success', function (assert) {
      assert.ok(e.type === 'success', 'e.type is "success"');
      assert.ok(e.namespace === 'validator', 'e.namespace is "validator"');
      assert.ok(e.message === '', 'e.message is empty');
      assert.ok(e.value === 'abc', 'e.value is "abc"');
      assert.ok(e.rule.type === 'required', 'e.rule.type is "required"');
      assert.ok(e.rule.data === 'required', 'e.rule.type is "required"');
    });

  }).val('abc').validator('isValid');

});
