# PartSummaryParams

<a id="ansys.meshing.prime.PartSummaryParams"></a>

### *class* ansys.meshing.prime.PartSummaryParams(model=None, print_id=None, print_mesh=None, json_data=None, \*\*kwargs)

Parameters to control part summary results.

* **Parameters:**
  **model: Model**
  : Model to create a `PartSummaryParams` object with default parameters.

  **print_id: bool, optional**
  : Boolean to control print ids. The default is false.

  **print_mesh: bool, optional**
  : Boolean to control print mesh information. The default is true.

  **json_data: dict, optional**
  : JSON dictionary to create a `PartSummaryParams` object with provided parameters.

### Examples

```pycon
>>> part_summary_params = prime.PartSummaryParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`PartSummaryParams.print_default`](ansys.meshing.prime.PartSummaryParams.print_default.md#ansys.meshing.prime.PartSummaryParams.print_default)()          | Print the default values of `PartSummaryParams` object.   |
| [`PartSummaryParams.set_default`](ansys.meshing.prime.PartSummaryParams.set_default.md#ansys.meshing.prime.PartSummaryParams.set_default)([print_id, ...]) | Set the default values of the `PartSummaryParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| [`PartSummaryParams.print_id`](ansys.meshing.prime.PartSummaryParams.print_id.md#ansys.meshing.prime.PartSummaryParams.print_id)       | Boolean to control print ids.              |
| [`PartSummaryParams.print_mesh`](ansys.meshing.prime.PartSummaryParams.print_mesh.md#ansys.meshing.prime.PartSummaryParams.print_mesh) | Boolean to control print mesh information. |

<a id="examples-using-partsummaryparams"></a>

## Examples using PartSummaryParams

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to use topology-based connection to generate conformal surface mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a mid-surfaced bracket for a structural analysis</div>
</div>
* [Mesh a mid-surfaced bracket for a structural analysis](../../examples/gallery_examples/gallery/01_bracket_scaffold.md#sphx-glr-examples-gallery-examples-gallery-01-bracket-scaffold-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a mixing elbow for a flow analysis.">  <div class="sphx-glr-thumbnail-title">Mesh a mixing elbow for a flow analysis</div>
</div>
* [Mesh a mixing elbow for a flow analysis](../../examples/gallery_examples/gallery/02_lucid_mixing_elbow.md#sphx-glr-examples-gallery-examples-gallery-02-lucid-mixing-elbow-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to wrap a toy car for a flow analysis.">  <div class="sphx-glr-thumbnail-title">Wrap a toy car for a flow analysis</div>
</div>
* [Wrap a toy car for a flow analysis](../../examples/gallery_examples/gallery/04_lucid_toy_car.md#sphx-glr-examples-gallery-examples-gallery-04-lucid-toy-car-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a thin solid with hexahedral and prism cells.">  <div class="sphx-glr-thumbnail-title">Mesh a saddle bracket for a structural analysis</div>
</div>
* [Mesh a saddle bracket for a structural analysis](../../examples/gallery_examples/gallery/07_saddle_bracket.md#sphx-glr-examples-gallery-examples-gallery-07-saddle-bracket-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
