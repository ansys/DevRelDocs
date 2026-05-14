# set_default

<a id="ansys.meshing.prime.DefeatureTopologyParams.set_default"></a>

#### *static* DefeatureTopologyParams.set_default(partial_defeature=None, delete_interior_nodes=None, allow_curved_topo_faces=None, fillet_spanning_angle=None, aggressive_edge_merge=None, thin_stripes_tolerance=None, partial_defeature_params=None, delete_interior_nodes_params=None)

Set the default values of the `DefeatureTopologyParams` object.

* **Parameters:**

  **partial_defeature: bool, optional**
  : Option to partial defeature.

  **delete_interior_nodes: bool, optional**
  : Option to delete interior nodes.

  **allow_curved_topo_faces: bool, optional**
  : Option to allow curved topofaces.

  **fillet_spanning_angle: float, optional**
  : Angular threshold for detecting fillets with spanning angles below the provided value.

  **aggressive_edge_merge: bool, optional**
  : Indicate whether to allow aggressive edge merge while performing partial defeature.

  **thin_stripes_tolerance: float, optional**
  : Topoface width tolerance to detect thin faces below the provided value.

  **partial_defeature_params: PartialDefeatureParams, optional**
  : Parameters for partial defeature operation.

  **delete_interior_nodes_params: DeleteInteriorNodesParams, optional**
  : Parameters for delete interior nodes operation.

<!-- !! processed by numpydoc !! -->
