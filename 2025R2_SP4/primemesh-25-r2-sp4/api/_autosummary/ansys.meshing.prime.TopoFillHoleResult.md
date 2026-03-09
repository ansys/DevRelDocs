# TopoFillHoleResult

<a id="ansys.meshing.prime.TopoFillHoleResult"></a>

### *class* ansys.meshing.prime.TopoFillHoleResult(model=None, new_topo_faces_created=None, error_code=None, json_data=None, \*\*kwargs)

Results associated with fill holes in topology operations.

* **Parameters:**

  **model: Model**
  : Model to create a `TopoFillHoleResult` object with default parameters.

  **new_topo_faces_created: Iterable[int], optional**
  : Ids of new topofaces created.

  **error_code: ErrorCode, optional**
  : Error code associated with a wrap operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `TopoFillHoleResult` object with provided parameters.

### Examples

```pycon
>>> topo_fill_hole_result = prime.TopoFillHoleResult(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`TopoFillHoleResult.print_default`](ansys.meshing.prime.TopoFillHoleResult.print_default.md#ansys.meshing.prime.TopoFillHoleResult.print_default)()   | Print the default values of `TopoFillHoleResult` object.   |
| [`TopoFillHoleResult.set_default`](ansys.meshing.prime.TopoFillHoleResult.set_default.md#ansys.meshing.prime.TopoFillHoleResult.set_default)([...])    | Set the default values of the `TopoFillHoleResult` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| [`TopoFillHoleResult.error_code`](ansys.meshing.prime.TopoFillHoleResult.error_code.md#ansys.meshing.prime.TopoFillHoleResult.error_code)                                     | Error code associated with a wrap operation.   |
| [`TopoFillHoleResult.new_topo_faces_created`](ansys.meshing.prime.TopoFillHoleResult.new_topo_faces_created.md#ansys.meshing.prime.TopoFillHoleResult.new_topo_faces_created) | Ids of new topofaces created.                  |
<!-- vale on -->