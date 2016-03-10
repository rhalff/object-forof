module.exports = function forOf () {
  var args = Array.prototype.slice.call(arguments)
  var fn = args.pop()
  var obj = args.pop()
  args = Array.isArray(args[0]) ? args[0] : args

  // support dot notation
  if (args[0].indexOf('.') >= 0) {
    if (args.length === 1) {
      args = args[0].split('.')
    } else {
      throw Error('dot notation mode expects only 3 arguments (path, fn, obj)')
    }
  }

  if (typeof obj !== 'object') {
    throw Error('last argument must be an object')
  }

  if (typeof fn !== 'function') {
    throw Error('second last argument must be a function')
  }

  function iterate (obj, fnArgs) {
    for (var key in obj) {
      var myArgs = fnArgs.slice()
      if (obj.hasOwnProperty(key)) {
        myArgs.push(key)
        if (myArgs.length < args.length) {
          iterate(obj[key], myArgs)
        } else if (myArgs.length === args.length) {
          myArgs.push(obj[key])
          fn.apply(this, myArgs)
        }
      }
    }
  }

  iterate(obj, [])
}
