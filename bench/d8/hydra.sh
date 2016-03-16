#!/bin/sh
D8=/srv/rhalff/git/v8/out/native/d8
SCRIPT=./bat/forOf.js

"$D8" --trace-hydrogen \
--trace-phase=Z \
--trace-deopt \
--code-comments \
--hydrogen-track-positions \
--redirect-code-traces \
--redirect-code-traces-to=code.asm "$SCRIPT"
