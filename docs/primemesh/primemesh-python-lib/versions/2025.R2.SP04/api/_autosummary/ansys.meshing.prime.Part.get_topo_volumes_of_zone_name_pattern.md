# get_topo_volumes_of_zone_name_pattern

<a id="ansys.meshing.prime.Part.get_topo_volumes_of_zone_name_pattern"></a>

#### Part.get_topo_volumes_of_zone_name_pattern(zone_name_pattern, name_pattern_params)

Gets the topovolume ids of zones with name matching the given name pattern.

* **Parameters:**

  **zone_name_pattern**
  : Name pattern to be matched with zone name.

  **name_pattern_params**
  : Name pattern parameters used to match zone name pattern.

* **Returns:**

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Returns topovolume ids of zones with name matching the name pattern.

* **Return type:**

  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> topo_volumes = part.get_topo_volumes_of_zone_name_pattern(zone_name_pattern = "solid*",
name_pattern_params = prime.NamePatternParams(model = model))
```

<!-- !! processed by numpydoc !! -->
