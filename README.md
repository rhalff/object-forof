# Object forof

Simple object iterator

[![NPM](https://nodei.co/npm/object-forof.png)](https://nodei.co/npm/object-forof/)

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

forOf((type, port, val) => console.log(type, port, val), obj)

```

If you return something other from the function than `undefined`
it will be added as a value within the returned array.

E.g.
```js
forOf((type, port, val) => (
  type === 'input' ? {type: type, val: val} : undefined
), obj)

forOf((type, port, val) => ({type: type, val: val}), obj)
  .filter((val) => {
  return val.type === 'input'
})

Both result in:

  [
   {type: 'input', val: '1'},
   {type: 'input', val: '2'}
  ]

```
