'use strict'

/**
 * Uses for in to go 2 levels deep
 */
function for_in (fn, data) {
  const res = []
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      for (let key2 in data[key]) {
        if (data[key].hasOwnProperty(key2)) {
          const ret = fn(key, key2, data[key][key2])
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
  const res = []
  Object.keys(data).forEach((key) => {
    Object.keys(data[key]).forEach((key2) => {
      const ret = fn(key, key2, data[key][key2])
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
