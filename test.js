var test = require('tape')
var forOf = require('./')

var obj = {
  input: { // --> type
    in1: // --> port
    'i1', // --> val
    // Calls: fn('input', 'in1', 'i1', 0)

    in2: // --> port
    'i2' // --> val
  // Calls: fn('input', 'in1', 'i2', 1)
  },
  output: { // --> type
    out1: // --> port
    'o1', // --> val
    // Calls: fn('output', 'out1', 'o1', 2)

    out2: // --> port
    'o2' // --> val
  // Calls: fn('output', 'out2', 'o2', 3)
  }
}

var expected = [
  ['input', 'in1', 'i1'],
  ['input', 'in2', 'i2'],
  ['output', 'out1', 'o1'],
  ['output', 'out2', 'o2']
]

function pushIt (res) {
  return function (type, port, val) { res.push([type, port, val]) }
}

test('array args', function (t) {
  var res = []
  forOf(pushIt(res), obj)
  t.deepEqual(res, expected)
  t.end()
})

test('arguments args', function (t) {
  var res = []
  forOf(pushIt(res), obj)
  t.deepEqual(res, expected)
  t.end()
})

test('dot args', function (t) {
  var res = []
  forOf(pushIt(res), obj)
  t.deepEqual(res, expected)
  t.end()
})
