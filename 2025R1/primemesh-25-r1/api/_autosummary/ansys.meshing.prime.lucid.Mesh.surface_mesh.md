# surface_mesh

<a id="ansys.meshing.prime.lucid.Mesh.surface_mesh"></a>

#### Mesh.surface_mesh(min_size=None, max_size=None, generate_quads=False, scope=<ansys.meshing.prime.lucid.scope.SurfaceScope object>)

Generate a surface mesh on a scope.

This method is used to generate a surface mesh of a constant or variable
size. It supports generating quad dominant or triangular elements.

If minimum and maximum sizes are provided, a variable size mesh is generated
between the minimum size and maximum size by applying sizes based on curvature.

If only the minimum size or maximum size is provided, a constant size mesh
is generated with the provided size.

If neither minimum size or maximum size is provided, the global maximum setting
is used to generate a constant size mesh.

* **Parameters:**
  **min_size**
  : Minimum edge length of the mesh. The default is `None`.

  **max_size**
  : Maximum edge length of the mesh. The default is `None`.

  **generate_quads**
  : Whether to generate a quad dominant mesh. The default is
    `False`, in which case a triangular mesh is generated.

  **scope**
  : Scope for generating the surface mesh.

<!-- !! processed by numpydoc !! -->

<a id="examples-using-mesh-surface-mesh"></a>

## Examples using Mesh.surface_mesh

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

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a printed circuit board with mainly hexahedral elements for structural thermal simulation using the volume sweeper.">  <div class="sphx-glr-thumbnail-title">Mesh a PCB for structural thermal analysis</div>
</div>
* [Mesh a PCB for structural thermal analysis](../../examples/gallery_examples/gallery/05_pcb_stacker.md#sphx-glr-examples-gallery-examples-gallery-05-pcb-stacker-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a thin solid with hexahedral and prism cells.">  <div class="sphx-glr-thumbnail-title">Mesh a saddle bracket for a structural analysis</div>
</div>
* [Mesh a saddle bracket for a structural analysis](../../examples/gallery_examples/gallery/07_saddle_bracket.md#sphx-glr-examples-gallery-examples-gallery-07-saddle-bracket-py)

<div class="sphx-glr-thumbcontainer" tooltip="A block comment must be included at the top of any new example. Each example must have a reference tag in this format:">  <div class="sphx-glr-thumbnail-title">Add a new example</div>
</div>
* [Add a new example](../../examples/gallery_examples/misc/example_template.md#sphx-glr-examples-gallery-examples-misc-example-template-py)

<!-- thumbnail-parent-div-close --></div>
