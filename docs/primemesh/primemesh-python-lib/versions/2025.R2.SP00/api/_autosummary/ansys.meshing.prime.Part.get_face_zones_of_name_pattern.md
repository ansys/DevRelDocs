# get_face_zones_of_name_pattern

<a id="ansys.meshing.prime.Part.get_face_zones_of_name_pattern"></a>

#### Part.get_face_zones_of_name_pattern(zone_name_pattern, name_pattern_params)

Get ids of face zones with name matching the given name pattern.

* **Parameters:**

  **zone_name_pattern**
  : Name pattern to be matched with zone name.

  **name_pattern_params**
  : Name pattern parameters used to match zone name pattern.

* **Returns:**

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Return list of face zone ids matching the zone name pattern.

* **Return type:**

  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Examples

```pycon
>>> name_pattern_params = prime.NamePatternParams(model = model)
>>> zones = part.get_face_zones_of_name_pattern("wall*", name_pattern_params)
```

<!-- !! processed by numpydoc !! -->
