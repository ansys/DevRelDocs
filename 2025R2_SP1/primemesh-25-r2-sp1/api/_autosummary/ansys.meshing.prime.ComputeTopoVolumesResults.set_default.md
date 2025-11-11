# set_default

<a id="ansys.meshing.prime.ComputeTopoVolumesResults.set_default"></a>

#### *static* ComputeTopoVolumesResults.set_default(error_code=None, error_locations=None, topo_volumes=None, material_point_topo_volumes=None, external_open_topo_faces=None, new_topo_volumes=None, deleted_topo_volumes=None, warning_codes=None)

Set the default values of the `ComputeTopoVolumesResults` object.

* **Parameters:**

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.

  **error_locations: Iterable[float], optional**
  : Coordinates of problematic locations in the surface mesh.

  **topo_volumes: Iterable[int], optional**
  : Ids of all topovolumes computed.

  **material_point_topo_volumes: Iterable[int], optional**
  : Ids of topovolumes enclosing material points.

  **external_open_topo_faces: Iterable[int], optional**
  : Topoface ids that are in external space and not part of any topovolumes.

  **new_topo_volumes: Iterable[int], optional**
  : Ids of new topovolumes computed.

  **deleted_topo_volumes: Iterable[int], optional**
  : Ids of existing topovolumes that got deleted.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the compute topovolumes.

<!-- !! processed by numpydoc !! -->
