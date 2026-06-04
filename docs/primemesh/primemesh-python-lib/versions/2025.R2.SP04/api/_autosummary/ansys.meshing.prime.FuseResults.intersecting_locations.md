# ansys.meshing.prime.FuseResults.intersecting_locations

<a id="ansys.meshing.prime.FuseResults.intersecting_locations"></a>

#### *property* FuseResults.intersecting_locations *: [Iterable](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[float](https://docs.python.org/3.11/library/functions.html#float)]*

Locations where the fuse operation did not remove self-intersections in the input. Each location corresponds to a patch of faces where self-intersections exist. The number of elements in intersecting locations are in multiples of three. For example, zero, three, six, nine, and so on. Each triplet corresponds to coordinates in x, y, and z. For example, if the intersecting locations contain (a, b, c, d, e, f), then (a, b, c) represent the first location and (d, e, f) represent the second location.

**This is a beta parameter**. **The behavior and name may change in the future**.

<!-- !! processed by numpydoc !! -->
