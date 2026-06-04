# get_adjacent_topo_faces_of_topo_faces

<a id="ansys.meshing.prime.TopoData.get_adjacent_topo_faces_of_topo_faces"></a>

#### TopoData.get_adjacent_topo_faces_of_topo_faces(topo_faces)

Get the adjacent topofaces for the provided topoface ids.

* **Parameters:**

  **topo_faces**
  : Ids of the topoface.

* **Returns:**

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Returns the list of adjacent topoface ids.

* **Return type:**

  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Examples

```pycon
>>> topo_faces_of_topo_faces = topo_data.get_adjacent_topo_faces_of_topo_faces(topo_faces)
```

<!-- !! processed by numpydoc !! -->
