# extract_topo_volumes

<a id="ansys.meshing.prime.Part.extract_topo_volumes"></a>

#### Part.extract_topo_volumes(topo_faces, params)

Extract topovolumes connected to given cap topofaces.

* **Parameters:**

  **topo_faces**
  : Ids of topofaces connected to topovolumes.

  **params**
  : Parameters to compute topovolumes.

* **Returns:**

  [`ExtractTopoVolumesResults`](ansys.meshing.prime.ExtractTopoVolumesResults.md#ansys.meshing.prime.ExtractTopoVolumesResults)
  : Return the ExtractTopoVolumesResults.

* **Return type:**

  [`ExtractTopoVolumesResults`](ansys.meshing.prime.ExtractTopoVolumesResults.md#ansys.meshing.prime.ExtractTopoVolumesResults)

### Examples

```pycon
>>> results = part.extract_flow_topo_volumes(topo_faces, params)
```

<!-- !! processed by numpydoc !! -->
