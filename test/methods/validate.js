$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'number'
      }).validator();

  QUnit.test('methods.validate', function (assert) {
    assert.ok(!$element.validator('validate'), 'empty is invalid. (validate)');
    assert.ok($element.val(1).validator('validate'), '1 is valid. (validate)');
  });

});
