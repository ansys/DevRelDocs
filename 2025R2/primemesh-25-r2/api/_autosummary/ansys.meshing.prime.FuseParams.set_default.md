# set_default

<a id="ansys.meshing.prime.FuseParams.set_default"></a>

#### *static* FuseParams.set_default(use_absolute_tolerance=None, gap_tolerance=None, side_tolerance=None, check_interior=None, fuse_option=None, check_orientation=None, dump_mesh=None, local_remesh=None, n_layers=None, separate=None, angle=None, fuse_edges_only=None)

Set the default values of the `FuseParams` object.

* **Parameters:**

  **use_absolute_tolerance: bool, optional**
  : Option to use absolute tolerance value. The default value is false. When use absolute tolerance is true, gap tolerance and side tolerance provided are absolute values.

  **gap_tolerance: float, optional**
  : Gap tolerance between faces to be fused. The default value is 0.05.

  **side_tolerance: float, optional**
  : Side tolerance for fusing to the side edges.

  **check_interior: bool, optional**
  : Option to check the interior nodes. The default value is false. When check interior is true, checks all nodes including boundary edge nodes and nodes inside the faces.

  **fuse_option: FuseOption, optional**
  : Option for treatment of fused surfaces. The default value is None.

  **check_orientation: bool, optional**
  : Option to check the face normal orientation during fuse operation. The default value is true. When check orientation is true, face normal orientation is checked during fuse operation.

  **dump_mesh: bool, optional**
  : Option to save mesh for debugging. The default value is false. When dump mesh is true, mesh is saved for debugging.

  **local_remesh: bool, optional**
  : Option to remesh the fused region. The default value is true. When local remesh is true, local remeshing of fuse region is performed.

  **n_layers: int, optional**
  : Face layers around region to be fused. The default value is 2.

  **separate: bool, optional**
  : Option to separate fused regions. The default value is false. When separate is true, the fuse regions are separated into different zonelets.

  **angle: float, optional**
  : Faces zonelets with angle less than the provided value are considered for fuse operation. Default value is 45 degrees.

  **fuse_edges_only: bool, optional**
  : Option to fuse edges. The default value is false. When fuse edges only is true, only edges are fused.

<!-- !! processed by numpydoc !! -->
