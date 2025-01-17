# MergePartsParams

<a id="ansys.meshing.prime.MergePartsParams"></a>

### *class* ansys.meshing.prime.MergePartsParams(model=None, merged_part_suggested_name=None, json_data=None, \*\*kwargs)

Parameters to merge parts.

* **Parameters:**
  **model: Model**
  : Model to create a `MergePartsParams` object with default parameters.

  **merged_part_suggested_name: str, optional**
  : Suggested name to be set on merged part. First in alphabetical order of given part names will be used, when empty name is given.

  **json_data: dict, optional**
  : JSON dictionary to create a `MergePartsParams` object with provided parameters.

### Examples

```pycon
>>> merge_parts_params = prime.MergePartsParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| Name | Description |
| [`MergePartsParams.print_default`](ansys.meshing.prime.MergePartsParams.print_default.md#ansys.meshing.prime.MergePartsParams.print_default)()   | Print the default values of `MergePartsParams` object.   |
| [`MergePartsParams.set_default`](ansys.meshing.prime.MergePartsParams.set_default.md#ansys.meshing.prime.MergePartsParams.set_default)([...])    | Set the default values of the `MergePartsParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| Name | Description |
| [`MergePartsParams.merged_part_suggested_name`](ansys.meshing.prime.MergePartsParams.merged_part_suggested_name.md#ansys.meshing.prime.MergePartsParams.merged_part_suggested_name)   | Suggested name to be set on merged part.   |

<a id="examples-using-mergepartsparams"></a>

## Examples using MergePartsParams

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
