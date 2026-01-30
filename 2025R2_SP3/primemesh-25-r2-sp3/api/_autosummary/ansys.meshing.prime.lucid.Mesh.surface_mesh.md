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
