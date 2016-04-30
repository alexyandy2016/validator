$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'text',
        required: true
      }).validator({
        trigger: 'keyup'
      });

  QUnit.test('options#trigger', function (assert) {
    assert.ok($element.val('abc').trigger('keyup').data('validator').valid === true);
  });

});
