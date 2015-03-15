$(function () {

  'use strict';

  var required = function (value) {
        return !!$.trim(value);
      };

  QUnit.test('globals.setValidators', function (assert) {
    $.fn.validator.setValidators({
      required: required
    });

    assert.ok($.fn.validator.Constructor.prototype.required === required);
  });

});
