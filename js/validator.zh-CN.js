(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node / CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals.
    factory(jQuery);
  }
})(function ($) {

  'use strict';

  $.fn.validator.setMessages({
    number: '请输入有效的数字 (仅限数字)。',
    email: '请输入有效的电子邮件地址。',
    url: '请输入有效的网址。',
    date: '请输入有效的日期。',
    required: '这是必填字段。',
    max: '请输入一个不大于 [0] 的数值。',
    min: '请输入一个不小于 [0] 的数值。',
    maxlength: '最多 [0] 个字。',
    minlength: '最少 [0] 个字。',
    pattern: '请输入匹配的值。',
    range: '请输入 [0] 至 [1] 之间的数值。',
    rangelength: '请输入长度为 [0] 至 [1] 之间的字符串。',
    equalto: '请再次输入相同值。'
  });

});
