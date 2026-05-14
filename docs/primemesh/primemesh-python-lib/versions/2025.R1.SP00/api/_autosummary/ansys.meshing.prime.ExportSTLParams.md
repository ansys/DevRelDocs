# ExportSTLParams

<a id="ansys.meshing.prime.ExportSTLParams"></a>

### *class* ansys.meshing.prime.ExportSTLParams(model=None, part_ids=None, json_data=None, \*\*kwargs)

Parameters to export STL file.

* **Parameters:**

  **model: Model**
  : Model to create a `ExportSTLParams` object with default parameters.

  **part_ids: Iterable[int], optional**
  : Ids of parts to export.

  **json_data: dict, optional**
  : JSON dictionary to create a `ExportSTLParams` object with provided parameters.

### Examples

```pycon
>>> export_stlparams = prime.ExportSTLParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| [`ExportSTLParams.print_default`](ansys.meshing.prime.ExportSTLParams.print_default.md#ansys.meshing.prime.ExportSTLParams.print_default)()     | Print the default values of `ExportSTLParams` object.   |
| [`ExportSTLParams.set_default`](ansys.meshing.prime.ExportSTLParams.set_default.md#ansys.meshing.prime.ExportSTLParams.set_default)([part_ids]) | Set the default values of the `ExportSTLParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| [`ExportSTLParams.part_ids`](ansys.meshing.prime.ExportSTLParams.part_ids.md#ansys.meshing.prime.ExportSTLParams.part_ids)   | Ids of parts to export.   |
<!-- vale on -->