# deku-testutils [![Build Status](https://travis-ci.org/kvnneff/deku-testutils.svg?branch=master)](https://travis-ci.org/kvnneff/deku-testutils)

A collection of [Deku](https://github.com/dekujs/deku) test utilities.

## Install

`npm install deku-testutils`

Includes:

- [component-mock](https://github.com/dekujs/component-mock): A wrapper for deku components to facilitate easier unit-testing.
- [assert-element](https://github.com/dekujs/assert-element): Assertions that can be used when working with Deku/React and JSX.
- [deku-component-mount](https://github.com/kvnneff/deku-component-mount): Mount a Deku component to the DOM.
- [deku-component-is-node](https://github.com/kvnneff/deku-component-is-node): Determine if an object is a valid Deku node.
- [deku-component-find-all](https://github.com/kvnneff/deku-component-find-all): Traverse a Deku component tree and return all components that satisfy a function.
- [deku-component-find-class](https://github.com/kvnneff/deku-component-find-all):Traverse a Deku component tree and return with a given class name.

## API

## utils.Mock

### Mock(Component)

Returns a wrapper object for the `Component`. The goal is that there will be
many methods that reflect various lifecycle events for the deku component.
Currently, we only deal with `render`, but others will be added over time as
we develop good testing strategies.

### mock.render(component)

Calls `Component.render()`. The render function will have all the parameters
it would normally expect generated automatically. (eg: `props`,
`props.children` and `state`)

This also uses `Component.defaultProps` and `Component.initialState()` to ensure
the `component` object is generated accurately.

The `setState` function that is passed is simply a no-op, it won't trigger any
other changes. (as it shouldn't, since this is designed for unit-testing)

## utils.assert

### assert.isNode(node, [type])

Checks the given `node` to make sure it looks like a virtual node. If the `type`
is specified, it must match strictly.

```js
assert.isNode(<div />);
assert.isNode(<b>Hello World</b>, 'b');
assert.isNode(<Button>Log In</Button>, Button);
```

### assert.hasAttribute(node, attr, [value])

Checks the given `node` to make sure it has the given `attr` attribute. If the
`value` is specified, it must match that value strictly.

```js
assert.hasAttribute(<a href="http://example.com/">Home</a>, 'href');
assert.hasAttribute(<button type="submit">Submit</button>, 'type', 'submit');
```

When using a `Function`, it will be invoked with the attribute value. From there, you
can run any other assertion that should throw if the value is invalid.

```js
assert.hasAttribute(<Select options={[ 'a', 'b' ]} />, 'options', function (options) {
  assert.deepEqual(options, [ 'a', 'b', 'c' ]); // will fail
});
```

**NOTE:** this allows for falsy values, as an attribute can be present but intentionally
false, such as `checked={false}`.

### assert.notHasAttribute(node, attr)

Checks the given `node` to make sure it does **not** have the given `attr` attribute.

```js
assert.notHasAttribute(<div />, 'id');
```

**NOTE:** this will not throw for falsy values, as an attribute can be present but
intentionally false, such as `checked={false}`.

### assert.hasClass(node, name)

Checks that the given `node` has the given CSS class `name`. This is largely a helper
for HTML elements, although any component that uses `class` in the same fashion can be
checked.

```js
assert.hasClass(<div class="a b c" />, 'b');
```

### assert.notHasClass(node, name)

Checks that the given `node` does **not** have the given CSS class `name`. This is largely
a helper for HTML elements, although any component that uses `class` in the same fashion
can be checked.

```js
assert.notHasClass(<div class="a" />, 'b');
```

### assert.hasChildren(node, [children])

Checks that the given `node` has child nodes matching the `children` argument:

 - when a `Number`, it will ensure `node` has that many child nodes
 - when a `Function`, it will run the function against each child node (which should
   throw if they are invalid)
 - when an `Array`, it will check for loose/deep equality
 - when not specified, it will just make sure the `node` has at least 1 child

```js
var node = (
  <ul>
    <li>a</li>
    <li>b</li>
    <li>c</li>
  </ul>
);

// make sure there are any children
assert.hasChildren(node);

// make sure there are 3 children
assert.hasChildren(node, 3);

// our fn just runs other assertions
assert.hasChildren(node, function (child) {
  assert.isNode(child, 'li');
  assert.hasChildren(child);
});
```

### assert.notHasChildren(node)

Checks that the given `node` does **not** have any child nodes.

```js
assert.notHasChildren(<div />);
```

### assert.hasChild(node, index, [criteria])

Check if the given `node` at a given zero-indexed `index` has the corresponding
`child`, using the following `criteria`:

 - When a `Function`, it will run `criteria`, passing the child node as an
   argument. `criteria` is expected to throw an error if the node is invalid.
 - Otherwise, it will do a deep comparison between the child node and
   the criteria.

```js
var node = (
  <ul>
    <li>a</li>
    <li>b</li>
    <li>c</li>
  </ul>
);

// make sure a child at index 0 exists
assert.hasChild(node, 0);

// do a deep comparison on the child at index 0
assert.hasChild(node, 0, 'div');

// run other assertions on the child node
assert.hasChild(node, 0, function (child) {
  assert.isNode(child, 'li);
});
```

## utils.mount

### mount(node)

Mount a Deku node to the DOM and return an object with a property `element` containing a reference to the rendered DOM element and a property `unmount` containing a function to remove the rendered DOM element from the DOM.

### mountedNode.unmount()

Remove the rendered element from the DOM

### mountedNode.element

A reference to the mounted dom element

## utils.isNode

### isNode(node, [type])

Returns `true` if `node` is a valid Deku node.  If `type` is specified, it will ensure that type is strictly equal. (whether that is a `Component` or a `String` element name)

## utils.findAll

### findAll(node, fn)

Returns an array of items found within `node` that satisfy `fn`.

## utils.findWithClass

### findWithClass(node, class)

Returns a single node found within `node` that has `class`.  This will throw an error if more than one node is found.

## utils.findAllWithClass

### findAllWithClass(node, class)

Returns an array of nodes found within `node` that have `class`.

## License
MIT
