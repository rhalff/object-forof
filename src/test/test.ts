import * as fs from 'fs'
import * as test from 'tape'
import forOf from '../'

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))

const obj = {
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

const expected = [
  ['input', 'in1', 'i1'],
  ['input', 'in2', 'i2'],
  ['output', 'out1', 'o1'],
  ['output', 'out2', 'o2']
]

const filtered = [
  {type: 'input', val: 'i1'},
  {type: 'input', val: 'i2'}
]

function pushIt (res) {
  return (type, port, val) => {
    res.push([type, port, val])
  }
}

function pushItReturn (res) {
  return (type: string, port: string, val: any) => {
    const ret = [type, port, val]

    res.push(ret)

    return ret
  }
}

test('Should work', (t) => {
  const res = []
  const ret = forOf(pushIt(res), obj)

  t.deepEqual(res, expected)
  t.deepEqual(ret, [])
  t.end()
})

test('Should return array of values', (t) => {
  const res = []
  const ret = forOf(pushItReturn(res), obj)

  t.deepEqual(res, expected)
  t.deepEqual(ret, expected)
  t.end()
})

test('undefined return is not included', (t) => {
  const ret = forOf((type, _port, val) => {
    return type === 'input' ? {type, val} : undefined
  }, obj)
  t.deepEqual(ret, filtered)
  t.end()
})

test('one argument will iterate just the keys', (t) => {
  const ret = forOf((type) => type, obj)

  t.deepEqual(ret, Object.keys(obj))
  t.end()
})

test('filter fun', (t) => {
  const ret = forOf((type, _port, val) => ({type, val}), obj)
    .filter((val) => {
      return val.type === 'input'
    })
  t.deepEqual(ret, filtered)
  t.end()
})

test('hetrogenous (simple)', (t) => {
  const ret = forOf((pos1, pos2, pos3) => {
    if (pos1 === 'homepage') {
      return pos2
    } else if (pos2 === 'url') {
      return pos3
    }
  }, pkg)
  t.deepEqual(ret, [pkg.repository.url, pkg.bugs.url, pkg.homepage])
  t.end()
})
