[![NPM](https://nodei.co/npm/object-forof.png)](https://nodei.co/npm/object-forof/)
[![Build Status](https://travis-ci.org/rhalff/object-forof.png)](https://travis-ci.org/rhalff/object-forof)

# Object forof

Simple object iterator

### example

```js
var forOf = require('object-forof')

                  // Explanation:
var obj = {
  input: {        // --> type
    in1:          // --> port
      '1',        // --> val
                  // Calls: fn('input', 'in1', '1')

    in2:          // --> port
      '2'         // --> val
                  // Calls: fn('input', 'in1', '2')
  },
  output: {       // --> type
    out1:         // --> port
      '1',        // --> val
                  // Calls: fn('output', 'out1', '1')

    out2:         // --> port
      '2'         // --> val
                  // Calls: fn('output', 'out2', '2')
  }
}

```

Given the above example you could use Object.keys like this:
```
Object.keys(obj).forEach((type) => {
  Object.keys(obj[type]).forEach((port) => {
    const val = obj[type][port]
    // do something with type, port, val
  })
})
```

Or a for in loop
```
for (let type in obj) {
  if (obj.hasOwnProperty(type)) {
    for (let port in obj[type]) {
      if (obj[type].hasOwnProperty(port)) {
        const val = obj[type][port]
        // do something with type, port, val
      }
    }
  }
}
```

forOf instead:
```
forOf((type, port, val) => {
  // do something with type, port, val

  // optionally return something
}, obj)
```

If you return something other from the function than `undefined`
it will be added as a value within the returned array.

E.g.
```js
forOf((type, port, val) => (
  type === 'input' ? {type: type, val: val} : undefined
), obj)
```

```js
forOf((type, port, val) => ({type: type, val: val}), obj)
  .filter((val) => {
  return val.type === 'input'
})
```

Both result in:
```js
  [
   {type: 'input', val: '1'},
   {type: 'input', val: '2'}
  ]

```
