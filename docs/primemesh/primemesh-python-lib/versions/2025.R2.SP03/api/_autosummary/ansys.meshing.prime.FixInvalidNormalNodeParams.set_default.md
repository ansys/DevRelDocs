# set_default

<a id="ansys.meshing.prime.FixInvalidNormalNodeParams.set_default"></a>

#### *static* FixInvalidNormalNodeParams.set_default(nugget_size=None, nugget_mesh_size=None, label=None)

Set the default values of the `FixInvalidNormalNodeParams` object.

* **Parameters:**

  **nugget_size: float, optional**
  : Relative size used to create nugget at invalid normal node. The size is relative to mesh size at the node.

  **nugget_mesh_size: float, optional**
  : Relative size used as max size to mesh nugget created at invalid normal node. The size is relative to mesh size at the node.

  **label: str, optional**
  : Label to set on new face zonelets created.

<!-- !! processed by numpydoc !! -->
