module.exports = function forOf (fn, obj) {
  if (typeof fn !== 'function') {
    throw TypeError('First argument must be a function')
  }

  if (typeof obj !== 'object') {
    throw TypeError('Second argument must be an object')
  }

  var argLength = fn.length - 1

  function iterate (obj, fnArgs) {
    for (var key in obj) {
      var myArgs = fnArgs.slice()
      if (obj.hasOwnProperty(key)) {
        myArgs.push(key)
        if (myArgs.length < argLength) {
          iterate(obj[key], myArgs)
        } else {
          myArgs.push(obj[key])
          fn.apply(this, myArgs)
        }
      }
    }
  }

  iterate(obj, [])
}
