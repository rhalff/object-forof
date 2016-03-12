const forOf = require('object-forof')

const obj = {
  "col1": {
    "item1": "Test 1",
    "item2": "Test 2"
  },
  "col2": {
    "item3": "Test 3",
    "item4": "Test 4"
  },
}

forOf((col, item, val) => ({[item]: val, col: col}), obj)
