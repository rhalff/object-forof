module.exports = function forIns (fn, obj, argLength) {
  var res = []
  for (var k0 in obj) {
    if (obj.hasOwnProperty(k0)) {
      if (argLength > 1) {
        for (var k1 in obj[k0]) {
          if (obj[k0].hasOwnProperty(k1)) {
            if (argLength > 2) {
              for (var k2 in obj[k0][k1]) {
                if (obj[k0][k1].hasOwnProperty(k2)) {
                  if (argLength > 3) {
                    for (var k3 in obj[k0][k1][k2]) {
                      if (obj[k0][k1][k2].hasOwnProperty(k3)) {
                        if (argLength > 4) {
                          for (var k4 in obj[k0][k1][k2][k3]) {
                            if (obj[k0][k1][k2][k3].hasOwnProperty(k4)) {
                              if (argLength > 5) {
                                for (var k5 in obj[k0][k1][k2][k3][k4]) {
                                  if (obj[k0][k1][k2][k3][k4].hasOwnProperty(k5)) {
                                    if (argLength > 6) {
                                      for (var k6 in obj[k0][k1][k2][k3][k4][k5]) {
                                        if (obj[k0][k1][k2][k3][k4][k5].hasOwnProperty(k6)) {
                                          if (argLength > 7) {
                                            for (var k7 in obj[k0][k1][k2][k3][k4][k5][k6]) {
                                              if (obj[k0][k1][k2][k3][k4][k5][k6].hasOwnProperty(k7)) {
                                                if (argLength > 8) {
                                                  for (var k8 in obj[k0][k1][k2][k3][k4][k5][k6][k7]) {
                                                    if (obj[k0][k1][k2][k3][k4][k5][k6][k7].hasOwnProperty(k8)) {
                                                      if (argLength > 9) {
                                                        for (var k9 in obj[k0][k1][k2][k3][k4][k5][k6][k7][k8]) {
                                                          if (obj[k0][k1][k2][k3][k4][k5][k6][k7][k8].hasOwnProperty(k9)) {
                                                            if (argLength > 10) {
   throw Error('more than 10 arguments not supported')
                                                            } else { var ret = fn(k0, k1, k2, k3, k4, k5, k6, k7, k8, k9,
                                                                obj[k0][k1][k2][k3][k4][k5][k6][k7][k8][k9])
                                                              if (ret !== undefined) res.push(ret) }
                                                          }
                                                        }
                                                      } else { var ret = fn(k0, k1, k2, k3, k4, k5, k6, k7, k8,
                                                          obj[k0][k1][k2][k3][k4][k5][k6][k7][k8])
                                                        if (ret !== undefined) res.push(ret) }
                                                    }
                                                  }
                                                } else { var ret = fn(k0, k1, k2, k3, k4, k5, k6, k7,
                                                    obj[k0][k1][k2][k3][k4][k5][k6][k7])
                                                  if (ret !== undefined) res.push(ret) }
                                              }
                                            }
                                          } else { var ret = fn(k0, k1, k2, k3, k4, k5, k6,
                                              obj[k0][k1][k2][k3][k4][k5][k6])
                                            if (ret !== undefined) res.push(ret) }
                                        }
                                      }
                                    } else { var ret = fn(k0, k1, k2, k3, k4, k5,
                                        obj[k0][k1][k2][k3][k4][k5])
                                      if (ret !== undefined) res.push(ret) }
                                  }
                                }
                              } else { var ret = fn(k0, k1, k2, k3, k4,
                                  obj[k0][k1][k2][k3][k4])
                                if (ret !== undefined) res.push(ret) }
                            }
                          }
                        } else { var ret = fn(k0, k1, k2, k3,
                            obj[k0][k1][k2][k3])
                          if (ret !== undefined) res.push(ret) }
                      }
                    }
                  } else { var ret = fn(k0, k1, k2,
                      obj[k0][k1][k2])
                    if (ret !== undefined) res.push(ret) }
                }
              }
            } else { var ret = fn(k0, k1,
                obj[k0][k1])
              if (ret !== undefined) res.push(ret) }
          }
        }
      } else { var ret = fn(k0,
          obj[k0])
        if (ret !== undefined) res.push(ret) }
    }
  }
  return res
}
