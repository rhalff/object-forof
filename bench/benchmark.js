'use strict'

const now = require('performance-now')
const assert = require('assert')
const util = require('./util')

const forOf = require('../index')
const objectKeys = util.object_keys
const forIn = util.for_in

const data = require('./data/bench_data.json')

const func = (key, key2, obj) => [key, key2, obj]

function bench_forIn () {
  const start = now()
  const res = forIn(func, data)
  return {
    time: now() - start,
    res: res
  }
}

function bench_objectKeys () {
  const start = now()
  const res = objectKeys(func, data)
  return {
    time: now() - start,
    res: res
  }
}

function bench_forOf () {
  const start = now()
  const res = forOf(func, data)
  return {
    time: now() - start,
    res: res
  }
}

console.log('##nr forIn objectKeys forOf')

for (var i = 0; i < 1e4; i++) {
  const res1 = bench_forIn()
  const res2 = bench_objectKeys()
  const res3 = bench_forOf()
  const a = [i / 100, res1.time, res2.time, res3.time]
  if ((i % 100) === 0) {
    console.log(a.join(' '))
  }
  assert.deepEqual(a[1].res, a[2].res)
  assert.deepEqual(a[2].res, a[3].res)
}
