# get_adjacent_topo_edges_of_topo_edges

<a id="ansys.meshing.prime.TopoData.get_adjacent_topo_edges_of_topo_edges"></a>

#### TopoData.get_adjacent_topo_edges_of_topo_edges(topo_edges)

Get the adjacent topoedges for the provided topoedge ids.

* **Parameters:**

  **topo_edges**
  : Ids of the topoedge.

* **Returns:**

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Returns the list of adjacent topoedge ids.

* **Return type:**

  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Examples

```pycon
>>> topo_edges_of_topo_edges = topo_data.get_adjacent_topo_edges_of_topo_edges(topo_edges)
```

<!-- !! processed by numpydoc !! -->
