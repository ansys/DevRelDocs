# MergePartsResults

<a id="ansys.meshing.prime.MergePartsResults"></a>

### *class* ansys.meshing.prime.MergePartsResults(model=None, error_code=None, merged_part_assigned_name=None, merged_part_id=None, json_data=None, \*\*kwargs)

Parameters to merge parts.

* **Parameters:**
  **model: Model**
  : Model to create a `MergePartsResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.

  **merged_part_assigned_name: str, optional**
  : Name assigned to merged part. Suffix is added to suggested name if the name not available.

  **merged_part_id: int, optional**
  : Id assigned to merged part.

  **json_data: dict, optional**
  : JSON dictionary to create a `MergePartsResults` object with provided parameters.

### Examples

```pycon
>>> merge_parts_results = prime.MergePartsResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`MergePartsResults.print_default`](ansys.meshing.prime.MergePartsResults.print_default.md#ansys.meshing.prime.MergePartsResults.print_default)()            | Print the default values of `MergePartsResults` object.   |
| [`MergePartsResults.set_default`](ansys.meshing.prime.MergePartsResults.set_default.md#ansys.meshing.prime.MergePartsResults.set_default)([error_code, ...]) | Set the default values of the `MergePartsResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`MergePartsResults.error_code`](ansys.meshing.prime.MergePartsResults.error_code.md#ansys.meshing.prime.MergePartsResults.error_code)                                              | Error code associated with the failure of operation.   |
| [`MergePartsResults.merged_part_assigned_name`](ansys.meshing.prime.MergePartsResults.merged_part_assigned_name.md#ansys.meshing.prime.MergePartsResults.merged_part_assigned_name) | Name assigned to merged part.                          |
| [`MergePartsResults.merged_part_id`](ansys.meshing.prime.MergePartsResults.merged_part_id.md#ansys.meshing.prime.MergePartsResults.merged_part_id)                                  | Id assigned to merged part.                            |

<a id="examples-using-mergepartsresults"></a>

## Examples using MergePartsResults

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
