# [Validator](https://github.com/fengyuanchen/validator)

> A simple jQuery validation plugin.

- [Demo](https://fengyuanchen.github.io/validator)



## Table of contents

  - [Features](#features)
  - [Main](#main)
  - [Getting started](#getting-started)
  - [Rules](#rules)
  - [Messages](#messages)
  - [Validators](#validators)
  - [Options](#options)
  - [Methods](#methods)
  - [Events](#events)
  - [No conflict](#no-conflict)
  - [Browser support](#browser-support)
  - [Versioning](#versioning)
  - [License](#license)



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



## Getting started

### Quick start

Three quick start options are available:

- [Download the latest release](https://github.com/fengyuanchen/validator/archive/master.zip).
- Clone the repository: `git clone https://github.com/fengyuanchen/validator.git`.
- Install with [NPM](http://npmjs.org): `npm install @fengyuanchen/validator`.


### Installation

Include files:

```html
<script src="/path/to/jquery.js"></script><!-- jQuery is required -->
<script src="/path/to/validator.js"></script>
```



### Usage

Initialize with `$.fn.validator` method.

```html
<input type="text" required>
```

```js
$('input').validator({
  rules: {
    maxlength: 3
  }
});

$('input').validator('isValid'); // false (required)
$('input').val('abc').validator('isValid'); // true
$('input').val('abcde').validator('isValid'); // false (too long)
```


[⬆ back to top](#table-of-contents)


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
  rules: {
    number: true
  }
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
  rules: {
    email: true
  }
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
  rules: {
    url: true
  }
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
  rules: {
    date: true
  }
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
  rules: {
    required: true
  }
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
  rules: {
    number: true,
    min: 1
  }
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
  rules: {
    number: true,
    max: 100
  }
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
  rules: {
    number: true,
    range: [1, 100]
  }
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
  rules: {
    minlength: 1
  }
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
  rules: {
    maxlength: 100
  }
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
  rules: {
    rangelength: [1, 100]
  }
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
  rules: {
    pattern: /j(ava)?s(cript)?/
  }
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
  rules: {
    equalto: '#password1'
  }
});
```

### (custom rule)

- Type: `Object`

A custom rule requires a message and a validator.

```js
$('#password2').validator({
  rules: {
    exampleCustomRule: {
      message: 'Please enter at least one "@" character.',
      validator: function (value) {
        return value.indexOf('@') > -1;
      }
    }
  }
});
```


## Messages

Changes the global default messages with `$.fn.validator.setMessages(options)`.



## Validators

Changes the global default validators with `$.fn.validator.setValidators(options)`.


[⬆ back to top](#table-of-contents)



## Options

Sets options with `$().validator(options)`.
Changes the global default options with `$.fn.validator.setDefaults(options)`.


### rules

- Type: `Object`
- Default: `null`

Add validation rules.

```js
$('input).validator({
  rules: {
    required: true
  }
});
```


### trigger

- Type: `String` (event name)
- Default: `''`

The event(s) which triggers validating

```js
$('input').validator({
  trigger: 'change'
});
```


### filter

- Type: `Function`
- Default: `null`

Filter the value before validate

```js
$('input').validator({
  filter: function (value) {
    return $.trim(value);
  }
});
```


### success

- Type: `Function`
- Default: `null`

A shortcut of the "success.validator" event.


### error

- Type: `Function`
- Default: `null`

A shortcut of the "error.validator" event.


[⬆ back to top](#table-of-contents)



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


[⬆ back to top](#table-of-contents)



## Events

### success.validator

This event fires when a validation is passed.


### error.validator

This event fires when a validation is failed.


[⬆ back to top](#table-of-contents)



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

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Edge (latest)
- Internet Explorer 8+

As a jQuery plugin, you also need to see the [jQuery Browser Support](http://jquery.com/browser-support/).



## Versioning

Maintained under the [Semantic Versioning guidelines](http://semver.org/).



## License

[MIT](http://opensource.org/licenses/MIT) © [Fengyuan Chen](http://chenfengyuan.com)


[⬆ back to top](#table-of-contents)
