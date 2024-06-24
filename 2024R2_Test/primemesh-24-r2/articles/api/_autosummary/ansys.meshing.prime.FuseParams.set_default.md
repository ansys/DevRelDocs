<a id="ansys-meshing-prime-fuseparams-set-default"></a>

# ansys.meshing.prime.FuseParams.set_default

<a id="ansys.meshing.prime.FuseParams.set_default"></a>

#### *static* FuseParams.set_default(use_absolute_tolerance=None, gap_tolerance=None, side_tolerance=None, check_interior=None, fuse_option=None, check_orientation=None, dump_mesh=None, local_remesh=None, n_layers=None, separate=None, angle=None, fuse_edges_only=None)

Set the default values of the `FuseParams` object.

* **Parameters:**
  **use_absolute_tolerance: bool, optional**
  : When true, gap tolerance and side tolerance provided are absolute values.

  **gap_tolerance: float, optional**
  : Gap tolerance between faces to be fused.

  **side_tolerance: float, optional**
  : Side tolerance for fusing to the side edges.

  **check_interior: bool, optional**
  : When true, checks all nodes including boundary edge nodes and nodes inside the faces.

  **fuse_option: FuseOption, optional**
  : Option for treatment of fused surfaces.

  **check_orientation: bool, optional**
  : Option to check face normal orientation during fuse operation.

  **dump_mesh: bool, optional**
  : Option to dump mesh for debugging.

  **local_remesh: bool, optional**
  : Local remesh of region to be fused.

  **n_layers: int, optional**
  : Face layers around region to be fused.

  **separate: bool, optional**
  : Separate region to be fused.

  **angle: float, optional**
  : Faces zonelets with angle less than the provided value are considered for fuse operation.

  **fuse_edges_only: bool, optional**
  : Fuse edges only.

<!-- !! processed by numpydoc !! -->
