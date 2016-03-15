#!/usr/bin/gnuplot

set xlabel "Wavelength (Angstroms)"
set ylabel "Intensity of light (arbitrary scale)"
set title "A small section of the solar spectrum"

set key bottom right
set grid
plot [0:1000][0:100] "test.dat" using 1:2 with linespoints
