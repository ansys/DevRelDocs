# ScopeDefinition

<a id="ansys.meshing.prime.ScopeDefinition"></a>

### *class* ansys.meshing.prime.ScopeDefinition(model=None, entity_type=None, evaluation_type=None, part_expression=None, label_expression=None, zone_expression=None, json_data=None, \*\*kwargs)

ScopeDefinition to scope entities based on entity and evaluation type.

* **Parameters:**
  **model: Model**
  : Model to create a `ScopeDefinition` object with default parameters.

  **entity_type: ScopeEntity, optional**
  : Entity type for which scope needs to be evaluated. The default is set to face zonelets.

  **evaluation_type: ScopeEvaluationType, optional**
  : Evaluation type to scope entities. The default is set to labels.

  **part_expression: str, optional**
  : Part expression to scope parts while evaluating scope.

  **label_expression: str, optional**
  : Label expression to scope entities when evaluation type is set to labels.

  **zone_expression: str, optional**
  : Zone expression to scope entities when evaluation type is set to zones.

  **json_data: dict, optional**
  : JSON dictionary to create a `ScopeDefinition` object with provided parameters.

### Examples

```pycon
>>> scope_definition = prime.ScopeDefinition(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Name | Description |
| [`ScopeDefinition.print_default`](ansys.meshing.prime.ScopeDefinition.print_default.md#ansys.meshing.prime.ScopeDefinition.print_default)()             | Print the default values of `ScopeDefinition` object.   |
| [`ScopeDefinition.set_default`](ansys.meshing.prime.ScopeDefinition.set_default.md#ansys.meshing.prime.ScopeDefinition.set_default)([entity_type, ...]) | Set the default values of the `ScopeDefinition` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| Name | Description |
| [`ScopeDefinition.entity_type`](ansys.meshing.prime.ScopeDefinition.entity_type.md#ansys.meshing.prime.ScopeDefinition.entity_type)                | Entity type for which scope needs to be evaluated.                        |
| [`ScopeDefinition.evaluation_type`](ansys.meshing.prime.ScopeDefinition.evaluation_type.md#ansys.meshing.prime.ScopeDefinition.evaluation_type)    | Evaluation type to scope entities.                                        |
| [`ScopeDefinition.label_expression`](ansys.meshing.prime.ScopeDefinition.label_expression.md#ansys.meshing.prime.ScopeDefinition.label_expression) | Label expression to scope entities when evaluation type is set to labels. |
| [`ScopeDefinition.part_expression`](ansys.meshing.prime.ScopeDefinition.part_expression.md#ansys.meshing.prime.ScopeDefinition.part_expression)    | Part expression to scope parts while evaluating scope.                    |
| [`ScopeDefinition.zone_expression`](ansys.meshing.prime.ScopeDefinition.zone_expression.md#ansys.meshing.prime.ScopeDefinition.zone_expression)    | Zone expression to scope entities when evaluation type is set to zones.   |

<a id="examples-using-scopedefinition"></a>

## Examples using ScopeDefinition

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example shows how mesh and geometry formats are converted during import and export.">  <div class="sphx-glr-thumbnail-title">Convert data when importing and exporting mesh and CAD formats</div>
</div>
* [Convert data when importing and exporting mesh and CAD formats](../../examples/gallery_examples/gallery/00_lucid_file_IO.md#sphx-glr-examples-gallery-examples-gallery-00-lucid-file-io-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a mixing elbow for a flow analysis.">  <div class="sphx-glr-thumbnail-title">Mesh a mixing elbow for a flow analysis</div>
</div>
* [Mesh a mixing elbow for a flow analysis](../../examples/gallery_examples/gallery/02_lucid_mixing_elbow.md#sphx-glr-examples-gallery-examples-gallery-02-lucid-mixing-elbow-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a pipe T-section for both structural thermal and fluid flow simulation.">  <div class="sphx-glr-thumbnail-title">Mesh a pipe T-section for structural thermal and fluid flow analysis</div>
</div>
* [Mesh a pipe T-section for structural thermal and fluid flow analysis](../../examples/gallery_examples/gallery/03_lucid_pipe_tee.md#sphx-glr-examples-gallery-examples-gallery-03-lucid-pipe-tee-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to wrap a toy car for a flow analysis.">  <div class="sphx-glr-thumbnail-title">Wrap a toy car for a flow analysis</div>
</div>
* [Wrap a toy car for a flow analysis](../../examples/gallery_examples/gallery/04_lucid_toy_car.md#sphx-glr-examples-gallery-examples-gallery-04-lucid-toy-car-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a printed circuit board with mainly hexahedral elements for structural thermal simulation using the volume sweeper.">  <div class="sphx-glr-thumbnail-title">Mesh a PCB for structural thermal analysis</div>
</div>
* [Mesh a PCB for structural thermal analysis](../../examples/gallery_examples/gallery/05_pcb_stacker.md#sphx-glr-examples-gallery-examples-gallery-05-pcb-stacker-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a thin solid with hexahedral and prism cells.">  <div class="sphx-glr-thumbnail-title">Mesh a saddle bracket for a structural analysis</div>
</div>
* [Mesh a saddle bracket for a structural analysis](../../examples/gallery_examples/gallery/07_saddle_bracket.md#sphx-glr-examples-gallery-examples-gallery-07-saddle-bracket-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to set the base mesh size and number of layers for each solid in a generic PCB geometry and then generate a mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a generic PCB geometry with multiple hexa layers</div>
</div>
* [Mesh a generic PCB geometry with multiple hexa layers](../../examples/gallery_examples/gallery/09_multi_layer_quad_mesh_pcb.md#sphx-glr-examples-gallery-examples-gallery-09-multi-layer-quad-mesh-pcb-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to create a contact patch for use with wrapping to avoid meshing into a narrow contact region between two objects.">  <div class="sphx-glr-thumbnail-title">Create a contact patch for wrapping between a wheel and ground interface</div>
</div>
* [Create a contact patch for wrapping between a wheel and ground interface](../../examples/gallery_examples/gallery/10_wheel_ground_contact_patch.md#sphx-glr-examples-gallery-examples-gallery-10-wheel-ground-contact-patch-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
