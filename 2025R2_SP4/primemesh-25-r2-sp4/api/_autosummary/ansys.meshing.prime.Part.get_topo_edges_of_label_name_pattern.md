# get_topo_edges_of_label_name_pattern

<a id="ansys.meshing.prime.Part.get_topo_edges_of_label_name_pattern"></a>

#### Part.get_topo_edges_of_label_name_pattern(label_name_pattern, name_pattern_params)

Get topoedge ids of labels with name matching the given name pattern.

* **Parameters:**

  **label_name_pattern**
  : Name pattern to be matched with label name.

  **name_pattern_params**
  : Name pattern parameters used to match label name pattern.

* **Returns:**

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Return the ids of topoedges.

* **Return type:**

  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Examples

```pycon
>>> topo_edges = part.get_topo_edges_of_label_name_pattern(
>>>                   label_name_pattern = "edge_label",
>>>                   params = prime.NamePatternParams(model=model))
```

<!-- !! processed by numpydoc !! -->
