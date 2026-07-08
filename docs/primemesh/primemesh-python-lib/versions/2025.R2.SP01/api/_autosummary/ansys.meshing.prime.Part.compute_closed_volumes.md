# compute_closed_volumes

<a id="ansys.meshing.prime.Part.compute_closed_volumes"></a>

#### Part.compute_closed_volumes(params)

Computes volume by identifying closed volumes defined by face zonelets of the part.

* **Parameters:**

  **params**
  : Parameters to compute volumes.

* **Returns:**

  [`ComputeVolumesResults`](ansys.meshing.prime.ComputeVolumesResults.md#ansys.meshing.prime.ComputeVolumesResults)
  : Returns the ComputeVolumesResults.

* **Return type:**

  [`ComputeVolumesResults`](ansys.meshing.prime.ComputeVolumesResults.md#ansys.meshing.prime.ComputeVolumesResults)

### Examples

```pycon
>>> params = prime.ComputeVolumesParams(model = model, create_zones_type = prime.CreateVolumeZonesType.PERVOLUME)
>>> results = part.compute_closed_volumes(params)
```

<!-- !! processed by numpydoc !! -->
