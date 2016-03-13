var opti = require('./10')

module.exports = function forOf (fn, obj) {
  if (typeof fn !== 'function') {
    throw new TypeError('First argument must be a function')
  }

  if (typeof obj !== 'object') {
    throw new TypeError('Second argument must be an object')
  }

  var argLength = fn.length - 1
  var res = []

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

  if (argLength.length > 10) {
    iterate(obj, [])
    return res
  }
  return opti(fn, obj, argLength)
}
