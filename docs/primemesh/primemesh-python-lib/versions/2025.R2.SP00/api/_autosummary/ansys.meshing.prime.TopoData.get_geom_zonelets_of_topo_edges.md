# get_geom_zonelets_of_topo_edges

<a id="ansys.meshing.prime.TopoData.get_geom_zonelets_of_topo_edges"></a>

#### TopoData.get_geom_zonelets_of_topo_edges(topo_edges)

Get the geometry edge zonelets for the provided topoedge ids.

* **Parameters:**

  **topo_edges**
  : Ids of the topoedges.

* **Returns:**

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Return the geometry edge zonelet ids.

* **Return type:**

  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Examples

```pycon
>>> geom_edge_zonelets = topo_data.get_geom_zonelets_of_topo_edges(topo_edges)
```

<!-- !! processed by numpydoc !! -->
