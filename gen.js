'use strict'

var size = 10

function keys (k) {
  return k.length ? `[${k.join('][')}]` : ''
}

function gen (length) {
  let head = ['module.exports = function forIns (fn, obj, argLength) {', '  var res = []']
  let tail = []
  let d = []
  let ind1 = '  '
  let ind2 = '  ' + ' '.repeat(length * 7)
  for (var i = 0; i < length; i++) {
    const k = `k${i}`

    head.push(`${ind1}for (var ${k} in obj${keys(d)}) {`)
    head.push(`${ind1}  if (obj${keys(d)}.hasOwnProperty(${k})) {`)
    d.push(k)
    head.push(`${ind1}    if (argLength > ${i + 1}) {`)

    // reverse order
    tail.push(`${ind1}}`)
    tail.push(`${ind1}  }`)
    tail.push(`${ind1}    if (ret !== undefined) res.push(ret) }`)
    tail.push(`${ind1}      obj${keys(d)})`)
    tail.push(`${ind1}    } else { var ret = fn(${d.join(', ')},`)

    ind1 = ' '.repeat(ind1.length + 7)
  }
  return head.concat(
    [`       throw Error('more than ${length} arguments not supported')`],
    tail.reverse(),
    ['  return res', '}']
  ).join('\n')
}

console.log(gen(size))
