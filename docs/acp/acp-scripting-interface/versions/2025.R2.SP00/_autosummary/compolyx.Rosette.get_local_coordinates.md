# get_local_coordinates

<a id="compolyx.Rosette.get_local_coordinates"></a>

#### Rosette.get_local_coordinates(coordinates)

Evaluates the local rosette coordinates of a point given in global coordinates:

* **Parameters:**
  - (x, y, z): Coordinates in global (parallel) coordinates.

:returns (x,y,z)
: x = x for PARALLEL, and r for CYLINDRICAL, RADIAL and SPHERICAL
  y = y for PARALLEL, and phi for CYLINDRICAL, RADIAL and SPHERICAL
  z = z for PARALLEL, CYLINDRICAL and RADIAL, and theta for SPHERICAL
  Coordinate system type: Give phi and theta in RAD.

* **Usage:**
  ```pycon
  >>> rosette.get_local_coordinates((1.,2.,3.))
  ```
