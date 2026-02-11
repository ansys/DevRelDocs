# get_topo_faces_of_zone_name_pattern

<a id="ansys.meshing.prime.Part.get_topo_faces_of_zone_name_pattern"></a>

#### Part.get_topo_faces_of_zone_name_pattern(zone_name_pattern, name_pattern_params)

Get topoface ids of zones with name matching the given name pattern.

* **Parameters:**

  **zone_name_pattern**
  : Name pattern to be matched with zone name.

  **name_pattern_params**
  : Name pattern parameters used to match zone name pattern.

* **Returns:**

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Return topoface ids of zones with name matching the name pattern.

* **Return type:**

  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Examples

```pycon
>>> name_pattern_params = prime.NamePatternParams(model = model)
>>> topo_faces = part.get_topo_faces_of_zone_name_pattern("wall*", name_pattern_params)
```

<!-- !! processed by numpydoc !! -->
