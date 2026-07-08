# SubtractVolumesParams

<a id="ansys.meshing.prime.SubtractVolumesParams"></a>

### *class* ansys.meshing.prime.SubtractVolumesParams(model=None, ignore_face_zonelets=None, check_cutters=None, keep_cutters=None, json_data=None, \*\*kwargs)

Parameters to control the volume subtract operation.

* **Parameters:**

  **model: Model**
  : Model to create a `SubtractVolumesParams` object with default parameters.

  **ignore_face_zonelets: Iterable[int], optional**
  : Face zonelet ids that subtract volumes should not remove (for example, periodic or fluid cap zonelets). If ignore face zonelets are provided, then the target volumes after subtract operation need to be recomputed.

  **check_cutters: bool, optional**
  : Option to manage intersecting cutter volumes. When check cutters is False an error message is provided if multiple cutters intersect. Overlapping cutter volumes are not supported.

  **keep_cutters: bool, optional**
  : Option to retain cutter volumes.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `SubtractVolumesParams` object with provided parameters.

### Examples

```pycon
>>> subtract_volumes_params = prime.SubtractVolumesParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`SubtractVolumesParams.print_default`](ansys.meshing.prime.SubtractVolumesParams.print_default.md#ansys.meshing.prime.SubtractVolumesParams.print_default)()   | Print the default values of `SubtractVolumesParams` object.   |
| [`SubtractVolumesParams.set_default`](ansys.meshing.prime.SubtractVolumesParams.set_default.md#ansys.meshing.prime.SubtractVolumesParams.set_default)([...])    | Set the default values of the `SubtractVolumesParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`SubtractVolumesParams.check_cutters`](ansys.meshing.prime.SubtractVolumesParams.check_cutters.md#ansys.meshing.prime.SubtractVolumesParams.check_cutters)                      | Option to manage intersecting cutter volumes.                                                           |
| [`SubtractVolumesParams.ignore_face_zonelets`](ansys.meshing.prime.SubtractVolumesParams.ignore_face_zonelets.md#ansys.meshing.prime.SubtractVolumesParams.ignore_face_zonelets) | Face zonelet ids that subtract volumes should not remove (for example, periodic or fluid cap zonelets). |
| [`SubtractVolumesParams.keep_cutters`](ansys.meshing.prime.SubtractVolumesParams.keep_cutters.md#ansys.meshing.prime.SubtractVolumesParams.keep_cutters)                         | Option to retain cutter volumes.                                                                        |
<!-- vale on -->