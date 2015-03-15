/*!
 * Validator v@VERSION
 * https://github.com/fengyuanchen/validator
 *
 * Copyright (c) @YEAR Fengyuan Chen
 * Released under the MIT license
 *
 * Date: @DATE
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as anonymous module.
    define('validator', ['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node / CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals.
    factory(jQuery);
  }
})(function ($) {

  'use strict';
