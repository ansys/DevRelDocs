# create_boi

<a id="ansys.meshing.prime.SurfaceUtilities.create_boi"></a>

#### SurfaceUtilities.create_boi(face_zonelet_ids, params)

Create BOI to input face zonelets.

* **Parameters:**

  **face_zonelet_ids**
  : List of input face zonelet IDs.

  **params**
  : Parameters for controlling BOI creation.

* **Returns:**
  
  [`CreateBOIResults`](ansys.meshing.prime.CreateBOIResults.md#ansys.meshing.prime.CreateBOIResults)
  : Results from creating BOI.

* **Return type:**

  [`CreateBOIResults`](ansys.meshing.prime.CreateBOIResults.md#ansys.meshing.prime.CreateBOIResults)

### Examples

```pycon
>>> result = surf_utils.create_boi(zonelets, params)
```

<!-- !! processed by numpydoc !! -->
