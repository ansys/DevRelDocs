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
