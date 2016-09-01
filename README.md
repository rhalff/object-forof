[![NPM](https://nodei.co/npm/object-forof.png)](https://nodei.co/npm/object-forof/)
[![Build Status](https://travis-ci.org/rhalff/object-forof.png)](https://travis-ci.org/rhalff/object-forof)

# Object forOf

Simple object iterator

### Install
```bash
npm install object-forof --save
```

### example

```javascript
const forOf = require('object-forof')

                  // Explanation:
const obj = {
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

Given the above example you could use `Object.keys` like this:
```javascript
Object.keys(obj).forEach((type) => {
  Object.keys(obj[type]).forEach((port) => {
    const val = obj[type][port]
    // do something with type, port, val
  })
})
```

Or a `for in` loop
```javascript
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

With `forOf`:
```javascript
forOf((type, port, val) => {
  // do something with type, port, val

  // optionally return something
}, obj)
```

If you return something other from the function than `undefined`
it will be added as a value within the returned array.

E.g.
```javascript
forOf((type, port, val) => (
  type === 'input' ? {type: type, val: val} : undefined
), obj)
```

```javascript
forOf((type, port, val) => ({type: type, val: val}), obj)
  .filter((val) => {
  return val.type === 'input'
})
```

Both result in:
```javascript
  [
   {type: 'input', val: '1'},
   {type: 'input', val: '2'}
  ]

```

### Benchmark

Although forOf was made for it's expressiveness it must ofcourse not be slower
than it's alternatives.

Below graph gives some indication on performance.

In progress....

![Benchmark Graph](/bench/graph.png?raw=true "Benchmark")


### Download

  * Development version: https://unpkg.com/object-forof/dist/forOf.js
  * Minified version: https://unpkg.com/object-forof/dist/forOf.min.js
