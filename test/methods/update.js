$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'number'
      }).validator();

  QUnit.test('methods#update', function (assert) {
    var options = $element.data('validator').options;

    assert.deepEqual(options.rules, {
      number: true
    });

    $element.attr({
      min: 1,
      max: 10
    });

    $element.validator('update');

    assert.deepEqual(options.rules, {
      number: true,
      min: 1,
      max: 10
    });
  });

});
