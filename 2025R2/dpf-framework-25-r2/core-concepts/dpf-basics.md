# DPF 101

This section serves as an introduction to the framework and its main concepts and vocabulary.


## Introduction



## Representing simulation data

In mathematics and physics, a field is a function associating data to each point in a region of a space – either physical or not.

In DPF, a ``field`` associates data to every point in a discretized region of space (a mesh), of time, of frequency, or of any other type of interest.

The data can be a single number, a vector, an array

The data may either be dimensionless or have a unit.

Examples of data represented by fields are:
- the density repartition in a stable flow in a pipe, which is a scalar field on a region of space
- the deformation of a car after a crash, which is a 3D vector field on a region of space
- the variation of the plastic strain at the middle of a bent bar during a fatigue analysis, which is a matrix field on a region of pseudotime
- the global kinetic energy of a dropped ball over time, which is a scalar field on a region of time
- the maximum deflection of an airplane wing for different vibration modes, which is a 3D field on a region/set of frequencies
- the maximum pitch in decibels of a car engine running at different regimes, which is a scalar field on a region of rpms

## Representing a region of space

