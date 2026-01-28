# get_face_and_edge_connectivity

<a id="ansys.meshing.prime.MeshInfo.get_face_and_edge_connectivity"></a>

#### MeshInfo.get_face_and_edge_connectivity(part_ids, params)

Gets the connectivity of face and edge zonelets of the given part ids.

Connectivity result is used in graphics rendering.

* **Parameters:**

  **part_ids**
  : Ids of the part.

  **params**
  : Parameters to get connectivity of face zonelets and edge zonelets.

* **Returns:**

  [`FaceAndEdgeConnectivityResults`](ansys.meshing.prime.FaceAndEdgeConnectivityResults.md#ansys.meshing.prime.FaceAndEdgeConnectivityResults)
  : Returns the FaceAndEdgeConnectivityResults.

* **Return type:**

  [`FaceAndEdgeConnectivityResults`](ansys.meshing.prime.FaceAndEdgeConnectivityResults.md#ansys.meshing.prime.FaceAndEdgeConnectivityResults)

### Examples

```pycon
>>> mesh_info = prime.MeshInfo(model)
>>> part_ids = [part.id for part in model.parts]
>>> result = mesh_info.get_face_and_edge_connectivity(part_ids,
>>>                  prime.FaceAndEdgeConnectivityParams(model =model))
```

<!-- !! processed by numpydoc !! -->
