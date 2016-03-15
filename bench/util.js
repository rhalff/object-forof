'use strict'

/**
 * Uses for in to go 2 levels deep
 */
function for_in (fn, data) {
  var res = []
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      for (var key2 in data[key]) {
        if (data[key].hasOwnProperty(key2)) {
          var ret = fn(key, key2, data[key][key2])
          if (ret !== undefined) {
            res.push(res)
          }
        }
      }
    }
  }
  return res
}

/**
 *
 * Uses Object.keys and forEach to go 2 levels deep
 *
 */
function object_keys (fn, data) {
  var res = []
  Object.keys(data).forEach((key) => {
    Object.keys(data[key]).forEach((key2) => {
      var ret = fn(key, key2, data[key][key2])
      if (ret !== undefined) {
        res.push(ret)
      }
    })
  })
  return res
}

module.exports = {
  for_in: for_in,
  object_keys: object_keys
}
