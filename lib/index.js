"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forOf10 = require("./10");
function forOf(fn, source) {
    if (typeof fn !== 'function') {
        throw new TypeError('First argument must be a function');
    }
    if (typeof source !== 'object') {
        throw new TypeError('Second argument must be an object');
    }
    var argLength = fn.length - 1;
    function iterate(obj, fnArgs, res) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var myArgs = fnArgs.slice();
                myArgs.push(key);
                if (myArgs.length < argLength) {
                    iterate(obj[key], myArgs, res);
                }
                else {
                    myArgs.push(obj[key]);
                    var ret = fn.apply(this, myArgs);
                    if (ret !== undefined) {
                        res.push(ret);
                    }
                }
            }
        }
    }
    if (argLength > 10) {
        return iterate(source, [], []);
    }
    return forOf10(fn, source, argLength, []);
}
exports.default = forOf;
//# sourceMappingURL=index.js.map