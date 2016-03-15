const fs = require('fs')
const forOf = require('../../index')
const path = require('path')

const scripts = [
  'const data = ' + JSON.stringify(require('../data/bench_data.json')),
  "function isObject(obj) { return typeof obj === 'object'; }",
  'const func = (key, key2, obj) => [key, key2, obj]',
  require('../../10.js').toString(),
  require('../../index').toString(),
  require('../util').object_keys.toString(),
  require('../util').for_in.toString(),
  'for (var i = 0; i < 1e4; i++) {',
  undefined,
  '}'
]

forOf((name, fn) => {
  scripts[8] = fn
  fs.writeFile(path.join('./bat/', name + '.js'), scripts.join('\n\n'))
}, {
  object_keys: 'object_keys(func, data)',
  for_in: 'for_in(func, data)',
  forOf: 'forOf(func, data)'
})
