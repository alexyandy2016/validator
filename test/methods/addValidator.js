$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'text'
      }).validator({
        rules: {
          $: true,
          jquery: true
        }
      });

  QUnit.test('methods.addValidator', function (assert) {
    assert.ok($element.validator('isValid'), 'empty is valid.');

    $element.validator('addValidator', '$', function (value) {
      return /\$/.test(value);
    });

    assert.ok($element.val('$.fn.validator').validator('isValid'), '$.fn.validator is valid.');

    $element.validator('addValidator', {
      jquery: function (value) {
        return /jquery/.test(value);
      }
    });

    assert.ok($element.val('$.fn.jquery').validator('isValid'), '$.fn.jquery is valid.');
  });

});
