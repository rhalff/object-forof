### V8 tracing

Usage:
```
node prepare.js
```

Which creates scripts with self contained test data:
```
bat/for_in.js
bat/forOf.js
bat/object_keys.js
```

Trace:
```
d8 --trace-opt-verbose bat/for_in.js
d8 --trace-opt-verbose bat/forOf.js
d8 --trace-opt-verbose bat/object_keys.js
```

Links:

 - http://mrale.ph/irhydra/2/
 - http://v8-io12.appspot.com/index.html
 - https://github.com/thlorenz/v8-perf/blob/master/performance-profiling.md
 - https://gist.github.com/kevincennis/0cd2138c78a07412ef21
 - https://groups.google.com/forum/#!topic/v8-users/hsUrt4I2D98
 - https://groups.google.com/forum/#!topic/v8-users/BrmJ7AQIwfc
 - https://codereview.chromium.org/1751873002/
 - https://www.chromium.org/developers/creating-v8-profiling-timeline-plots
 - https://www.quora.com/JavaScript-programming-language/Are-Javascript-functions-like-map-reduce-and-filter-already-optimized-for-traversing-array/answer/Quildreen-Motta
