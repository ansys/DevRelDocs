# create_zones_from_labels

<a id="ansys.meshing.prime.lucid.Mesh.create_zones_from_labels"></a>

#### Mesh.create_zones_from_labels(label_expression=None, conversion_method=LabelToZoneMethod.SIMPLE)

Create zones from labels.

When exporting to various solvers, zones play a very important role.
Zones are where material properties and boundary conditions
can be set in respective solvers.

Zones allow downstream setting of boundary conditions or material properties.

Zone names in PyPrimeMesh are translated into equivalent concepts in the solver.
Currently, only one method is available to convert a zone to a label, and
only face zones are created.

The `create_zones_from_labels` method finds the entities by labels
and then adds them to zones with the same names as the labels.

If the `label_expression` parameter is not provided, all labels are
flattened to create zones. If overlaps occur, label names are combined, and
separate zones are created.

For example, if “LabelA” and “LabelB” have overlapping TopoFaces,
these zones are created: `"LabelA"`, `"LabelB"`, and
`"LabelA_LabelB"` for the overlap.

* **Parameters:**
  **label_expression**
  : Expression for the labels to convert to zones. The
    default is `None`.

  **conversion_method**
  : Method for converting the labels to zones. The default
    is `LabelToZoneMethod.SIMPLE`.

### Examples

```pycon
>>> from ansys.meshing.prime import lucid
>>> mesh_util = lucid.Mesh(model)
>>> mesh_util.create_zones_from_labels()
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-mesh-create-zones-from-labels"></a>

## Examples using Mesh.create_zones_from_labels

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

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to set the base mesh size and number of layers for each solid in a generic PCB geometry and then generate a mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a generic PCB geometry with multiple hexa layers</div>
</div>
* [Mesh a generic PCB geometry with multiple hexa layers](../../examples/gallery_examples/gallery/09_multi_layer_quad_mesh_pcb.md#sphx-glr-examples-gallery-examples-gallery-09-multi-layer-quad-mesh-pcb-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to create a contact patch for use with wrapping to avoid meshing into a narrow contact region between two objects.">  <div class="sphx-glr-thumbnail-title">Create a contact patch for wrapping between a wheel and ground interface</div>
</div>
* [Create a contact patch for wrapping between a wheel and ground interface](../../examples/gallery_examples/gallery/10_wheel_ground_contact_patch.md#sphx-glr-examples-gallery-examples-gallery-10-wheel-ground-contact-patch-py)

<!-- thumbnail-parent-div-close --></div>
