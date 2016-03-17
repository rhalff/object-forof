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

function recursive (fn, obj) {
  var res = []
  var argLength = fn.length

  function recurse (obj, depth, args) {
    var ret;
    var keys = Object.keys(obj)
    for (var a = 0; a < keys.length; a++) {
      if (argLength > depth && isObject(obj[keys[a]])) {
        recurse (obj[keys[a]], depth + 1, args.concat([keys[a]]))
      } else {
        switch (args.length) {
          case 0:
            ret = fn(keys[a], obj[keys[a]])
            break;
          case 1:
            ret = fn(args[0], keys[a], obj[keys[a]])
            break;
          case 2:
            ret = fn(args[0], args[1], keys[a], obj[keys[a]])
            break;
          case 3:
            ret = fn(args[0], args[1], args[2], keys[a], obj[keys[a]])
            break;
          case 4:
            ret = fn(args[0], args[1], args[2], args[3], keys[a], obj[keys[a]])
            break;
          case 5:
            ret = fn(args[0], args[1], args[2], args[3], keys[a], obj[keys[a]])
            break;
          case 6:
            ret = fn(args[0], args[1], args[2], args[3], args[4], keys[a], obj[keys[a]])
            break;
          default:
            ret = fn.apply (this, args.concat([keys[a], obj[keys[a]]]))
        }
        if (ret !== undefined) {
          res.push(ret)
        }
      }
    }
  }
  recurse (obj, 1, [])
  return res
}

function iteration (fn, obj) {
  var res = []
  var argLength = fn.length
  function iterate (obj, fnArgs) {
    for (var key in obj) {
      var myArgs = fnArgs.slice()
      if (obj.hasOwnProperty(key)) {
        myArgs.push(key)
        if (myArgs.length < argLength) {
          iterate(obj[key], myArgs)
        } else {
          myArgs.push(obj[key])
          var ret = fn.apply(this, myArgs)
          if (ret !== undefined) {
            res.push(ret)
          }
        }
      }
    }
  }
  iterate(obj, [])
  return res
}


module.exports = {
  for_in: for_in,
  object_keys: object_keys,
  recursive: recursive,
  iteration: iteration
}

