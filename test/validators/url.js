$(function () {

  'use strict';

  var $element = $('<input>').attr({
        type: 'url'
      }).validator();

  QUnit.test('validators#url', function (assert) {
    assert.ok($element.val('http://example.com').validator('isValid'), 'http://example.com is valid');
    assert.ok($element.val('https://example.com').validator('isValid'), 'https://example.com is valid');
    assert.ok($element.val('http://www.example.com').validator('isValid'), 'http://www.example.com is valid');
    assert.ok($element.val('http://example.com/index.html').validator('isValid'), 'http://example.com/index.html is valid');
    assert.ok($element.val('http://example.com/index.html?id=1&type=1#top').validator('isValid'), 'http://example.com/index.html?id=1&type=1#top is valid');

    assert.ok($element.val('example.com').validator('isInvalid'), 'example.com is invalid');
    assert.ok($element.val('www.example.com').validator('isInvalid'), 'www.example.com is invalid');
    assert.ok($element.val('file:///c:/example.html').validator('isInvalid'), 'File URL is invalid');
    assert.ok($element.val('data:image/png;base64,example').validator('isInvalid'), 'Data URL is invalid');
    assert.ok($element.val('blob:null/example').validator('isInvalid'), 'Blob URL is invalid');
  });

});
