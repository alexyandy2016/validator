$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'text'
      }).validator();

  QUnit.test('methods.addRule', function (assert) {
    var rules = $element.data('validator').options.rules;

    $element.validator('addRule', 'minlength', 1);
    assert.equal(rules.minlength, 1, 'minlength is 1.');

    $element.validator('addRule', {
      maxlength: 10
    });
    assert.equal(rules.maxlength, 10, 'maxlength is 10.');
  });

});
