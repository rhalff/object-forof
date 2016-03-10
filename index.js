module.exports = function forOf (fn, obj) {
  var argLength = fn.length - 1

  if (typeof fn !== 'function') {
    throw Error('second last argument must be a function')
  }

  if (typeof obj !== 'object') {
    throw Error('last argument must be an object')
  }

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
