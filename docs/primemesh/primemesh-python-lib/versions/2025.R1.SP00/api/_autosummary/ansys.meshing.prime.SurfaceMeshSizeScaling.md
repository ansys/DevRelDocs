# SurfaceMeshSizeScaling

<a id="ansys.meshing.prime.SurfaceMeshSizeScaling"></a>

### *class* ansys.meshing.prime.SurfaceMeshSizeScaling(model=None, factor=None, size_range_min=None, size_range_max=None, json_data=None, \*\*kwargs)

Settings related to scaling of surface mesh size for hexcore refinement.

* **Parameters:**

  **model: Model**
  : Model to create a `SurfaceMeshSizeScaling` object with default parameters.

  **factor: float, optional**
  : Value by which size should be multiplied when the size falls within a certain range. Applicable only when size field type is set to Geometric in AutoMeshParams structure.

  **size_range_min: float, optional**
  : Minimum size required to apply scaling. Applicable only when size field type is set to Geometric in AutoMeshParams structure.

  **size_range_max: float, optional**
  : Maximum size required to apply scaling. Applicable only when size field type is set to Geometric in AutoMeshParams structure.

  **json_data: dict, optional**
  : JSON dictionary to create a `SurfaceMeshSizeScaling` object with provided parameters.

### Examples

```pycon
>>> surface_mesh_size_scaling = prime.SurfaceMeshSizeScaling(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`SurfaceMeshSizeScaling.print_default`](ansys.meshing.prime.SurfaceMeshSizeScaling.print_default.md#ansys.meshing.prime.SurfaceMeshSizeScaling.print_default)()        | Print the default values of `SurfaceMeshSizeScaling` object.   |
| [`SurfaceMeshSizeScaling.set_default`](ansys.meshing.prime.SurfaceMeshSizeScaling.set_default.md#ansys.meshing.prime.SurfaceMeshSizeScaling.set_default)([factor, ...]) | Set the default values of the `SurfaceMeshSizeScaling` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`SurfaceMeshSizeScaling.factor`](ansys.meshing.prime.SurfaceMeshSizeScaling.factor.md#ansys.meshing.prime.SurfaceMeshSizeScaling.factor)                         | Value by which size should be multiplied when the size falls within a certain range.   |
| [`SurfaceMeshSizeScaling.size_range_max`](ansys.meshing.prime.SurfaceMeshSizeScaling.size_range_max.md#ansys.meshing.prime.SurfaceMeshSizeScaling.size_range_max) | Maximum size required to apply scaling.                                                |
| [`SurfaceMeshSizeScaling.size_range_min`](ansys.meshing.prime.SurfaceMeshSizeScaling.size_range_min.md#ansys.meshing.prime.SurfaceMeshSizeScaling.size_range_min) | Minimum size required to apply scaling.                                                |
<!-- vale on -->