'use strict'

/*
module.exports = function objk(fn, o0, argLength) {
  var res = []

  var k0 = Object.keys(o0)
  for (var a = 0; a < k0.length; a++) {
    var o0 = obj[k0[a]]
    if (argLength > 1) {
      var k1 = Object.keys(o0)
      for (var b = 0; b < k1.length; b++) {
        var o1 = o0[k1[b]]
        var ret = fn (k0[a], k1[b], o1)
        if (ret !== undefined) {
          res.push(ret)
        }
      }
    } else {
      var ret = fn (k0[a], o0)
      if (ret !== undefined) {
        res.push(ret)
      }
    }
  }
  return res
}
*/

var size = 10

function keys (k) {
  return k.length ? `[${k.join('][')}]` : ''
}

function gen (length) {
  var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
  let head = [
    'module.exports = function objk (fn, o0, argLength) {',
    '  var res = []'
  ]

  let tail = []
  let d = []
  let ind1 = '  '
  let ind2 = '  ' + ' '.repeat(length * 7)
  let kpath = []
  for (var i = 0; i < length; i++) {
    const k = `k${i}`
    const o = `o${i}`
    const on = `o${i+1}`
    const j = alpha[i]
    kpath.push(`${k}[${j}]`)

    head.push(`${ind1}var ${k} = Object.keys(${o})`)
    head.push(`${ind1}for (var ${j} = 0; ${j} < ${k}.length; ${j}++) {`)
    head.push(`${ind1}  var ${on} = ${o}[${k}[${j}]]`)
    head.push(`${ind1}  if (argLength > ${i+1}) {`)

    // reversed
    tail.push(`${ind1}}`)
    tail.push(`${ind1}  }`)
    tail.push(`${ind1}    }`)
    tail.push(`${ind1}      res.push(ret)`)
    tail.push(`${ind1}    if (ret !== undefined) {`)
    tail.push(`${ind1}    var ret = fn (${kpath.join(', ')}, ${on})`)
    tail.push(`${ind1}  } else {`)

    ind1 = ' '.repeat(ind1.length + 4)
  }
  return head.concat(
    [`  throw Error('more than ${length} arguments not supported')`],
    tail.reverse(),
    ['  return res', '}']
  ).join('\n')
}

console.log(gen(size))
