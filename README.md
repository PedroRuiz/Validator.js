Validator.js
------------
Simple and very effective validator for JavaScript 

Usage
-----

<code>import Validator from '[your-validator-path]</code>
or
<code>var validator = require([here-your-validator-path])</code>

- [type](#type)
- [isString](#isString)
- [isAlphaNumeric](#isAlphaNumeric)
- [isNumber](#isNumber)
- [isObject](#isObject)
- [isBoolean](#isBoolean)
- [isDate](#isDate)
- [isEmail](#isEmail)
- [length](#length)
- [lengthMoreThan](#lengthMoreThan)
- [lengthLessThan](#lengthLessThan)
- [lengthEqualTo](#lengthEqualTo)
- [passwordMatch](#passwordMatch)
- [regExp](#regExp)

<a name="Type">Type</a>
-

`Validator(your_variable).type();`

<a name="isString">isString</a>
-
`Validator('hello world').isString();`

<a name="isAlphaNumeric">isAlphaNumeric</a>
-
`Validator('helloWorld).isAlphaNumeric();`

<a name="isNumber">isNumber</a>
-
`Validator(3.14).isNumber();`

<a name="isObject">isObject</a>
-
`Validator([1,2,3]).isObject();`

<a name="isBoolean">isBoolean</a>
-
`Validator(true).isBoolean();`

<a name="isDate">isDate</a>
-
`Validator('12/15/2019).isDate('eu');`
`Validator('15/12/2019).isDate('us');`

<a name="isEmail">isEmail</a>
-
`Validator('e@ma.il').isEmail();`

<a name="length">length</a>
-
`Validator('hellow orld').length();`

<a name="lengthMoreThan">lengthMoreThan</a>
-
`Validator('world').lengthMoreThan(3);`

<a name="lengthLessThan">lengthLessThan</a>
-
`Validator('world').lengthLessThan(8);`

<a name="lengthEqualTo">lengthEqualTo</a>
-
`Validator('world').lengthEqualTo(5);`

<a name="passwordMatch">passwordMatch</a>
-
`Validator('password').passwordMatch('password');`

<a name="regExp">regExp</a>
-
`Validator('HelloWorld').regExp(/^[a-z0-9]+$/i)`

Enjoy.