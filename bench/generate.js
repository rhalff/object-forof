'use strict'

const faker = require('faker')

const arr_times = 100
const obj_times = 10000
const flat = true

function gen () {
  const obj = {
    left: {card: {}},
    right: {card: {}},
    top: {card: {}},
    bottom: {card: {}}
  }
  const res = {}
  for (let i = 0; i < obj_times; i++) {
    const o = Object.assign({}, obj)
    o.left.card = faker.helpers.userCard()
    o.right.card = faker.helpers.userCard()
    o.top.card = faker.helpers.userCard()
    o.bottom.card = faker.helpers.userCard()
    res[faker.random.uuid()] = o
  }
  return res
}

if (flat) {
  console.log(JSON.stringify(gen(), null, 2))
} else {
  var res = []
  for (var i = 0; i < arr_times; i++) {
    res.push(gen())
  }
  console.log(JSON.stringify(res, null, 2))
}
