# CheckMeshResults

<a id="ansys.meshing.prime.CheckMeshResults"></a>

### *class* ansys.meshing.prime.CheckMeshResults(model=None, has_non_positive_volumes=None, has_non_positive_areas=None, has_invalid_shape=None, has_left_handed_faces=None, error_code=None, warning_codes=None, json_data=None, \*\*kwargs)

Result associated with the check mesh operation.

* **Parameters:**
  **model: Model**
  : Model to create a `CheckMeshResults` object with default parameters.

  **has_non_positive_volumes: bool, optional**
  : Indicates whether mesh has non positive volumes.

  **has_non_positive_areas: bool, optional**
  : Indicates whether mesh has non positive areas.

  **has_invalid_shape: bool, optional**
  : Indicates whether mesh has invalid shape.

  **has_left_handed_faces: bool, optional**
  : Indicates whether mesh has left handed faces.

  **error_code: ErrorCode, optional**
  : Error code associated with the check grid operation.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the check grid operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `CheckMeshResults` object with provided parameters.

### Examples

```pycon
>>> check_mesh_results = prime.CheckMeshResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| Name | Description |
| [`CheckMeshResults.print_default`](ansys.meshing.prime.CheckMeshResults.print_default.md#ansys.meshing.prime.CheckMeshResults.print_default)()   | Print the default values of `CheckMeshResults` object.   |
| [`CheckMeshResults.set_default`](ansys.meshing.prime.CheckMeshResults.set_default.md#ansys.meshing.prime.CheckMeshResults.set_default)([...])    | Set the default values of the `CheckMeshResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Name | Description |
| [`CheckMeshResults.error_code`](ansys.meshing.prime.CheckMeshResults.error_code.md#ansys.meshing.prime.CheckMeshResults.error_code)                                           | Error code associated with the check grid operation.    |
| [`CheckMeshResults.has_invalid_shape`](ansys.meshing.prime.CheckMeshResults.has_invalid_shape.md#ansys.meshing.prime.CheckMeshResults.has_invalid_shape)                      | Indicates whether mesh has invalid shape.               |
| [`CheckMeshResults.has_left_handed_faces`](ansys.meshing.prime.CheckMeshResults.has_left_handed_faces.md#ansys.meshing.prime.CheckMeshResults.has_left_handed_faces)          | Indicates whether mesh has left handed faces.           |
| [`CheckMeshResults.has_non_positive_areas`](ansys.meshing.prime.CheckMeshResults.has_non_positive_areas.md#ansys.meshing.prime.CheckMeshResults.has_non_positive_areas)       | Indicates whether mesh has non positive areas.          |
| [`CheckMeshResults.has_non_positive_volumes`](ansys.meshing.prime.CheckMeshResults.has_non_positive_volumes.md#ansys.meshing.prime.CheckMeshResults.has_non_positive_volumes) | Indicates whether mesh has non positive volumes.        |
| [`CheckMeshResults.warning_codes`](ansys.meshing.prime.CheckMeshResults.warning_codes.md#ansys.meshing.prime.CheckMeshResults.warning_codes)                                  | Warning codes associated with the check grid operation. |

<a id="examples-using-checkmeshresults"></a>

## Examples using CheckMeshResults

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to wrap a toy car for a flow analysis.">  <div class="sphx-glr-thumbnail-title">Wrap a toy car for a flow analysis</div>
</div>
* [Wrap a toy car for a flow analysis](../../examples/gallery_examples/gallery/04_lucid_toy_car.md#sphx-glr-examples-gallery-examples-gallery-04-lucid-toy-car-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
