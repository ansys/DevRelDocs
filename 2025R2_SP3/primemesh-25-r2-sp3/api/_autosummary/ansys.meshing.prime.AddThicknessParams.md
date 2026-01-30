# AddThicknessParams

<a id="ansys.meshing.prime.AddThicknessParams"></a>

### *class* ansys.meshing.prime.AddThicknessParams(model=None, thickness=None, reverse_face_normal=None, suggested_part_name=None, fix_intersections=None, json_data=None, \*\*kwargs)

Parameters to add thickness for a given plane.

* **Parameters:**

  **model: Model**
  : Model to create a `AddThicknessParams` object with default parameters.

  **thickness: float, optional**
  : To assign the offset distance of inflation.

  **reverse_face_normal: bool, optional**
  : To assign the direction of inflation.

  **suggested_part_name: str, optional**
  : Suggested part name for created patching surfaces.

  **fix_intersections: bool, optional**
  : Fix intersections in concave regions.

  **json_data: dict, optional**
  : JSON dictionary to create a `AddThicknessParams` object with provided parameters.

### Examples

```pycon
>>> add_thickness_params = prime.AddThicknessParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`AddThicknessParams.print_default`](ansys.meshing.prime.AddThicknessParams.print_default.md#ansys.meshing.prime.AddThicknessParams.print_default)()           | Print the default values of `AddThicknessParams` object.   |
| [`AddThicknessParams.set_default`](ansys.meshing.prime.AddThicknessParams.set_default.md#ansys.meshing.prime.AddThicknessParams.set_default)([thickness, ...]) | Set the default values of the `AddThicknessParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`AddThicknessParams.fix_intersections`](ansys.meshing.prime.AddThicknessParams.fix_intersections.md#ansys.meshing.prime.AddThicknessParams.fix_intersections)       | Fix intersections in concave regions.              |
| [`AddThicknessParams.reverse_face_normal`](ansys.meshing.prime.AddThicknessParams.reverse_face_normal.md#ansys.meshing.prime.AddThicknessParams.reverse_face_normal) | To assign the direction of inflation.              |
| [`AddThicknessParams.suggested_part_name`](ansys.meshing.prime.AddThicknessParams.suggested_part_name.md#ansys.meshing.prime.AddThicknessParams.suggested_part_name) | Suggested part name for created patching surfaces. |
| [`AddThicknessParams.thickness`](ansys.meshing.prime.AddThicknessParams.thickness.md#ansys.meshing.prime.AddThicknessParams.thickness)                               | To assign the offset distance of inflation.        |
<!-- vale on -->