# get_local_vector_components

<a id="compolyx.Rosette.get_local_vector_components"></a>

## Rosette.get_local_vector_components(vector)

Returns local rosette vector components from global vector components.

### Parameters
  - (x, y, z): Components in global (parallel) coordinates.

:returns (x,y,z)
: x = x for PARALLEL, and r for CYLINDRICAL, RADIAL and SPHERICAL
  y = y for PARALLEL, and phi for CYLINDRICAL, RADIAL and SPHERICAL
  z = z for PARALLEL, CYLINDRICAL and RADIAL, and theta for SPHERICAL
  Coordinate system type: Give phi and theta in RAD.

### Usage
  ```pycon
  >>> rosette.get_local_vector_components((1.,2.,3.))
  ```
