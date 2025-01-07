# volume_mesh

<a id="ansys.meshing.prime.lucid.Mesh.volume_mesh"></a>

#### Mesh.volume_mesh(volume_fill_type=VolumeFillType.TET, quadratic=False, prism_layers=None, prism_surface_expression='\*', prism_volume_expression='\*', growth_rate=1.2, scope=<ansys.meshing.prime.lucid.scope.VolumeScope object>)

Generate a volume mesh on the model.

* **Parameters:**
  **volume_fill_type**
  : Type of volume elements to generate.

  **quadratic**
  : Whether to generate a quadratic mesh. The default is `False`.
    A quadratic mesh is not supported with parallel meshing.
    It is only supported with a pure tetrahedral mesh.

  **prism_layers**
  : Number of prism layers to grow. The default is `None`.
    If a value for prism layers is specified, prism layers are generated.

  **prism_surface_expression**
  : Face zones or TopoFaces to grow prisms from. The default is `"*"`,
    in which case prisms are grown from all surfaces.

  **prism_volume_expression**
  : Volumes or TopoVolumes to grow prisms in.
    The default is `"*"`. This expression evaluates
    to zone names and volumes, or TopoVolumes are queried
    based on the zones evaluated.

  **growth_rate**
  : Prism growth rate. The default is `1.2`.

  **scope**
  : Scope of volumes to mesh.

<!-- !! processed by numpydoc !! -->

<a id="examples-using-mesh-volume-mesh"></a>

## Examples using Mesh.volume_mesh

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

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to create a contact patch for use with wrapping to avoid meshing into a narrow contact region between two objects.">  <div class="sphx-glr-thumbnail-title">Create a contact patch for wrapping between a wheel and ground interface</div>
</div>
* [Create a contact patch for wrapping between a wheel and ground interface](../../examples/gallery_examples/gallery/10_wheel_ground_contact_patch.md#sphx-glr-examples-gallery-examples-gallery-10-wheel-ground-contact-patch-py)

<div class="sphx-glr-thumbcontainer" tooltip="A block comment must be included at the top of any new example. Each example must have a reference tag in this format:">  <div class="sphx-glr-thumbnail-title">Add a new example</div>
</div>
* [Add a new example](../../examples/gallery_examples/misc/example_template.md#sphx-glr-examples-gallery-examples-misc-example-template-py)

<!-- thumbnail-parent-div-close --></div>
