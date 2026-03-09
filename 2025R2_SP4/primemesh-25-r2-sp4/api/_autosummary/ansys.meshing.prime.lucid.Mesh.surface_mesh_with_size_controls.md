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
