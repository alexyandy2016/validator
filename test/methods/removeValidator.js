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

  QUnit.test('methods#removeValidator', function (assert) {
    $element.validator('addValidator', {
      $: function (value) {
        return /\$/.test(value);
      },
      jquery: function (value) {
        return /jquery/.test(value);
      }
    });

    assert.ok($element.val('$.fn.jquery').validator('isValid'), '$.fn.jquery is valid.');

    $element.validator('removeValidator', 'jquery');

    assert.ok($element.val('$.fn.validator').validator('isValid'), '$.fn.validator is valid.');

    $element.validator('removeValidator', {
      $: function (value) {
        return /\$/.test(value);
      }
    });

    assert.ok($element.val('').validator('isValid'), 'empty is valid.');
  });

});
