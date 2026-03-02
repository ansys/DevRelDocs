# get_volumes_of_zone_name_pattern

<a id="ansys.meshing.prime.Part.get_volumes_of_zone_name_pattern"></a>

#### Part.get_volumes_of_zone_name_pattern(zone_name_pattern, name_pattern_params)

Get volume ids of zones with name matching the given name pattern.

* **Parameters:**

  **zone_name_pattern**
  : Name pattern to be matched with zone name.

  **name_pattern_params**
  : Name pattern parameters used to match zone name pattern.

* **Returns:**

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Return volume ids of zones with name matching the name pattern. Returns an empty list for a topology part.

* **Return type:**

  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Examples

```pycon
>>> name_pattern_params = prime.NamePatternParams(model = model)
>>> volumes = part.get_volumes_of_zone_name_pattern("body*", name_pattern_params)
```

<!-- !! processed by numpydoc !! -->
