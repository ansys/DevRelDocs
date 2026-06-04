# FuseParams

<a id="ansys.meshing.prime.FuseParams"></a>

### *class* ansys.meshing.prime.FuseParams(model=None, use_absolute_tolerance=None, gap_tolerance=None, side_tolerance=None, check_interior=None, fuse_option=None, check_orientation=None, dump_mesh=None, local_remesh=None, n_layers=None, separate=None, angle=None, fuse_edges_only=None, json_data=None, \*\*kwargs)

Parameters for fuse operation.

* **Parameters:**

  **model: Model**
  : Model to create a `FuseParams` object with default parameters.

  **use_absolute_tolerance: bool, optional**
  : Option to use absolute tolerance value. The default value is false. When use absolute tolerance is true, gap tolerance and side tolerance provided are absolute values.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **gap_tolerance: float, optional**
  : Gap tolerance between faces to be fused. The default value is 0.05.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **side_tolerance: float, optional**
  : Side tolerance for fusing to the side edges.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **check_interior: bool, optional**
  : Option to check the interior nodes. The default value is false. When check interior is true, checks all nodes including boundary edge nodes and nodes inside the faces.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **fuse_option: FuseOption, optional**
  : Option for treatment of fused surfaces. The default value is None.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **check_orientation: bool, optional**
  : Option to check the face normal orientation during fuse operation. The default value is true. When check orientation is true, face normal orientation is checked during fuse operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **dump_mesh: bool, optional**
  : Option to save mesh for debugging. The default value is false. When dump mesh is true, mesh is saved for debugging.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **local_remesh: bool, optional**
  : Option to remesh the fused region. The default value is true. When local remesh is true, local remeshing of fuse region is performed.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **n_layers: int, optional**
  : Face layers around region to be fused. The default value is 2.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **separate: bool, optional**
  : Option to separate fused regions. The default value is false. When separate is true, the fuse regions are separated into different zonelets.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **angle: float, optional**
  : Faces zonelets with angle less than the provided value are considered for fuse operation. Default value is 45 degrees.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **fuse_edges_only: bool, optional**
  : Option to fuse edges. The default value is false. When fuse edges only is true, only edges are fused.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `FuseParams` object with provided parameters.

### Examples

```pycon
>>> fuse_params = prime.FuseParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`FuseParams.print_default`](ansys.meshing.prime.FuseParams.print_default.md#ansys.meshing.prime.FuseParams.print_default)()   | Print the default values of `FuseParams` object.   |
| [`FuseParams.set_default`](ansys.meshing.prime.FuseParams.set_default.md#ansys.meshing.prime.FuseParams.set_default)([...])    | Set the default values of the `FuseParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`FuseParams.angle`](ansys.meshing.prime.FuseParams.angle.md#ansys.meshing.prime.FuseParams.angle)                                                    | Faces zonelets with angle less than the provided value are considered for fuse operation.   |
| [`FuseParams.check_interior`](ansys.meshing.prime.FuseParams.check_interior.md#ansys.meshing.prime.FuseParams.check_interior)                         | Option to check the interior nodes.                                                         |
| [`FuseParams.check_orientation`](ansys.meshing.prime.FuseParams.check_orientation.md#ansys.meshing.prime.FuseParams.check_orientation)                | Option to check the face normal orientation during fuse operation.                          |
| [`FuseParams.dump_mesh`](ansys.meshing.prime.FuseParams.dump_mesh.md#ansys.meshing.prime.FuseParams.dump_mesh)                                        | Option to save mesh for debugging.                                                          |
| [`FuseParams.fuse_edges_only`](ansys.meshing.prime.FuseParams.fuse_edges_only.md#ansys.meshing.prime.FuseParams.fuse_edges_only)                      | Option to fuse edges.                                                                       |
| [`FuseParams.fuse_option`](ansys.meshing.prime.FuseParams.fuse_option.md#ansys.meshing.prime.FuseParams.fuse_option)                                  | Option for treatment of fused surfaces.                                                     |
| [`FuseParams.gap_tolerance`](ansys.meshing.prime.FuseParams.gap_tolerance.md#ansys.meshing.prime.FuseParams.gap_tolerance)                            | Gap tolerance between faces to be fused.                                                    |
| [`FuseParams.local_remesh`](ansys.meshing.prime.FuseParams.local_remesh.md#ansys.meshing.prime.FuseParams.local_remesh)                               | Option to remesh the fused region.                                                          |
| [`FuseParams.n_layers`](ansys.meshing.prime.FuseParams.n_layers.md#ansys.meshing.prime.FuseParams.n_layers)                                           | Face layers around region to be fused.                                                      |
| [`FuseParams.separate`](ansys.meshing.prime.FuseParams.separate.md#ansys.meshing.prime.FuseParams.separate)                                           | Option to separate fused regions.                                                           |
| [`FuseParams.side_tolerance`](ansys.meshing.prime.FuseParams.side_tolerance.md#ansys.meshing.prime.FuseParams.side_tolerance)                         | Side tolerance for fusing to the side edges.                                                |
| [`FuseParams.use_absolute_tolerance`](ansys.meshing.prime.FuseParams.use_absolute_tolerance.md#ansys.meshing.prime.FuseParams.use_absolute_tolerance) | Option to use absolute tolerance value.                                                     |
<!-- vale on -->