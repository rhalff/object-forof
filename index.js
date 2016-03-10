module.exports = function forOf () {
  var args = Array.prototype.slice.call(arguments)
  var fn = args.pop()
  var argLength = fn.length - 1
  var obj = args.pop()


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
