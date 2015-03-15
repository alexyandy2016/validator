$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'date'
      }).validator();

  QUnit.test('validators.date', function (assert) {
    assert.ok($element.val('2015-02-28').validator('isValid'), '2015-02-28 is valid');
    assert.ok($element.val('2015 02 28').validator('isInvalid'), '2015 02 28 is invalid');
    assert.ok($element.val('20150228').validator('isInvalid'), '20150228 is invalid');
    assert.ok($element.val('').validator('isInvalid'), 'empty is invalid');
  });

});
