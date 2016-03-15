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
