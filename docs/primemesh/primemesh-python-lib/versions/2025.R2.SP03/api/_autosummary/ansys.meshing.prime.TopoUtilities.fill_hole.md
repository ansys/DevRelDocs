# fill_hole

<a id="ansys.meshing.prime.TopoUtilities.fill_hole"></a>

#### TopoUtilities.fill_hole(topo_edges, params)

Fill holes bounded by given topoedges.

* **Parameters:**

  **topo_edges**
  : Ids of topoedges to be used to find holes.

  **params**
  : Parameters to fill holes.

* **Returns:**

  [`TopoFillHoleResult`](ansys.meshing.prime.TopoFillHoleResult.md#ansys.meshing.prime.TopoFillHoleResult)
  : Return the TopoFillHoleResult.

* **Return type:**

  [`TopoFillHoleResult`](ansys.meshing.prime.TopoFillHoleResult.md#ansys.meshing.prime.TopoFillHoleResult)

### Examples

```pycon
>>> results = topo_utils.fill_hole(topo_edges, params)
```

<!-- !! processed by numpydoc !! -->
