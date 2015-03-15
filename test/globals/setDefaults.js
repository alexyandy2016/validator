$(function () {

  'use strict';

  QUnit.test('globals.setDefaults', function (assert) {
    $.fn.validator.setDefaults({
      success: $.noop
    });

    assert.ok($.fn.validator.Constructor.DEFAULTS.success !== null);
  });

});
