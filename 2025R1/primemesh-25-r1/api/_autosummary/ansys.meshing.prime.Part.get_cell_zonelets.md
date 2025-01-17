# get_cell_zonelets

<a id="ansys.meshing.prime.Part.get_cell_zonelets"></a>

#### Part.get_cell_zonelets()

Get the cell zonelet ids in the part.

* **Returns:**

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Return the ids of cell zonelets. Returns an empty list for a topology part.

* **Return type:**

  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Examples

```pycon
>>> from ansys.meshing.prime import Part
>>> cell_zonelet_ids = part.get_cell_zonelets()
```

<!-- !! processed by numpydoc !! -->

