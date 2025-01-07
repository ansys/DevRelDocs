# surface_mesh_with_size_controls

<a id="ansys.meshing.prime.lucid.Mesh.surface_mesh_with_size_controls"></a>

#### Mesh.surface_mesh_with_size_controls(size_control_names='\*', generate_quads=False, scope=<ansys.meshing.prime.lucid.scope.SurfaceScope object>)

Generate a surface mesh on a scope using the given size controls.

This method supports generating quad dominant or triangular elements.

* **Parameters:**
  **size_control_names**
  : Name pattern for the size controls. The default is `"*"`.

  **generate_quads**
  : Whether to generate a quad dominant mesh. The default is
    `False`, in which case a triangular mesh is generated.

  **scope**
  : Scope for generating the surface mesh.

<!-- !! processed by numpydoc !! -->

<a id="examples-using-mesh-surface-mesh-with-size-controls"></a>

## Examples using Mesh.surface_mesh_with_size_controls

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to set the base mesh size and number of layers for each solid in a generic PCB geometry and then generate a mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a generic PCB geometry with multiple hexa layers</div>
</div>
* [Mesh a generic PCB geometry with multiple hexa layers](../../examples/gallery_examples/gallery/09_multi_layer_quad_mesh_pcb.md#sphx-glr-examples-gallery-examples-gallery-09-multi-layer-quad-mesh-pcb-py)

<!-- thumbnail-parent-div-close --></div>
