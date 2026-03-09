# create_cap_on_face_zonelets

<a id="ansys.meshing.prime.SurfaceUtilities.create_cap_on_face_zonelets"></a>

#### SurfaceUtilities.create_cap_on_face_zonelets(part_id, face_zonelets, params)

Create caps on the given face zonelets.

* **Parameters:**

  **part_id**
  : Id of part to associate face zonelets created to cap.

  **face_zonelets**
  : Ids of face zonelets to be used to find caps.

  **params**
  : Parameters to create caps.

* **Returns:**

  [`CreateCapResults`](ansys.meshing.prime.CreateCapResults.md#ansys.meshing.prime.CreateCapResults)
  : Returns the CreateCapResults.

* **Return type:**

  [`CreateCapResults`](ansys.meshing.prime.CreateCapResults.md#ansys.meshing.prime.CreateCapResults)

### Examples

```pycon
>>> params = prime.CreateCapParams(model = model)
>>> results = surface_utils.cap_face_zonelets(part_id, face_zonelets, params)
```

<!-- !! processed by numpydoc !! -->
