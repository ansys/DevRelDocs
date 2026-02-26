# get_global_coordinates

<a id="compolyx.Rosette.get_global_coordinates"></a>

#### Rosette.get_global_coordinates(coordinates)

Evaluates the global coordinates of a point given in local rosette coordinates:
CYLINDRICAL,  RADIAL, and SPHERICAL. Coordinate system type: Give phi and theta in RAD.

### Parameters:
  - (x, y, z): x = x for PARALLEL, and r for CYLINDRICAL, RADIAL and SPHERICAL
    : y = y for PARALLEL, and phi for CYLINDRICAL, RADIAL and SPHERICAL
      z = z for PARALLEL, CYLINDRICAL and RADIAL, and theta for SPHERICAL
### Usage:
  ```pycon
  >>> rosette.get_global_coordinates((1.,2.,3.))
  ```
