const func = (key, key2, obj) => [key, key2, obj]

function bench_for_in () {
  return for_in(func, data)
}

function bench_object_keys () {
  return object_keys(func, data)
}

function bench_forOf () {
  return forOf(func, data)
}
