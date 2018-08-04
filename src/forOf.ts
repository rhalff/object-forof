import * as forOf10 from './10'

export type ForOfFunction = (...args: any[]) => any 

export function forOf (fn: ForOfFunction, source) {
  if (typeof fn !== 'function') {
    throw new TypeError('First argument must be a function')
  }

  if (typeof source !== 'object') {
    throw new TypeError('Second argument must be an object')
  }

  const argLength = fn.length - 1

  function iterate (this: any, obj: object, fnArgs, res) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const myArgs = fnArgs.slice()

        myArgs.push(key)
        if (myArgs.length < argLength) {
          iterate(obj[key], myArgs, res)
        } else {
          myArgs.push(obj[key])

          const ret = fn.apply(this, myArgs)

          if (ret !== undefined) {
            res.push(ret)
          }
        }
      }
    }
  }

  if (argLength > 10) {
    return iterate(source, [], [])
  }

  return forOf10(fn, source, argLength, [])
}
