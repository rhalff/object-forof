"use strict";
/*
Example output:

module.exports = function objk (fn, o0, argLength) {
  var res = []
  var k0 = Object.keys(o0)
  for (var a = 0; a < k0.length; a++) {
    var o1 = o0[k0[a]]
    if (argLength > 1 && isObject(o1)) {
      var k1 = Object.keys(o1)
      for (var b = 0; b < k1.length; b++) {
        var o2 = o1[k1[b]]
        if (argLength > 2 && isObject(o2)) {
          throw Error('more than 2 arguments not supported')
        } else {
          var ret = fn (k0[a], k1[b], o2)
          if (ret !== undefined) {
            res.push(ret)
          }
        }
      }
    } else {
      var ret = fn (k0[a], o1)
      if (ret !== undefined) {
        res.push(ret)
      }
    }
  }
  return res
}
*/
function gen(length) {
    if (length === void 0) { length = 10; }
    var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    var head = [
        'function isObject(o) { return typeof o === \'object\'; }',
        'module.exports = function objk (fn, o0, argLength, res) {'
    ];
    var tail = [];
    var kpath = [];
    var ind1 = '  ';
    for (var i = 0; i < length; i++) {
        var k = "k" + i;
        var o = "o" + i;
        var on = "o" + (i + 1);
        var j = alpha[i];
        kpath.push(k + "[" + j + "]");
        head.push(ind1 + "var " + k + " = Object.keys(" + o + ")");
        head.push(ind1 + "for (var " + j + " = 0; " + j + " < " + k + ".length; " + j + "++) {");
        head.push(ind1 + "  var " + on + " = " + o + "[" + k + "[" + j + "]]");
        head.push(ind1 + "  if (argLength > " + (i + 1) + " && isObject(" + on + ")) {");
        // reversed
        tail.push(ind1 + "}");
        tail.push(ind1 + "  }");
        tail.push(ind1 + "    }");
        tail.push(ind1 + "      res.push(ret)");
        tail.push(ind1 + "    if (ret !== undefined) {");
        tail.push(ind1 + "    var ret = fn (" + kpath.join(', ') + ", " + on + ")");
        tail.push(ind1 + "  } else {");
        ind1 = ' '.repeat(ind1.length + 4);
    }
    return head.concat(["  throw Error('more than " + length + " arguments not supported')"], tail.reverse(), ['  return res', '}']).join('\n');
}
console.log(gen(10));
//# sourceMappingURL=genk.js.map