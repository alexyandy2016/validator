# [Validator](https://github.com/fengyuanchen/validator)

> A simple jQuery validation plugin.

- [Demo](http://fengyuanchen.github.io/validator)


## Features

- Supports common rules
- Supports custom rules
- Supports custom messages
- Supports custom validators


## Main

```
dist/
├── validator.js      (13 KB)
└── validator.min.js  ( 7 KB)
```

## Installation

Include files:

```html
<script src="/path/to/jquery.js"></script><!-- jQuery is required -->
<script src="/path/to/validator.js"></script>
```


## Usage

Initialize with `$.fn.validator` method.

```html
<input type="text" required>
```

```js
$('input').validator({
  maxlength: 3
});

$('input').validator('isValid'); // false (required)
$('input').val('abc').validator('isValid'); // true
$('input').val('abcde').validator('isValid'); // false (too long)
```


## Rules

### number

- Type: `Boolean`

The enter value must be a valid number (only digits).

```html
<input type="number">
```

Or

```js
$('input').validator({
  number: true
});
```


### email

- Type: `Boolean`

The enter value must be a valid email.

```html
<input type="email">
```

Or

```js
$('input').validator({
  email: true
});
```


### url

- Type: `Boolean`

The enter value must be a valid URL.

```html
<input type="url">
```

Or

```js
$('input').validator({
  url: true
});
```


### date

- Type: `Boolean`

The enter value must be a valid date.

```html
<input type="date">
```

Or

```js
$('input').validator({
  date: true
});
```


### required

- Type: `Boolean`

The enter value must be not empty.


```html
<input type="text" required>
```

Or

```js
$('input').validator({
  required: true
});
```


### min

- Type: `Number`

The enter number must greater than or equal to this.

Usage:

```html
<input type="number" min="1">
```

Or

```js
$('input').validator({
  number: true,
  min: 1
});
```


### max

- Type: `Number`

The enter number must less than or equal to this.

Usage:

```html
<input type="number" max="100">
```

Or

```js
$('input').validator({
  number: true,
  max: 100
});
```


### range

- Type: `Array`

The enter number must between this[0] and this[1].

Usage:

```html
<input type="number" range="1,100">
```

Or

```js
$('input').validator({
  number: true,
  range: [1, 100]
});
```


### minlength

- Type: `Number`

The enter characters' length must greater than or equal to this.

Usage:

```html
<input type="text" minlength="1">
```

Or

```js
$('input').validator({
  minlength: 1
});
```


### maxlength

- Type: `Number`

The enter characters' length must less than or equal to this value.

Usage:

```html
<input type="text" maxlength="100">
```

Or

```js
$('input').validator({
  maxlength: 100
});
```

### rangelength

- Type: `Array`

The enter characters' length must between this[0] and this[1].

Usage:

```html
<input type="text" rangelength="1,100">
```

Or

```js
$('input').validator({
  rangelength: [1, 100]
});
```


### pattern

- Type: `RegExp`

The enter value must match the pattern.

Usage:

```html
<input type="text" pattern="j(ava)?s(cript)?">
```

Or

```js
$('input').validator({
  pattern: /j(ava)?s(cript)?/
});
```

### equalto

- Type: `String` (jQuery selector)

The enter value must equal to the target element's value.

Usage:

```html
<input id="password1" type="password" value="123456">
<input id="password2" type="password" equalto="#password1">
```

Or

```js
$('#password2').validator({
  equalto: '#password1'
});
```

### (custom rule)

- Type: `Object`

A custom rule requires a message and a validator.

```js
$('#password2').validator({
  exampleCustomRule: {
    message: 'Please enter at least one "@" character.',
    validator: function (value) {
      return value.indexOf('@') > -1;
    }
  }
});
```


## Messages

Changes the global default messages with `$.fn.validator.setMessages(options)`.


## Validators

Changes the global default validators with `$.fn.validator.setValidators(options)`.


## Options

Sets options with `$().validator(options)`.
Changes the global default options with `$.fn.validator.setDefaults(options)`.


### rules

- Type: `Object`
- Default: `null`

Add validation rules.


### trigger

- Type: `String` (event name)
- Default: `''`

The event(s) which triggers validating


### filter

- Type: `Function`
- Default: `null`

Filter the value before validate


### success

- Type: `Function`
- Default: `null`

A shortcut of the "success.validator" event.


### error

- Type: `Function`
- Default: `null`

A shortcut of the "error.validator" event.



## Methods

General usage:

```js
$().validator('method', argument1, , argument2, ..., argumentN)
```


### addRule(name, value)

- **name**:
  - Type: `String` or `Object`
  - Rule name or rules object.
- **value**:
  - This is optional when the "name" parameter is an object.

Add new rule(s);

```js
// Supported rule
$().validator('addRule', 'required', true);

// Custom rule
$().validator('addRule', 'heart', {
  message: 'Don\'t lose the ♥?',
  validator: function (value) {
    return /\u2665/.test(value);
  }
});
```


### removeRule(name)

- **name**:
  - Type: `String` or `Object`
  - Rule name or rules object.

Remove existed rule(s);

```js
$().validator('removeRule', 'required');
$().validator('removeRule', {
  required: false
});
```

### addValidator(name, value)

- **name**:
  - Type: `String` or `Object`
  - Validator name or validators object.
- **value**:
  - Type: `Function`
  - Must return a boolean value. This is optional when the "name" parameter is an object.

Add new validator(s) to instance;

```js
$().validator('addValidator', 'required', function (value) {
  return !!value;
});
$().validator('addValidator', {
  required: function (value) {
    return $.trim(value) !== '';
  }
});
```


### removeValidator(name)

- **name**:
  - Type: `String` or `Object`
  - Validator name or validators object.

Remove validator(s) which was(were) added by `addValidator`;

```js
$().validator('removeValidator', 'required');
$().validator('removeValidator', {
  required: null
});
```


### isValid()

- (return value)
 - Type: `Boolean`

Start a validation and return the result.


### isInvalid()

- (return value)
 - Type: `Boolean`

Start a validation and return the reversed result.


### v()

A shortcut of `isValid` method, means "√".


### x()

A shortcut of `isInvalid` method, means "×".


### destroy()

Destroy the validator and remove the instance from target element.


## Events

### success.validator

This event fires when a validation is passed.


### error.validator

This event fires when a validation is failed.


## No conflict

If you have to use other plugin with the same namespace, just call the `$.fn.validator.noConflict` method to revert to it.

```html
<script src="other-plugin.js"></script>
<script src="validator.js"></script>
<script>
  $.fn.validator.noConflict();
  // Code that uses other plugin's "$().validator" can follow here.
</script>
```


## Browser Support

- Chrome 39+
- Firefox 34+
- Internet Explorer 8+
- Opera 25+
- Safari 5.1+

As a jQuery plugin, you also need to see the [jQuery Browser Support](http://jquery.com/browser-support/).


## [License](LICENSE.md)

Released under the [MIT](http://opensource.org/licenses/mit-license.html) license.
