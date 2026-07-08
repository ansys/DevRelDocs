# get_global_vector_components

<a id="compolyx.Rosette.get_global_vector_components"></a>

## Rosette.get_global_vector_components(vector)

Gets global vector components from local rosette vector components
CYLINDRICAL,  RADIAL and SPHERICAL coord sys type: Give phi and theta in RAD

### Parameters
  - (x, y, z): x = x for PARALLEL, r for CYLINDRICAL, RADIAL and SPHERICAL)
    : y = y for PARALLEL, phi for CYLINDRICAL, RADIAL and SPHERICAL
      z = z for PARALLEL, CYLINDRICAL, RADIAL and theta for SPHERICAL)
### Usage
  ```pycon
  >>> rosette.get_global_vector_components((1.,2.,3.))
  ```
