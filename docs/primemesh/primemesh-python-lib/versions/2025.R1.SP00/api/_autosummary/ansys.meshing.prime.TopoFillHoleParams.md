# TopoFillHoleParams

<a id="ansys.meshing.prime.TopoFillHoleParams"></a>

### *class* ansys.meshing.prime.TopoFillHoleParams(model=None, edges_to_exclude=None, suppress_boundary_after_hole_fill=None, fill_annular_hole=None, json_data=None, \*\*kwargs)

Parameters used to fill holes in topology.

* **Parameters:**

  **model: Model**
  : Model to create a `TopoFillHoleParams` object with default parameters.

  **edges_to_exclude: Iterable[int], optional**
  : TopoEdges to be excluded for cap creation.

  **suppress_boundary_after_hole_fill: bool, optional**
  : Option to preserve or suppress hole-boundary after filling holes.

  **fill_annular_hole: bool, optional**
  : Option for filling holes with annular bounding loops.

  **json_data: dict, optional**
  : JSON dictionary to create a `TopoFillHoleParams` object with provided parameters.

### Examples

```pycon
>>> topo_fill_hole_params = prime.TopoFillHoleParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`TopoFillHoleParams.print_default`](ansys.meshing.prime.TopoFillHoleParams.print_default.md#ansys.meshing.prime.TopoFillHoleParams.print_default)()   | Print the default values of `TopoFillHoleParams` object.   |
| [`TopoFillHoleParams.set_default`](ansys.meshing.prime.TopoFillHoleParams.set_default.md#ansys.meshing.prime.TopoFillHoleParams.set_default)([...])    | Set the default values of the `TopoFillHoleParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| [`TopoFillHoleParams.edges_to_exclude`](ansys.meshing.prime.TopoFillHoleParams.edges_to_exclude.md#ansys.meshing.prime.TopoFillHoleParams.edges_to_exclude)                                                    | TopoEdges to be excluded for cap creation.                        |
| [`TopoFillHoleParams.fill_annular_hole`](ansys.meshing.prime.TopoFillHoleParams.fill_annular_hole.md#ansys.meshing.prime.TopoFillHoleParams.fill_annular_hole)                                                 | Option for filling holes with annular bounding loops.             |
| [`TopoFillHoleParams.suppress_boundary_after_hole_fill`](ansys.meshing.prime.TopoFillHoleParams.suppress_boundary_after_hole_fill.md#ansys.meshing.prime.TopoFillHoleParams.suppress_boundary_after_hole_fill) | Option to preserve or suppress hole-boundary after filling holes. |
<!-- vale on -->