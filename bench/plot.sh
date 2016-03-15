#!/usr/bin/gnuplot
reset
set terminal png

set size 1,0.6

set xlabel "measurements"

set ylabel "time in ms"
set yrange [0:40]

set title "forOf Performance 27Mb json (one object)"
set key reverse Left outside
set grid

set style data linespoints

plot "bench/test.dat" using 1:2 title "forIn", \
""using 1:3 title "forEachKeys", \
""using 1:4 title "forOf", \
""using 1:5 title "gc"
#
