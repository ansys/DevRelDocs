# get_topo_volumes_of_label_name_pattern

<a id="ansys.meshing.prime.Part.get_topo_volumes_of_label_name_pattern"></a>

#### Part.get_topo_volumes_of_label_name_pattern(label_name_pattern, name_pattern_params)

Gets the topovolumes of labels of the given label name expression.

* **Parameters:**

  **label_name_pattern**
  : Name pattern to be matched with topovolume name

  **name_pattern_params**
  : Name pattern parameters used to match topovolume name pattern.

* **Returns:**

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Returns the ids of the topovolumes.

* **Return type:**

  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> topo_volumes = prime.get_topo_volumes_of_label_name_pattern(
>>>                      label_name_pattern = "solid*",
>>>                      params = prime.NamePatternParams(model=model))
```

<!-- !! processed by numpydoc !! -->
