module.exports = function objk (fn, o0, argLength) {
  var res = []
  var k0 = Object.keys(o0)
  for (var a = 0; a < k0.length; a++) {
    var o1 = o0[k0[a]]
    if (argLength > 1) {
      var k1 = Object.keys(o1)
      for (var b = 0; b < k1.length; b++) {
        var o2 = o1[k1[b]]
        if (argLength > 2) {
          var k2 = Object.keys(o2)
          for (var c = 0; c < k2.length; c++) {
            var o3 = o2[k2[c]]
            if (argLength > 3) {
              var k3 = Object.keys(o3)
              for (var d = 0; d < k3.length; d++) {
                var o4 = o3[k3[d]]
                if (argLength > 4) {
                  var k4 = Object.keys(o4)
                  for (var e = 0; e < k4.length; e++) {
                    var o5 = o4[k4[e]]
                    if (argLength > 5) {
                      var k5 = Object.keys(o5)
                      for (var f = 0; f < k5.length; f++) {
                        var o6 = o5[k5[f]]
                        if (argLength > 6) {
                          var k6 = Object.keys(o6)
                          for (var g = 0; g < k6.length; g++) {
                            var o7 = o6[k6[g]]
                            if (argLength > 7) {
                              var k7 = Object.keys(o7)
                              for (var h = 0; h < k7.length; h++) {
                                var o8 = o7[k7[h]]
                                if (argLength > 8) {
                                  var k8 = Object.keys(o8)
                                  for (var i = 0; i < k8.length; i++) {
                                    var o9 = o8[k8[i]]
                                    if (argLength > 9) {
                                      var k9 = Object.keys(o9)
                                      for (var j = 0; j < k9.length; j++) {
                                        var o10 = o9[k9[j]]
                                        if (argLength > 10) {
  throw Error('more than 10 arguments not supported')
                                        } else {
                                          var ret = fn (k0[a], k1[b], k2[c], k3[d], k4[e], k5[f], k6[g], k7[h], k8[i], k9[j], o10)
                                          if (ret !== undefined) {
                                            res.push(ret)
                                          }
                                        }
                                      }
                                    } else {
                                      var ret = fn (k0[a], k1[b], k2[c], k3[d], k4[e], k5[f], k6[g], k7[h], k8[i], o9)
                                      if (ret !== undefined) {
                                        res.push(ret)
                                      }
                                    }
                                  }
                                } else {
                                  var ret = fn (k0[a], k1[b], k2[c], k3[d], k4[e], k5[f], k6[g], k7[h], o8)
                                  if (ret !== undefined) {
                                    res.push(ret)
                                  }
                                }
                              }
                            } else {
                              var ret = fn (k0[a], k1[b], k2[c], k3[d], k4[e], k5[f], k6[g], o7)
                              if (ret !== undefined) {
                                res.push(ret)
                              }
                            }
                          }
                        } else {
                          var ret = fn (k0[a], k1[b], k2[c], k3[d], k4[e], k5[f], o6)
                          if (ret !== undefined) {
                            res.push(ret)
                          }
                        }
                      }
                    } else {
                      var ret = fn (k0[a], k1[b], k2[c], k3[d], k4[e], o5)
                      if (ret !== undefined) {
                        res.push(ret)
                      }
                    }
                  }
                } else {
                  var ret = fn (k0[a], k1[b], k2[c], k3[d], o4)
                  if (ret !== undefined) {
                    res.push(ret)
                  }
                }
              }
            } else {
              var ret = fn (k0[a], k1[b], k2[c], o3)
              if (ret !== undefined) {
                res.push(ret)
              }
            }
          }
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
