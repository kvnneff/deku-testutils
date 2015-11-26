# deku-testutils [![Build Status](https://travis-ci.org/kvnneff/deku-testutils.svg?branch=master)](https://travis-ci.org/kvnneff/deku-testutils)

A collection of [Deku](https://github.com/dekujs/deku) test utilities.

Includes:

- [component-mock](https://github.com/dekujs/component-mock): A wrapper for deku components to facilitate easier unit-testing.
- [assert-element](https://github.com/dekujs/assert-element): Assertions that can be used when working with Deku/React and JSX.
- [deku-component-is-node](https://github.com/kvnneff/deku-component-is-node): Determine if an object is a valid Deku node.
- [deku-component-find-all](https://github.com/kvnneff/deku-component-find-all): Traverse a Deku component tree and return all components that satisfy a function.
- [deku-component-find-class](https://github.com/kvnneff/deku-component-find-all):Traverse a Deku component tree and return with a given class name.

## Example

```js
import utils from 'deku-testutils'
const Mock = utils.mock
const assert = utils.assert
const isNode = utils.isNode
const findAll = utils.findAll
const findWithClass = utils.findWithClass
const findAllWithClass = utils.findAllWithClass
```

## License
MIT
