# ansys.meshing.prime.SurferParams.smooth_size_transition

<a id="ansys.meshing.prime.SurferParams.smooth_size_transition"></a>

#### *property* SurferParams.smooth_size_transition *: [bool](https://docs.python.org/3.11/library/functions.html#bool)*

Option to generate mesh with smooth size transition from neighbors of selected surfaces. This includes neighboring face edge sizes in sizing provided for surface meshing to achieve smooth size transition.

### Notes

- Input facets or mesh with finer sizes compared to neighboring face edge sizes are required for this option to work.
- Valid min, max sizes and growth rate are required to include the neighboring face edges sizes in sizing.

<!-- !! processed by numpydoc !! -->
