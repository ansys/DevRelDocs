# Data structures

In this section we present the data model of DPF.

It describes in detail the structure of the different data containers available and the associated conventions:
- the ``Field`` and its subtypes, which represent mathematical fields of simulation data, arrays of data
- the ``MeshedRegion``, which represents a discretized region of physical space
- the ``TimeFreqSupport``, which represents a discretized region of temporal or frequency space 
- the ``GenericDataContainer``, which is a data structure able to hold inhomogeneous data types as a map
- the ``DataTree``, which stores DPF known types as named attributes of a data tree with potential sub-trees


## Field

A DPF field represents a physical field, which associates data to each point in a region of a space – either physical or not.
In mathematics and physics, a field is a function associating data to each point in a region of a space – either physical or not.

In DPF, any field of data consisting of a multidimensional array of floats, integers, or strings, is stored in a data structure called a ``field``.

It associates elementary data to every point in a discretized region of space (a mesh), of time, of frequency, or of any other type of interest.

The data may either be dimensionless or have a unit.

Examples of data represented by fields are:
- the density repartition in a stable flow in a pipe, which is a scalar field on a region of space
- the deformation of a car after a crash, which is a 3D vector field on a region of space
- the variation of the plastic strain at the middle of a bent bar during a fatigue analysis, which is a matrix field on a region of pseudotime
- the global kinetic energy of a dropped ball over time, which is a scalar field on a region of time
- the maximum deflection of an airplane wing for different vibration modes, which is a 3D field on a region/set of frequencies
- the maximum pitch in decibels of a car engine running at different regimes, which is a scalar field on a region of rpms


### Multilayered shells


For models containing shell elements with multiple through-the-thickness integration points, DPF follows the ``top-bottom-mid`` convention.



## Meshes
