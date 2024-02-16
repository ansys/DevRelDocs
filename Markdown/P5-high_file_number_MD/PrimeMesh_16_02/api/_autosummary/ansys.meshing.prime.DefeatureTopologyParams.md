<!-- vale off -->

# DefeatureTopologyParams

### *class* ansys.meshing.prime.DefeatureTopologyParams(model=None, partial_defeature=None, delete_interior_nodes=None, allow_curved_topo_faces=None, fillet_spanning_angle=None, aggressive_edge_merge=None, thin_stripes_tolerance=None, partial_defeature_params=None, delete_interior_nodes_params=None, json_data=None, \*\*kwargs)

Parameters for defeature topology operations.

<!-- !! processed by numpydoc !! -->

### Methods

| [`DefeatureTopologyParams.print_default`](ansys.meshing.prime.DefeatureTopologyParams.print_default.md#ansys.meshing.prime.DefeatureTopologyParams.print_default)()   | Print the default values of DefeatureTopologyParams.   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`DefeatureTopologyParams.set_default`](ansys.meshing.prime.DefeatureTopologyParams.set_default.md#ansys.meshing.prime.DefeatureTopologyParams.set_default)([...])    | Set the default values of DefeatureTopologyParams.     |

### Attributes

| [`DefeatureTopologyParams.aggressive_edge_merge`](ansys.meshing.prime.DefeatureTopologyParams.aggressive_edge_merge.md#ansys.meshing.prime.DefeatureTopologyParams.aggressive_edge_merge)                      | Indicate whether to allow aggressive edge merge while performing partial defeature.    |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`DefeatureTopologyParams.allow_curved_topo_faces`](ansys.meshing.prime.DefeatureTopologyParams.allow_curved_topo_faces.md#ansys.meshing.prime.DefeatureTopologyParams.allow_curved_topo_faces)                | Option to allow curved topofaces.                                                      |
| [`DefeatureTopologyParams.delete_interior_nodes`](ansys.meshing.prime.DefeatureTopologyParams.delete_interior_nodes.md#ansys.meshing.prime.DefeatureTopologyParams.delete_interior_nodes)                      | Option to delete interior nodes.                                                       |
| [`DefeatureTopologyParams.delete_interior_nodes_params`](ansys.meshing.prime.DefeatureTopologyParams.delete_interior_nodes_params.md#ansys.meshing.prime.DefeatureTopologyParams.delete_interior_nodes_params) | Parameters for delete interior nodes operation.                                        |
| [`DefeatureTopologyParams.fillet_spanning_angle`](ansys.meshing.prime.DefeatureTopologyParams.fillet_spanning_angle.md#ansys.meshing.prime.DefeatureTopologyParams.fillet_spanning_angle)                      | Angular threshold for detecting fillets with spanning angles below the provided value. |
| [`DefeatureTopologyParams.partial_defeature`](ansys.meshing.prime.DefeatureTopologyParams.partial_defeature.md#ansys.meshing.prime.DefeatureTopologyParams.partial_defeature)                                  | Option to partial defeature.                                                           |
| [`DefeatureTopologyParams.partial_defeature_params`](ansys.meshing.prime.DefeatureTopologyParams.partial_defeature_params.md#ansys.meshing.prime.DefeatureTopologyParams.partial_defeature_params)             | Parameters for partial defeature operation.                                            |
| [`DefeatureTopologyParams.thin_stripes_tolerance`](ansys.meshing.prime.DefeatureTopologyParams.thin_stripes_tolerance.md#ansys.meshing.prime.DefeatureTopologyParams.thin_stripes_tolerance)                   | Topoface width tolerance to detect thin faces below the provided value.                |
<!-- vale on -->
