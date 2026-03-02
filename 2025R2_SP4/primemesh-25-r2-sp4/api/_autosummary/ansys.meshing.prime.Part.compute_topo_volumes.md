# compute_topo_volumes

<a id="ansys.meshing.prime.Part.compute_topo_volumes"></a>

#### Part.compute_topo_volumes(params)

Compute topovolumes by identifying closed volumes defined by topofaces of the part.

* **Parameters:**

  **params**
  : Parameters to compute topovolumes.

* **Returns:**

  [`ComputeTopoVolumesResults`](ansys.meshing.prime.ComputeTopoVolumesResults.md#ansys.meshing.prime.ComputeTopoVolumesResults)
  : Return the ComputeTopoVolumesResults.

* **Return type:**

  [`ComputeTopoVolumesResults`](ansys.meshing.prime.ComputeTopoVolumesResults.md#ansys.meshing.prime.ComputeTopoVolumesResults)

### Examples

```pycon
>>> params = prime.ComputeVolumesParams(model = model, create_zones_type = prime.CreateVolumeZonesType.PERVOLUME)
>>> results = part.compute_topo_volumes(params)
```

<!-- !! processed by numpydoc !! -->
