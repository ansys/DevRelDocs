# ansys.meshing.prime.ComputeVolumesParams.priority_ordered_names

<a id="ansys.meshing.prime.ComputeVolumesParams.priority_ordered_names"></a>

#### *property* ComputeVolumesParams.priority_ordered_names *: [List](https://docs.python.org/3.11/library/typing.html#typing.List)[[str](https://docs.python.org/3.11/library/stdtypes.html#str)]*

Zone names for volumes are identified based on the priority in the list. Position index of name in the list determines its priority. Lower the index, higher the priority. Name with highest priority among names from volumeNamingType of face zonelets is identified as zone name for volume. Lowest priority is assigned to all names that are not in the list. When all names identified are of lowest priority, names having higher surface area of faces zonelets are identified as zone name for volume.

<!-- !! processed by numpydoc !! -->
