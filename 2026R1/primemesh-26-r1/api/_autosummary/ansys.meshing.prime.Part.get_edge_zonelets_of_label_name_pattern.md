# get_edge_zonelets_of_label_name_pattern

<a id="ansys.meshing.prime.Part.get_edge_zonelets_of_label_name_pattern"></a>

#### Part.get_edge_zonelets_of_label_name_pattern(label_name_pattern, name_pattern_params)

Get edge zonelet ids of labels with name matching the given name pattern.

* **Parameters:**

  **label_name_pattern**
  : Name pattern to be matched with label name.

  **name_pattern_params**
  : Name pattern parameters used to match label name pattern.

* **Returns:**
  
  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Return edge zonelet ids of labels with name matching the name pattern. Returns an empty list for a topology part.

* **Return type:**

  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Examples

```pycon
>>> name_pattern_params = prime.NamePatternParams(model = model)
>>> edge_zonelets = part.get_edge_zonelets_of_label_name_pattern("wall*", name_pattern_params)
```

<!-- !! processed by numpydoc !! -->
